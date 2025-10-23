'use client';

import AnimatedSection from '@/components/ui/animated-section';

interface AreaDetailContentProps {
  area: {
    title: string;
    image: string;
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <AnimatedSection animation="fadeInLeft" delay={0.1} duration={0.8}>
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight mb-6">
                Guiándote a través de desafíos con {area.title.toLowerCase()}{' '}
                especializado
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.3} duration={0.8}>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {area.title} está diseñado para ayudarte a navegar eventos
                impredecibles y salvaguardar tu reputación, operaciones y
                relaciones. Nuestro equipo proporciona respuesta rápida,
                orientación estratégica y soluciones personalizadas para
                gestionar riesgos y minimizar impactos durante situaciones
                críticas.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={0.5} duration={0.8}>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-[#1a5f5f] rounded-full mr-2 animate-pulse" />
                  <span className="text-sm">Experiencia especializada</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div
                    className="w-2 h-2 bg-[#1a5f5f] rounded-full mr-2 animate-pulse"
                    style={{ animationDelay: '0.5s' }}
                  />
                  <span className="text-sm">Asesoramiento personalizado</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div
                    className="w-2 h-2 bg-[#1a5f5f] rounded-full mr-2 animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                  <span className="text-sm">Resultados probados</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="relative">
            <AnimatedSection animation="fadeInScale" delay={0.4} duration={1}>
              <div className="relative group">
                <div className="aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-lg transform transition-transform duration-500 group-hover:scale-105">
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
  );
};

export default AreaDetailContent;
