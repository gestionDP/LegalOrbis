'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedSection from '@/components/ui/animated-section';

interface FAQItem {
  question: string;
  answer: string;
}

interface AreaFAQProps {
  faqs: FAQItem[];
  areaTitle: string;
}

const AreaFAQ = ({ faqs, areaTitle }: AreaFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-[#0B0B0B]">
      <div className="container-max">
        <AnimatedSection animation="fadeInUp" delay={0.1} duration={0.5}>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-light text-white mb-4">
              Preguntas Frecuentes sobre {areaTitle}
            </h2>
            <p className="text-lg text-gray-400">
              Resolvemos las dudas más comunes sobre nuestros servicios
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection
              key={index}
              animation="fadeInUp"
              delay={0.15 + index * 0.05}
              duration={0.5}
            >
              <div className="border-b border-white/10 last:border-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 flex items-start justify-between text-left hover:text-white transition-colors group"
                >
                  <span className="text-lg lg:text-xl font-medium pr-8 text-gray-200 group-hover:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 group-hover:text-white shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={0.4} duration={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              ¿Tienes más preguntas? Estamos aquí para ayudarte
            </p>
            <a
              href="#contacto"
              className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contacta con nosotros
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AreaFAQ;
