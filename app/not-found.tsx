import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Página no encontrada | Legal Orbis Abogados',
  description: 'La página que buscas no existe.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#1A3635] to-[#0B0B0B] px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Página no encontrada
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-[#1a5f5f] hover:bg-[#1a5f5f]/90 text-white px-8 py-6 text-lg"
            >
              <Link href="/">Volver al inicio</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <Link href="/areas-juridicas">Ver áreas jurídicas</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}






