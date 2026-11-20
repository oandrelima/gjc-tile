import fs from 'fs';
const data = JSON.parse(fs.readFileSync('clean_extracted_texts.json', 'utf-8'));
console.log('--- ALL HOME TEXTS ---');
console.log(data.home.join('\n'));
