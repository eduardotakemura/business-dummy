'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Nome
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full p-3 rounded-lg bg-secondary"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 rounded-lg bg-secondary"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full p-3 rounded-lg bg-secondary"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium">
            Mensagem
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full p-3 rounded-lg bg-secondary"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 rounded-lg bg-theme-primary hover:bg-theme-primaryHover text-white font-semibold transition-colors duration-300"
        >
          Enviar Mensagem
        </button>
      </div>
    </form>
  )
}
