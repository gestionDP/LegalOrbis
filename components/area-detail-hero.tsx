'use client';

import { ArrowRight } from 'lucide-react';
import CSSAnimatedSection from '@/components/ui/css-animated-section';

interface AreaDetailHeroProps {
  area: {
    id: string;
    title: string;
    number: string;
    subtitle: string;
    description: string;
  };
}

const AreaDetailHero = ({ area }: AreaDetailHeroProps) => {
  return (
    <section
      className="relative py-20 lg:py-32"
      style={{ backgroundColor: '#1A3635' }}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <CSSAnimatedSection animation="fadeInLeft" delay={0.1}>
              <div className="flex items-center mb-8">
                <ArrowRight className="w-5 h-5 text-white mr-3" />
                <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                  {area.subtitle}
                </span>
              </div>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInUp" delay={0.2}>
              <h1 className="text-3xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-8">
                {area.title}
              </h1>
            </CSSAnimatedSection>

            <CSSAnimatedSection animation="fadeInUp" delay={0.3}>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                {area.description}
              </p>
            </CSSAnimatedSection>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <CSSAnimatedSection animation="fadeInScale" delay={0.4}>
              <div className="relative">
                <div
                  className="text-[150px] lg:text-[200px] xl:text-[250px] font-light text-white/10 select-none"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    lineHeight: '0.8',
                    textShadow: '0 0 50px rgba(255,255,255,0.1)',
                  }}
                >
                  {area.number}
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"
                  style={{
                    width: '200px',
                    height: '200px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>
            </CSSAnimatedSection>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-white/3 rounded-full blur-2xl" />
      </div>
    </section>
  );
};

export default AreaDetailHero;
