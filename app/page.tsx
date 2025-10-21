import dynamic from 'next/dynamic';
import Header from '@/components/header';
import HeroCarousel from '@/components/hero-carousel';

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
