import fs from 'fs';

const html = fs.readFileSync('gjctile_home.html', 'utf-8');

function checkSnippet(id) {
  const idx = html.indexOf(id);
  if (idx !== -1) {
    console.log(`\n=== Snippet for ${id} ===`);
    console.log(html.substring(Math.max(0, idx - 200), Math.min(html.length, idx + 200)));
  }
}

checkSnippet('eccf2d_48a33eb0b97e4b07a65987a52f177a16');
checkSnippet('eccf2d_e16a619d5cdd467682fa4fa70ab16c71');
checkSnippet('eccf2d_a628aadb8d084bb6b4983479bc358df4');
