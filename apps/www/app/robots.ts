/**
 * Robots.txt Configuration for www.gdsgt.net
 *
 * Controls search engine crawling. AI search/answer crawlers are allowed
 * explicitly so GDS can be cited by ChatGPT, Perplexity, Claude, Gemini, etc.
 * `/_next/` must stay crawlable: Google needs the JS/CSS to render pages.
 */

import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const PRIVATE_PATHS = ['/api/', '/admin/', '/private/'];

const AI_CRAWLERS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google (Gemini / AI Overviews) and Apple Intelligence
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  // Microsoft Copilot uses Bingbot; others
  'bingbot',
  'meta-externalagent',
  'CCBot',
  'DuckAssistBot',
  'MistralAI-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: PRIVATE_PATHS,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: PRIVATE_PATHS,
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
