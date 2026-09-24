/**
 * Blog Post Detail Page
 * 
 * Full article with structured content, related posts, and CTAs
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { HeroSection, CTASection } from '@gds/ui/layouts';
import { Card, Badge } from '@gds/ui';
import { generateMetadata as generateSEOMetadata, generateArticleSchema, generateFAQSchema } from '@gds/seo';
import { getBlogPostBySlug, getAllBlogPosts, getRelatedBlogPosts } from '@gds/content';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  const langs = ['es', 'en'];
  
  return langs.flatMap(lang =>
    posts.map(post => ({
      lang,
      slug: post.slug
    }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return {};
  }
  
  return generateSEOMetadata(
    {
      // Content is Spanish-only: keep the /en copy out of the index
      noindex: lang === 'en',
      title: post.title,
      description: post.meta_description,
      keywords: post.keywords
    },
    {
      name: 'GDS ONE',
      domain: 'www.gdsgt.net',
      description: 'Enterprise Resource Planning',
      locales: ['es', 'en'],
      defaultLocale: 'es'
    },
    lang as 'es' | 'en',
    `/blog/${slug}`
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  const relatedPosts = getRelatedBlogPosts(slug, 3);
  const isSpanish = lang === 'es';

  // Schema.org Article structured data
  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.meta_description,
    image: `https://www.gdsgt.net${post.hero_image ?? '/images/blog/blog-default.svg'}`,
    datePublished: post.published_date,
    dateModified: post.updated_date || post.published_date,
    author: {
      name: post.author.name,
      url: 'https://www.gdsgt.net',
    },
    publisher: {
      name: 'GDS ONE',
      logo: 'https://www.gdsgt.net/logo.png',
    },
  });
  
  const content = {
    es: {
      by: 'Por',
      published: 'Publicado',
      updated: 'Actualizado',
      reading_time: 'Tiempo de lectura',
      tags: 'Etiquetas',
      related_posts: 'Artículos Relacionados',
      read_more: 'Leer más',
      share: 'Compartir',
      categories: {
        guias: 'Guías',
        tendencias: 'Tendencias',
        'casos-uso': 'Casos de Uso',
        comparativas: 'Comparativas',
        'mejores-practicas': 'Mejores Prácticas'
      }
    },
    en: {
      by: 'By',
      published: 'Published',
      updated: 'Updated',
      reading_time: 'Reading time',
      tags: 'Tags',
      related_posts: 'Related Articles',
      read_more: 'Read more',
      share: 'Share',
      categories: {
        guias: 'Guides',
        tendencias: 'Trends',
        'casos-uso': 'Use Cases',
        comparativas: 'Comparisons',
        'mejores-practicas': 'Best Practices'
      }
    }
  };
  
  const t = isSpanish ? content.es : content.en;
  
  return (
    <div className="min-h-screen">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleSchema }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Badge variant="primary" className="bg-white text-blue-600 mb-4">
            {t.categories[post.category]}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-blue-100 mb-8">{post.excerpt}</p>
          
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
            <div className="flex items-center">
              <span className="mr-2">👤</span>
              <div>
                <div className="font-semibold text-white">{post.author.name}</div>
                <div className="text-xs">{post.author.position}</div>
              </div>
            </div>
            <div>
              <span className="mr-2">📅</span>
              {t.published}: {post.published_date}
            </div>
            {post.updated_date && (
              <div>
                <span className="mr-2">🔄</span>
                {t.updated}: {post.updated_date}
              </div>
            )}
            <div>
              <span className="mr-2">⏱️</span>
              {post.reading_time}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
            <Image
              src={post.hero_image ?? '/images/blog/blog-default.svg'}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">{post.content.introduction}</p>
          </div>
          
          {/* Sections */}
          <div className="space-y-12">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">{section.title}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed whitespace-pre-line">{section.content}</p>
                
                {/* Subsections */}
                {section.subsections && section.subsections.length > 0 && (
                  <div className="space-y-6 ml-4 border-l-4 border-blue-200 pl-6">
                    {section.subsections.map((subsection, subIdx) => (
                      <div key={subIdx}>
                        <h3 className="text-2xl font-bold mb-4 text-gray-800">{subsection.subtitle}</h3>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{subsection.content}</div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
          
          {/* Conclusion */}
          <div className="mt-12 p-8 bg-blue-50 rounded-lg border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Conclusión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{post.content.conclusion}</p>
          </div>
          
          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: generateFAQSchema({ questions: post.faq }) }}
              />
              <h2 className="text-3xl font-bold mb-6 text-gray-900">{isSpanish ? 'Preguntas frecuentes' : 'FAQ'}</h2>
              <div className="space-y-6">
                {post.faq.map((f, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{f.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t">
              <div className="text-sm text-gray-500 mb-3">{t.tags}</div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, idx) => (
                  <Badge key={idx} variant="info">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8">{t.related_posts}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/${lang}/blog/${relatedPost.slug}`}>
                  <Card variant="hover" className="h-full cursor-pointer">
                    <Badge variant="primary" className="mb-3">
                      {t.categories[relatedPost.category]}
                    </Badge>
                    <h3 className="text-lg font-bold mb-2">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <div className="text-sm text-blue-600 font-semibold">
                      {t.read_more} →
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA */}
      <CTASection
        title={post.cta.title}
        description={post.cta.description}
        cta={
          <Link href={post.cta.href ?? `https://erp.grupogds.co/${lang}/demo`}>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              {post.cta.button}
            </button>
          </Link>
        }
      />
    </div>
  );
}
