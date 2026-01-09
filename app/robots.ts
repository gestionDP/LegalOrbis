import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.legalorbisabogados.es';

  return {
    rules: {
      userAgent: '*',
      // Permitir acceso a recursos estáticos necesarios para renderizado (incluye favicons)
      allow: [
        '/_next/static/',
        // Favicons v2 (principales) - permitir explícitamente
        '/favicon-v2.ico',
        '/favicon-48x48-v2.png',
        '/favicon-192x192-v2.png',
        // Favicons antiguos (redirigen a v2, pero permitir acceso para seguir redirecciones)
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
