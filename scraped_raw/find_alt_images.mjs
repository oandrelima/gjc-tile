import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

// Search for img tags or logo references
const imgMatches = html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi);
console.log('Images with ALT tags in home:');
for (const m of imgMatches) {
  console.log(`ALT: "${m[2]}" -> SRC: ${m[1].slice(0, 100)}`);
}

// Check other pages
const aboutHtml = fs.readFileSync('gjctile_about.html', 'utf-8');
const aboutMatches = aboutHtml.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*alt=["']([^"']*)["']/gi);
console.log('\nImages with ALT tags in about:');
for (const m of aboutMatches) {
  console.log(`ALT: "${m[2]}" -> SRC: ${m[1].slice(0, 100)}`);
}
