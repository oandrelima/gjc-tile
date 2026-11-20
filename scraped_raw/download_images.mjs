import https from 'https';
import fs from 'fs';
import path from 'path';

const summary = JSON.parse(fs.readFileSync('extracted_summary.json', 'utf-8'));
const images = summary.images;

const outputDir = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(outputDir, { recursive: true });

function downloadImage(imgName) {
  return new Promise((resolve) => {
    // If imgName already has a clean extension
    const cleanName = imgName.split('?')[0].split('/')[0];
    const dest = path.join(outputDir, cleanName);
    
    // Check if already downloaded
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      return resolve({ name: cleanName, status: 'already_exists', size: fs.statSync(dest).size });
    }

    const url = `https://static.wixstatic.com/media/${cleanName}`;
    const file = fs.createWriteStream(dest);
    
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    }, (res) => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size;
            resolve({ name: cleanName, status: 'downloaded', size });
          });
        });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve({ name: cleanName, status: 'failed', code: res.statusCode });
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve({ name: cleanName, status: 'error', error: err.message });
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images...`);
  const results = [];
  // Run in chunks of 5
  for (let i = 0; i < images.length; i += 5) {
    const chunk = images.slice(i, i + 5);
    const chunkResults = await Promise.all(chunk.map(downloadImage));
    results.push(...chunkResults);
    console.log(`Progress: ${Math.min(i + 5, images.length)}/${images.length}`);
  }

  const downloaded = results.filter(r => r.status === 'downloaded' || r.status === 'already_exists');
  console.log(`Successfully acquired ${downloaded.length} of ${images.length} images!`);
  
  // Save manifest
  fs.writeFileSync('images_manifest.json', JSON.stringify(downloaded, null, 2));
}

run();
