# Listado de directorios, perfiles y plataformas: pasos pendientes

Marca ✅ al completar cada uno. **Usa siempre exactamente los mismos datos (NAP)** en todos los perfiles; la consistencia es lo que usan Google y los LLMs para confiar en una empresa.

## Datos maestros (copiar y pegar en todos lados)

- **Nombre:** GDS - Grupo de Soluciones (marca corta: GDS)
- **Categoría principal:** Empresa de desarrollo de software / Software company
- **Dirección:** K.M. 15.5 Carretera a El Salvador, Plaza Condado Concepción, 5to. nivel, Of. 5F-1 y 5F-2, Guatemala
- **Teléfono:** +502 2354-5437 · **WhatsApp:** +502 5996 1882
- **Email:** info@gdsgt.net
- **Web:** https://www.gdsgt.net
- **Fundación:** 2009
- **Clientes:** más de 100 empresas
- **Descripción corta (160 caracteres):** Empresa guatemalteca de software: GDS ONE ERP, CRM, BI, IA y desarrollo de software y apps a la medida desde Q2,500/mes.
- **Descripción larga:** GDS es una empresa guatemalteca de software empresarial fundada en 2009, con más de 100 empresas clientes. Desarrolla GDS ONE ERP y ofrece Business Intelligence, CRM, inteligencia artificial y desarrollo de software y apps a la medida por suscripción desde Q2,500 al mes, con hosting, soporte y mejoras incluidas. Integra facturación electrónica FEL, pasarelas de pago y WhatsApp. Atiende empresas en Guatemala, Centroamérica y Latinoamérica.
- **Servicios:** Desarrollo de software a la medida · Desarrollo de apps móviles · ERP · CRM · Business Intelligence · Integración FEL · Inteligencia artificial · Data Engineering

> ✅ Correo unificado: `info@gdsgt.net` en todo el sitio.

---

## A. Prioridad máxima (semana 1): buscadores y mapas

| ✅ | Plataforma | URL | Costo | Pasos |
|---|---|---|---|---|
| ☐ | **Google Search Console** | search.google.com/search-console | Gratis | 1) Agregar propiedad de dominio `gdsgt.net` (verificación DNS TXT). 2) Enviar `https://www.gdsgt.net/sitemap.xml`. 3) Inspeccionar `/es/software-a-la-medida` y "Solicitar indexación". 4) Opcional: poner el código en la variable `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (el sitio ya la lee). |
| ☐ | **Bing Webmaster Tools** (alimenta ChatGPT Search y Copilot) | bing.com/webmasters | Gratis | 1) "Importar desde Google Search Console" (más rápido). 2) Enviar el sitemap. 3) Activar IndexNow. 4) Revisar el reporte "AI Performance". Variable opcional: `NEXT_PUBLIC_BING_SITE_VERIFICATION`. |
| ☐ | **Google Business Profile** | business.google.com | Gratis | 1) Crear o reclamar "GDS - Grupo de Soluciones". 2) Categoría principal: *Empresa de software*; secundarias: *Diseñador de sitios web*, *Consultor informático*, *Servicio de desarrollo de aplicaciones*. 3) Agregar "Servicios" con precio: "Desarrollo de software a la medida – desde Q2,500/mes". 4) Subir 10+ fotos (oficina, equipo, capturas). 5) Horario, WhatsApp, link a `/es/software-a-la-medida`. 6) Publicar un "Post" semanal. 7) **Pedir reseñas a clientes** (meta: 30 en 90 días). |
| ☐ | **Bing Places** | bingplaces.com | Gratis | Importar desde Google Business Profile. |
| ☐ | **Apple Business Connect** | businessconnect.apple.com | Gratis | Crear la ubicación (aparece en Apple Maps, Siri y Apple Intelligence). |
| ☐ | **Waze for Business** | business.waze.com | Gratis | Marcar la ubicación de la oficina. |

## B. Entidad de marca para LLMs (semanas 1–2)

| ✅ | Plataforma | URL | Costo | Pasos |
|---|---|---|---|---|
| ☐ | **Wikidata** (la fuente más usada por los motores de IA para entidades) | wikidata.org | Gratis | Crear el ítem "GDS - Grupo de Soluciones": instancia de *empresa*, país *Guatemala*, fecha de fundación 2009, sitio web, industria *software*, cuentas de LinkedIn y Facebook. Cita fuentes externas (prensa, cámara de comercio). No lo escribas como publicidad. |
| ☐ | **LinkedIn Company Page** | linkedin.com/company/grupo-gds | Gratis | Completar el 100 %: descripción larga, especialidades, ubicación, página de "Servicios" con "Desarrollo de software a la medida". Pide a todos los empleados que pongan GDS como empleador. |
| ☐ | **Crunchbase** | crunchbase.com | Gratis | Perfil de organización con los datos maestros. |
| ☐ | **Facebook Page** | facebook.com/grupogds | Gratis | Completar la información y agregar el botón de WhatsApp. |
| ☐ | **Instagram, TikTok y YouTube** | — | Gratis | Crear o completar perfiles con el mismo nombre (@grupogds). YouTube: demos de 1–3 min (los LLMs y Google citan videos). |
| ☐ | **GitHub Organization** | github.com/organizations/new | Gratis | Perfil público "GDS Guatemala" con README y link al sitio (señal técnica de credibilidad). |

Cuando existan los perfiles nuevos, **agrega sus URLs** en `SOCIAL_PROFILES` de `apps/www/lib/site.ts`. Eso alimenta el campo `sameAs` del schema.

## C. Directorios B2B de software y agencias (semanas 2–4)

| ✅ | Plataforma | URL | Costo | Qué publicar |
|---|---|---|---|---|
| ☐ | **Clutch** | clutch.co/get-listed | Gratis (pago opcional) | Perfil de agencia: "Custom Software Development", "Mobile App Development". Pide 3–5 reseñas verificadas de clientes: Clutch llama al cliente y **es la fuente que más citan los LLMs** para "mejores empresas de software en Guatemala". |
| ☐ | **The Manifest** | themanifest.com | Gratis | Se alimenta de Clutch (sale automáticamente). |
| ☐ | **GoodFirms** | goodfirms.co | Gratis | Perfil más un portafolio de 3 proyectos más reseñas. |
| ☐ | **DesignRush** | designrush.com | Gratis (con revisión) | Agencia de "Software Development" en Guatemala. |
| ☐ | **Sortlist** | sortlist.com | Gratis | Perfil de agencia. |
| ☐ | **TechBehemoths** | techbehemoths.com | Gratis | Ya lista empresas guatemaltecas; reclama o crea tu perfil. |
| ☐ | **TopDevelopers.co** | topdevelopers.co | Gratis | Perfil de empresa. |
| ☐ | **ComparaSoftware Guatemala** | comparasoftware.gt | Freemium | Categoría "Desarrollo de Aplicaciones" más GDS ONE en "ERP". |
| ☐ | **Appvizer (ES)** | appvizer.es | Freemium | GDS ONE ERP. |

## D. Directorios de producto (para GDS ONE ERP)

| ✅ | Plataforma | URL | Costo | Pasos |
|---|---|---|---|---|
| ☐ | **Capterra, GetApp y Software Advice** (un solo registro en Gartner Digital Markets) | digitalmarkets.gartner.com | Gratis | Listar GDS ONE ERP; pedir reseñas a clientes. |
| ☐ | **G2** | sell.g2.com | Gratis | Perfil de producto más campaña de reseñas. |
| ☐ | **TrustRadius** | trustradius.com/vendors | Gratis | Perfil de producto. |
| ☐ | **SourceForge** | sourceforge.net/software/vendors | Gratis | Perfil de producto. |
| ☐ | **Product Hunt** | producthunt.com | Gratis | Lanzar "GDS AI Assistant" o una versión nueva un martes; moviliza a la comunidad ese día. |
| ☐ | **SaaSworthy / Softwaresuggest** | saasworthy.com, softwaresuggest.com | Gratis | Perfil de producto. |

## E. Guatemala: cámaras, gremios y directorios locales

| ✅ | Plataforma | URL | Costo | Pasos |
|---|---|---|---|---|
| ☐ | **Cámara de Comercio de Guatemala: Directorio CCG** | directorio.ccg.gt | Membresía | Afiliarse; publicar el perfil; participar en ruedas de negocio. |
| ☐ | **AGEXPORT: Comisión SOFEX** (software) | export.com.gt | Membresía | Afiliarse a la comisión de software; aparece en misiones comerciales y en el directorio de exportadores de software. |
| ☐ | **Cámara de Industria (CIG)** | industriaguate.com | Membresía | Útil para vender a manufactura. |
| ☐ | **AmCham Guatemala** | amchamguate.com | Membresía | Networking con empresas medianas y grandes. |
| ☐ | **Páginas Amarillas Guatemala** | paginasamarillas.com.gt | Gratis / pago | Listado básico gratis. |
| ☐ | **DeGuate** | deguate.com.gt | Gratis / pago | Directorio de empresas. |
| ☐ | **GuateGuía** | guateguia.com/registra-tu-empresa | Gratis | Registro de empresa. |
| ☐ | **Cylex, Hotfrog, Infobel, Foursquare** | cylex.com.gt, hotfrog.com, infobel.com, foursquare.com | Gratis | Citaciones locales (NAP idéntico). |
| ☐ | **Trustpilot** | business.trustpilot.com | Gratis | Enlazar desde los correos de soporte para juntar reseñas. |

## F. Comunidades donde participar (sin spam: aporta valor)

| ✅ | Lugar | Cómo |
|---|---|---|
| ☐ | Grupos de Facebook: "Emprendedores Guatemala", "PyMEs Guatemala", grupos de contadores | Responder dudas sobre FEL, inventarios y digitalización; compartir guías del blog. |
| ☐ | LinkedIn: grupos de gerentes y contadores en Guatemala | Artículo semanal (republica el blog). |
| ☐ | Reddit: r/guatemala, r/Centroamerica, r/ERP | Responder preguntas técnicas (Reddit es muy citado por ChatGPT y Perplexity). |
| ☐ | Quora en español | Responder "¿Cuánto cuesta un software a la medida en Guatemala?" y "¿Qué ERP usar en Guatemala?". |
| ☐ | Universidades (USAC, URL, UVG, Galileo, UMG) | Charlas y bolsa de trabajo: generan enlaces .edu.gt y talento. |
| ☐ | Medios: Prensa Libre, República, Forbes Centroamérica, Estrategia & Negocios, Revista Summa | Notas de prensa: "Primera empresa guatemalteca que ofrece software a la medida por suscripción". Las menciones en prensa pesan mucho en los LLMs. |

## G. Seguimiento

- Crea una hoja de cálculo con: plataforma, URL del perfil, usuario, fecha, estado, reseñas.
- Revisión mensual: responde todas las reseñas y actualiza las fotos.
- **Meta a 90 días:** 30 reseñas en Google, 5 en Clutch y 5 en Capterra/G2.
