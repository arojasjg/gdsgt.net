# Configuración en producción (pasos para activar todo)

Todo se configura con variables de entorno en `apps/www/.env.local` en el servidor (ver `apps/www/.env.example`). Después de cambiarlas: `bun run build` y reiniciar PM2 (`./deploy.sh`).

## 1. Analítica y publicidad

### Cómo encontrar tus IDs

**Google Analytics 4 (`G-…`)**
1. Entra a analytics.google.com con la cuenta de Google de la empresa.
2. Abajo a la izquierda: ⚙️ **Administrar**.
3. Columna *Propiedad* → **Flujos de datos** → clic en el flujo web de `www.gdsgt.net`.
4. Arriba a la derecha verás el **ID de medición**: `G-XXXXXXXXXX`.
5. Si no existe propiedad: Administrar → **Crear → Propiedad** ("GDS Web", zona horaria Guatemala, moneda GTQ) → Plataforma **Web** → URL `https://www.gdsgt.net`. Te dará el `G-…`.

**Google Ads (`AW-…`)**, solo si harás campañas: ads.google.com → Herramientas → **Conversiones** → Configuración → *Etiqueta de Google* → el ID `AW-…`.

**Meta Pixel**
1. Entra a business.facebook.com/events_manager con la cuenta que administra la página de Facebook de GDS.
2. Menú izquierdo: **Orígenes de datos**. Si ya hay un píxel, selecciónalo: el **ID** (15–16 dígitos) aparece debajo del nombre y en *Configuración*.
3. Si no hay: **Conectar orígenes de datos → Web → Conjunto de datos (Pixel)** → nombre "GDS Web" → elige "Configurar manualmente" y copia solo el ID (el código ya está en el sitio).
4. En *Configuración* del píxel agrega el dominio `gdsgt.net` y verifícalo en Business Manager → Seguridad de la marca → Dominios.

Pon los IDs en las variables de abajo.


| Variable | Dónde se obtiene | Ejemplo |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_TAG_IDS` | GA4 → Administrar → Flujos de datos (ID `G-…`). Google Ads → Herramientas → Conversiones (ID `AW-…`). Separar con coma. | `G-ABC123,AW-123456789` |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta → Administrador de eventos → Orígenes de datos | `1234567890` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console → Verificación por etiqueta HTML (solo el `content`) | opcional |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster → Verificación por meta tag | opcional |

Eventos que envía el sitio:

| Evento | Google | Meta |
|---|---|---|
| Clic en WhatsApp (enlaces y botón flotante) | `click_whatsapp` | `Contact` |
| Clic en teléfono / correo | `phone_click` / `email_click` | `Contact` |
| Formulario de software a la medida | `submit_lead` + `generate_lead` | `Lead` |
| Solicitud de partner | `partner_application_submitted` + `generate_lead` | `SubmitApplication` |

En GA4, marca `generate_lead` y `click_whatsapp` como **eventos clave** e impórtalos a Google Ads como conversiones.

## 2. Recepción de contactos (`/api/leads`)

Cada formulario se envía a **todos** los canales configurados. Si ninguno está configurado, el formulario de partners pide enviar por WhatsApp.

### Correo a info@gdsgt.net (SMTP de Plesk)

En Plesk → Correo, usa la cuenta `info@gdsgt.net` (o crea `web@gdsgt.net` solo para enviar):

```
LEADS_EMAIL_TO=info@gdsgt.net
LEADS_EMAIL_FROM=GDS Web <info@gdsgt.net>
SMTP_HOST=mail.gdsgt.net      # o el servidor que indique Plesk
SMTP_PORT=465
SMTP_USER=info@gdsgt.net
SMTP_PASS=la-contraseña-del-buzón
```

Alternativa sin servidor de correo: `RESEND_API_KEY` (resend.com).

### GDS ONE ERP

El sitio envía un `POST` JSON a `GDSONE_LEADS_URL`, con `Authorization: Bearer <GDSONE_API_KEY>` si la defines:

```json
{
  "origin": "www.gdsgt.net",
  "source": "custom_software",
  "source_label": "Software a la medida",
  "name": "Ana López", "company": "Acme", "email": "", "phone": "5555-5555",
  "country": "", "message": "App de pedidos para vendedores",
  "fields": { "...todos los campos del formulario..." },
  "lang": "es", "page": "/es/software-a-la-medida", "received_at": "2026-09-24T15:48:24Z"
}
```

`source` puede ser `custom_software`, `partner_application` o `contact`. Si el ERP espera otro formato o autenticación, pásame la documentación de su API y ajusto el envío.

### Opcional: Google Sheets u otra herramienta (webhook)

1. Crea una hoja de Google Sheets llamada "Leads web".
2. Menú **Extensiones → Apps Script**, pega esto y guarda:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = JSON.parse(e.postData.contents);
  const headers = sheet.getLastRow() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : [];
  Object.keys(data).forEach((k) => { if (!headers.includes(k)) headers.push(k); });
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.appendRow(headers.map((h) => data[h] ?? ''));
  return ContentService.createTextOutput('ok');
}
```

3. **Implementar → Nueva implementación → Aplicación web**. Ejecutar como: *tú*. Acceso: *Cualquier persona*.
4. Copia la URL y ponla en `LEADS_WEBHOOK_URL`.

La misma variable sirve para Make, Zapier, n8n o el webhook de tu CRM.


## 3. IndexNow (Bing / ChatGPT Search)

Después de cada despliegue, desde `apps/www`:

```bash
bun run indexnow
```

Envía todas las URLs del sitemap. La clave ya está publicada en `public/bcccc044f7723eb870871df58486b57a.txt`.

## 4. Casos de éxito

Ya están marcados como validados (`CASE_STUDIES_VERIFIED = true` en `apps/www/lib/site.ts`). Si en el futuro agregas un caso sin aprobación del cliente, vuelve a ponerlo en `false`.

## 5. Perfiles sociales en el schema

Cuando crees nuevos perfiles (Instagram, YouTube, Crunchbase, Wikidata, Clutch…), agrega sus URLs a `SOCIAL_PROFILES` en `apps/www/lib/site.ts`.
