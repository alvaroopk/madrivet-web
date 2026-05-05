import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { CLINICS, CONTACT } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto y Cita Previa | Madrivet Madrid',
  description:
    'Contacta con Madrivet en Madrid. Llámanos, escríbenos o visítanos en nuestras clínicas de Valdezarza o Vallehermoso. Pide cita para tu mascota.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contacta con nosotros</h1>
          <p className="text-blue-200 text-xl">
            Estamos aquí para ayudarte. Llámanos, escríbenos o visítanos en cualquiera de nuestros centros.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-extrabold text-text mb-6">Envíanos un mensaje</h2>
              <ContactForm />
            </div>

            {/* Contact info + clinics */}
            <div className="space-y-8">
              {/* Direct contact */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-text mb-5">También puedes contactarnos directamente</h2>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                      {CONTACT.email}
                    </a>
                  </li>
                  {CLINICS.map((clinic) => (
                    <li key={clinic.slug}>
                      <a
                        href={`tel:${clinic.phoneRaw}`}
                        className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                      >
                        <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                        <span>
                          <span className="font-medium text-text">{clinic.name.split(' — ')[1]}:</span>{' '}
                          {clinic.phone}
                        </span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp.replace(/\+/g, '')}?text=${CONTACT.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-semibold px-4 py-2.5 rounded-lg transition-colors text-white"
                      style={{ backgroundColor: '#25D366' }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 shrink-0" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Escríbenos por WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              {/* Clinics compact */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold text-text mb-5">Dónde encontrarnos</h2>
                <div className="space-y-6">
                  {CLINICS.map((clinic) => (
                    <div key={clinic.slug}>
                      <h3 className="font-semibold text-text mb-2">{clinic.name}</h3>
                      <div className="space-y-1.5 text-sm text-text-muted">
                        <p className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          {clinic.address}
                        </p>
                        <p className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                          <span>
                            {clinic.schedule.filter(s => s.hours !== 'Cerrado').map(s => `${s.days}: ${s.hours}`).join(' | ')}
                          </span>
                        </p>
                      </div>
                      <div className="mt-3 rounded-lg overflow-hidden h-40">
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
