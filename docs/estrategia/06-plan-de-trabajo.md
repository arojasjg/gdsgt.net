# Plan de trabajo: riesgos y pendientes

Estado al 25/09/2026. Leyenda: 🤖 lo puede hacer Claude en el código · 👤 requiere acceso, decisión o acción de GDS.

> El plan detallado de **seguridad del ERP** está en el repositorio privado `arojasjg/erp` (`SEGURIDAD-PLAN.md`). No se publica aquí porque este repositorio es público.

## Prioridad 0: Seguridad y continuidad del ERP (hoy)

**Principio:** ningún cambio puede interrumpir el ERP ni las apps que dependen de él. Estas son las apps inventariadas:
- punto de venta, kanban y asistencia (React dentro de `/erp/`);
- tienda en línea (otro dominio, sin sesión);
- importador de datos;
- sitio web (leads);
- PDF de facturas y enlaces públicos.

| # | Quién | Tarea | Resultado esperado |
|---|---|---|---|
| 0.1 | 👤 | **Obtener el código real de producción del ERP**: el repositorio `arojasjg/erp` es de 2021 y no coincide con lo que corre hoy. | Código real en git; auditoría repetida sobre él. |
| 0.2 | 👤 | Respaldo completo (base de datos y archivos) y **entorno de pruebas** con copia de la base de datos. | Respaldo restaurable; pruebas sin tocar producción. |
| 0.3 | 👤 | Cerrar accesos de red innecesarios al servidor y **rotar las credenciales expuestas** (ver plan privado). | Sin secretos válidos a la vista. |
| 0.4 | 🤖 | Correcciones de emergencia (login, facturación electrónica), probadas con la lista de regresión. | Riesgos críticos cerrados sin afectar el punto de venta. |
| 0.5 | 🤖👤 | Protección de la API **en modo "solo registrar"** una semana, luego bloqueo, con reversa inmediata. | Ningún consumidor olvidado se rompe. |
| 0.6 | 🤖 | Inyección SQL, contraseñas, CORS, PDF de facturas y limpieza (plan privado, fases 4–6). | ERP sin exposiciones críticas. |

Detalle, inventario de consumidores, lista de regresión y reversa de cada fase: `SEGURIDAD-PLAN.md` en el repo privado `arojasjg/erp`.

## Prioridad 1: Que ningún contacto se pierda (semana 1)

| # | Quién | Tarea | Estado |
|---|---|---|---|
| 1.1 | 🤖 | `/api/leads` en www: correo, GDS ONE y webhook. | ✅ Hecho |
| 1.2 | 🤖 | Endpoint `web_lead/recibir` en el ERP → prospecto + proyecto CRM. | ✅ Hecho (rama `claude/trusting-hopper-9t2cho` en `arojasjg/erp`) |
| 1.3 | 🤖 | **erp.grupogds.co** (repo `arojasjg/gdsone`): sus formularios de **contacto y demo no guardan nada** (2 rutas con `TODO`). Conectarlos al mismo sistema: correo a info@gdsgt.net + CRM. | Pendiente |
| 1.4 | 👤 | Dar el **dominio del ERP** y los **IDs de corporación y empresa** para los leads (opcional: vendedor y estado inicial). | Pendiente |
| 1.5 | 👤 | Generar `WEB_LEADS_TOKEN` y configurar las variables en el ERP y en www (ver `05-configuracion-produccion.md`). | Pendiente |
| 1.6 | 👤 | Datos SMTP del buzón `info@gdsgt.net` en Plesk. | Pendiente |
| 1.7 | 👤🤖 | Prueba de punta a punta: enviar formulario → correo recibido → prospecto y proyecto en el CRM. | Pendiente |

## Prioridad 2: Publicar el sitio nuevo (semana 1)

| # | Quién | Tarea | Estado |
|---|---|---|---|
| 2.0 | 👤 | **Antes de publicar:** configurar nginx para que `/erp/` siga yendo a PHP (sección 0 de `05-configuracion-produccion.md`). Si no, el ERP deja de funcionar. | Pendiente |
| 2.1 | 🤖 | Abrir PR `claude/trusting-hopper-9t2cho` → `main` en `gdsgt.net` (el `deploy.sh` publica `main`). | Pendiente (a tu señal) |
| 2.2 | 👤 | Revisar y aprobar el PR; ejecutar `deploy.sh`. | Pendiente |
| 2.3 | 👤 | IDs de **GA4 (`G-…`)** y **Meta Pixel** → variables en el servidor (guía en `05-configuracion-produccion.md`). | Pendiente |
| 2.4 | 👤 | Google Search Console y Bing Webmaster: verificar, enviar el sitemap. | Pendiente |
| 2.5 | 👤 | Después de cada despliegue: `bun run indexnow` en `apps/www`. | Pendiente |
| 2.6 | 👤 | Verificar en producción: formularios, banner de cookies (con zona horaria europea), eventos en GA4 DebugView y en Meta Test Events. | Pendiente |

## Prioridad 3: Sitio del ERP (erp.grupogds.co), mismos problemas que tenía www (semana 2)

Detectado en el repo `arojasjg/gdsone`:

| # | Quién | Tarea |
|---|---|---|
| 3.1 | 🤖 | 5 páginas con `params` síncronos (incompatibles con Next 16). |
| 3.2 | 🤖 | 11 archivos con enlaces a `localhost:900x` en producción. |
| 3.3 | 🤖 | `robots.txt` bloquea `/_next/` (Google no puede renderizar). |
| 3.4 | 🤖 | Sin analítica: agregar Google tag, Meta Pixel y el banner por región (mismo componente de www). |
| 3.5 | 🤖 | Revisar build, sitemap/hreflang, imágenes OG, favicon y schema, igual que se hizo en www. |

## Prioridad 4: Posicionamiento y ventas (semanas 1–12)

Detalle en los documentos 01, 02 y 03. Lo más importante:

| # | Quién | Tarea |
|---|---|---|
| 4.1 | 👤 | Google Business Profile completo y campaña de reseñas (meta: 30 en 90 días). |
| 4.2 | 👤 | Perfiles de entidad: LinkedIn, Wikidata, Crunchbase, Clutch, GoodFirms (y pasarme las URLs para el schema `sameAs`). |
| 4.3 | 👤 | Campaña a clientes actuales de GDS ONE para el servicio a la medida. |
| 4.4 | 👤 | Google Ads (Q3,000–5,000/mes) cuando GA4 esté midiendo. |
| 4.5 | 🤖 | 1 artículo por semana y 2 landings por industria más (restaurantes, logística). |
| 4.6 | 👤 | Foto y perfil de LinkedIn de José Rojas para la autoría del blog (E-E-A-T). |

## Prioridad 5: Deuda técnica (mes 2+)

| # | Quién | Tarea |
|---|---|---|
| 5.1 | 👤🤖 | Decidir la consolidación de dominios (gdsgt.net / erp.grupogds.co). |
| 5.2 | 🤖 | Unificar los repos del ecosistema (hoy hay copias del mismo monorepo en `gdsgt.net`, `gdsone`, `services` y `resources`). |
| 5.3 | 🤖 | CI con build, typecheck y pruebas básicas en cada PR. |
| 5.4 | 👤 | Monitoreo de disponibilidad (UptimeRobot o similar) para www, erp y el ERP. |

## Lo que necesito de ti para avanzar

1. **Acceso al código real del ERP** y saber si hay **entorno de pruebas**; luz verde para 0.3 y 0.4.
2. **Dominio del ERP + IDs de corporación y empresa** para los leads.
3. **Datos SMTP** de `info@gdsgt.net` (se configuran en el servidor, no en el código).
4. **IDs de GA4 y Meta Pixel**.
5. ¿Abro los **PRs** de `gdsgt.net` y `erp`?
