import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal de Centros Veterinarios Madrivet.',
}

export default function AvisoLegalPage() {
  return (
    <section className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-blue">
        <h1 className="text-3xl font-extrabold text-text mt-8 mb-6">Aviso Legal</h1>
        <p className="text-text-muted">
          <strong>Titular del sitio web:</strong> Centros Veterinarios Madrivet<br />
          <strong>Email de contacto:</strong> info@madrivet.com
        </p>
        <p className="text-text-muted">
          Este sitio web es una demostración elaborada por WebRebuild. Los textos legales definitivos deberán ser redactados por un profesional jurídico y validados por el titular del negocio antes de la publicación definitiva del sitio.
        </p>
        <p className="text-text-muted">
          El acceso y uso de este sitio web implica la aceptación de las condiciones de uso establecidas en este aviso legal.
        </p>
      </div>
    </section>
  )
}
