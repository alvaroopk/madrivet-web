'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

// Reemplazar con reseñas reales de Google Maps
const testimonials = [
  {
    text: 'Llevamos a nuestra perra Luna a Madrivet desde hace 5 años y nunca nos han fallado. El equipo es increíble y siempre nos explican todo con paciencia.',
    author: 'María G.',
    location: 'Tetuán',
  },
  {
    text: 'Gracias al Plan de Salud de Madrivet detectaron un problema en el hígado de nuestro gato a tiempo. No podría recomendar más esta clínica.',
    author: 'Carlos M.',
    location: 'Chamberí',
  },
  {
    text: 'Profesionales de verdad. Nuestro perro es muy nervioso y siempre le tratan con una calma y un cariño que nos da mucha tranquilidad.',
    author: 'Ana R.',
    location: 'Vallehermoso',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 de 5 estrellas">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-text-muted text-lg">
            Más de 15 años cuidando mascotas y familias en Madrid
          </p>
        </motion.div>

        {/* Desktop grid / Mobile horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <Stars />
              <p className="text-text-muted text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.author}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 shrink-0 w-[85vw] snap-start"
            >
              <Stars />
              <p className="text-text-muted text-sm leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{t.author}</p>
                  <p className="text-xs text-text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
