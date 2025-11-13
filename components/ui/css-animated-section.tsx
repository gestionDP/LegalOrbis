'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface CSSAnimatedSectionProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale';
  delay?: number;
  className?: string;
}

export default function CSSAnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  className = '',
}: CSSAnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : 'opacity-0'
      }`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'both',
      }}
    >
      {children}
    </div>
  );
}
