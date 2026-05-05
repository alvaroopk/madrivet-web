import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'
import { CLINICS } from '@/lib/constants'

export default function CTAFinal() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src="/assets/gato.jpg"
        alt="Gato feliz en Madrivet"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          ¿Listo para dar el primer paso?
        </h2>
        <p className="text-blue-100 text-lg mb-10">
          Pide cita ahora en cualquiera de nuestras clínicas. Nuestro equipo estará encantado de atenderte.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Contactar ahora
          </Link>
          <a
            href={`tel:${CLINICS[0].phoneRaw}`}
            className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            {CLINICS[0].phone}
          </a>
        </div>
      </div>
    </section>
  )
}
