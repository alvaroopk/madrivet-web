export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Centros Veterinarios Madrivet',
    description: 'Centros veterinarios en Madrid con más de 15 años de experiencia. Sedes en Valdezarza y Vallehermoso.',
    url: 'https://madrivet-web.vercel.app',
    telephone: '+34913115804',
    email: 'info@madrivet.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C/ Francos Rodríguez, 22',
      addressLocality: 'Madrid',
      addressRegion: 'Madrid',
      addressCountry: 'ES',
    },
    sameAs: ['https://madrivet.com'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
