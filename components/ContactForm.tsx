'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactForm() {
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '', rgpd: false })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '')
    data.append('name', form.nom)
    data.append('email', form.email)
    data.append('subject', form.sujet || 'Nouveau message depuis le site ADM Avocats')
    data.append('message', form.message)
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
    if (res.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#f2f2f2] rounded-2xl p-10 text-center shadow-sm">
        <div className="w-10 h-[2px] bg-[#E5493D] mx-auto mb-6" />
        <p
          className="text-[#313e35] text-xl font-semibold mb-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Message envoyé
        </p>
        <p className="text-[#4d6263] text-sm">
          Nous prendrons contact avec vous dans les meilleurs délais.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 bg-[#f8f9f9] rounded-2xl p-6 md:p-8 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block text-[#313e35]/60 text-xs tracking-[0.15em] uppercase mb-2">
            Nom <span className="text-[#E5493D]">*</span>
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={form.nom}
            onChange={handleChange}
            className="w-full bg-white border border-[#313e35]/10 text-[#313e35] text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#E5493D]/60 placeholder-[#313e35]/30 transition-colors duration-200"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[#313e35]/60 text-xs tracking-[0.15em] uppercase mb-2">
            Email <span className="text-[#E5493D]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full bg-white border border-[#313e35]/10 text-[#313e35] text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#E5493D]/60 placeholder-[#313e35]/30 transition-colors duration-200"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sujet" className="block text-[#313e35]/60 text-xs tracking-[0.15em] uppercase mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="sujet"
          name="sujet"
          value={form.sujet}
          onChange={handleChange}
          className="w-full bg-white border border-[#313e35]/10 text-[#313e35] text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#E5493D]/60 placeholder-[#313e35]/30 transition-colors duration-200"
          placeholder="Objet de votre demande"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-[#313e35]/60 text-xs tracking-[0.15em] uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-white border border-[#313e35]/10 text-[#313e35] text-sm px-4 py-3 rounded-md focus:outline-none focus:border-[#E5493D]/60 placeholder-[#313e35]/30 transition-colors duration-200 resize-none"
          placeholder="Décrivez votre situation ou votre demande…"
        />
      </div>

      <div className="flex items-start gap-3">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            id="rgpd"
            name="rgpd"
            required
            checked={form.rgpd}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            onClick={() => setForm((prev) => ({ ...prev, rgpd: !prev.rgpd }))}
            className={`w-4 h-4 border cursor-pointer transition-colors duration-200 flex items-center justify-center shrink-0 ${
              form.rgpd ? 'bg-[#E5493D] border-[#E5493D]' : 'bg-transparent border-[#313e35]/30 hover:border-[#313e35]/60'
            }`}
          >
            {form.rgpd && (
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
        </div>
        <label htmlFor="rgpd" className="text-[#313e35]/50 text-xs leading-relaxed cursor-pointer">
          En cochant cette case, vous affirmez avoir pris connaissance de notre{' '}
          <Link href="/politique-de-confidentialite" className="text-[#E5493D]/80 hover:text-[#E5493D] underline underline-offset-2 transition-colors">
            Politique de confidentialité
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-10 py-3.5 bg-[#E5493D] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#c73d32] transition-colors duration-300 mt-2"
      >
        Envoyer
      </button>
    </form>
  )
}
