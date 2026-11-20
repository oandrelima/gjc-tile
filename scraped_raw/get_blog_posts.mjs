import fs from 'fs';

const html = fs.readFileSync('gjctile_blog.html', 'utf-8');

// Find all article titles, descriptions, and URLs
const blogMatches = html.matchAll(/<h[2-4][^>]*>([^<]+)<\/h[2-4]>[\s\S]*?<p[^>]*>([^<]+)<\/p>/gi);
const posts = [];
for (const m of blogMatches) {
  if (m[1].length > 10 && !m[1].includes('{')) {
    posts.push({ title: m[1].trim(), excerpt: m[2].trim() });
  }
}

console.log(`Found ${posts.length} blog posts:`);
console.log(posts.slice(0, 10));
