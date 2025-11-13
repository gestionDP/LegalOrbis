'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BottomSheet, BottomSheetContent } from '@/components/ui/bottom-sheet';
import AnimatedSection from '@/components/ui/animated-section';
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
              <AnimatedSection
                animation="fadeInRight"
                delay={0.1}
                duration={0.5}
              >
                <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-8">
                  Cuéntanos tu caso. Empieza a resolver tu problema hoy
                </h2>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInRight"
                delay={0.15}
                duration={0.5}
              >
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  Contacta con nosotros y te agendaremos una cita presencial lo
                  antes posible para analizar tu caso en profundidad y con total
                  confidencialidad. Según la naturaleza del asunto, varios de
                  nuestros especialistas podrán participar en la reunión para
                  alcanzar la mejor estrategia jurídica.
                </p>
              </AnimatedSection>

              <AnimatedSection
                animation="fadeInScale"
                delay={0.2}
                duration={0.5}
              >
                <BottomSheet open={isOpen} onOpenChange={setIsOpen}>
                  <Button
                    onClick={() => setIsOpen(true)}
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4"
                  >
                    CONTACTA CON LEGAL ORBIS
                  </Button>

                  <BottomSheetContent className="bg-white">
                    <ContactForm onSuccess={() => setIsOpen(false)} />
                  </BottomSheetContent>
                </BottomSheet>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBanner;
