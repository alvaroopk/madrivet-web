import type { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Shield, MapPin } from 'lucide-react'
import CTAFinal from '@/components/sections/CTAFinal'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Centros Veterinarios Madrivet',
  description:
    'Conoce al equipo de Madrivet: veterinarios con más de 15 años de experiencia en Madrid, formación continua y vocación por el cuidado animal.',
}

const values = [
  {
    icon: Shield,
    title: 'Confianza',
    desc: 'Somos el veterinario de referencia de tu familia. Te explicamos todo con claridad y honestidad.',
  },
  {
    icon: Heart,
    title: 'Profesionalidad',
    desc: 'Formación continua y protocolos rigurosos para garantizar la mejor atención clínica.',
  },
  {
    icon: MapPin,
    title: 'Cercanía',
    desc: 'Dos clínicas accesibles en Madrid y un trato humano que marca la diferencia.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                Conoce al equipo que cuida a tu mascota
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed">
                Somos veterinarios con vocación. Más de 15 años de experiencia y formación continua al servicio de las mascotas y sus familias en Madrid.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/equipo_foto.jpg"
                alt="Equipo veterinario de Madrivet"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historia y valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-text mb-4">
                Más de 15 años cuidando lo que más quieres
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                Madrivet nació de la convicción de que cada mascota merece una atención veterinaria de verdad: profesional, personalizada y cercana. Desde nuestros inicios, hemos construido una clínica donde el bienestar animal es la prioridad absoluta.
              </p>
              <p className="text-text-muted leading-relaxed text-lg mt-4">
                Hoy, con dos centros en Madrid y un equipo en constante formación, seguimos fieles a esa misión. Asistimos regularmente a congresos y cursos especializados para mantenernos a la vanguardia de la medicina veterinaria — porque tu mascota se merece lo mejor.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/clinica_interior3.jpg"
                alt="Interior de la clínica Madrivet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-bg rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-text text-lg mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-text mb-3">
              Las personas detrás de Madrivet
            </h2>
            <p className="text-text-muted text-lg">
              Conoce a los profesionales que cuidan cada día de las mascotas de Madrid.
            </p>
          </div>
          {/* TODO: Reemplazar con fichas individuales del equipo cuando la clínica proporcione los datos */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/equipo_madrivet.jpg"
                alt="Equipo de Madrivet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/equipo_foto.jpg"
                alt="Veterinarios de Madrivet en consulta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <p className="text-center text-text-muted mt-6 text-sm italic">
            El equipo Madrivet está formado por veterinarios especializados con años de experiencia. Los perfiles individuales se activarán una vez confirmados los datos por la clínica.
          </p>
        </div>
      </section>

      {/* Royal Canin */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-text mb-4">
            Nutrición de calidad con Royal Canin
          </h2>
          <p className="text-text-muted leading-relaxed mb-6">
            En Madrivet trabajamos con Royal Canin, líder mundial en nutrición veterinaria. Esto nos permite ofrecerte asesoramiento nutricional respaldado por la investigación y la ciencia, adaptado a las necesidades específicas de tu mascota según su raza, tamaño y estado de salud.
          </p>
          <a
            href="https://www.royalcanin.com/es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-semibold hover:text-secondary transition-colors underline"
          >
            Conoce más sobre Royal Canin
          </a>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
