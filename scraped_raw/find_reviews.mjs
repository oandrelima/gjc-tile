import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

// Search for any reviewer names or review text
const words = ['Geraldo', 'bathroom', 'shower', 'recommend', 'flawless', 'clean', 'professional', 'stars', 'Google'];
for (const w of words) {
  const matches = [...html.matchAll(new RegExp(`[^.?!<>\n\r]{10,80}${w}[^.?!<>\n\r]{10,80}`, 'gi'))];
  if (matches.length > 0) {
    console.log(`\nMatches for "${w}":`, matches.slice(0, 3).map(m => m[0].trim()));
  }
}
