import fs from 'fs';

const data = JSON.parse(fs.readFileSync('extracted_summary.json', 'utf-8'));

for (const [page, texts] of Object.entries(data.pagesText)) {
  console.log(`\n=================== PAGE: ${page} (Total strings: ${texts.length}) ===================`);
  // Filter out noise
  const meaningful = texts.filter(t => {
    if (t.length < 8) return false;
    if (t.startsWith('http')) return false;
    if (t.includes('wix') || t.includes('cookie') || t.includes('privacy') || t.includes('javascript')) return false;
    return true;
  });
  console.log(meaningful.join('\n• '));
}
