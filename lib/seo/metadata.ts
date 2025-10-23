import { Metadata } from 'next';

// Configuración base del sitio
export const siteConfig = {
  name: 'Legal Orbis Abogados',
  description:
    'Despacho multidisciplinar de abogados especializados en Derecho Penal, Civil, Laboral, Penitenciario y Mercantil en Madrid. Experiencia, profesionalidad y compromiso.',
  url: 'https://legalorbisabogados.es',
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
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/LegalOrbis.svg', type: 'image/svg+xml' }],
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
