'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/animated-section';

const AreasJuridicas = () => {
  const [openArea, setOpenArea] = useState<string | null>(null);

  const areas = [
    {
      id: 'penal',
      title: 'Derecho Penal',
      number: '01',
      description:
        'Defensa especializada en delitos de todo tipo. Ofrecemos asesoramiento integral y representación legal en procesos penales.',
      image: '/images/jpg/hero-carousel-1.jpg',
      services: [
        'Delitos contra la vida',
        'Delitos contra la libertad sexual',
        'Delitos contra el patrimonio',
        'Delitos contra la salud pública',
        'Delitos económicos y societarios',
        'Delitos contra la administración pública',
        'Delitos informáticos',
        'Violencia de género',
        'Delitos contra la seguridad vial',
        'Delitos contra el medio ambiente',
      ],
    },
    {
      id: 'civil',
      title: 'Derecho Civil',
      number: '02',
      description:
        'Asesoramiento en relaciones jurídicas privadas. Herencias, matrimonial, reclamaciones de cantidad y más.',
      image: '/images/jpg/hero-carousel-2.jpg',
      services: [
        'Herencias y sucesiones',
        'Derecho matrimonial y familiar',
        'Reclamaciones de cantidad',
        'Responsabilidad civil',
        'Derecho inmobiliario',
        'Contratos civiles',
        'Derecho de daños',
        'Derecho de consumo',
        'Derecho de personas',
        'Derecho de obligaciones',
      ],
    },
    {
      id: 'laboral',
      title: 'Derecho Laboral',
      number: '03',
      description:
        'Protección de derechos laborales. Despidos, reclamaciones de cantidad, derechos de conciliación y clasificación profesional.',
      image: '/images/jpg/hero-carousel-3.jpg',
      services: [
        'Despidos y extinciones',
        'Reclamaciones de cantidad',
        'Derechos de conciliación de vida laboral y personal',
        'Clasificación profesional',
        'Discriminación laboral',
        'Accidentes de trabajo',
        'Negociación colectiva',
        'Derecho sindical',
        'Inspección de trabajo',
        'Derecho de la seguridad social',
      ],
    },
    {
      id: 'penitenciario',
      title: 'Derecho Penitenciario',
      number: '04',
      description:
        'Contamos con experiencia en expedientes penitenciarios sustanciados en la Audiencia Nacional (Bárcenas, etc).',
      image: '/images/jpg/hero-carousel-1.jpg',
      services: [
        'Expedientes penitenciarios sustanciados en la Audiencia Nacional',
        'Recursos de amparo penitenciario',
        'Solicitudes de libertad condicional',
        'Clasificación penitenciaria',
        'Régimen de visitas',
        'Permisos penitenciarios',
        'Recursos contra sanciones disciplinarias',
        'Asistencia jurídica penitenciaria',
      ],
    },
  ];

  const toggleArea = (areaId: string) => {
    setOpenArea(openArea === areaId ? null : areaId);
  };

  return (
    <section
      id="areas-juridicas"
      className="section-padding"
      style={{ backgroundColor: '#0B0B0B' }}
    >
      <div className="container-max">
        <div className="mb-16">
          <AnimatedSection animation="fadeInLeft" delay={0.1}>
            <div className="flex items-center mb-8">
              <ArrowRight className="w-5 h-5 text-white mr-3" />
              <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                Nuestras áreas
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <h2 className="text-4xl lg:text-6xl font-light text-white leading-tight">
              Ofrecemos una gama de servicios jurídicos estratégicos
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {areas.map((area, index) => {
            const isOpen = openArea === area.id;

            return (
              <AnimatedSection
                key={area.id}
                animation="fadeInScale"
                delay={0.2 + index * 0.05}
                duration={0.5}
              >
                <div
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => toggleArea(area.id)}
                >
                  <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={80}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                  </div>

                  <div className="absolute inset-0 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-white text-sm sm:text-md mb-4 sm:mb-6">
                        {area.number}
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-white">
                        <div>Derecho</div>
                        <div>{area.title.replace('Derecho ', '')}</div>
                      </h3>
                    </div>

                    <div>
                      <p className="text-white leading-relaxed mb-6 sm:mb-10 max-w-md text-sm sm:text-base lg:text-lg">
                        {area.description}
                      </p>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          const element = document.getElementById('contacto');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium"
                      >
                        CONOCER MÁS
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 bg-white transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-8">
                      <h4 className="text-lg font-semibold text-black mb-4">
                        Servicios que ofrecemos:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {area.services.map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center text-gray-700 text-sm"
                          >
                            <div className="w-2 h-2 bg-[#1a5f5f] rounded-full mr-3 shrink-0" />
                            {service}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const element = document.getElementById('contacto');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#1a5f5f] text-white px-6 py-3 font-semibold text-sm hover:bg-[#1a5f5f]/90 transition-colors duration-200"
                      >
                        CONSULTAR CASO
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AreasJuridicas;
