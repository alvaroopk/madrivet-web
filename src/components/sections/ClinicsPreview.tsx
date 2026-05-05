'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { CLINICS } from '@/lib/constants'

export default function ClinicsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
            Dos clínicas en Madrid, siempre cerca de ti
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CLINICS.map((clinic, i) => (
            <motion.div
              key={clinic.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="relative h-48">
                <Image
                  src={i === 0 ? '/assets/clinica_fachada.png' : '/assets/clinica_interior2.jpg'}
                  alt={`Clínica Madrivet ${clinic.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-xl text-text mb-4">{clinic.name}</h3>
                <ul className="space-y-2.5 mb-5">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-text-muted">{clinic.address}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="text-sm text-text-muted">
                      {clinic.schedule.slice(0, 2).map((s) => (
                        <div key={s.days}><span className="font-medium">{s.days}:</span> {s.hours}</div>
                      ))}
                    </div>
                  </li>
                </ul>
                <div className="flex gap-3">
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Llamar
                  </a>
                  <Link
                    href="/clinicas"
                    className="flex-1 flex items-center justify-center gap-2 border border-primary text-primary text-sm font-semibold py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Cómo llegar <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
