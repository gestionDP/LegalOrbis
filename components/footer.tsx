'use client';

import Image from 'next/image';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Quienes somos', href: 'quienes-somos' },
    { name: 'Áreas Jurídicas', href: 'areas-juridicas' },
    { name: 'Experiencia', href: 'experiencia' },
    { name: 'Contacto', href: 'contacto' },
  ];

  return (
    <footer className="bg-white text-black relative overflow-hidden">
      <div className="relative z-10">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 text-left">
                <div>
                  <Image
                    src="/images/png/LegalOrbis.png"
                    alt="Legal Orbis Abogados"
                    width={150}
                    height={50}
                    className="lg:mx-0 w-24 sm:w-32 lg:w-[150px] h-auto"
                  />
                </div>
                <p className="text-[#1a5f5f] mb-6 leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl lg:mx-0">
                  Somos un despacho formado por un equipo multidisciplinar de
                  abogados especializados en las principales ramas del Derecho,
                  ofreciendo una respuesta integral y rigurosa ante cualquier
                  situación jurídica.
                </p>
              </div>

            </div>
          </div>

          <div className="border-t border-gray-700 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="text-[#1a5f5f] text-sm">
                © {new Date().getFullYear()} Legal Orbis Abogados. Todos los
                derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
