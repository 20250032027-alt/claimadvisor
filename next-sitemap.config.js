/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.claimadvisor.info',
  generateRobotsTxt: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/car-accident-calculator'),
    await config.transform(config, '/workers-comp-calculator'),
    await config.transform(config, '/mesothelioma-eligibility'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/privacy-policy'),
    await config.transform(config, '/terms'),
  ],
};
