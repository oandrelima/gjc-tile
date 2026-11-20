import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

const idx = html.indexOf('eccf2d_bd1d41cab5e94c3284b98624a15c16d3');
if (idx !== -1) {
  console.log(html.substring(Math.max(0, idx - 400), Math.min(html.length, idx + 600)));
}
