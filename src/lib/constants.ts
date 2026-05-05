export const SITE_INDEXED = false
export const ORIGINAL_URL = 'https://madrivet.com'

export const SITE_NAME = 'Centros Veterinarios Madrivet'
export const SITE_DESCRIPTION =
  'Centros veterinarios en Madrid con más de 15 años de experiencia. Sedes en Valdezarza y Vallehermoso. Medicina preventiva, cirugía y Planes de Salud para tu mascota.'

export const CONTACT = {
  email: 'info@madrivet.com',
  whatsapp: '+34913115804',
  whatsappMessage: 'Hola%2C%20me%20gustaría%20obtener%20información%20sobre%20vuestros%20servicios%20veterinarios.',
}

export const CLINICS = [
  {
    name: 'Clínica Valdezarza — Tetuán',
    slug: 'valdezarza',
    address: 'Calle de Villaamil, 74. 28039 Madrid',
    phone: '913 115 804',
    phoneRaw: '913115804',
    schedule: [
      { days: 'Lunes a Viernes', hours: '09:30 – 20:30' },
      { days: 'Sábados', hours: '10:30 – 13:30' },
      { days: 'Domingos y festivos', hours: 'Cerrado' },
    ],
    metro: 'Metro Valdezarza, Línea 7 (verde). Autobús líneas 44 y 66.',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.5!2d-3.7145!3d40.4582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288b1c9fa7d9%3A0x0!2sCalle%20de%20Villaamil%2C%2074%2C%2028039%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses',
    mapsUrl: 'https://maps.google.com/?q=Calle+de+Villaamil+74+28039+Madrid',
    interiorImage: '/assets/clinica_interior1.jpg',
    fachadaImage: '/assets/clinica_fachada.png',
  },
  {
    name: 'Clínica Vallehermoso — Canal',
    slug: 'vallehermoso',
    address: 'Calle Vallehermoso, 98. 28003 Madrid',
    phone: '915 533 012',
    phoneRaw: '915533012',
    schedule: [
      { days: 'Lunes a Viernes', hours: '10:30 – 14:00 / 17:00 – 20:30' },
      { days: 'Sábados', hours: 'Cerrado' },
      { days: 'Domingos y festivos', hours: 'Cerrado' },
    ],
    metro: 'Metro Canal (Líneas 2 y 7) o Islas Filipinas (L7). Autobús líneas 2, 44 y 121.',
    mapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.1!2d-3.7083!3d40.4352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a7b0000001%3A0x0!2sCalle%20Vallehermoso%2C%2098%2C%2028003%20Madrid!5e0!3m2!1ses!2ses!4v1700000000001!5m2!1ses!2ses',
    mapsUrl: 'https://maps.google.com/?q=Calle+Vallehermoso+98+28003+Madrid',
    interiorImage: '/assets/clinica_interior2.jpg',
    fachadaImage: '/assets/clinica_interior3.jpg',
  },
]

export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/planes-de-salud', label: 'Planes de Salud' },
  { href: '/clinicas', label: 'Clínicas' },
  { href: '/contacto', label: 'Contacto' },
]
