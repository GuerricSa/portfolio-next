/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://guerric-sant.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404', '/server-error'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
