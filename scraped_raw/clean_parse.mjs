import fs from 'fs';

function cleanHtmlToText(html) {
  // Remove script and style tags completely
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
  clean = clean.replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, ' ');
  clean = clean.replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, ' ');

  // Extract all text inside elements
  const lines = [];
  const tagRegex = /<[^>]+>/g;
  const rawText = clean.replace(tagRegex, '\n');
  
  for (let l of rawText.split('\n')) {
    l = l.replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
    if (l.length > 2 && !lines.includes(l)) {
      lines.push(l);
    }
  }
  return lines;
}

const files = ['gjctile_home.html', 'gjctile_about.html', 'gjctile_services.html', 'gjctile_gallery.html', 'gjctile_contact.html', 'gjctile_blog.html'];

const structured = {};
for (const f of files) {
  const page = f.replace('gjctile_', '').replace('.html', '');
  const html = fs.readFileSync(f, 'utf-8');
  structured[page] = cleanHtmlToText(html);
}

fs.writeFileSync('clean_extracted_texts.json', JSON.stringify(structured, null, 2));
console.log('Clean extracted texts saved!');
for (const [p, lines] of Object.entries(structured)) {
  console.log(`\n================ ${p.toUpperCase()} (${lines.length} lines) ================`);
  console.log(lines.slice(0, 30).join('\n'));
}
