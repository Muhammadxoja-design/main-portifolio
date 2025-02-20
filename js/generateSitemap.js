const fs = require("fs");

const websiteUrl = "https://your-website.netlify.app";
const pages = ["", "about", "projects", "contact"]; // Sahifalar ro'yxati

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  pages.forEach((page) => {
    sitemap += `
      <url>
        <loc>${websiteUrl}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`;
  });

  sitemap += "\n</urlset>";

  fs.writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap successfully generated!");
};

generateSitemap();
