import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { NAV_LINKS, CLINICS, CONTACT } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary text-white" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image
                  src="/assets/logo.jpg"
                  alt="Madrivet — Centros Veterinarios"
                  width={100}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed">
              Centros veterinarios en Madrid con más de 15 años de experiencia cuidando a tus mascotas.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Páginas</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clínicas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Nuestras clínicas</h3>
            <ul className="space-y-4">
              {CLINICS.map((clinic) => (
                <li key={clinic.slug}>
                  <p className="text-sm font-medium text-white mb-1">{clinic.name.split(' — ')[1]}</p>
                  <a
                    href={`tel:${clinic.phoneRaw}`}
                    className="flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    {clinic.phone}
                  </a>
                  <p className="flex items-start gap-1.5 text-sm text-blue-200 mt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                    {clinic.address}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/contacto"
                className="inline-block bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Pedir cita
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-blue-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Centros Veterinarios Madrivet. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso legal
            </Link>
            <Link href="/politica-de-privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
