'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Scissors, Search, Apple, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Medicina Preventiva',
    desc: 'Seguimiento continuo del estado de salud de tu mascota para detectar cualquier problema antes de que se convierta en un problema mayor.',
  },
  {
    icon: Scissors,
    title: 'Cirugía',
    desc: 'Intervenciones quirúrgicas de todo tipo realizadas por veterinarios especializados en un entorno seguro y equipado.',
  },
  {
    icon: Search,
    title: 'Diagnóstico',
    desc: 'Pruebas diagnósticas avanzadas para identificar con precisión qué le ocurre a tu mascota y tomar la decisión clínica correcta.',
  },
  {
    icon: Apple,
    title: 'Nutrición y Alimentación',
    desc: 'Asesoramiento nutricional personalizado para que tu mascota tenga la dieta que realmente necesita según su raza, edad y estado de salud.',
  },
]

export default function HomeServices() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
                Todo lo que necesita tu mascota, en un mismo lugar
              </h2>
              <p className="text-text-muted mb-8">
                Desde la prevención hasta la cirugía, en Madrivet encontrarás el servicio adecuado para cada momento de la vida de tu animal.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((svc, i) => {
                const Icon = svc.icon
                return (
                  <motion.div
                    key={svc.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-text mb-1.5">{svc.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{svc.desc}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Ver todos los servicios <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
          >
            <Image
              src="/assets/clinica_interior1.jpg"
              alt="Interior de la clínica veterinaria Madrivet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
