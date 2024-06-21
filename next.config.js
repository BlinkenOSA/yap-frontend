const withLess = require("next-with-less");

const nextConfig = {
  images: {
    domains: ['storage.osaarchivum.org'],
  },
  reactStrictMode: false,
  ...withLess(
    {
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    }
  )
}

module.exports = withLess(nextConfig);
