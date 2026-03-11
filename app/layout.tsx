import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieConsentBanner from '@/components/CookieConsentBanner'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
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
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
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
