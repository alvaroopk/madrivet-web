import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone, MapPin, Clock, Train } from 'lucide-react'
import { CLINICS } from '@/lib/constants'
import ClinicGallery from '@/components/ClinicGallery'
import CTAFinal from '@/components/sections/CTAFinal'

export const metadata: Metadata = {
  title: 'Nuestras Clínicas en Madrid | Madrivet',
  description:
    'Dos centros veterinarios en Madrid: Clínica Madrivet Valdezarza (Tetuán) y Clínica Madrivet Vallehermoso (Canal). Horarios, dirección y cómo llegar.',
}

export default function ClinicasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Image
          src="/assets/clinica_fachada.png"
          alt="Fachada clínica veterinaria Madrivet"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Encuentra tu clínica Madrivet más cercana
          </h1>
          <p className="text-blue-100 text-xl">
            Dos centros veterinarios en Madrid para estar siempre cerca de ti y de tu mascota.
          </p>
        </div>
      </section>

      {/* Clínicas */}
      {CLINICS.map((clinic, i) => (
        <section key={clinic.slug} className={`py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Info */}
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl font-extrabold text-text mb-6">{clinic.name}</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-text text-sm">Dirección</p>
                      <p className="text-text-muted">{clinic.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-text text-sm">Horario</p>
                      {clinic.schedule.map((s) => (
                        <p key={s.days} className="text-text-muted text-sm">
                          <span className="font-medium">{s.days}:</span> {s.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-text text-sm">Cómo llegar</p>
                      <p className="text-text-muted text-sm">{clinic.metro}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-text text-sm">Teléfono</p>
                      <a
                        href={`tel:${clinic.phoneRaw}`}
                        className="text-primary font-semibold hover:text-secondary transition-colors"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Llamar ahora
                  </a>
                  <a
                    href={clinic.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-primary text-primary text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    Abrir en Google Maps
                  </a>
                </div>
              </div>

              {/* Map + photo */}
              <div className={`space-y-4 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] shadow-md">
                  <Image
                    src={i === 0 ? '/assets/clinica_interior1.jpg' : '/assets/clinica_interior2.jpg'}
                    alt={`Interior de la clínica ${clinic.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md h-64">
                  <iframe
                    src={clinic.mapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa de ${clinic.name}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Galería */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-text mb-3">Nuestras instalaciones</h2>
            <p className="text-text-muted">
              Clínicas modernas y equipadas para ofrecerte la mejor atención veterinaria en Madrid.
            </p>
          </div>
          <ClinicGallery />
        </div>
      </section>

      <CTAFinal />
    </>
  )
}
