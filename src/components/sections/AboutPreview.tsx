'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl order-2 lg:order-1"
          >
            <Image
              src="/assets/nosotros.jpg"
              alt="Equipo de Madrivet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
              Veterinarios con vocación, profesionales de confianza
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Somos un equipo de veterinarios apasionados por los animales con más de 15 años de experiencia en Madrid. Nos formamos de manera continua, asistiendo a congresos y cursos para ofrecerte siempre la mejor atención. Porque tu mascota se merece lo mejor — y nosotros también lo creemos.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              Conoce a nuestro equipo <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
