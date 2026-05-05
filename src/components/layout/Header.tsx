'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, CLINICS } from '@/lib/constants'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const transparent = isHome && !scrolled && !menuOpen

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div className={`rounded-lg overflow-hidden ${transparent ? '' : 'bg-primary p-1'}`}>
              <Image
                src="/assets/logo.jpg"
                alt="Madrivet — Centros Veterinarios"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  transparent
                    ? 'text-white hover:text-yellow-300'
                    : 'text-gray-700 hover:text-primary'
                } ${pathname === link.href ? (transparent ? 'text-yellow-300' : 'text-primary font-semibold') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINICS[0].phoneRaw}`}
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                transparent ? 'text-white hover:text-yellow-300' : 'text-primary hover:text-primary-dark'
              }`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {CLINICS[0].phone}
            </a>
            <Link
              href="/contacto"
              className="bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Pedir cita
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              transparent ? 'text-white hover:text-yellow-300' : 'text-gray-700 hover:text-primary'
            }`}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Menú móvil">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors ${
                  pathname === link.href ? 'text-primary font-semibold bg-blue-50' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 mt-1 border-t border-gray-200 flex flex-col gap-2">
              <a
                href={`tel:${CLINICS[0].phoneRaw}`}
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-semibold text-primary"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Llamar: {CLINICS[0].phone}
              </a>
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-white text-sm font-semibold px-4 py-2.5 rounded-lg text-center transition-colors hover:bg-accent-dark"
              >
                Pedir cita
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
