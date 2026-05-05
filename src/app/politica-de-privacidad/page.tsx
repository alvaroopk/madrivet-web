import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Centros Veterinarios Madrivet.',
}

export default function PoliticaPrivacidadPage() {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue">
        <h1 className="text-3xl font-extrabold text-text mt-8 mb-6">Política de Privacidad</h1>
        <p className="text-text-muted">
          <strong>Responsable del tratamiento:</strong> Centros Veterinarios Madrivet<br />
          <strong>Email de contacto:</strong> info@madrivet.com
        </p>
        <p className="text-text-muted">
          Este sitio web es una demostración elaborada por WebRebuild. La política de privacidad definitiva deberá ser redactada conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos (LOPDGDD) por un profesional jurídico antes de la publicación definitiva.
        </p>
        <p className="text-text-muted">
          Los datos personales facilitados a través del formulario de contacto serán utilizados exclusivamente para gestionar la solicitud del usuario y no serán cedidos a terceros.
        </p>
      </div>
    </section>
  )
}
