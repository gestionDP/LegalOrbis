'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/animated-section';

const QuienesSomos = () => {
  const [valorActivo, setValorActivo] = useState(0);

  const valores = [
    {
      palabra: 'Transparencia',
      titulo: 'Transparencia',
      descripcion:
        'Somos un despacho formado por un equipo multidisciplinar de abogados especializados en las principales ramas del Derecho —Penal, Penitenciario, Civil, Laboral y Mercantil—, lo que nos permite ofrecer una respuesta integral y rigurosa ante cualquier situación jurídica.',
      imagen: '/images/jpg/hero-carousel-1.jpg',
    },
    {
      palabra: 'Profesionalidad',
      titulo: 'Profesionalidad',
      descripcion:
        'Nuestro equipo aborda cada caso desde una estrategia personalizada, combinando experiencia, profesionalidad y compromiso, junto con una constante actualización en los nuevos recursos que ofrece el mundo jurídico moderno.',
      imagen: '/images/jpg/hero-carousel-2.jpg',
    },
    {
      palabra: 'Compromiso',
      titulo: 'Compromiso',
      descripcion:
        'La transparencia y la confianza mutua con nuestros defendidos son la base de nuestro trabajo y lo que nos ha permitido consolidar relaciones duraderas y crecer junto a nuestros clientes. Cada abogado de Legal Orbis cuenta con unos conocimientos técnico-jurídicos concretos, lo que nos permite ofrecer una opinión plural y complementaria de cada asunto, de modo que en cada reunión intervienen varios especialistas para garantizar un análisis completo y una estrategia adaptada a las particularidades de cada caso.',
      imagen: '/images/jpg/hero-carousel-3.jpg',
    },
  ];

  return (
    <section
      id="quienes-somos"
      className="section-padding text-white"
      style={{ backgroundColor: '#0B0B0B' }}
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <AnimatedSection animation="fadeInLeft" delay={0.1} duration={0.5}>
            <div className="flex items-center">
              <ArrowRight className="w-5 h-5 text-white mr-3" />
              <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                Quienes somos
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection animation="fadeInUp" delay={0.15} duration={0.5}>
              <h2 className="text-2xl lg:text-4xl font-light text-white leading-tight mb-20">
                Un equipo multidisciplinar de abogados especializados
              </h2>
            </AnimatedSection>

            <div className="space-y-3">
              {valores.map((valor, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeInUp"
                  delay={0.2 + index * 0.05}
                  duration={0.5}
                >
                  <div
                    onClick={() => setValorActivo(index)}
                    className={`cursor-pointer transition-all duration-200 ${
                      valorActivo === index
                        ? 'text-white'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <span className="text-5xl lg:text-6xl font-light">
                      {valor.palabra}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection animation="fadeInRight" delay={0.2} duration={0.5}>
            <div>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <Image
                    src={valores[valorActivo].imagen}
                    alt={valores[valorActivo].titulo}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    quality={80}
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm  p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-black">
                      {valores[valorActivo].titulo}
                    </h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {valores[valorActivo].descripcion}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.3} duration={0.5}>
          <div className="border-t border-white/10 pt-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  15+
                </div>
                <div className="text-gray-400 font-medium">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  500+
                </div>
                <div className="text-gray-400 font-medium">Casos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  4
                </div>
                <div className="text-gray-400 font-medium">Áreas Jurídicas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  100%
                </div>
                <div className="text-gray-400 font-medium">
                  Satisfacción Cliente
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default QuienesSomos;
