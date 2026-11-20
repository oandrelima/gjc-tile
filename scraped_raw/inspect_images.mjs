import fs from 'fs';
import path from 'path';

const imgDir = path.join(process.cwd(), 'public', 'images');
const files = fs.readdirSync(imgDir);

const fileStats = files.map(file => {
  const stat = fs.statSync(path.join(imgDir, file));
  return {
    file,
    sizeKB: Math.round(stat.size / 1024),
    ext: path.extname(file).toLowerCase()
  };
}).sort((a, b) => b.sizeKB - a.sizeKB);

console.log(`Total images: ${fileStats.length}`);
console.log('Top 25 largest files:');
console.log(fileStats.slice(0, 25));

console.log('\nPNG files (often logos/graphics):');
console.log(fileStats.filter(f => f.ext === '.png'));
