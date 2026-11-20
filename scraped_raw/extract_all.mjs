import fs from 'fs';

const files = ['gjctile_home.html', 'gjctile_about.html', 'gjctile_services.html', 'gjctile_gallery.html', 'gjctile_contact.html', 'gjctile_blog.html'];

const allData = {
  business: {
    name: "GJC Tile Inc.",
    phone: "(352) 942-4834",
    phoneRaw: "3529424834",
    email: "gjctileincfl@gmail.com",
    address: "211 10620 Parkers landing dr, Tampa, FL 33615",
    location: "Tampa Bay, Florida & surrounding areas",
    serviceHours: "Mon - Sat: 8:00 AM - 6:00 PM (or typical business hours)",
  },
  images: new Set(),
  pages: {}
};

for (const file of files) {
  const html = fs.readFileSync(file, 'utf-8');
  const pageName = file.replace('gjctile_', '').replace('.html', '');
  
  // Extract all static.wixstatic.com media IDs
  // Patterns like eccf2d_[a-f0-9]{32}~mv2.(jpg|png|jpeg|webp)
  const mediaMatches = html.match(/eccf2d_[a-zA-Z0-9_~-]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  mediaMatches.forEach(m => allData.images.add(m));

  // Extract other wix images
  const otherImages = html.match(/https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_~-]+\.(?:jpg|jpeg|png|webp)/gi) || [];
  otherImages.forEach(img => {
    const filename = img.split('/').pop();
    allData.images.add(filename);
  });

  // Extract all text inside tags
  const texts = [];
  const textRegex = />([^<]{4,})</g;
  let match;
  while ((match = textRegex.exec(html)) !== null) {
    const t = match[1].trim();
    if (t && !t.startsWith('{') && !t.includes('function') && !t.includes('var ') && !t.includes('window.') && !t.includes('@context')) {
      if (!texts.includes(t)) {
        texts.push(t);
      }
    }
  }
  allData.pages[pageName] = texts;
}

console.log('Total unique images found:', allData.images.size);
fs.writeFileSync('extracted_summary.json', JSON.stringify({
  business: allData.business,
  imageCount: allData.images.size,
  images: Array.from(allData.images),
  pagesText: allData.pages
}, null, 2));

console.log('Saved extracted_summary.json');
