'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import CSSAnimatedSection from '@/components/ui/css-animated-section';
import ValorDialog from '@/components/ui/valor-dialog';

const QuienesSomos = () => {
  const [valorActivo, setValorActivo] = useState(0);

  const valores = [
    {
      palabra: 'Transparencia',
      titulo: 'Transparencia',
      descripcion:
        'Somos un despacho formado por un equipo multidisciplinar de abogados especializados en las principales ramas del Derecho —Penal, Penitenciario, Civil, Laboral y Mercantil—, lo que nos permite ofrecer una respuesta integral y rigurosa ante cualquier situación jurídica.',
      imagen: '/images/jpg/Legal_01-64.jpg',
    },
    {
      palabra: 'Profesionalidad',
      titulo: 'Profesionalidad',
      descripcion:
        'Nuestro equipo aborda cada caso desde una estrategia personalizada, combinando experiencia, profesionalidad y compromiso, junto con una constante actualización en los nuevos recursos que ofrece el mundo jurídico moderno.',
      imagen: '/images/jpg/Legal_01-66.jpg',
    },
    {
      palabra: 'Compromiso',
      titulo: 'Compromiso',
      descripcion:
        'La transparencia y la confianza mutua con nuestros defendidos son la base de nuestro trabajo y lo que nos ha permitido consolidar relaciones duraderas y crecer junto a nuestros clientes. Cada abogado de Legal Orbis cuenta con unos conocimientos técnico-jurídicos concretos, lo que nos permite ofrecer una opinión plural y complementaria de cada asunto, de modo que en cada reunión intervienen varios especialistas para garantizar un análisis completo y una estrategia adaptada a las particularidades de cada caso.',
      imagen: '/images/jpg/Legal_01-13.jpg',
    },
  ];

  return (
    <section
      id="quienes-somos"
      className="section-padding text-white"
      style={{ backgroundColor: '#0B0B0B' }}
    >
      <div className="container-max">
        <div className="mb-16">
          <CSSAnimatedSection animation="fadeInLeft" delay={0.1}>
            <div className="flex items-center mb-6">
              <ArrowRight className="w-5 h-5 text-white mr-3" />
              <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                Quienes somos
              </span>
            </div>
          </CSSAnimatedSection>

          <CSSAnimatedSection animation="fadeInUp" delay={0.15}>
            <h2 className="text-3xl lg:text-5xl font-light text-white leading-tight mb-12">
              Un equipo multidisciplinar de abogados especializados
            </h2>
          </CSSAnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <CSSAnimatedSection animation="fadeInLeft" delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-4">
                  {valores[valorActivo].titulo}
                </h3>
                <div className="space-y-4 text-base lg:text-lg text-gray-300 leading-relaxed">
                  <p>{valores[valorActivo].descripcion}</p>
                  {valorActivo === 2 && (
                    <p className="text-white font-semibold text-lg lg:text-xl">
                      En cada reunión intervienen varios especialistas para
                      garantizar un análisis completo y una estrategia adaptada
                      a las particularidades de cada caso.
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 pt-4">
                  {valores.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setValorActivo(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === valorActivo
                          ? 'bg-white scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Ver ${valores[index].titulo}`}
                    />
                  ))}
                </div>
              </div>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInRight" delay={0.3}>
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={valores[valorActivo].imagen}
                  alt={`${valores[valorActivo].titulo} - Equipo de abogados Legal Orbis Madrid`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  className="object-cover transition-opacity duration-500 rounded-2xl"
                  priority
                />
              </div>
            </CSSAnimatedSection>
          </div>
        </div>

        <CSSAnimatedSection animation="fadeInUp" delay={0.3}>
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
                  5
                </div>
                <div className="text-gray-400 font-medium">Áreas Jurídicas</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-white mb-2">
                  +10
                </div>
                <div className="text-gray-400 font-medium">
                  Colaboradores especializados
                </div>
              </div>
            </div>
          </div>
        </CSSAnimatedSection>
      </div>
    </section>
  );
};

export default QuienesSomos;
