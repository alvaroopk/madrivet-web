import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/assets/perros.jpg"
        alt="Mascotas felices en Madrivet"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Tu mascota merece el mejor veterinario en Madrid
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Dos clínicas en Tetuán y Vallehermoso. Más de 15 años cuidando a las mascotas de las familias madrileñas con profesionalidad y cariño.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contacto"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            Pedir cita ahora
          </Link>
          <Link
            href="/planes-de-salud"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Ver nuestros Planes de Salud
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
