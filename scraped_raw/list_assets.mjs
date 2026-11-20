import fs from 'fs';

const data = JSON.parse(fs.readFileSync('images_classified.json', 'utf-8'));

console.log('--- ALL 63 ASSETS & CONTEXTS ---');
data.forEach((item, index) => {
  console.log(`[${index + 1}] ${item.file} (Pages: ${item.pages.join(', ')})`);
});
