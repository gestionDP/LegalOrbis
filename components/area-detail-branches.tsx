'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';
import { getAreaBranches, type Branch } from '@/lib/data/areas-juridicas';

interface AreaDetailBranchesProps {
  area: {
    id: string;
    title: string;
  };
}

const AreaDetailBranches = ({ area }: AreaDetailBranchesProps) => {
  const [openBranch, setOpenBranch] = useState<string | null>(null);

  const toggleBranch = (branchId: string) => {
    setOpenBranch(openBranch === branchId ? null : branchId);
  };

  const branches = getAreaBranches(area.id);

  return (
    <section
      className="py-20 relative overflow-hidden"
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

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-start mb-16">
          <AnimatedSection animation="fadeInLeft" delay={0.1} duration={0.8}>
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-lg">⚖️</span>
              </div>
              <span className="text-sm font-medium uppercase tracking-wide text-gray-300">
                Especialización
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={0.3} duration={0.8}>
            <h2 className="text-3xl lg:text-4xl font-light text-white leading-tight">
              Ramas del {area.title}
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {branches.map((branch, index) => {
            const isOpen = openBranch === branch.id;
            return (
              <AnimatedSection
                key={branch.id}
                animation="fadeInScale"
                delay={0.5 + index * 0.1}
                duration={0.6}
              >
                <div className="border-b border-white/20 pb-6 group hover:border-white/40 transition-colors duration-300">
                  <div
                    className="cursor-pointer"
                    onClick={() => toggleBranch(branch.id)}
                  >
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center mr-4 mt-1 shrink-0 transition-all duration-300 group-hover:bg-white/20">
                        <ChevronDown
                          className={`w-4 h-4 text-white transition-all duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                          {branch.branch}
                        </h3>
                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {branch.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contenido expandible */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="ml-10 space-y-4">
                      <AnimatedSection
                        animation="fadeInUp"
                        delay={0.1}
                        duration={0.6}
                      >
                        <p className="text-gray-300 leading-relaxed">
                          {branch.details}
                        </p>
                      </AnimatedSection>

                      <AnimatedSection
                        animation="fadeInUp"
                        delay={0.2}
                        duration={0.6}
                      >
                        <div>
                          <h4 className="text-sm font-medium text-white mb-3 flex items-center">
                            <div className="w-2 h-2 bg-[#1a5f5f] rounded-full mr-2 animate-pulse" />
                            Servicios específicos:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {branch.services.map((service, serviceIndex) => (
                              <div
                                key={serviceIndex}
                                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                              >
                                <div
                                  className="w-1.5 h-1.5 bg-white/40 rounded-full mr-2 shrink-0 animate-pulse"
                                  style={{
                                    animationDelay: `${serviceIndex * 0.1}s`,
                                  }}
                                />
                                <span className="text-sm">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </AnimatedSection>
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

export default AreaDetailBranches;
