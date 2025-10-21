import Header from '@/components/header';
import HeroCarousel from '@/components/hero-carousel';
import QuienesSomos from '@/components/quienes-somos';
import VideoBanner from '@/components/video-banner';
import AreasJuridicas from '@/components/areas-juridicas';
import ContactBanner from '@/components/contact-banner';
import Footer from '@/components/footer';

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
