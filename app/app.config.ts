export default defineAppConfig({
  title: 'urlsclickearn',
  email: 'contact@urlsclickearn.xyz',
  github: 'https://github.com/ccbikai/sink',
  telegram: 'https://urlsclickearn.xyz/telegram',
  mastodon: 'https://urlsclickearn.xyz/mastodon',
  blog: 'https://urlsclickearn.xyz/blog',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://urlsclickearn.xyz/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
