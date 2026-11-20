import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

const regex = /data-image-info="([^"]+)"/g;
let match;
const found = [];
while ((match = regex.exec(html)) !== null) {
  try {
    const jsonStr = match[1].replace(/&quot;/g, '"');
    const parsed = JSON.parse(jsonStr);
    found.push({
      uri: parsed.imageData?.uri,
      name: parsed.imageData?.name,
      width: parsed.imageData?.width,
      height: parsed.imageData?.height,
      alt: parsed.imageData?.alt
    });
  } catch (e) {}
}

console.log(`Found ${found.length} image info objects in Home:`);
console.log(found.slice(0, 30));

// Also check Gallery page
const gallHtml = fs.readFileSync('gjctile_gallery.html', 'utf-8');
const gallMatches = gallHtml.matchAll(/data-image-info="([^"]+)"/g);
const gallFound = [];
for (const m of gallMatches) {
  try {
    const jsonStr = m[1].replace(/&quot;/g, '"');
    const parsed = JSON.parse(jsonStr);
    gallFound.push({
      uri: parsed.imageData?.uri,
      name: parsed.imageData?.name,
      width: parsed.imageData?.width,
      height: parsed.imageData?.height,
      alt: parsed.imageData?.alt
    });
  } catch (e) {}
}
console.log(`\nFound ${gallFound.length} image info objects in Gallery:`);
console.log(gallFound);
