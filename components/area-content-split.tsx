'use client';

import Image from 'next/image';
import CSSAnimatedSection from '@/components/ui/css-animated-section';

interface AreaContentSplitProps {
  area: {
    title: string;
    image: string;
    longDescription?: string;
    description: string;
  };
}

const AreaContentSplit = ({ area }: AreaContentSplitProps) => {
  const paragraphs = area.longDescription
    ? area.longDescription.split('\n\n')
    : [area.description];

  // Solo mostramos el primer párrafo en esta sección
  const firstParagraph = paragraphs[0];

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#0B0B0B' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-white/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto a la izquierda */}
          <CSSAnimatedSection animation="fadeInLeft" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight">
                {area.title}
              </h2>
              <div className="prose prose-lg text-gray-300 leading-relaxed">
                <p>{firstParagraph}</p>
              </div>
            </div>
          </CSSAnimatedSection>

          {/* Imagen a la derecha */}
          <CSSAnimatedSection animation="fadeInRight" delay={0.3}>
            <div className="relative aspect-4/3 overflow-hidden rounded-lg group">
              <Image
                src={area.image}
                alt={`${area.title} - Abogados especializados Legal Orbis Madrid`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </CSSAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AreaContentSplit;
