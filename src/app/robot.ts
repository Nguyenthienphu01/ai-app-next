import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // TODO: add disallow endpoint
      disallow: '/private/',
    },
    // TODO: change sitemap url
    sitemap: 'https://example.com/sitemap.xml',
  };
}
