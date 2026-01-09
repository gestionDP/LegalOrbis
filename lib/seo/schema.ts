// Datos estructurados Schema.org para SEO

export interface OrganizationSchema {
  '@context': string;
  '@type': string[];
  name: string;
  description: string;
  url: string;
  logo: string;
  address: {
    '@type': string;
    streetAddress?: string;
    postalCode?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    contactType: string;
    email?: string;
    contactOption?: string;
    availableLanguage?: string[];
    areaServed: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  serviceType: string[];
  hasOfferCatalog: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        description: string;
      };
    }>;
  };
}

export interface LocalBusinessSchema {
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address: {
    '@type': string;
    streetAddress?: string;
    postalCode?: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  areaServed: {
    '@type': string;
    name: string;
  };
  serviceArea: {
    '@type': string;
    name: string;
  };
}

export interface LegalServiceSchema {
  '@type': string;
  name: string;
  description: string;
  provider: {
    '@type': string;
    name: string;
    url: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  serviceType: string[];
  offers: {
    '@type': string;
    description: string;
  };
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface FAQSchema {
  '@context': string;
  '@type': string;
  mainEntity: Array<{
    '@type': string;
    name: string;
    acceptedAnswer: {
      '@type': string;
      text: string;
    };
  }>;
}

// Schema Organization principal
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney', 'Organization'],
    name: 'Legal Orbis Abogados',
    description:
      'Despacho multidisciplinar de abogados especializados en Derecho Penal, Civil, Laboral, Mercantil y Administrativo en Madrid. +15 años de experiencia.',
    url: 'https://www.legalorbisabogados.es',
    logo: 'https://www.legalorbisabogados.es/logo-legal-orbis.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Serrano 78, 5º Derecha',
      postalCode: '28006',
      addressLocality: 'Madrid',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@legalorbisabogados.es',
      contactOption: 'OnlineOnly',
      availableLanguage: ['Spanish', 'English'],
      areaServed: 'Madrid',
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    serviceType: [
      'Derecho Penal',
      'Derecho Civil',
      'Derecho Laboral',
      'Derecho Mercantil',
      'Derecho Administrativo',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Legales',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Penal',
            description: 'Defensa especializada en delitos de todo tipo',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Civil',
            description: 'Asesoramiento en relaciones jurídicas privadas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Laboral',
            description: 'Protección de derechos laborales',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Penitenciario',
            description: 'Experiencia en expedientes penitenciarios',
          },
        },
      ],
    },
  };
}

// Schema LocalBusiness
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@type': 'LegalService',
    name: 'Legal Orbis Abogados',
    description:
      'Despacho de abogados especializado en Madrid - Calle Serrano 78',
    url: 'https://www.legalorbisabogados.es',
    telephone: '+34916841454',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Serrano 78, 5º Derecha',
      postalCode: '28006',
      addressLocality: 'Madrid',
      addressRegion: 'Comunidad de Madrid',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4316,
      longitude: -3.6839,
    },
    openingHours: ['Mo-Fr 09:00-19:00'],
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    serviceArea: {
      '@type': 'City',
      name: 'Madrid',
    },
  };
}

// Schema para servicios legales específicos
export function generateLegalServiceSchema({
  serviceName,
  serviceDescription,
  serviceTypes,
}: {
  serviceName: string;
  serviceDescription: string;
  serviceTypes: string[];
}): LegalServiceSchema {
  return {
    '@type': 'LegalService',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Attorney',
      name: 'Legal Orbis Abogados',
      url: 'https://www.legalorbisabogados.es',
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    serviceType: serviceTypes,
    offers: {
      '@type': 'Offer',
      description: `Servicios de ${serviceName} en Madrid. Primera consulta gratuita.`,
    },
  };
}

// Schema BreadcrumbList
export function generateBreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.legalorbisabogados.es${item.url}`,
    })),
  };
}

// Schema FAQ
export function generateFAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}): FAQSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Función para generar JSON-LD script
export function generateJsonLdScript(
  schema:
    | OrganizationSchema
    | LocalBusinessSchema
    | LegalServiceSchema
    | BreadcrumbSchema
    | FAQSchema
): string {
  return `<script type="application/ld+json">${JSON.stringify(
    schema,
    null,
    2
  )}</script>`;
}
