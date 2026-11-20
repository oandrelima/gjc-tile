import fs from 'fs';

const files = ['gjctile_home.html', 'gjctile_about.html', 'gjctile_services.html', 'gjctile_gallery.html', 'gjctile_contact.html', 'gjctile_blog.html'];

const imgOccurrences = {};

for (const f of files) {
  const html = fs.readFileSync(f, 'utf-8');
  const imgNames = html.match(/eccf2d_[a-zA-Z0-9_~-]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  for (const img of imgNames) {
    const clean = img.split('?')[0].split('/')[0];
    if (!imgOccurrences[clean]) {
      imgOccurrences[clean] = { pages: new Set(), contexts: [] };
    }
    imgOccurrences[clean].pages.add(f.replace('gjctile_', '').replace('.html', ''));
    
    // Find nearby text (50 chars before and after)
    const idx = html.indexOf(img);
    if (idx !== -1 && imgOccurrences[clean].contexts.length < 3) {
      const start = Math.max(0, idx - 150);
      const end = Math.min(html.length, idx + img.length + 150);
      const snippet = html.substring(start, end).replace(/\s+/g, ' ');
      imgOccurrences[clean].contexts.push(snippet);
    }
  }
}

const categorized = [];
for (const [img, data] of Object.entries(imgOccurrences)) {
  categorized.push({
    file: img,
    pages: Array.from(data.pages),
    contextSample: data.contexts[0] || ''
  });
}

fs.writeFileSync('images_classified.json', JSON.stringify(categorized, null, 2));
console.log('Classified images saved!');
