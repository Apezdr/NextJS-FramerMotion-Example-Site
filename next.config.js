// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/NextJS-FramerMotion-Example-Site/' : '',
  images: {
    unoptimized: true,
  },
}