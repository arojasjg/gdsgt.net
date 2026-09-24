# Auditoría del sitio web: SEO técnico, LLMs y conversión

Estado del repositorio `gdsgt.net` (app `apps/www`, Next.js 16).

## 1. Problemas encontrados y corregidos en este cambio

| # | Problema | Impacto | Corrección |
|---|---|---|---|
| 1 | **El build de producción fallaba** (error de tipos en casos de éxito). | No se podía desplegar ninguna actualización. | Corregido. `next build` pasa. |
| 2 | Las 6 páginas de **casos de éxito se caían** al generarse: los datos tenían otra estructura que la página. | 12 URLs rotas (ES/EN). | Se normalizan los datos en `packages/content/es/case-studies.ts`. |
| 3 | 5 páginas usaban `params` síncrono (incompatible con Next 16): partners, formulario de partners, calculadoras y casos. | Idioma incorrecto o contenido roto. | Migradas a `params` asíncrono. |
| 4 | El botón **"Solicitar Demo" del inicio llevaba al formulario de *partners* (revendedores)**, y "Hablar con consultor" a la página de partners. | Los clientes potenciales caían en el formulario equivocado. | "Solicitar Demo" va a la demo del ERP; el segundo botón va al nuevo servicio; el CTA final abre WhatsApp. |
| 5 | Enlaces a `/demo`, `/contact`, `/industries` y `/capabilities` que **no existen en www** (404), y la página 404 apuntaba a **`localhost:9001`**. | Enlaces rotos: mala experiencia y señal negativa de SEO. | Apuntan a `erp.grupogds.co`. |
| 6 | `robots.txt` **bloqueaba `/_next/`**. | Google no podía cargar el CSS y JS para renderizar las páginas. | Desbloqueado. Se permiten explícitamente los bots de IA (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot, bingbot, etc.). |
| 7 | El sitemap solo tenía URLs `/es`, sin hreflang ni páginas clave. | Indexación incompleta. | Sitemap con ES/EN, hreflang, x-default, servicios, calculadoras, partners y fechas reales del blog. |
| 8 | **`og-default.png` no existía**: todas las páginas compartían una imagen rota en WhatsApp, Facebook y LinkedIn. | Enlaces compartidos sin imagen, menos clics. | Imágenes OG creadas (general y del servicio). Se agregó `metadataBase`. |
| 9 | `favicon.ico` era el logo completo de **700 KB y 2220×654 px**. | Ícono deformado en Google y en pestañas; peso innecesario. | Favicon real de 3.5 KB más íconos 32, 192 y 512, apple-touch-icon y `site.webmanifest`. |
| 10 | El schema de Organization solo estaba en el inicio y sin `@id`. | Entidad de marca débil para Google y los LLMs. | Schema global `Organization + ProfessionalService + WebSite` en todas las páginas, con `@id`, `knowsAbout`, `makesOffer` y `alternateName`. |
| 11 | La meta description del inicio tenía ~350 caracteres y no mencionaba Guatemala ni el nuevo servicio. | Google la recortaba. | Título y descripción nuevos, enfocados en "empresa de software en Guatemala" y "desarrollo a la medida". |
| 12 | No existía `llms.txt`. | — | Creado `/llms.txt` con el resumen de la empresa, los planes y los enlaces. Es barato y no hace daño, aunque su impacto aún no está probado. |
| 13 | No había página del nuevo servicio. | — | Landing completa ES/EN con schema `Service` + `Offer` (GTQ/mes), `FAQPage` y `BreadcrumbList`, formulario que envía a WhatsApp, y enlaces en header, footer e inicio. |

## 2. Pendientes críticos (requieren acción tuya o decisión)

| Prioridad | Pendiente | Por qué importa | Qué hacer |
|---|---|---|---|
| 🔴 1 | **No hay analítica instalada.** Existe el paquete `@gds/analytics` (GTM, consentimiento), pero no se carga en ninguna página. `track()` no envía nada. | No puedes medir visitas, leads ni el ROI de la publicidad. | Crear GA4 y GTM; darme el ID `GTM-XXXX` y lo conecto (variable `NEXT_PUBLIC_GTM_ID`). Configurar como conversiones: clic en WhatsApp, envío de formulario y clic en llamar. |
| 🔴 2 | **El formulario de partners no envía nada** (código `// TODO: Send to API`; simula el envío y muestra "¡Aplicación recibida!"). | Cada solicitud de partner se pierde en silencio. | Decidir destino: correo (Resend o SMTP), CRM o Google Sheets. Puedo implementarlo. Mientras tanto, el formulario del nuevo servicio usa WhatsApp, así que sí llega. |
| 🔴 3 | **Casos de éxito con cifras muy específicas** (ROI 816 %, US$68,000/año) y nombres de clientes reales, con inconsistencias: en "Comercial Kerly" el texto aún dice "La Económica", y varias empresas guatemaltecas llevan etiquetas de otro país (Costa Rica, Nicaragua, Honduras, Panamá, El Salvador). | Si las cifras no están aprobadas por los clientes, hay riesgo reputacional y legal. Google y los LLMs penalizan contenido poco confiable. | Validar cada caso con el cliente (cifras, nombre, cita, permiso). Corregir las inconsistencias. Ideal: agregar el nombre y cargo reales en los testimonios. |
| 🟠 4 | Afirmación "+500 empresas en Latinoamérica" en metadatos y banners. | Tiene que ser verificable. | Confirmar o ajustar. |
| 🟠 5 | **Marca dividida en 3 dominios** (gdsgt.net, erp.grupogds.co, correo @grupogds.co). | La autoridad SEO se divide y los LLMs pueden confundir la entidad. | A mediano plazo, consolidar en un solo dominio (ej. `gdsgt.net/erp` o `erp.gdsgt.net`) con redirecciones 301. Como mínimo, enlazar ambos sitios entre sí y usar el mismo schema `@id`. |
| 🟠 6 | `<html lang="es">` fijo también en las páginas `/en`. | Señal de idioma incorrecta para Google. | Mover `<html>` al layout `[lang]` o usar middleware. Puedo hacerlo. |
| 🟠 7 | El blog y los casos de éxito solo existen en español, pero `/en/blog/...` también se genera con contenido en español. | Contenido duplicado. | Poner `noindex` o traducir; o no generar rutas `/en` para contenido que solo está en español. |
| 🟡 8 | Sin páginas por industria para el servicio a la medida. | Pierdes búsquedas de nicho ("app de pedidos para distribuidoras"). | Crear 4–6 landings (ver el documento 01, sección 2.2). |
| 🟡 9 | Sin página "Nosotros" ni "Equipo". | E-E-A-T (experiencia y confianza) y señales de entidad para los LLMs. | Página con historia desde 2009, equipo, fotos, oficinas y reconocimientos. |
| 🟡 10 | Sin página de reseñas ni schema `Review` real. | Estrellas en Google y confianza. | Cuando existan reseñas reales en Google o Clutch, mostrarlas en el sitio. |
| 🟡 11 | IndexNow no configurado. | Indexación instantánea en Bing, Yandex y ChatGPT Search. | Generar la clave en Bing Webmaster y guardar `public/<clave>.txt`. |
| 🟡 12 | Imágenes de clientes en PNG sin optimizar; `logo.png` de 700 KB. | Velocidad (Core Web Vitals). | Convertir a WebP o SVG. Next/Image ya las redimensiona, pero el original pesa mucho. |

## 3. Cómo posicionarse en ChatGPT, Perplexity, Gemini, Claude y AI Overviews (GEO)

Lo que más influye (según estudios de 2025–2026):
1. **Menciones de marca en sitios de terceros** (prensa, directorios, Reddit, reseñas) pesan más que los backlinks. → Documento 02, secciones C, E y F.
2. **Estar indexado en Bing** (ChatGPT Search usa su índice). → Bing Webmaster Tools más IndexNow.
3. **Entidad clara y consistente:** mismo nombre, dirección, teléfono y descripción en todas partes, más Wikidata, LinkedIn, Crunchbase y Google Business Profile, todos enlazados con `sameAs`.
4. **Contenido que responde preguntas concretas** con datos: precios, tablas y FAQs. La landing nueva y el plan de blog del documento 03 ya siguen este formato.
5. **Datos estructurados** (Organization, Service, Offer, FAQPage). ✅ Ya implementados.
6. **Permitir los bots de búsqueda de IA** en robots.txt. ✅ Hecho.

**Prueba mensual:** pregunta en ChatGPT, Perplexity, Gemini y Claude:
- "¿Qué empresas desarrollan software a la medida en Guatemala?"
- "¿Cuánto cuesta un software a la medida en Guatemala?"
- "¿Qué ERP recomiendas para una PyME en Guatemala?"

Anota si GDS aparece y quién aparece en su lugar. Esos sitios citados son donde debes estar.

## 4. Plan 30 / 60 / 90 días

**Días 1–30**
- [ ] Desplegar este cambio a producción.
- [ ] Google Search Console + Bing Webmaster + sitemap.
- [ ] Google Business Profile completo; pedir las primeras 10 reseñas.
- [ ] Instalar GA4, GTM y Meta Pixel (dame los IDs).
- [ ] Arreglar el formulario de partners.
- [ ] Validar los casos de éxito y la cifra "+500 empresas".
- [ ] Campaña a clientes actuales de GDS ONE.
- [ ] Google Ads con Q3,000–5,000.
- [ ] Perfiles: LinkedIn, Clutch, GoodFirms, Crunchbase, Wikidata.

**Días 31–60**
- [ ] 4 artículos de blog más 8 videos cortos.
- [ ] 2 landings por industria.
- [ ] Capterra/G2 para GDS ONE, y directorios locales (sección E).
- [ ] Nota de prensa de lanzamiento.
- [ ] Meta Ads con clic a WhatsApp.

**Días 61–90**
- [ ] 4 artículos más y 2 landings más.
- [ ] Páginas "Nosotros" y reseñas.
- [ ] Primer caso de éxito del servicio a la medida.
- [ ] Revisar KPIs y ajustar precios y paquetes.
- [ ] Evaluar la consolidación de dominios.
