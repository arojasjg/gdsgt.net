/**
 * Submit every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver;
 * Bing's index powers ChatGPT Search and Copilot).
 *
 * Run after each deploy:  node scripts/indexnow.mjs
 */

const SITE = 'https://www.gdsgt.net';
const KEY = 'bcccc044f7723eb870871df58486b57a'; // must match public/<KEY>.txt

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urls.length === 0) {
  console.error('No URLs found in sitemap');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URLs -> HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exit(1);
