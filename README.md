# GDS Ecosystem - Multi-Site Monorepo

Production-ready monorepo for GDS global web ecosystem with 4 sites: **www** (corporate), **gdserp** (ERP product), **services** (services), and **resources** (content/SEO engine).

## 🏗️ Architecture

### Sites

| Site | Domain | Purpose | Port (dev) |
|------|--------|---------|------------|
| **www** | www.gdsgt.net | Corporate + Suite hub | 3000 |
| **gdserp** | gdserp.gdsgt.net | ERP product (transactional) | 3001 |
| **services** | services.gdsgt.net | Services + staff augmentation | 3002 |
| **resources** | resources.gdsgt.net | Blog, guides, glossary (SEO engine) | 3003 |

### Packages

- **@gds/ui**: Shared design system (tokens, components, layouts)
- **@gds/seo**: SEO utilities (metadata, schema, sitemap, robots)
- **@gds/content**: Content database (ES/EN)
- **@gds/analytics**: Analytics & tracking (consent, GTM, events)

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + design tokens
- **Monorepo**: Turborepo + pnpm workspaces
- **i18n**: ES/EN with hreflang
- **SEO**: Metadata, schema JSON-LD, sitemaps, robots.txt

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install pnpm if you don't have it
npm install -g pnpm@8.15.1

# Clone and install dependencies
cd gds-ecosystem
pnpm install
```

### Development

```bash
# Run all sites
pnpm dev

# Run specific site
pnpm dev:www
pnpm dev:gdserp
pnpm dev:services
pnpm dev:resources
```

Sites will be available at:
- www: http://localhost:9000
- gdserp: http://localhost:9001
- services: http://localhost:9002
- resources: http://localhost:3003

### Build

```bash
# Build all sites
pnpm build

# Build specific site
pnpm build:www
pnpm build:gdserp
pnpm build:services
pnpm build:resources
```

### Lint & Format

```bash
# Lint all packages
pnpm lint

# Fix lint issues
pnpm lint:fix

# Format code
pnpm format

# Type check
pnpm type-check
```

## 📁 Project Structure

```
gds-ecosystem/
├── apps/
│   ├── www/                    # Corporate site
│   ├── gdserp/                 # ERP product site
│   ├── services/               # Services site
│   └── resources/              # Resources/blog site
├── packages/
│   ├── ui/                     # Design system
│   ├── seo/                    # SEO utilities
│   ├── content/                # Content database
│   └── analytics/              # Analytics
├── docs/                       # Documentation
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## 🌍 i18n (Internationalization)

All sites support ES/EN with:

- **Routes**: `/es/*` and `/en/*`
- **Hreflang tags**: Automatic generation
- **x-default**: Points to `/en/`
- **Content**: Stored in `packages/content/es/` and `packages/content/en/`

### Adding a New Language

1. Add locale to `packages/content/types.ts`:
   ```typescript
   export type Lang = 'es' | 'en' | 'pt'; // Add 'pt'
   ```

2. Create content folder: `packages/content/pt/`

3. Translate content files

4. Update site configs to include new locale

## 📝 Adding Content

### Adding a New ERP Module

1. Edit `packages/content/es/erp/modules.ts`:
   ```typescript
   export const modules: Module[] = [
     // ... existing modules
     {
       slug: 'nuevo-modulo',
       name: 'Nuevo Módulo',
       description: '...',
       features: ['...'],
       benefits: ['...'],
     },
   ];
   ```

2. Repeat for `packages/content/en/erp/modules.ts`

3. Module will automatically appear in:
   - `/[lang]/erp/modules` (list)
   - `/[lang]/erp/modules/nuevo-modulo` (detail)
   - Sitemap

### Adding a New Integration

1. Edit `packages/content/es/erp/integrations.ts`:
   ```typescript
   export const integrations: Integration[] = [
     // ... existing integrations
     {
       slug: 'nueva-integracion',
       name: 'Nueva Integración',
       description: '...',
       category: 'bi', // or 'crm', 'data', 'messaging', 'payments', 'api'
       entities: ['...'],
       flow: ['...'],
       security: ['...'],
       faqs: [{ question: '...', answer: '...' }],
     },
   ];
   ```

2. Repeat for English

3. Integration will automatically appear in:
   - `/[lang]/integrations` (list)
   - `/[lang]/integrations/nueva-integracion` (detail)
   - Sitemap

### Adding a Blog Post

1. Edit `packages/content/es/resources/blog.ts`:
   ```typescript
   export const blogPosts: BlogPost[] = [
     // ... existing posts
     {
       slug: 'nuevo-post',
       title: 'Título del Post',
       description: 'Descripción breve',
       author: 'Nombre Autor',
       publishedAt: '2024-01-15',
       readTime: '5 min',
       category: 'ERP',
       tags: ['tag1', 'tag2'],
       content: 'Contenido completo en markdown...',
     },
   ];
   ```

2. Repeat for English

3. Post will automatically appear in:
   - `/[lang]/blog` (list)
   - `/[lang]/blog/nuevo-post` (detail)
   - Sitemap

### Adding a Glossary Term

1. Edit `packages/content/es/resources/glossary.ts`:
   ```typescript
   export const glossaryTerms: GlossaryTerm[] = [
     // ... existing terms
     {
       slug: 'nuevo-termino',
       term: 'Nuevo Término',
       definition: 'Definición del término...',
       relatedTerms: ['termino1', 'termino2'],
     },
   ];
   ```

2. Repeat for English

3. Term will automatically appear in:
   - `/[lang]/glossary` (list)
   - `/[lang]/glossary/nuevo-termino` (detail)
   - Sitemap

## 🎨 Design System

### Using Components

```tsx
import { Button, Card, Badge } from '@gds/ui';

export default function MyPage() {
  return (
    <Card variant="hover" padding="lg">
      <Badge variant="success">New</Badge>
      <h2>Title</h2>
      <Button variant="primary" size="lg">
        Click me
      </Button>
    </Card>
  );
}
```

### Using Layouts

```tsx
import { HeroSection, FeatureGrid, CTASection } from '@gds/ui';

export default function MyPage() {
  return (
    <>
      <HeroSection
        title="My Title"
        description="My description"
        cta={<Button>Get Started</Button>}
      />
      <FeatureGrid
        features={[...]}
        columns={3}
      />
      <CTASection
        variant="primary"
        title="Ready?"
        cta={<Button>Contact</Button>}
      />
    </>
  );
}
```

### Customizing Tokens

Edit `packages/ui/tokens.ts` to customize colors, typography, spacing, etc.

## 🔍 SEO

### Metadata

```tsx
import { generateMetadata } from '@gds/seo';

export async function generateMetadata({ params }) {
  return generateMetadata(
    {
      title: 'Page Title',
      description: 'Page description',
      keywords: ['keyword1', 'keyword2'],
    },
    siteConfig,
    params.lang,
    '/path'
  );
}
```

### Schema JSON-LD

```tsx
import { generateArticleSchema, generateFAQSchema } from '@gds/seo';

export default function MyPage() {
  const articleSchema = generateArticleSchema({
    headline: 'Article Title',
    description: 'Article description',
    url: 'https://...',
    datePublished: '2024-01-01',
    author: { name: 'Author Name' },
    publisher: { name: 'GDS', logo: 'https://...' },
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Page content */}
    </>
  );
}
```

### Quality Gates

Content pages are automatically checked for quality:

- Minimum 300 words
- Title and description present
- H1 heading present

If checks fail, page is marked `noindex`.

## 📊 Analytics

### Tracking Events

```tsx
'use client';

import { track } from '@gds/analytics';

export default function MyButton() {
  const handleClick = () => {
    track('click_demo', {
      source: 'homepage',
      module: 'hero',
    });
  };

  return <button onClick={handleClick}>Request Demo</button>;
}
```

### Available Events

- `click_demo`
- `view_pricing`
- `submit_lead`
- `book_demo`
- `download_resource`
- `click_integration`
- `view_security`
- `view_module`
- `view_industry`
- `compare_product`
- `view_case_study`
- `newsletter_signup`
- `contact_form_submit`

### Consent Management

Consent banner is automatically shown. Users must accept before tracking.

## 🚢 Deployment

### Vercel (Recommended)

1. Connect repo to Vercel
2. Configure 4 projects (one per site)
3. Set environment variables (if needed)
4. Deploy

### Custom Server

```bash
# Build all sites
pnpm build

# Start production servers
cd apps/www && pnpm start &
cd apps/gdserp && pnpm start &
cd apps/services && pnpm start &
cd apps/resources && pnpm start &
```

### Environment Variables

Create `.env.local` in each app:

```env
# GTM
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# API (if needed)
NEXT_PUBLIC_API_URL=https://api.gdsgt.net
```

## 📋 Documentation

### Essential Docs (Root):
- **README.md**: This file - main project documentation
- **ARCHITECTURE.md**: Technical architecture and design decisions
- **DEPLOYMENT_GUIDE.md**: Production deployment guide
- **PROYECTO_STATUS.md**: Current project status (100% complete)
- **NOMBRES_REALES_ACTUALIZADOS.md**: Real client names reference

### Checklists (`docs/`):
- **SEO_CHECKLIST.md**: SEO validation before launch
- **PERFORMANCE_CHECKLIST.md**: Performance optimization
- **A11Y_CHECKLIST.md**: Accessibility compliance (WCAG)
- **RELEASE_CHECKLIST.md**: Pre-release validation
- **SECURITY_CHECKLIST.md**: Security best practices

### Strategy & Content (`docs/`):
- **BLOG_POSTS_SEO_STRATEGY.md**: Content marketing strategy
- **MONOREPO_ARCHITECTURE.md**: Monorepo architecture details
- **MONOREPO_ACTION_PLAN.md**: Monorepo implementation plan
- **GDS_ONE_VIDEO_SCRIPT.md**: Promotional video script
- **GDS_ONE_REDES_SOCIALES.md**: Social media content
- **GDS_ONE_MODULOS.md**: ERP modules list

## 🧪 Validation

### Check Build

```bash
pnpm build
# Should complete without errors
```

### Check Types

```bash
pnpm type-check
# Should complete without errors
```

### Check Lint

```bash
pnpm lint
# Should complete without errors
```

### Check Sitemaps

```bash
# Start dev server
pnpm dev:gdserp

# Visit in browser
open http://localhost:9001/sitemap.xml
open http://localhost:9001/robots.txt
```

Expected: Valid XML sitemap with all routes in ES/EN.

### Check i18n

```bash
# Visit both languages
open http://localhost:9001/es
open http://localhost:9001/en
```

Expected: Content in correct language, hreflang tags present.

### Check Schema

```bash
# Visit any page
open http://localhost:9001/es

# View source, search for "application/ld+json"
```

Expected: Valid JSON-LD schema present.

## 🐛 Troubleshooting

### Build Fails

```bash
# Clean and reinstall
pnpm clean
rm -rf node_modules
pnpm install
pnpm build
```

### Type Errors

```bash
# Check types in specific package
cd packages/ui
pnpm type-check
```

### Port Already in Use

```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Or change port in package.json
"dev": "next dev -p 3005"
```

## 📚 Quick Links

- [Project Status](PROYECTO_STATUS.md) - Current status (100% complete)
- [Architecture](ARCHITECTURE.md) - Technical architecture
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Production deployment
- [Real Clients](NOMBRES_REALES_ACTUALIZADOS.md) - Client reference
- [Documentation Cleanup](LIMPIEZA_DOCUMENTACION.md) - Recent cleanup (83 files removed)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/my-feature`
2. Make changes
3. Run checks: `pnpm lint && pnpm type-check && pnpm build`
4. Commit: `git commit -m "feat: my feature"`
5. Push: `git push origin feature/my-feature`
6. Create PR

## 📄 License

Proprietary - GDS Guatemala

## 🆘 Support

- Email: soporte@gdsgt.net
- Docs: https://docs.gdsgt.net
- Issues: Create issue in repo

---

**Built with ❤️ by GDS Team**
