import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Áreas Jurídicas',
  description:
    'Conoce nuestras especialidades: Derecho Penal, Civil, Laboral, Mercantil y más. Abogados especializados en Madrid.',
  url: '/',
});

export default function AreasJuridicasPage() {
  redirect('/');
}




