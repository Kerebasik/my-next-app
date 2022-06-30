/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path')

module.exports = module.exports = {
  nextConfig,
  i18n: {
    locales: ['en-US', 'de-DE'],
    defaultLocale: 'en-US',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
