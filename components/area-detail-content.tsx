'use client';

import CSSAnimatedSection from '@/components/ui/css-animated-section';

interface AreaDetailContentProps {
  area: {
    title: string;
    image: string;
    longDescription?: string;
    description: string;
  };
}

const AreaDetailContent = ({ area }: AreaDetailContentProps) => {
  return (
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
        {/* Mobile: Layout normal */}
        <div className="lg:hidden">
          <div className="space-y-8">
            <CSSAnimatedSection animation="fadeInLeft" delay={0.1}>
              <h2 className="text-3xl text-white leading-tight mb-6">
                {area.title}
              </h2>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInUp" delay={0.3}>
              <div className="prose prose-invert text-lg text-gray-300 leading-relaxed space-y-4">
                {area.longDescription ? (
                  area.longDescription
                    .split('\n\n')
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                ) : (
                  <p>{area.description}</p>
                )}
              </div>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInScale" delay={0.5}>
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
            </CSSAnimatedSection>
          </div>
        </div>

        {/* Desktop: Layout especial con texto arriba/abajo de la imagen */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-12">
            {/* Columna vacía para balance */}
            <div></div>

            {/* Columna derecha con texto + imagen + texto */}
            <div className="space-y-8">
              {/* Primera parte del texto */}
              <CSSAnimatedSection animation="fadeInUp" delay={0.1}>
                <div className="prose prose-invert text-lg text-gray-300 leading-relaxed space-y-4">
                  {area.longDescription ? (
                    <>
                      {area.longDescription
                        .split('\n\n')
                        .slice(0, 2)
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </>
                  ) : (
                    <p>{area.description}</p>
                  )}
                </div>
              </CSSAnimatedSection>

              {/* Imagen en el medio */}
              <CSSAnimatedSection animation="fadeInScale" delay={0.4}>
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
              </CSSAnimatedSection>

              {/* Segunda parte del texto (servicios específicos) */}
              {area.longDescription &&
                area.longDescription.split('\n\n').length > 2 && (
                  <CSSAnimatedSection animation="fadeInUp" delay={0.6}>
                    <div className="prose prose-invert text-lg text-gray-300 leading-relaxed space-y-4">
                      {area.longDescription
                        .split('\n\n')
                        .slice(2)
                        .map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                  </CSSAnimatedSection>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreaDetailContent;
