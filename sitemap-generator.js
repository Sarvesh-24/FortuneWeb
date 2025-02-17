const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");
const path = require("path");

// Define your site's pages
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.7 },
  { url: "/gallery", changefreq: "monthly", priority: 0.7 },
];

(async () => {
  const sitemapStream = new SitemapStream({ hostname: "https://fortuneadvisorz.com" });
  
  pages.forEach((page) => sitemapStream.write(page));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap.toString());

  console.log("✅ Sitemap generated successfully!");
})();
