/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://next-map-project.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
