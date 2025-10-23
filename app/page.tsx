import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import Header from '@/components/header';
import HeroCarousel from '@/components/hero-carousel';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Abogados en Madrid | Legal Orbis - Despacho Jurídico Especializado',
  description:
    'Despacho multidisciplinar de abogados especializados en Madrid. Derecho Penal, Civil, Laboral y Penitenciario. Experiencia, profesionalidad y compromiso. Consulta gratuita.',
  keywords: [
    'abogados Madrid',
    'despacho jurídico Madrid',
    'abogados especializados Madrid',
    'derecho penal Madrid',
    'derecho civil Madrid',
    'derecho laboral Madrid',
    'derecho penitenciario Madrid',
    'asesoría legal Madrid',
    'defensa penal Madrid',
    'abogados penalistas Madrid',
  ],
  url: '/',
});

const QuienesSomos = dynamic(() => import('@/components/quienes-somos'), {
  loading: () => <div className="section-padding bg-[#0B0B0B]" />,
});

const VideoBanner = dynamic(() => import('@/components/video-banner'), {
  loading: () => <div className="h-screen bg-black" />,
});

const AreasJuridicas = dynamic(() => import('@/components/areas-juridicas'), {
  loading: () => <div className="section-padding bg-[#0B0B0B]" />,
});

const ContactBanner = dynamic(() => import('@/components/contact-banner'), {
  loading: () => <div className="section-padding" />,
});

const Footer = dynamic(() => import('@/components/footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <QuienesSomos />
      <VideoBanner />
      <AreasJuridicas />
      <ContactBanner />
      <Footer />
    </main>
  );
}
