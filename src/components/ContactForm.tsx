'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  nombre: string
  telefono: string
  email: string
  codigoPostal?: string
  asunto: string
  mensaje?: string
}

export default function ContactForm({ defaultAsunto }: { defaultAsunto?: string }) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: { asunto: defaultAsunto || 'pedir-cita' },
  })

  const onSubmit = async (data: FormData) => {
    try {
      // Construir mailto como fallback sin exposición directa del email
      const subject = encodeURIComponent(`[Web] ${data.asunto} — ${data.nombre}`)
      const body = encodeURIComponent(
        `Nombre: ${data.nombre}\nTeléfono: ${data.telefono}\nEmail: ${data.email}\nCódigo Postal: ${data.codigoPostal || 'No indicado'}\nAsunto: ${data.asunto}\n\nMensaje:\n${data.mensaje || 'Sin mensaje'}`
      )
      const mailto = `mailto:info@madrivet.com?subject=${subject}&body=${body}`
      const a = document.createElement('a')
      a.href = mailto
      a.click()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow'
  const errorClass = 'text-red-500 text-xs mt-1'

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === 'success' && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-green-700">
          <CheckCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">¡Mensaje preparado! Se abrirá tu cliente de correo para enviarlo.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-medium">Hubo un error. Por favor, llámanos directamente.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-text mb-1">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="nombre"
            type="text"
            className={inputClass}
            placeholder="Tu nombre"
            aria-required="true"
            aria-invalid={!!errors.nombre}
            {...register('nombre', { required: 'El nombre es obligatorio' })}
          />
          {errors.nombre && <p className={errorClass} role="alert">{errors.nombre.message}</p>}
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-text mb-1">
            Teléfono / Móvil <span className="text-red-500">*</span>
          </label>
          <input
            id="telefono"
            type="tel"
            className={inputClass}
            placeholder="600 000 000"
            aria-required="true"
            aria-invalid={!!errors.telefono}
            {...register('telefono', { required: 'El teléfono es obligatorio' })}
          />
          {errors.telefono && <p className={errorClass} role="alert">{errors.telefono.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="tu@email.com"
            aria-required="true"
            aria-invalid={!!errors.email}
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: { value: /\S+@\S+\.\S+/, message: 'Email no válido' },
            })}
          />
          {errors.email && <p className={errorClass} role="alert">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="codigoPostal" className="block text-sm font-medium text-text mb-1">
            Código Postal <span className="text-text-muted text-xs font-normal">(opcional)</span>
          </label>
          <input
            id="codigoPostal"
            type="text"
            className={inputClass}
            placeholder="28039"
            {...register('codigoPostal')}
          />
        </div>
      </div>

      <div>
        <label htmlFor="asunto" className="block text-sm font-medium text-text mb-1">
          Asunto <span className="text-red-500">*</span>
        </label>
        <select
          id="asunto"
          className={inputClass}
          aria-required="true"
          {...register('asunto', { required: 'Selecciona un asunto' })}
        >
          <option value="pedir-cita">Pedir cita</option>
          <option value="planes">Información Planes de Salud</option>
          <option value="consulta-general">Consulta general</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-sm font-medium text-text mb-1">
          Mensaje <span className="text-text-muted text-xs font-normal">(opcional)</span>
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className={inputClass}
          placeholder="Cuéntanos en qué podemos ayudarte..."
          {...register('mensaje')}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-bold py-3.5 px-6 rounded-lg transition-colors text-base"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
