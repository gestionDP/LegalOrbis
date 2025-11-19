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
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      <div className="relative z-10">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-white/10">
            <Image
              src="/images/png/LegalOrbisWhite.png"
              alt="Legal Orbis Abogados"
              width={180}
              height={60}
              className="w-32 sm:w-40 lg:w-[180px] h-auto"
            />
          
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-4 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
              <h4 className="text-sm uppercase tracking-[0.25em] text-gray-200">
                Oficinas
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-base font-semibold text-white">Madrid</h5>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Calle Serrano 78, 5º Derecha
                    <br />
                    CP 28006, Madrid
                    <br />
                    Tel.:{' '}
                    <a
                      href="tel:+34916841454"
                      className="text-white hover:underline"
                    >
                      +34 916 84 14 54
                    </a>
                  </p>
                </div>
              
              </div>
            </div>

            <div className="space-y-4 border-b md:border-b-0  border-white/10 pb-6 md:pb-0 md:px-8">
              <h4 className="text-sm uppercase tracking-[0.25em] text-gray-200">
                Contacto
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Correo</span>
                  <a
                    href="mailto:info@legalorbisabogados.es"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    info@legalorbisabogados.es
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white font-medium">Teléfono</span>
                  <a
                    href="tel:+34916841454"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    +34 916 84 14 54
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="text-sm font-medium text-white hover:text-gray-200 transition-colors inline-flex items-center gap-2"
                  aria-label="Ir a sección de contacto"
                >
                  Contacto →
                </button>
              </div>
            </div>

         
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-max px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-300">
              <div>
                © {new Date().getFullYear()} Legal Orbis Abogados. Todos los
                derechos reservados.
              </div>
             
              <div className="text-gray-400">Legal Orbis</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
