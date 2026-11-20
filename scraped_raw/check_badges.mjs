import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

// Find badges
const badgeIds = [
  'eccf2d_bd1d41cab5e94c3284b98624a15c16d3',
  'eccf2d_c116817e19044ba78f4cd5208d3c7627',
  'eccf2d_6be931d54915475d98ae9e623a1ffeb1',
  'eccf2d_106f5fbb5b904b848e0d4d8f4081adc9',
  'eccf2d_f21f6a8520f542f99bd89c856d185ffb',
  'eccf2d_5a9317522dc24d2288954d394a9394a1',
  'eccf2d_aef572cf76da4eaa95e5c066c5bff6c6',
  'eccf2d_2cee8e7625084d27ad3fe3d847d4c03e'
];

for (const id of badgeIds) {
  const idx = html.indexOf(id);
  if (idx !== -1) {
    const textAround = html.substring(Math.max(0, idx - 150), Math.min(html.length, idx + 250));
    const nameMatch = textAround.match(/&quot;name&quot;:&quot;([^&]*)&quot;/);
    console.log(id, '->', nameMatch ? nameMatch[1] : 'No name');
  }
}
