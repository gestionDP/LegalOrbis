import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AreaDetailHero from '@/components/area-detail-hero';
import AreaDetailContent from '@/components/area-detail-content';
import AreaDetailBranches from '@/components/area-detail-branches';
import { areasData } from '@/lib/data/areas-juridicas';
import { generateAreaMetadata } from '@/lib/seo/metadata';
import {
  generateLegalServiceSchema,
  generateBreadcrumbSchema,
} from '@/lib/seo/schema';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const area = areasData[params.slug as keyof typeof areasData];

  if (!area) {
    return {
      title: 'Área jurídica no encontrada | Legal Orbis',
      description: 'La página solicitada no existe.',
    };
  }

  return generateAreaMetadata({
    areaTitle: area.title,
    areaDescription: area.metaDescription,
    areaKeywords: area.metaKeywords,
    areaImage: area.image,
    areaUrl: `/areas-juridicas/${area.id}`,
  });
}

export default function AreaJuridicaDetail({
  params,
}: {
  params: { slug: string };
}) {
  const area = areasData[params.slug as keyof typeof areasData];

  if (!area) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="min-h-screen bg-[#1A3635] flex items-center justify-center">
          <h1 className="text-white text-2xl">Área jurídica no encontrada</h1>
        </div>
        <Footer />
      </main>
    );
  }

  // Generar datos estructurados
  const legalServiceSchema = generateLegalServiceSchema({
    serviceName: area.title,
    serviceDescription: area.description,
    serviceTypes: area.services,
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Inicio', url: '/' },
      { name: 'Áreas Jurídicas', url: '/areas-juridicas' },
      { name: area.title, url: `/areas-juridicas/${area.id}` },
    ],
  });

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(legalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <AreaDetailHero area={area} />
      <AreaDetailContent area={area} />
      <AreaDetailBranches area={area} />
      <Footer />
    </main>
  );
}
