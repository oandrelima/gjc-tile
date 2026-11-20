import https from 'https';
import http from 'http';
import fs from 'fs';

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const u = new URL(url);
          redirectUrl = new URL(redirectUrl, u.origin).href;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

const pages = [
  { name: 'about', url: 'https://www.gjctile.com/about-us' },
  { name: 'services', url: 'https://www.gjctile.com/services' },
  { name: 'gallery', url: 'https://www.gjctile.com/gallery' },
  { name: 'contact', url: 'https://www.gjctile.com/contact' },
  { name: 'blog', url: 'https://www.gjctile.com/blog' }
];

async function main() {
  for (const page of pages) {
    console.log(`Fetching ${page.name}...`);
    try {
      const res = await fetchUrl(page.url);
      console.log(`Fetched ${page.name} (${res.status}, ${res.data.length} bytes)`);
      fs.writeFileSync(`gjctile_${page.name}.html`, res.data);
    } catch (e) {
      console.error(`Error ${page.name}:`, e.message);
    }
  }
}

main();
