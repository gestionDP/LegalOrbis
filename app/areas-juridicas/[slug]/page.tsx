'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import AreaDetailHero from '@/components/area-detail-hero';
import AreaDetailContent from '@/components/area-detail-content';
import AreaDetailBranches from '@/components/area-detail-branches';
import { areasData } from '@/lib/data/areas-juridicas';

export default function AreaJuridicaDetail() {
  const params = useParams();
  const slug = params.slug as string;

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

  return (
    <main className="min-h-screen">
      <Header />
      <AreaDetailHero area={area} />
      <AreaDetailContent area={area} />
      <AreaDetailBranches area={area} />
      <Footer />
    </main>
  );
}
