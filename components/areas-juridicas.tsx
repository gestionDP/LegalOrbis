'use client';

import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/animated-section';
import { areasData } from '@/lib/data/areas-juridicas';

const AreasJuridicas = () => {
  const [openArea, setOpenArea] = useState<string | null>(null);
  const router = useRouter();

  const areas = Object.values(areasData);

  const toggleArea = (areaId: string) => {
    setOpenArea(openArea === areaId ? null : areaId);
  };

  const navigateToAreaDetail = (areaId: string) => {
    router.push(`/areas-juridicas/${areaId}`);
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      alt={`Abogados ${area.title} en Madrid - Despacho Legal Orbis`}
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
                          navigateToAreaDetail(area.id);
                        }}
                        className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium"
                      >
                        CONOCER MÁS
                      </Button>
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
