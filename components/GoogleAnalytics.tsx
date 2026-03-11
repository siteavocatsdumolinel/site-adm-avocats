'use client'

import Script from 'next/script'
import { useState, useEffect } from 'react'
import { getConsent } from './CookieConsentBanner'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function GoogleAnalytics() {
  const [loadScript, setLoadScript] = useState(false)

  useEffect(() => {
    if (!GA_ID) return
    const consent = getConsent()
    if (consent === 'accepted') setLoadScript(true)
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail
      if (detail === 'accepted') setLoadScript(true)
    }
    window.addEventListener('analytics-consent', onConsent as EventListener)
    return () => window.removeEventListener('analytics-consent', onConsent as EventListener)
  }, [])

  if (!GA_ID || !loadScript) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}
