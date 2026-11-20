import fs from 'fs';

const html = fs.readFileSync('gjctile_blog.html', 'utf-8');

const titles = [
  'Best Bathroom Flooring Options for Tampa Homes',
  'How to Choose a Flooring Contractor in Tampa',
  'Can Cracked Tiles Be Replaced Without Redoing a Floor?',
  'Tile Flooring That Holds Up in Tampa Bay Homes',
  'How to Prepare for Flooring Installation',
  'Bathroom Renovation Timeline: What to Expect',
  'How to Prepare for Tampa Tile Installation',
  'LVP Versus Hardwood Flooring for Tampa Homes',
  'How to Choose Bathroom Tile That Lasts',
  'Ceramic Versus Porcelain Tile for Your Home',
  '12 Questions Before Hiring a Tile Installer',
  'Bathroom Renovation Decisions Built to Last',
  'Epoxy Versus Cement Grout for Tile Projects',
  'Shower Design Choices That Last Beautifully'
];

for (const t of titles.slice(0, 5)) {
  const idx = html.indexOf(t);
  if (idx !== -1) {
    console.log(`\n=== POST: ${t} ===`);
    console.log(html.substring(idx, idx + 400).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
  }
}
