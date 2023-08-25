/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
       remotePatterns: [
      {
        protocol: 'https',
        hostname: 'roar.media',
        port: '',
        pathname: '/**',
      }
    ]
    },
}

module.exports = nextConfig
