/* eslint-disable no-unused-vars */
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  images: {
    domains: ["wp.crdps.xyz", "apod.nasa.gov"],
  },
  i18n: {
    locales: ["eng", "US"],
    defaultLocale: "eng",
  },
  trailingSlash: true,
};
