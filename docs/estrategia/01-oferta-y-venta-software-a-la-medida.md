# Servicio: Desarrollo de Software y Apps a la Medida desde Q2,500/mes

Estrategia de oferta, precios y ventas. Página publicada en `/es/software-a-la-medida` y `/en/software-a-la-medida`.

---

## 1. Diagnóstico del mercado (Guatemala / Centroamérica)

| Hallazgo | Implicación para GDS |
|---|---|
| El mercado local vende casi todo como **proyecto de pago único** (ej. un CRM a la medida en Guatemala se cotiza en **US$15,000–30,000+**, según RedFox Dev). | El modelo **por suscripción mensual** casi no existe localmente con precio publicado. Es un diferenciador real: úsalo como mensaje central. |
| Competidores visibles: RedFox Dev, Nonosky, LionMane, Lomax, Digital Geko, DL Systems, N&T Software. Ninguno publica un precio mensual de entrada. | Publicar "desde Q2,500/mes" gana clics y confianza. En Google Ads y SEO, **el precio visible es ventaja**. |
| Lo que el comprador guatemalteco exige: **FEL (SAT)**, pagos locales (Recurrente, Pagalo, NeoNet, BAC Compra Click, QPayPro), **WhatsApp**. | Ya incluido en la página. Crea demos cortas de cada integración para usarlas en ventas y redes. |
| El miedo principal de la PyME es **pagar mucho por adelantado** y quedarse **sin soporte** (el freelancer que desaparece). | El mensaje "mensualidad fija + hosting + soporte + mejoras incluidas + equipo, no una persona" ataca justo esos dos miedos. |

Fuentes: clutch.co/gt/developers, techbehemoths.com (Guatemala), redfoxdev.com/blog/costo-crm-a-la-medida-guatemala, blog.visionweb.com.gt/pasarelas-de-pago-en-guatemala.

---

## 2. La oferta (lo que quedó publicado)

| Plan | Precio | Para quién | Incluye (resumen) |
|---|---|---|---|
| **Esencial** | Q2,500/mes | PyME que quiere digitalizar **un** proceso | 1 sistema web/PWA, desarrollo inicial según alcance, 10 h/mes de mejoras, 10 usuarios, hosting+SSL+respaldos, soporte WhatsApp |
| **Profesional** ⭐ | Q5,900/mes | Empresa que necesita web + app e integraciones | Web + app Android/iOS, 25 h/mes, 50 usuarios, FEL/pagos/WhatsApp/ERP, dashboard, soporte prioritario |
| **Empresarial** | A la medida | Proyectos grandes / críticos | Equipo dedicado, QA, DevOps, SLA, PM |

Condiciones publicadas: precios sin IVA, **contrato mínimo 12 meses**, alcance inicial por escrito, horas no acumulables, datos siempre del cliente y propiedad del código definida en el contrato.

> ⚠️ **Decisiones que debes validar tú** (las dejé como propuesta razonable y se editan en `packages/content/es/custom-software.ts`):
> - Precio del plan Profesional (Q5,900) y las horas de cada plan.
> - Plazo mínimo de 12 meses.
> - Política de propiedad del código fuente.
> - "Primera versión en semanas": asegúrate de poder cumplirlo.

### 2.1 Economía de la unidad: cómo no perder dinero con Q2,500

- Un contrato Esencial a 12 meses = **Q30,000** (≈ US$3,900) de ingreso total.
- Costos directos aproximados: hosting/infra US$15–40/mes, más 10 h/mes de soporte y mejoras.
- **Regla de oro:** el desarrollo inicial incluido en el plan Esencial debe ser **acotado**. Sugerencia: hasta ~60–80 horas de construcción, que es un MVP de un proceso (ej. cotizaciones + clientes + reportes). Si el alcance excede eso:
  1. subir al plan Profesional, o
  2. cobrar un **enganche/setup** (ej. Q5,000–15,000), o
  3. alargar el plazo a 18–24 meses.
- **Estandariza:** construye una base reutilizable (login, usuarios/roles, bitácora, reportes, exportar a Excel, notificaciones WhatsApp, FEL) para que cada proyecto nuevo arranque con el 40–60 % ya hecho. **Este es el secreto de que el modelo sea rentable.**
- Penalidad por terminación anticipada: el saldo del desarrollo inicial no amortizado. Déjala clara en el contrato.

### 2.2 Recomendaciones para hacer la oferta irresistible

1. **Garantía de prototipo:** "Si no te convence el prototipo, no pagas nada". Reduce el riesgo percibido; el costo es solo el tiempo del prototipo (usa Figma o una base reutilizable).
2. **Paquetes por industria** (landing propia por cada uno, ideal para SEO y Ads):
   - "App de pedidos en ruta para distribuidoras"
   - "Sistema de citas y expedientes para clínicas"
   - "Órdenes de trabajo para servicios técnicos"
   - "Control de obra para constructoras"
3. **Bono de lanzamiento** (primeros 10 clientes): primer mes gratis o 20 % de descuento los primeros 3 meses. Crea urgencia real y casos de éxito rápidos.
4. **Programa de referidos:** 1 mes gratis por cada cliente referido que firme, o 10 % del primer año para contadores y consultores.
5. **Venta cruzada con GDS ONE:** a cada cliente ERP actual, ofrécele apps a la medida conectadas a su ERP. Es el canal de ventas más barato que tienes.

---

## 3. Embudo de ventas

```
Tráfico (SEO, Ads, redes, directorios, referidos)
   ↓
Landing /es/software-a-la-medida → formulario que abre WhatsApp / botón WhatsApp
   ↓
Calificación por WhatsApp (5 preguntas, abajo)
   ↓
Diagnóstico gratis 30–45 min (Google Meet / presencial)
   ↓
Propuesta + prototipo (máx. 5 días hábiles)
   ↓
Cierre → contrato 12 meses → kickoff
```

### 3.1 Guion de calificación por WhatsApp

1. ¿Qué proceso quieres digitalizar y cómo lo hacen hoy (Excel, papel, otro sistema)?
2. ¿Cuántas personas lo usarían y quiénes (internos, clientes, vendedores en campo)?
3. ¿Necesitas app móvil, facturación FEL, pagos en línea o conectar con otro sistema?
4. ¿Para cuándo lo necesitas?
5. ¿Quién toma la decisión y qué presupuesto mensual tienes en mente?

→ Si hay proceso claro, usuarios y decisor: agenda el diagnóstico en ese mismo chat (usa un link de Calendly o Google Calendar).

### 3.2 Estructura del diagnóstico (30–45 min)

1. **Situación actual** (10 min): el proceso paso a paso y dónde duele (tiempo, errores, dinero).
2. **Impacto** (5 min): "¿Cuánto les cuesta al mes ese problema?" Anota la cifra; es tu argumento de ROI.
3. **Visión** (10 min): cómo sería el proceso ideal.
4. **Propuesta verbal** (5 min): plan recomendado y fecha tentativa de primera versión.
5. **Siguiente paso** (5 min): fecha para presentar el prototipo.

### 3.3 Manejo de objeciones

| Objeción | Respuesta |
|---|---|
| "Es caro" | "Q2,500 al mes es menos que un asistente administrativo, e incluye hosting, soporte y mejoras. ¿Cuánto les cuesta hoy el problema que discutimos?" |
| "Prefiero pagar una vez y que sea mío" | "También cotizamos pago único. La mensualidad evita una inversión grande, e incluye mantenimiento y mejoras que en un proyecto tradicional se cobran aparte." |
| "¿Y si GDS desaparece?" | "Somos la empresa detrás de GDS ONE ERP, con oficina en Carretera a El Salvador desde 2009. Tus datos son tuyos y la transferencia del código está en el contrato." |
| "12 meses es mucho" | "El desarrollo inicial va incluido y se amortiza en ese plazo. Después sigues mes a mes." |
| "Ya tengo un programador" | "Podemos trabajar con él: nos encargamos de la infraestructura, QA y respaldos, y él se enfoca en tu negocio." |

### 3.4 Métricas semanales (KPI)

- Leads por canal (WhatsApp, formulario, llamadas).
- % de lead a diagnóstico (meta: 40 % o más).
- % de diagnóstico a propuesta (meta: 70 % o más).
- % de propuesta a cierre (meta: 30 % o más).
- MRR (ingreso mensual recurrente) y número de clientes activos.
- Churn (cancelaciones) y NPS (satisfacción) trimestral.
- CAC (costo de adquisición por cliente) por canal. Con Q2,500/mes y 12 meses de contrato, un CAC menor a Q3,000 es saludable.

**Herramienta:** un CRM (GDS CRM, HubSpot Free o Kommo con WhatsApp) con las etapas del embudo de arriba.

---

## 4. Canales de adquisición, por prioridad

1. **Clientes actuales de GDS ONE**: correo y llamada a todos. Ofrece "apps conectadas a tu ERP".
2. **Google Ads (Búsqueda)**: palabras clave de alta intención. Ver `03-redes-sociales-ads-y-contenido.md`.
3. **Referidos de contadores y consultores**: son quienes recomiendan software a las PyMEs en Guatemala.
4. **LinkedIn**: prospección directa a gerentes y dueños de PyMEs (20 contactos al día).
5. **SEO y LLMs**: la landing ya está optimizada. Crear las landings por industria y el blog.
6. **Meta Ads** (Facebook e Instagram) con formularios instantáneos o "clic a WhatsApp".
7. **Cámaras y eventos**: CCG, AGEXPORT (Comisión SOFEX), AmCham, CIG. Charlas de "Digitaliza tu PyME".
8. **Directorios B2B** (Clutch, GoodFirms, etc.). Ver `02-directorios-y-listados.md`.
