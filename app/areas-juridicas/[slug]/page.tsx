import { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AreaDetailHero from '@/components/area-detail-hero';
import AreaContentSplit from '@/components/area-content-split';
import AreaWhyChoose from '@/components/area-why-choose';
import AreaDetailBranches from '@/components/area-detail-branches';
import AreaFAQ from '@/components/area-faq';
import AreaRelatedLinks from '@/components/area-related-links';
import { areasData } from '@/lib/data/areas-juridicas';
import { generateAreaMetadata } from '@/lib/seo/metadata';
import {
  generateLegalServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '@/lib/seo/schema';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = areasData[slug as keyof typeof areasData];

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

export default async function AreaJuridicaDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = areasData[slug as keyof typeof areasData];

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

  // Schema FAQ si existen FAQs para esta área
  const faqSchema = area.faqs
    ? generateFAQSchema({
        faqs: area.faqs,
      })
    : null;

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
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
      <Header />
      <AreaDetailHero area={area} />
      <AreaContentSplit area={area} />
      <AreaWhyChoose
        areaTitle={area.title}
        longDescription={area.longDescription}
        description={area.description}
        image={area.image}
      />
      <AreaDetailBranches area={area} />
      {area.faqs && <AreaFAQ faqs={area.faqs} areaTitle={area.title} />}
      <AreaRelatedLinks
        currentAreaId={area.id}
        relatedAreas={Object.values(areasData).map((a) => ({
          id: a.id,
          title: a.title,
          description: a.description,
        }))}
      />
      <Footer />
    </main>
  );
}
