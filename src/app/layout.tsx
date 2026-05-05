import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_INDEXED } from '@/lib/constants'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import DemoBanner from '@/components/DemoBanner'
import WhatsAppButton from '@/components/WhatsAppButton'
import JsonLd from '@/components/seo/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Centros Veterinarios Madrivet | Veterinario en Madrid',
    template: '%s | Madrivet — Veterinarios en Madrid',
  },
  description:
    'Veterinario en Madrid con más de 15 años de experiencia. Medicina preventiva, cirugía y Planes de Salud. Sedes en Valdezarza y Vallehermoso. Pide cita.',
  keywords: ['veterinario Madrid', 'clínica veterinaria Madrid', 'Madrivet', 'Planes de Salud veterinario'],
  authors: [{ name: 'Centros Veterinarios Madrivet' }],
  openGraph: {
    title: 'Centros Veterinarios Madrivet | Veterinario en Madrid',
    description:
      'Clínica veterinaria en Madrid con más de 15 años de experiencia. Medicina preventiva, cirugía y Planes de Salud. Sedes en Tetuán y Vallehermoso.',
    url: 'https://madrivet-web.vercel.app',
    siteName: 'Centros Veterinarios Madrivet',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centros Veterinarios Madrivet | Veterinario en Madrid',
    description:
      'Clínica veterinaria en Madrid con más de 15 años de experiencia. Medicina preventiva, cirugía y Planes de Salud. Sedes en Tetuán y Vallehermoso.',
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
  alternates: {
    canonical: 'https://madrivet-web.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <DemoBanner />
        <JsonLd />
      </body>
    </html>
  )
}
