'use client';

import Image from 'next/image';
import AnimatedSection from '@/components/ui/animated-section';

interface AreaWhyChooseProps {
  areaTitle: string;
  longDescription?: string;
  description: string;
  image: string;
}

const AreaWhyChoose = ({
  areaTitle,
  longDescription,
  description,
  image,
}: AreaWhyChooseProps) => {
  const paragraphs = longDescription
    ? longDescription.split('\n\n')
    : [description];

  // Mostramos del segundo párrafo en adelante (índice 1+)
  const remainingParagraphs = paragraphs.slice(1);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={`${areaTitle} - Legal Orbis Abogados Madrid`}
          fill
          className="object-cover"
          quality={85}
          priority={false}
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="container-max relative z-10">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.5}>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-8 text-center">
              ¿Por qué elegir Legal Orbis para {areaTitle}?
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {remainingParagraphs.map((paragraph, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={0.15 + index * 0.1}
              duration={0.5}
            >
              <p className="text-lg text-gray-200 leading-relaxed">
                {paragraph}
              </p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.8} duration={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-6">
              ¿Necesitas un abogado especializado en {areaTitle}?
            </p>
            <a
              href="#contacto"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contacta con nosotros
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AreaWhyChoose;
