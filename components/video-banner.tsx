'use client';

import { ArrowRight } from 'lucide-react';
import CSSAnimatedSection from '@/components/ui/css-animated-section';

const VideoBanner = () => {
  return (
    <section id="video-banner" className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          Su navegador no soporta el elemento de video.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div>
            <CSSAnimatedSection animation="fadeInLeft" delay={0.1}>
              <div className="flex items-center mb-8">
                <ArrowRight className="w-5 h-5 text-white mr-3" />
                <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                  Conoce nuestro equipo
                </span>
              </div>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInUp" delay={0.15}>
              <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight mb-8">
                Nuestro equipo es nuestro mayor activo
              </h2>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInUp" delay={0.2}>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Formado por un grupo diverso de expertos con años de experiencia
                en las principales ramas del Derecho, estamos unidos por un
                compromiso compartido de crear un cambio positivo en la vida de
                nuestros clientes.
              </p>
            </CSSAnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
