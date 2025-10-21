'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setIsMobileMenuOpen(false);

      const sections = [
        'hero',
        'quienes-somos',
        'areas-juridicas',
        'experiencia',
        'contacto',
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { name: 'Quienes somos', href: 'quienes-somos' },
    { name: 'Áreas Jurídicas', href: 'areas-juridicas' },
    { name: 'Experiencia', href: 'experiencia' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-black/20 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 lg:h-20">
          <div className="flex items-center">
            <Link
              href="#hero"
              onClick={() => scrollToSection('hero')}
              className="flex items-center"
            >
              <Image
                src={
                  isScrolled
                    ? '/images/png/LegalOrbis.png'
                    : '/images/png/LegalOrbisWhite.png'
                }
                alt="Legal Orbis Abogados"
                width={220}
                height={40}
                priority
                className="w-24 sm:w-32 lg:w-[220px] h-auto"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 ml-auto">
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 rounded-none hover:bg-transparent ${
                    activeSection === item.href
                      ? isScrolled
                        ? 'text-[#1a5f5f] border-b-2 border-[#1a5f5f] pb-1'
                        : 'text-white border-b-2 border-white pb-1'
                      : isScrolled
                      ? 'text-[#1a5f5f] hover:text-[#1a5f5f]/70'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item.name}
                </Button>
              ))}
            </div>

            <div className="hidden lg:block">
              <Button
                variant="outline"
                onClick={() => scrollToSection('contacto')}
                className={`px-6 py-3 font-medium uppercase tracking-wide rounded-full transition-all duration-200 ${
                  isScrolled
                    ? 'border-[#1a5f5f] bg-[#1a5f5f] text-white hover:bg-[#1a5f5f]/90 hover:text-white'
                    : 'border-white bg-white text-[#1a5f5f] hover:bg-gray-100 hover:text-[#1a5f5f]'
                }`}
              >
                CONTACTAR
              </Button>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`transition-colors ${
                  isScrolled ? 'text-[#1a5f5f]' : 'text-white'
                }`}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className={`px-4 py-6 ${
              isScrolled
                ? 'bg-white/95 backdrop-blur-sm'
                : 'bg-black/20 backdrop-blur-sm'
            }`}
          >
            <div className="space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 ${
                    activeSection === item.href
                      ? isScrolled
                        ? 'text-[#1a5f5f] bg-[#1a5f5f]/10'
                        : 'text-white bg-white/10'
                      : isScrolled
                      ? 'text-[#1a5f5f] hover:bg-[#1a5f5f]/10'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection('contacto')}
                  className={`w-full py-3 font-medium uppercase tracking-wide rounded-full transition-all duration-200 ${
                    isScrolled
                      ? 'border-[#1a5f5f] bg-[#1a5f5f] text-white hover:bg-[#1a5f5f]/90'
                      : 'border-white bg-white text-[#1a5f5f] hover:bg-gray-100'
                  }`}
                >
                  CONTACTAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
