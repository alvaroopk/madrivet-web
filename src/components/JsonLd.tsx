export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: 'Centros Veterinarios Madrivet',
    url: 'https://madrivet.com',
    logo: 'https://madrivet.com/assets/logo.jpg',
    email: 'info@madrivet.com',
    description:
      'Centros veterinarios en Madrid con más de 15 años de experiencia. Medicina preventiva, cirugía y Planes de Salud.',
    location: [
      {
        '@type': 'Place',
        name: 'Madrivet Valdezarza',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle de Villaamil, 74',
          addressLocality: 'Madrid',
          postalCode: '28039',
          addressCountry: 'ES',
        },
        telephone: '+34913115804',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:30',
            closes: '20:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:30',
            closes: '13:30',
          },
        ],
      },
      {
        '@type': 'Place',
        name: 'Madrivet Vallehermoso',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Calle Vallehermoso, 98',
          addressLocality: 'Madrid',
          postalCode: '28003',
          addressCountry: 'ES',
        },
        telephone: '+34915533012',
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '10:30',
            closes: '20:30',
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
