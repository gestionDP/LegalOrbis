'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

interface RelatedArea {
  id: string;
  title: string;
  description: string;
}

interface AreaRelatedLinksProps {
  currentAreaId: string;
  relatedAreas: RelatedArea[];
}

const AreaRelatedLinks = ({
  currentAreaId,
  relatedAreas,
}: AreaRelatedLinksProps) => {
  // Filtrar el área actual y limitar a 3 áreas relacionadas
  const filteredAreas = relatedAreas
    .filter((area) => area.id !== currentAreaId)
    .slice(0, 3);

  if (filteredAreas.length === 0) return null;

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: '#1A3635' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      <div className="container-max relative z-10">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.5}>
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <ArrowRight className="w-5 h-5 text-white mr-3" />
              <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                Otras áreas jurídicas
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-white">
              También te pueden interesar
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredAreas.map((area, index) => (
            <AnimatedSection
              key={area.id}
              animation="fadeInScale"
              delay={0.15 + index * 0.1}
              duration={0.5}
            >
              <Link
                href={`/areas-juridicas/${area.id}`}
                className="block group h-full"
              >
                <div className="bg-white/5 border border-white/10 p-8 h-full hover:bg-[#1a5f5f] hover:border-[#1a5f5f] transition-all duration-300 flex flex-col rounded-lg">
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 grow group-hover:text-white/90">
                    {area.description}
                  </p>
                  <div className="flex items-center text-white font-medium">
                    <span className="mr-2">Conocer más</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreaRelatedLinks;
