import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Scissors, Search, Apple, CheckCircle } from 'lucide-react'
import CTAFinal from '@/components/sections/CTAFinal'

export const metadata: Metadata = {
  title: 'Servicios Veterinarios en Madrid | Madrivet',
  description:
    'Servicios veterinarios completos en Madrid: medicina preventiva, cirugía, diagnóstico y nutrición. Madrivet en Valdezarza y Vallehermoso.',
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Image
          src="/assets/clinica_interior1.jpg"
          alt="Clínica veterinaria Madrivet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Todos los servicios que necesita tu mascota
          </h1>
          <p className="text-blue-100 text-xl">
            En Madrivet ofrecemos una atención veterinaria completa. Desde la prevención hasta la cirugía, estamos preparados para cada etapa de la vida de tu animal.
          </p>
        </div>
      </section>

      {/* Medicina Preventiva */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-extrabold text-text mb-4">Medicina Preventiva</h2>
              <p className="text-text-muted leading-relaxed mb-5">
                La mejor forma de cuidar a tu mascota es anticiparse a los problemas. Nuestro servicio de medicina preventiva incluye un seguimiento continuo del estado de salud de tu animal para detectar cualquier alteración antes de que se convierta en una enfermedad grave. Vacunaciones, controles periódicos, análisis de rutina y revisiones completas forman parte de un protocolo diseñado para que tu mascota viva más y mejor.
              </p>
              <ul className="space-y-2 mb-6">
                {['Detección precoz de enfermedades', 'Seguimiento personalizado por el mismo veterinario', 'Menos sustos y menos gasto a largo plazo', 'Tranquilidad para el dueño'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-text-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/planes-de-salud" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Consultar plan preventivo
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=1200&q=80"
                alt="Veterinaria examinando mascota en revisión preventiva"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes de Salud CTA */}
      <section className="py-14 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-3">Planes de Salud personalizados</h2>
          <p className="text-blue-200 mb-6">
            Nuestros Planes de Salud son un compromiso de cuidado continuo adaptado a las necesidades específicas de tu animal, con el objetivo de mantener su salud en las mejores condiciones y reducir el coste global de su atención veterinaria.
          </p>
          <Link href="/planes-de-salud" className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-xl transition-colors">
            Ver todos los Planes de Salud
          </Link>
        </div>
      </section>

      {/* Cirugía */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=1200&q=80"
                alt="Veterinario realizando cirugía"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Scissors className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-extrabold text-text mb-4">Cirugía Veterinaria</h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Contamos con quirófano equipado y veterinarios con formación específica en cirugía para realizar todo tipo de intervenciones con las máximas garantías de seguridad. Desde esterilizaciones hasta cirugías de mayor complejidad, en Madrivet tu mascota estará en las mejores manos.
              </p>
              <ul className="space-y-2 mb-6">
                {['Instalaciones quirúrgicas equipadas', 'Equipo veterinario con formación especializada', 'Seguimiento postoperatorio personalizado', 'Información clara antes, durante y después de la intervención'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-text-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Consultar sobre cirugía
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnóstico */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-extrabold text-text mb-4">Diagnóstico Veterinario</h2>
              <p className="text-text-muted leading-relaxed mb-5">
                Un diagnóstico correcto es el primer paso para un tratamiento eficaz. En Madrivet realizamos una amplia variedad de pruebas diagnósticas para identificar con precisión qué le ocurre a tu mascota y tomar las decisiones clínicas más adecuadas. Rapidez, precisión y claridad en los resultados.
              </p>
              <ul className="space-y-2 mb-6">
                {['Pruebas analíticas de sangre y orina', 'Diagnóstico por imagen', 'Resultados interpretados de forma comprensible', 'Coordinación con especialistas si es necesario'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-text-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Pedir cita para diagnóstico
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=80"
                alt="Análisis veterinario en laboratorio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nutrición */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=1200&q=80"
                alt="Mascota con alimentación saludable"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Apple className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-3xl font-extrabold text-text mb-4">Asesoramiento en Nutrición</h2>
              <p className="text-text-muted leading-relaxed mb-5">
                La alimentación es la base de la salud de tu mascota. En Madrivet, como clínica partner de Royal Canin, te ofrecemos asesoramiento nutricional profesional para que tu animal reciba la dieta exacta que necesita según su raza, edad, peso y estado de salud. Ni más, ni menos.
              </p>
              <ul className="space-y-2 mb-6">
                {['Dieta personalizada para cada mascota', 'Respaldo científico de Royal Canin', 'Control de peso y condición corporal', 'Seguimiento periódico de la respuesta a la dieta'].map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-text-muted text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contacto" className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                Consultar sobre nutrición
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
