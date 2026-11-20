import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

// Find reviews / testimonials
const reviewIdx = html.indexOf('WHAT OUR CLIENTS SAY');
if (reviewIdx !== -1) {
  console.log('--- REVIEWS SECTION ---');
  console.log(html.substring(reviewIdx, reviewIdx + 4000).replace(/<[^>]+>/g, '\n').replace(/\n\s*\n/g, '\n'));
}
