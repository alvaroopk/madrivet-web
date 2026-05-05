import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import HomeServices from '@/components/sections/HomeServices'
import HealthPlansPromo from '@/components/sections/HealthPlansPromo'
import AboutPreview from '@/components/sections/AboutPreview'
import Testimonials from '@/components/sections/Testimonials'
import ClinicsPreview from '@/components/sections/ClinicsPreview'
import CTAFinal from '@/components/sections/CTAFinal'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Centros Veterinarios Madrivet | Veterinario en Madrid',
  description:
    'Centros veterinarios en Madrid con más de 15 años de experiencia. Sedes en Valdezarza y Vallehermoso. Medicina preventiva, cirugía y Planes de Salud para tu mascota.',
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustBar />
      <HomeServices />
      <HealthPlansPromo />
      <AboutPreview />
      <Testimonials />
      <ClinicsPreview />
      <CTAFinal />
    </>
  )
}
