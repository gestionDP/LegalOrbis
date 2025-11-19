'use client';

import Image from 'next/image';
import CSSAnimatedSection from '@/components/ui/css-animated-section';
import { useState } from 'react';
import { BottomSheet, BottomSheetContent } from '@/components/ui/bottom-sheet';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/contact-form-reusable';

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
  const [isContactOpen, setIsContactOpen] = useState(false);

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
        <CSSAnimatedSection animation="fadeInUp" delay={0.1}>
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-8 text-center">
              ¿Por qué elegir Legal Orbis para {areaTitle}?
            </h2>
          </div>
        </CSSAnimatedSection>

        <div className=" mx-auto space-y-6">
          {remainingParagraphs.map((paragraph, index) => (
            <CSSAnimatedSection
              key={index}
              animation="fadeInUp"
              delay={0.15 + index * 0.1}
            >
              <p className="text-lg text-gray-200 leading-relaxed">
                {paragraph}
              </p>
            </CSSAnimatedSection>
          ))}
        </div>

        <CSSAnimatedSection animation="fadeInUp" delay={0.8}>
          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg mb-6">
              ¿Necesitas un abogado especializado en {areaTitle}?
            </p>
            <BottomSheet open={isContactOpen} onOpenChange={setIsContactOpen}>
              <Button
                onClick={() => setIsContactOpen(true)}
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Contacta con nosotros
              </Button>
              <BottomSheetContent className="bg-white">
                <ContactForm
                  showTitle={false}
                  onSuccess={() => setIsContactOpen(false)}
                  className="py-6"
                />
              </BottomSheetContent>
            </BottomSheet>
          </div>
        </CSSAnimatedSection>
      </div>
    </section>
  );
};

export default AreaWhyChoose;
