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
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    contactType: string;
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

// Schema Organization principal
export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney', 'Organization'],
    name: 'Legal Orbis Abogados',
    description:
      'Despacho multidisciplinar de abogados especializados en Derecho Penal, Civil, Laboral, Penitenciario y Mercantil en Madrid.',
    url: 'https://legalorbis.com',
    logo: 'https://legalorbis.com/logo-legal-orbis.svg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
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
      'Derecho Penitenciario',
      'Derecho Mercantil',
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
    description: 'Despacho de abogados especializado en Madrid',
    url: 'https://legalorbis.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4168,
      longitude: -3.7038,
    },
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
      url: 'https://legalorbis.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Madrid',
    },
    serviceType: serviceTypes,
    offers: {
      '@type': 'Offer',
      description: `Servicios de ${serviceName} en Madrid`,
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
      item: `https://legalorbis.com${item.url}`,
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
): string {
  return `<script type="application/ld+json">${JSON.stringify(
    schema,
    null,
    2
  )}</script>`;
}
