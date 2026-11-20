import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');
const reviewIdx = html.indexOf('WHAT OUR CLIENTS SAY');
const snippet = html.substring(reviewIdx, reviewIdx + 6000);

const imgMatches = snippet.matchAll(/eccf2d_[a-zA-Z0-9_~-]+\.(?:jpg|jpeg|png|webp)/gi);
for (const m of imgMatches) {
  console.log('Review image:', m[0]);
}

const textMatches = snippet.matchAll(/>([^<]{10,})</g);
for (const tm of textMatches) {
  console.log('Text in review section:', tm[1].trim());
}
