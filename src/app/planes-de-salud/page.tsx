import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Baby, Dog, Clock } from 'lucide-react'
import FaqAccordion from '@/components/FaqAccordion'

export const metadata: Metadata = {
  title: 'Planes de Salud para Mascotas | Madrivet Madrid',
  description:
    'Planes de Salud veterinarios personalizados en Madrid. Madrivet ofrece programas de cuidado preventivo para tu mascota con seguimiento continuo y reducción del coste anual.',
}

const included = [
  'Revisiones periódicas completas',
  'Vacunaciones según calendario',
  'Controles analíticos de rutina',
  'Seguimiento de la salud metabólica y orgánica',
  'Asesoramiento nutricional',
  'Atención preferente para titulares del plan',
  'Reducción del coste global frente a visitas individuales',
]

const profiles = [
  {
    icon: Baby,
    title: 'Cachorro o gatito',
    desc: 'El mejor inicio de vida. Establecemos las bases de su salud desde el primer día.',
  },
  {
    icon: Dog,
    title: 'Adulto sano',
    desc: 'Mantenimiento y prevención. Detectamos cualquier cambio antes de que se convierta en problema.',
  },
  {
    icon: Clock,
    title: 'Senior',
    desc: 'Cuidado especial para mascotas mayores. Control más frecuente de las funciones vitales y órganos principales.',
  },
]

const faqs = [
  {
    question: '¿Cuánto cuesta un Plan de Salud?',
    answer:
      'El coste varía según las necesidades de tu mascota. Contáctanos para recibir una propuesta personalizada sin compromiso.',
  },
  {
    question: '¿Puedo cambiar de plan si cambia la situación de mi mascota?',
    answer:
      'Sí. Adaptamos el plan en cualquier momento según la evolución de tu animal.',
  },
  {
    question: '¿Los planes incluyen urgencias?',
    answer:
      'Los planes están orientados a la medicina preventiva. Para urgencias disponemos de servicio de atención en horario de clínica.',
  },
  {
    question: '¿Hay permanencia mínima?',
    answer:
      'Consulta con nuestro equipo las condiciones específicas de cada plan.',
  },
]

export default function PlanesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <Image
          src="/assets/perros.jpg"
          alt="Perros felices con su plan de salud Madrivet"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 text-white">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-5">
            La forma más inteligente de cuidar a tu mascota
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
            Los Planes de Salud de Madrivet son programas de cuidado preventivo personalizados que mantienen a tu mascota sana — y a ti tranquilo — durante todo el año.
          </p>
          <Link
            href="/contacto?asunto=planes"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Solicitar información sobre Planes
          </Link>
        </div>
      </section>

      {/* Qué incluyen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-text mb-4">
                Todo lo que tu mascota necesita, en un solo plan
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Nuestros Planes de Salud siguen los protocolos de medicina preventiva más actualizados y se adaptan a las características individuales de cada animal. El objetivo es simple: mantener a tu mascota en el mejor estado de salud posible, detectar cualquier problema a tiempo y gestionar su salud de forma proactiva.
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/assets/equipo_foto.jpg"
                alt="Veterinarios Madrivet con mascota en consulta"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Perfiles */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-text mb-3">Un plan para cada mascota</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {profiles.map((p) => {
              const Icon = p.icon
              return (
                <div key={p.title} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-text text-lg mb-2">{p.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contacto?asunto=planes"
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Preguntar por mi plan
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-text">Preguntas frecuentes</h2>
          </div>
          <FaqAccordion items={faqs} />
          <p className="text-center mt-6">
            <Link href="/contacto" className="text-primary font-semibold hover:text-secondary transition-colors">
              ¿Más preguntas? Escríbenos →
            </Link>
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4">Empieza a cuidar a tu mascota como se merece</h2>
          <p className="text-blue-200 text-lg mb-8">
            Solicita información sin compromiso. Te explicamos todos los detalles y buscamos el plan que mejor se adapta a tu mascota.
          </p>
          <Link
            href="/contacto?asunto=planes"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-md"
          >
            Solicitar información
          </Link>
        </div>
      </section>
    </>
  )
}
