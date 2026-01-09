import { MetadataRoute } from 'next';
import { areasData } from '@/lib/data/areas-juridicas';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.legalorbisabogados.es';

  // Página principal
  const homePage = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1.0,
  };

  // Páginas de áreas jurídicas
  const areaPages = Object.values(areasData).map((area) => ({
    url: `${baseUrl}/areas-juridicas/${area.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [homePage, ...areaPages];
}
