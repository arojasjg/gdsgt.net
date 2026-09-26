# Configuración en producción (pasos para activar todo)

Todo se configura con variables de entorno en `apps/www/.env.local` en el servidor (ver `apps/www/.env.example`). Después de cambiarlas: `bun run build` y reiniciar PM2 (`./deploy.sh`).

## 0. ⚠️ Publicar el sitio sin romper el ERP

El **ERP vive en el mismo dominio**: `https://www.gdsgt.net/erp/` (PHP/Yii, con las apps React en `/erp/react-front/...`). El sitio nuevo es Next.js (Node con PM2). Si el dominio completo se manda a Node, **el ERP, el punto de venta, espacios y asistencia dejan de funcionar**.

Antes de publicar:

1. **Inventario de la carpeta raíz actual** de `www.gdsgt.net` en Plesk (`httpdocs`): anota cada carpeta o archivo que hoy responde en el dominio (`/erp/` y cualquier otra: tienda, imágenes, descargas, verificaciones `.html` de Google, etc.). Todos deben seguir sirviéndose por PHP/Apache.
2. En Plesk → dominio → **Apache & nginx Settings → Additional nginx directives**, envía a Node solo lo que no sea del ERP (ajusta el puerto al de PM2):

```nginx
# El ERP (y cualquier otra carpeta del inventario) sigue en PHP/Apache
location ^~ /erp/ {
    proxy_pass http://127.0.0.1:7080;   # backend Apache de Plesk (https: 7081)
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}

# Todo lo demás: sitio Next.js
location / {
    proxy_pass http://127.0.0.1:9000;   # puerto de `next start` en PM2
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

   (Plesk usa 7080/7081 para Apache por defecto; confírmalo en tu servidor.)
3. **Puerto:** `apps/www/package.json` arranca Next en **9000**, pero `deploy.sh` indica 3000 y el `ecosystem.config.js` de PM2 no está en el repositorio. Unifica el puerto en PM2 y en la directiva de nginx.
4. **Prueba después de publicar**, en este orden:
   - `https://www.gdsgt.net/erp/`: login del ERP y una pantalla con listado.
   - Punto de venta (`/erp/...punto_de_venta_visual`): abrir, agregar producto, cobrar en prueba.
   - Espacios y asistencia.
   - `https://www.gdsgt.net/es`: sitio nuevo; `/es/software-a-la-medida`; formulario de prueba.
   - Tienda en línea (tienda.gdsgt.net / tienda.grupogds.co): cargar catálogo.
5. **Plan de reversa:** guarda la configuración nginx anterior; si algo del ERP falla, restáurala (1 minuto) y el ERP vuelve a su estado previo.

`robots.txt` del sitio nuevo ya bloquea `/erp/` para que Google no indexe el ERP.

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

### GDS ONE ERP → módulo CRM

El ERP (`arojasjg/erp`, rama `claude/trusting-hopper-9t2cho`) tiene un endpoint nuevo: `Web_leadController`. Por cada formulario:
1. Busca un **prospecto** con el mismo correo o celular; si no existe, lo crea (NIT `CF`, contacto, correo, celular y observaciones).
2. Abre un **proyecto CRM** (oportunidad) ligado a ese prospecto, con código `WEB-…`, fecha, origen y mensaje.

Todo ocurre en una transacción; si algo falla, no queda nada a medias.

**En el servidor del ERP** (variables de entorno del PHP / Plesk, o en `params` de la configuración de Yii):

```
WEB_LEADS_TOKEN=<secreto largo; genera uno con: openssl rand -hex 32>
WEB_LEADS_CORPORACION=<ID de la corporación GDS>
WEB_LEADS_EMPRESA=<ID de la empresa GDS>
WEB_LEADS_VENDEDOR=<opcional: ID del vendedor que recibe los leads>
WEB_LEADS_ESTADO_CRM=<opcional: ID del estado "Nuevo" en Estado de proyecto CRM>
WEB_LEADS_USUARIO=<opcional: ID del usuario creador>
```

**En el servidor del sitio web** (`apps/www/.env.local`):

```
GDSONE_LEADS_URL=https://www.gdsgt.net/erp/web_lead/recibir
GDSONE_API_KEY=<el mismo WEB_LEADS_TOKEN>
```

Prueba rápida desde el servidor:

```bash
curl -X POST "https://www.gdsgt.net/erp/web_lead/recibir" \
  -H "Authorization: Bearer <token>" -H "Content-Type: application/json" \
  -d '{"source_label":"Prueba","name":"Prueba Web","company":"Prueba S.A.","email":"prueba@example.com","phone":"+502 5555 5555","message":"Lead de prueba"}'
# Respuesta esperada: {"status":"success","prospecto_id":123,"proyecto_crm_id":456}
```

Si Apache no pasa el encabezado `Authorization` a PHP, usa `X-Web-Leads-Token: <token>` (el endpoint acepta ambos) o agrega al `.htaccess`: `SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1`.

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
