import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');
const ldRegex = /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
let m;
while ((m = ldRegex.exec(html)) !== null) {
  if (m[1].includes('eccf2d_bd1d41cab5e94c3284b98624a15c16d3')) {
    console.log(m[1]);
  }
}
