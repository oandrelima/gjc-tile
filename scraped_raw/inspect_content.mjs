import fs from 'fs';

const files = ['gjctile_home.html', 'gjctile_about.html', 'gjctile_services.html', 'gjctile_gallery.html', 'gjctile_contact.html', 'gjctile_blog.html'];

for (const f of files) {
  if (!fs.existsSync(f)) continue;
  console.log(`\n=================== FILE: ${f} ===================`);
  const html = fs.readFileSync(f, 'utf-8');

  // JSON-LD
  const ldMatches = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi);
  if (ldMatches) {
    console.log(`--- JSON-LD in ${f} ---`);
    for (const m of ldMatches) {
      const jsonStr = m.replace(/<script[^>]*>|<\/script>/gi, '').trim();
      try {
        const parsed = JSON.parse(jsonStr);
        console.log(JSON.stringify(parsed, null, 2).slice(0, 500));
      } catch (e) {
        console.log(jsonStr.slice(0, 300));
      }
    }
  }

  // Extract clean text paragraphs
  const cleanTexts = [];
  const textMatches = html.match(/<(?:h[1-6]|p|li|span|a)[^>]*>([^<]+)<\/(?:h[1-6]|p|li|span|a)>/gi);
  if (textMatches) {
    for (const tm of textMatches) {
      const text = tm.replace(/<[^>]+>/g, '').trim();
      if (text.length > 15 && !text.includes('{') && !text.includes('function') && !text.includes('var ') && !cleanTexts.includes(text)) {
        cleanTexts.push(text);
      }
    }
  }
  console.log(`--- Sample Clean Texts (${cleanTexts.length} total) ---`);
  console.log(cleanTexts.slice(0, 15).join('\n---\n'));
}
