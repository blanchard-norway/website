/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/',
          destination: '/index.html'
        }
      ]
    }
  }
}

module.exports = nextConfig
