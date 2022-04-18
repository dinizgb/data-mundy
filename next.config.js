/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['pt'],
    defaultLocale: 'pt',
  },
  trailingSlash: true,
};