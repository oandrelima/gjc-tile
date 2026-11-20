import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

// Find title, meta description
const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
console.log('TITLE:', titleMatch ? titleMatch[1] : 'None');

const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
console.log('DESCRIPTION:', descMatch ? descMatch[1] : 'None');

// Check what platform it's built on (Wix, WordPress, Squarespace, etc.)
if (html.includes('wix.com') || html.includes('static.wixstatic.com')) {
  console.log('Platform: WIX');
} else if (html.includes('wp-content')) {
  console.log('Platform: WordPress');
} else if (html.includes('squarespace')) {
  console.log('Platform: Squarespace');
}

// Find links
const links = new Set();
const linkRegex = /href=["']([^"']+)["']/g;
let match;
while ((match = linkRegex.exec(html)) !== null) {
  const href = match[1];
  if (!href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('#') && !href.startsWith('javascript:')) {
    links.add(href);
  }
}

console.log('\nInternal / relevant links:');
for (const link of links) {
  if (link.includes('gjctile.com') || link.startsWith('/')) {
    console.log(' - ', link);
  }
}

// Find images
const images = new Set();
const imgRegex = /(?:src|data-src|href)=["']([^"']+\.(?:jpg|jpeg|png|webp|svg|gif)[^"']*)["']/gi;
while ((match = imgRegex.exec(html)) !== null) {
  images.add(match[1]);
}

// Wix images often have static.wixstatic.com/media/...
const wixImgRegex = /https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_~-]+(?:\.(?:jpg|jpeg|png|webp|svg|gif)|(?=[/~"]))/g;
while ((match = wixImgRegex.exec(html)) !== null) {
  images.add(match[0]);
}

console.log(`\nFound ${images.size} unique image candidates`);
console.log('Sample images:');
console.log(Array.from(images).slice(0, 20));

// Also let's inspect text content or structured data
const phoneRegex = /(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/g;
const phones = new Set(html.match(phoneRegex) || []);
console.log('\nPhones found:', Array.from(phones));

const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
const emails = new Set(html.match(emailRegex) || []);
console.log('Emails found:', Array.from(emails));
