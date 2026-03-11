import type { Metadata } from 'next'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Blog – ADM Avocats du Molinel',
  description: 'Actualités juridiques et articles du cabinet ADM – Avocats du Molinel.',
}

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-[#f2f2f2] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E5493D]" />
              <span className="text-[#E5493D] text-xs tracking-[0.3em] uppercase">Actualités</span>
            </div>
            <h1
              className="text-[#313e35] text-4xl md:text-5xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Blog
            </h1>
          </FadeInSection>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center py-24">
        <FadeInSection>
          <div className="text-center max-w-md mx-auto px-6">
            <p className="text-[#313e35]/15 text-5xl font-semibold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              À venir
            </p>
            <p className="text-[#4d6263] text-sm">
              Les actualités juridiques et articles du cabinet seront bientôt disponibles.
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
