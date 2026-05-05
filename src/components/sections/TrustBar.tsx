'use client'
import { motion } from 'framer-motion'
import { CalendarDays, MapPin, Heart, GraduationCap } from 'lucide-react'

const items = [
  { icon: CalendarDays, label: '+15 años de experiencia' },
  { icon: MapPin, label: '2 clínicas en Madrid' },
  { icon: Heart, label: 'Atención personalizada' },
  { icon: GraduationCap, label: 'Formación veterinaria continua' },
]

export default function TrustBar() {
  return (
    <section className="bg-white py-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-text">{item.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
