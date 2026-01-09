'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BottomSheet, BottomSheetContent } from '@/components/ui/bottom-sheet';
import CSSAnimatedSection from '@/components/ui/css-animated-section';
import ContactForm from '@/components/contact-form-reusable';

const ContactBanner = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section id="contacto" className="relative h-auto overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src="/images/jpg/Legal_01-3.jpg"
            alt="Contacta con Legal Orbis - Abogados especializados en Madrid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container-max px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl ml-auto">
              <CSSAnimatedSection animation="fadeInRight" delay={0.1}>
                <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-8">
                  Cuéntanos tu caso. Empieza a resolver tu problema hoy
                </h2>
              </CSSAnimatedSection>

              <CSSAnimatedSection animation="fadeInRight" delay={0.2}>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Contacta con nosotros y te agendaremos una cita presencial lo
                  antes posible para analizar tu caso en profundidad y con total
                  confidencialidad. Según la naturaleza del asunto, varios de
                  nuestros especialistas podrán participar en la reunión para
                  alcanzar la mejor estrategia jurídica.
                </p>
              </CSSAnimatedSection>

              <CSSAnimatedSection animation="fadeInScale" delay={0.3}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="shrink-0">
                    <a
                      href="tel:+34916841454"
                      className="text-2xl lg:text-3xl font-bold text-white hover:text-gray-200 transition-colors duration-200 inline-flex items-center gap-3"
                    >
                      <svg
                        className="w-6 h-6 lg:w-7 lg:h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      +34 916 84 14 54
                    </a>
                    <p className="text-lg text-white mt-2 font-medium">
                      Primera consulta gratuita
                    </p>
                  </div>
                  <div className="shrink-0">
                    <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
                      <Button
                        onClick={() => setIsOpen(true)}
                        size="lg"
                        className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 w-full lg:w-auto"
                      >
                        CONTACTAR
                      </Button>

                      <BottomSheetContent className="bg-white">
                        <ContactForm onSuccess={() => setIsOpen(false)} />
                      </BottomSheetContent>
                    </BottomSheet>
                  </div>
                </div>
              </CSSAnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
