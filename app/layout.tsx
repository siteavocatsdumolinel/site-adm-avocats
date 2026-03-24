import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

// On garde le même nom de variable CSS (---font-playfair) pour éviter de modifier toutes les pages.
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ADM – Avocats du Molinel | Cabinet d\'avocats à Lille',
    template: '%s | ADM Avocats du Molinel',
  },
  description: 'Cabinet d\'avocats pluridisciplinaire au Barreau de Lille. Droit commercial, droit pénal, droit social, droit fiscal. Wasquehal.',
  keywords: ['avocat', 'Lille', 'droit commercial', 'droit pénal', 'droit social', 'droit fiscal', 'Wasquehal', 'ADM'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
