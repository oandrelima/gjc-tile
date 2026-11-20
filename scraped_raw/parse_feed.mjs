import fs from 'fs';

const xml = fs.readFileSync('blog_feed.xml', 'utf-8');
const items = xml.split('<item>');

console.log(`Found ${items.length - 1} feed items:`);

const posts = [];
for (let i = 1; i < items.length; i++) {
  const item = items[i];
  const title = (item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || item.match(/<title>(.*?)<\/title>/))?.[1] || '';
  const desc = (item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || item.match(/<description>([\s\S]*?)<\/description>/))?.[1] || '';
  const pubDate = item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || '';
  const link = item.match(/<link>(.*?)<\/link>/)?.[1] || '';
  posts.push({ title, desc: desc.replace(/<[^>]+>/g, '').slice(0, 150), pubDate, link });
}

console.log(posts);
fs.writeFileSync('parsed_blog_feed.json', JSON.stringify(posts, null, 2));
