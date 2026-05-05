'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const points = [
  'Plan adaptado a las necesidades de cada animal',
  'Medicina preventiva como base de la salud a largo plazo',
  'Gestión de la salud metabólica y orgánica',
  'Reducción del coste global respecto a visitas puntuales',
  'Seguimiento continuo por el mismo equipo veterinario',
]

export default function HealthPlansPromo() {
  return (
    <section className="bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              ¿Conoces nuestros Planes de Salud?
            </h2>
            <p className="text-blue-200 text-lg mb-6">
              La forma más inteligente de cuidar a tu mascota. Planes personalizados que incluyen medicina preventiva, controles periódicos y todo lo que tu animal necesita — con el beneficio de gestionar mejor el coste anual.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-blue-100">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/planes-de-salud"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-md"
            >
              Descubrir los Planes de Salud
            </Link>
          </motion.div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
          >
            <Image
              src="/assets/equipo_foto.jpg"
              alt="Equipo veterinario de Madrivet"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
