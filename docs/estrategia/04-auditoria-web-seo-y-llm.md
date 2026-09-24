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

## 2. Estado de los pendientes

| Estado | Tema | Detalle / qué falta de tu lado |
|---|---|---|
| ✅ | Analítica | Google tag (GA4/Ads) y Meta Pixel integrados; banner de cookies solo para visitantes de Europa. **Falta:** poner los IDs (ver `05-configuracion-produccion.md`). |
| ✅ | Formulario de partners | Ya envía de verdad a `/api/leads` (webhook y/o correo). Si falla, ofrece enviarlo por WhatsApp. **Falta:** configurar el destino. |
| ✅ | `<html lang>` | Correcto por idioma (`es`/`en`). |
| ✅ | Contenido solo en español bajo `/en` | Blog y casos en `/en` con `noindex` y fuera del sitemap. |
| ✅ | **Dominio equivocado** | Blog y casos declaraban `www.gds.com` como dominio (canonical apuntaba a otro sitio). Corregido a `www.gdsgt.net`. |
| ✅ | Páginas por industria | 4 landings: distribuidoras, clínicas, servicios técnicos, constructoras. |
| ✅ | Página "Nosotros" | `/es/nosotros` y `/en/nosotros`, solo con datos verificables. |
| ✅ | Blog del servicio | 3 guías con FAQ y schema: costo de software a la medida, a la medida vs enlatado, costo de una app. |
| ✅ | IndexNow | Clave publicada y script `bun run indexnow` (en `apps/www`). |
| ✅ | Logo | De 700 KB a 66 KB. |
| ✅ | Política de privacidad | Sección de cookies con Google y Meta. |
| ✅ | Botón flotante de WhatsApp | Ahora se mide como conversión y tiene mensaje propio en la página del servicio. |
| ✅ | Casos de éxito | Validados por GDS. Se corrigieron nombres viejos ("La Económica", "Tech Store"…), etiquetas de país y sitios web inventados. Vuelven a estar indexados. |
| ✅ | Cifra de clientes | Actualizada a "+100 empresas" (sitio, schema, llms.txt, página Nosotros). |
| ✅ | Autores del blog | Todos los artículos firmados por José Rojas, con enlace a la página Nosotros. Recomendado: agregar foto y perfil de LinkedIn de José. |
| 🟠 | Marca en 3 dominios | Evaluar consolidación (gdsgt.net / erp.grupogds.co / correo @grupogds.co). |
| 🟡 | Reseñas | Cuando existan reseñas reales (Google, Clutch), mostrarlas en el sitio. |
| 🟡 | Imágenes de clientes | Convertir a WebP (menor prioridad; next/image ya las optimiza). |

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
