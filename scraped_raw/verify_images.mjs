import fs from 'fs';
import path from 'path';

const html = fs.readFileSync('index.html', 'utf-8');
const imgRegex = /src=["']([^"']+)["']/g;
let m;
const missing = [];
const found = [];

while ((m = imgRegex.exec(html)) !== null) {
  const src = m[1];
  if (src.startsWith('http')) continue;
  const localPath = path.join(process.cwd(), src);
  if (!fs.existsSync(localPath)) {
    missing.push(src);
  } else {
    found.push({ src, size: fs.statSync(localPath).size });
  }
}

console.log(`Images found and verified: ${found.length}`);
console.log('Sample verified:', found.slice(0, 5));
if (missing.length > 0) {
  console.log('Missing images:', missing);
} else {
  console.log('ALL images referenced in index.html exist and are valid!');
}
