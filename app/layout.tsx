import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legal Orbis Abogados - Despacho de Abogados Especializado",
  description: "Despacho multidisciplinar de abogados especializados en Derecho Penal, Civil, Laboral, Penitenciario y Mercantil. Experiencia, profesionalidad y compromiso.",
  keywords: "abogados, despacho jurídico, derecho penal, derecho civil, derecho laboral, derecho penitenciario, derecho mercantil, Madrid",
  authors: [{ name: "Legal Orbis Abogados" }],
  openGraph: {
    title: "Legal Orbis Abogados",
    description: "Despacho multidisciplinar de abogados especializados",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
