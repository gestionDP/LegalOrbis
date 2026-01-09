import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.legalorbisabogados.es';

  return {
    rules: {
      userAgent: '*',
      // Permitir acceso a recursos estáticos necesarios para renderizado (incluye favicons)
      allow: [
        '/_next/static/',
        '/favicon.ico',
        '/favicon.svg',
        '/favicon-*.png',
        '/apple-touch-icon.png',
      ],
      // Bloquear rutas privadas e internas del servidor
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/_next/server/',
        '/_next/image',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
