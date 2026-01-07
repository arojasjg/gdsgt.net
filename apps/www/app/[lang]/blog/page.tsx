/**
 * Blog Index Page
 * 
 * SEO-focused articles for topical authority
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { Card, Badge } from '@gds/ui';
import { generateMetadata as generateSEOMetadata } from '@gds/seo';
import { getAllBlogPosts } from '@gds/content';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isSpanish = lang === 'es';
  
  return generateSEOMetadata(
    {
      title: isSpanish ? 'Blog ERP' : 'ERP Blog',
      description: isSpanish 
        ? 'Guías, tendencias, y mejores prácticas sobre ERP. Aprende cómo elegir, implementar, y optimizar tu sistema ERP.'
        : 'Guides, trends, and best practices about ERP. Learn how to choose, implement, and optimize your ERP system.',
      keywords: isSpanish
        ? ['blog ERP', 'guías ERP', 'tendencias ERP', 'implementación ERP', 'mejores prácticas ERP']
        : ['ERP blog', 'ERP guides', 'ERP trends', 'ERP implementation', 'ERP best practices']
    },
    {
      name: 'GDS ONE',
      domain: 'www.gds.com',
      description: 'Enterprise Resource Planning',
      locales: ['es', 'en'],
      defaultLocale: 'es'
    },
    lang as 'es' | 'en',
    '/blog'
  );
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isSpanish = lang === 'es';
  const posts = getAllBlogPosts();
  
  const content = {
    es: {
      hero: {
        title: 'Blog ERP',
        description: 'Guías, tendencias, y mejores prácticas para elegir, implementar, y optimizar tu ERP.'
      },
      categories: {
        all: 'Todos',
        guias: 'Guías',
        tendencias: 'Tendencias',
        'casos-uso': 'Casos de Uso',
        comparativas: 'Comparativas',
        'mejores-practicas': 'Mejores Prácticas'
      },
      read_more: 'Leer Artículo',
      cta: {
        title: '¿Necesitas ayuda con tu ERP?',
        description: 'Nuestro equipo de expertos puede ayudarte a elegir, implementar, y optimizar tu sistema ERP.',
        button: 'Hablar con un Experto'
      }
    },
    en: {
      hero: {
        title: 'ERP Blog',
        description: 'Guides, trends, and best practices for choosing, implementing, and optimizing your ERP.'
      },
      categories: {
        all: 'All',
        guias: 'Guides',
        tendencias: 'Trends',
        'casos-uso': 'Use Cases',
        comparativas: 'Comparisons',
        'mejores-practicas': 'Best Practices'
      },
      read_more: 'Read Article',
      cta: {
        title: 'Need help with your ERP?',
        description: 'Our team of experts can help you choose, implement, and optimize your ERP system.',
        button: 'Talk to an Expert'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  // Group posts by category
  const categories = ['guias', 'tendencias', 'casos-uso', 'comparativas', 'mejores-practicas'] as const;
  
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title={t.hero.title}
        description={t.hero.description}
      />
      
      {/* Featured Post */}
      {posts.length > 0 && (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <Link href={`/${lang}/blog/${posts[0].slug}`}>
              <Card variant="hover" className="cursor-pointer bg-white text-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Badge variant="primary" className="mb-4">
                      {t.categories[posts[0].category]}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                    <p className="text-lg text-gray-600 mb-4">{posts[0].excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>👤 {posts[0].author.name}</span>
                      <span>📅 {posts[0].published_date}</span>
                      <span>⏱️ {posts[0].reading_time}</span>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden aspect-video">
                    <Image
                      src={posts[0].hero_image ?? '/images/blog/blog-default.svg'}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      )}
      
      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.categories.all}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`}>
                <Card variant="hover" className="h-full cursor-pointer flex flex-col">
                  <div className="relative rounded-lg overflow-hidden aspect-video mb-4">
                    <Image
                      src={post.hero_image ?? '/images/blog/blog-default.svg'}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex-grow">
                    <Badge variant="primary" className="mb-3">
                      {t.categories[post.category]}
                    </Badge>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                  
                  <div className="border-t pt-4 mt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author.name}</span>
                      <span>{post.reading_time}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <CTASection
        title={t.cta.title}
        description={t.cta.description}
        cta={
          <Link href={`/${lang}/contact`}>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {t.cta.button}
            </button>
          </Link>
        }
      />
    </div>
  );
}
