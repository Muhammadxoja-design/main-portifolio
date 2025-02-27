const fs = require("fs");
const path = require("path");

const websiteUrl = "https://muhammadxoja.netlify.app";
const pages = [
  { path: "", priority: 1.0, changefreq: "weekly" },
  { path: "about", priority: 0.8, changefreq: "monthly" },
  { path: "projects", priority: 0.6, changefreq: "yearly" },
  { path: "contact", priority: 0.7, changefreq: "monthly" }
];

const generateSitemap = () => {
  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");

  if (!fs.existsSync("public")) {
    fs.mkdirSync("public");
  }

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach(({ path, priority, changefreq }) => {
    const pageUrl = path ? `${websiteUrl}/${path}` : websiteUrl;
    sitemap += `
      <url>
        <loc>${pageUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
      </url>`;
  });

  sitemap += "\n</urlset>";

  fs.writeFileSync(sitemapPath, sitemap);
  console.log("✅ Sitemap successfully generated!");
};

generateSitemap();
