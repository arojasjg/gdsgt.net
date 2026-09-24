# Configuración en producción (pasos para activar todo)

Todo se configura con variables de entorno en `apps/www/.env.local` en el servidor (ver `apps/www/.env.example`). Después de cambiarlas: `bun run build` y reiniciar PM2 (`./deploy.sh`).

## 1. Analítica y publicidad

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

Configura al menos una opción. Si no hay ninguna, el formulario de partners pedirá enviar por WhatsApp.

### Opción A: Google Sheets (gratis, recomendado para empezar)

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

### Opción B: correo (Resend)

1. Crea una cuenta en resend.com y verifica el dominio `gdsgt.net` (registros DNS).
2. Variables: `RESEND_API_KEY`, `LEADS_EMAIL_TO` (ej. `ventas@gdsgt.net,gerencia@gdsgt.net`) y `LEADS_EMAIL_FROM` (ej. `GDS Web <web@gdsgt.net>`).

Puedes usar A y B a la vez.

## 3. IndexNow (Bing / ChatGPT Search)

Después de cada despliegue, desde `apps/www`:

```bash
bun run indexnow
```

Envía todas las URLs del sitemap. La clave ya está publicada en `public/bcccc044f7723eb870871df58486b57a.txt`.

## 4. Casos de éxito

Cuando cada caso esté validado con su cliente, cambia en `apps/www/lib/site.ts`:

```ts
export const CASE_STUDIES_VERIFIED = true;
```

## 5. Perfiles sociales en el schema

Cuando crees nuevos perfiles (Instagram, YouTube, Crunchbase, Wikidata, Clutch…), agrega sus URLs a `SOCIAL_PROFILES` en `apps/www/lib/site.ts`.
