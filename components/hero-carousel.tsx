'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/animated-section';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/jpg/Legal_01-27.jpg',
      title: 'Un equipo a la vanguardia del Derecho',
      subtitle: 'Experiencia, profesionalidad y compromiso',
      description:
        'Somos un despacho formado por un equipo multidisciplinar de abogados especializados en las principales ramas del Derecho.',
    },
    {
      id: 2,
      image: '/images/jpg/Legal_01-32.jpg',
      title: 'Defensa integral y rigurosa',
      subtitle: 'Abordamos cada caso con estrategia personalizada',
      description:
        'Nuestro equipo combina experiencia, profesionalidad y compromiso con una constante actualización en los nuevos recursos jurídicos.',
    },
    {
      id: 3,
      image: '/images/jpg/Legal_01-117.jpg',
      title: 'Transparencia y confianza mutua',
      subtitle: 'La base de nuestro trabajo',
      description:
        'Cada abogado de Legal Orbis cuenta con conocimientos técnico-jurídicos específicos para ofrecer una opinión plural y complementaria.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                quality={85}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative h-full flex items-center">
              <div className="container-max px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <AnimatedSection animation="fadeInUp" autoAnimate>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white mb-8">
                      {slide.subtitle}
                    </p>
                    <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
