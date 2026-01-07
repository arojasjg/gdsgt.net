import { MetadataRoute } from 'next';
import { getAllBlogPosts, getAllCaseStudies } from '@gds/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gdsgt.net';
  const currentDate = new Date().toISOString();

  const blogPosts = getAllBlogPosts();
  const caseStudies = getAllCaseStudies();

  return [
    // Homepage
    {
      url: `${baseUrl}/es`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          es: `${baseUrl}/es`,
          en: `${baseUrl}/en`,
        },
      },
    },

    // Blog
    {
      url: `${baseUrl}/es/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Case Studies
    {
      url: `${baseUrl}/es/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Blog posts
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/es/blog/${post.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Case studies
    ...caseStudies.map((cs) => ({
      url: `${baseUrl}/es/case-studies/${cs.slug}`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
