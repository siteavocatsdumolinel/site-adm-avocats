/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adm-avocatsdumolinel.com',
      },
    ],
  },
}

module.exports = nextConfig
