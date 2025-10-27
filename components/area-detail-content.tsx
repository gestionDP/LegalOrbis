'use client';

import AnimatedSection from '@/components/ui/animated-section';

interface AreaDetailContentProps {
  area: {
    title: string;
    image: string;
    longDescription?: string;
    description: string;
  };
}

const AreaDetailContent = ({ area }: AreaDetailContentProps) => {
  const paragraphs = area.longDescription
    ? area.longDescription.split('\n\n')
    : [area.description];

  const introduction = paragraphs.slice(0, 2);
  const specificServices = paragraphs.slice(2);

  const backgroundImage = '/images/jpg/Legal_01-64.jpg';

  const highlightKeywords = (text: string) => {
    const keywords = [
      'Legal Orbis',
      'Derecho Civil',
      'Derecho Laboral',
      'Derecho Mercantil',
      'Derecho Administrativo',
      'profesionales',
      'experiencia',
      'especializados',
      'asesoramiento',
      'defensa',
      'prevención',
      'soluciones',
      'expertos',
      'garantizamos',
      'rigor técnico',
      'atención personalizada',
      'acompañamiento',
      'compromiso',
      'seguridad jurídica',
      'eficacia',
      'estrategia',
      'respaldo jurídico',
      'asistencia',
      'consultoría',
    ];

    let highlightedText = text;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<strong>$1</strong>');
    });

    return highlightedText;
  };

  return (
    <>
      {/* Sección 1: Introducción + Imagen */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: '#0B0B0B' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:hidden">
            <div className="space-y-8">
              <AnimatedSection
                animation="fadeInLeft"
                delay={0.1}
                duration={0.8}
              >
                <h2 className="text-3xl text-white leading-tight mb-6">
                  {area.title}
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={0.3} duration={0.8}>
                <div className="prose prose-invert text-lg text-gray-300 leading-relaxed space-y-4">
                  {introduction.map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(paragraph),
                      }}
                    />
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInScale" delay={0.5} duration={1}>
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg transform transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#1a5f5f] rounded-full opacity-20 animate-ping" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full opacity-30 animate-pulse" />
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-12 items-center">
              <AnimatedSection
                animation="fadeInLeft"
                delay={0.1}
                duration={0.8}
              >
                <div className="prose prose-invert text-lg text-gray-300 leading-relaxed space-y-4">
                  {introduction.map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(paragraph),
                      }}
                    />
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeInScale" delay={0.4} duration={1}>
                <div className="relative group">
                  <div className="aspect-[4/3] overflow-hidden rounded-lg transform transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#1a5f5f] rounded-full opacity-20 animate-ping" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/20 rounded-full opacity-30 animate-pulse" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {specificServices.length > 0 && (
        <section className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <div
              className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
          </div>

          <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.8}>
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-3xl lg:text-4xl text-white leading-tight mb-8 font-light">
                  Servicios específicos de {area.title}
                </h2>
                <div className="prose prose-invert text-lg text-gray-200 leading-relaxed space-y-4">
                  {specificServices.map((paragraph, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(paragraph),
                      }}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
};

export default AreaDetailContent;
