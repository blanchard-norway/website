const { cleanEnv, str, email } = require('envalid');

const env = cleanEnv(process.env, {
  SENDGRID_KEY: str(),
  CONTACT_TO: email({ default: 'info@blanchard.no' }),
  CONTACT_FROM: email({ default: 'info@blanchard.no' }),
  RECAPTCHA_SECRET: str(),
  RECAPTCHA_SITEKEY: str(),
  BASE: str()
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    basePath: env.BASE,
    reSiteKey: env.RECAPTCHA_SITEKEY
  },
  serverRuntimeConfig: {
    sendgridKey: env.SENDGRID_KEY,
    contactTo: env.CONTACT_TO,
    contactFrom: env.CONTACT_FROM,
    reSecret: env.RECAPTCHA_SECRET,
  },
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
