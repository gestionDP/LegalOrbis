import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.legalorbisabogados.es';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
