'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const STORAGE_KEY = 'adm-analytics-consent'

export type ConsentStatus = 'accepted' | 'refused' | null

export function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'accepted' || stored === 'refused') return stored
  return null
}

export function setConsent(value: 'accepted' | 'refused') {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, value)
  window.dispatchEvent(new CustomEvent('analytics-consent', { detail: value }))
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (consent === null) setVisible(true)
  }, [])

  const handleChoice = (value: 'accepted' | 'refused') => {
    setConsent(value)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#313E35] text-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
      role="dialog"
      aria-label="Consentement aux cookies et traceurs"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-3 sm:gap-4">
        <p className="flex-1 min-w-0 text-xs sm:text-sm text-white/90 leading-snug">
          Nous utilisons un simple traceur de mesures anonymes d&apos;audience à des fins statistiques. Si vous continuez à utiliser ce site, vous confirmez en accepter le principe.
        </p>
        <div className="flex items-center justify-center gap-2 shrink-0 flex-wrap sm:justify-start">
          <Link
            href="/politique-de-confidentialite"
            className="text-xs text-white/70 hover:text-white underline underline-offset-2 transition-colors"
          >
            En savoir plus
          </Link>
          <button
            type="button"
            onClick={() => handleChoice('refused')}
            className="px-3 py-1.5 text-xs font-medium text-white/90 hover:text-white border border-white/40 rounded transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => handleChoice('accepted')}
            className="px-3 py-1.5 text-xs font-semibold bg-[#E5493D] text-white rounded hover:bg-[#c73d32] transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
