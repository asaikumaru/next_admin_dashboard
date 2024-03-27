const path = require('path')

const nextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: 'img.freepik.com' }] },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
}

module.exports = nextConfig
