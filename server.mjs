import http from 'http';
import fs from 'fs';
import path from 'path';

const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

const URL_REWRITES = {
  '/': '/index.html',
  '/about': '/about.html',
  '/about-us': '/about.html',
  '/services': '/services.html',
  '/gallery': '/gallery.html',
  '/contact': '/contact.html',
  '/blog': '/blog.html',
  '/services/tile-installation': '/service-tile-installation.html',
  '/services/kitchen-bathroom': '/service-kitchen-bathroom.html',
  '/services/showers': '/service-showers.html',
  '/services/bathrooms': '/service-bathrooms.html',
  '/services/kitchens': '/service-kitchens.html',
  '/services/flooring': '/service-flooring.html',
  '/services/marble': '/service-marble.html',
  '/services/commercial': '/service-commercial.html',
  '/areas/tampa': '/area-tampa.html',
  '/areas/st-petersburg': '/area-st-petersburg.html',
  '/areas/clearwater': '/area-clearwater.html',
  '/areas/brandon': '/area-brandon.html',
  '/areas/riverview': '/area-riverview.html',
  '/areas/westchase': '/area-westchase.html',
  '/areas/carrollwood': '/area-carrollwood.html',
  '/areas/wesley-chapel': '/area-wesley-chapel.html',
  '/areas/south-tampa': '/area-south-tampa.html'
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  
  if (URL_REWRITES[reqPath]) {
    reqPath = URL_REWRITES[reqPath];
  } else if (!path.extname(reqPath) && fs.existsSync(path.join(process.cwd(), reqPath + '.html'))) {
    reqPath = reqPath + '.html';
  }

  let filePath = path.join(process.cwd(), reqPath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return res.end(`
        <!DOCTYPE html>
        <html>
        <head><title>404 Not Found | GJC Tile Inc.</title><link rel="stylesheet" href="/styles.css"></head>
        <body style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;font-family:sans-serif;">
          <h1 style="color:#14223d;">Page Not Found</h1>
          <p><a href="/" style="color:#CCA43B;font-weight:bold;">Return to Home</a></p>
        </body>
        </html>
      `);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`GJC Tile Inc. site running at http://localhost:${PORT}/`);
  console.log(`Available tabs:`);
  console.log(` - Home:      http://localhost:${PORT}/`);
  console.log(` - About Us:  http://localhost:${PORT}/about-us`);
  console.log(` - Services:  http://localhost:${PORT}/services`);
  console.log(` - Gallery:   http://localhost:${PORT}/gallery`);
  console.log(` - Contact:   http://localhost:${PORT}/contact`);
  console.log(` - Blog:      http://localhost:${PORT}/blog`);
});
