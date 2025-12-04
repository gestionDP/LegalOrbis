import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { generateBaseMetadata } from '@/lib/seo/metadata';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateJsonLdScript,
} from '@/lib/seo/schema';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = generateBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <meta name="theme-color" content="#1A3635" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://legalorbisabogados.es" />

        {/* Favicon principal (archivo solicitado en /public/LegalOrbis.svg) */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://legalorbisabogados.es/LegalOrbis.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://legalorbisabogados.es/images/png/LegalOrbis.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://legalorbisabogados.es/images/png/LegalOrbis.png"
        />
        <link
          rel="shortcut icon"
          href="https://legalorbisabogados.es/LegalOrbis.svg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://legalorbisabogados.es/images/png/LegalOrbis.png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
