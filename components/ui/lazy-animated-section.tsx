'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

const animationVariants: Record<string, Variants> = {
  fadeInUp: {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeInDown: {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  fadeInLeft: {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fadeInRight: {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  fadeInScale: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

interface LazyAnimatedSectionProps {
  children: ReactNode;
  animation?: keyof typeof animationVariants;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function LazyAnimatedSection({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  className = '',
}: LazyAnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      variants={animationVariants[animation]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -50px 0px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
