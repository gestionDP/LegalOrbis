import { Metadata } from 'next';

// Configuración base del sitio
export const siteConfig = {
  name: 'Legal Orbis Abogados',
  description:
    'Despacho multidisciplinar de abogados especializados en Derecho Penal, Civil, Laboral, Penitenciario y Mercantil en Madrid. Experiencia, profesionalidad y compromiso.',
  url: 'https://www.legalorbisabogados.es',
  ogImage: '/LegalOrbis.svg',
  keywords: [
    'abogados Madrid',
    'despacho jurídico Madrid',
    'derecho penal Madrid',
    'derecho civil Madrid',
    'derecho laboral Madrid',
    'derecho penitenciario Madrid',
    'abogados especializados',
    'despacho multidisciplinar',
    'asesoría legal Madrid',
    'defensa penal Madrid',
  ],
  authors: [{ name: 'Legal Orbis Abogados' }],
  creator: 'Legal Orbis Abogados',
  publisher: 'Legal Orbis Abogados',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
};

// Función para generar metadata base
export function generateBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: siteConfig.robots,
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: siteConfig.url,
      title: siteConfig.name,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
    },
    icons: {
      icon: [
        // Favicons v2 para cache-busting - ORDEN CRÍTICO: PNG primero, luego ICO
        // Priorizar PNG sobre SVG/ICO para Google SERP
        // 48x48 es el tamaño mínimo requerido por Google para resultados de búsqueda
        {
          url: '/favicon-48x48-v2.png',
          type: 'image/png',
          sizes: '48x48',
        },
        // 192x192 es tamaño óptimo para Google SERP
        {
          url: '/favicon-192x192-v2.png',
          type: 'image/png',
          sizes: '192x192',
        },
        // favicon.ico v2 como fallback
        { url: '/favicon-v2.ico', sizes: 'any' },
        // Mantener versiones anteriores por compatibilidad (fallback)
        {
          url: '/favicon-48x48.png',
          type: 'image/png',
          sizes: '48x48',
        },
        { url: '/favicon.ico', sizes: 'any' },
        {
          url: '/favicon-32x32.png',
          type: 'image/png',
          sizes: '32x32',
        },
        {
          url: '/favicon-16x16.png',
          type: 'image/png',
          sizes: '16x16',
        },
        // SVG al final (temporalmente menos prioridad para forzar PNG en Google)
        {
          url: '/favicon.svg',
          type: 'image/svg+xml',
          sizes: 'any',
        },
      ],
      apple: [
        {
          url: '/apple-touch-icon.png',
          type: 'image/png',
          sizes: '180x180',
        },
      ],
    },
    alternates: {
      canonical: siteConfig.url,
    },
    verification: {
      google: '',
    },
  };
}

// Función para generar metadata de página específica
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
}: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullDescription =
    description.length > 160
      ? description.substring(0, 157) + '...'
      : description;

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: [...siteConfig.keywords, ...keywords],
    openGraph: {
      type: 'website',
      locale: 'es_ES',
      url: url ? `${siteConfig.url}${url}` : siteConfig.url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image || siteConfig.ogImage],
    },
    alternates: {
      canonical: url ? `${siteConfig.url}${url}` : siteConfig.url,
    },
  };
}

// Función para generar metadata de área jurídica
export function generateAreaMetadata({
  areaTitle,
  areaDescription,
  areaKeywords,
  areaImage,
  areaUrl,
}: {
  areaTitle: string;
  areaDescription: string;
  areaKeywords: string[];
  areaImage: string;
  areaUrl: string;
}): Metadata {
  const title = `Abogados ${areaTitle} en Madrid | Legal Orbis`;
  const description = `${areaDescription} Especialistas en ${areaTitle.toLowerCase()} en Madrid. Consulta gratuita.`;

  return generatePageMetadata({
    title,
    description,
    keywords: [
      `abogados ${areaTitle.toLowerCase()} Madrid`,
      `derecho ${areaTitle.toLowerCase()} Madrid`,
      `asesoría ${areaTitle.toLowerCase()} Madrid`,
      `defensa ${areaTitle.toLowerCase()} Madrid`,
      ...areaKeywords,
    ],
    image: areaImage,
    url: areaUrl,
  });
}
