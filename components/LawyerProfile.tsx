import Link from 'next/link'
import FadeInSection from '@/components/FadeInSection'
import ContactIcons from '@/components/ContactIcons'

interface Competence {
  label: string
  href: string
}

interface LawyerProfileProps {
  name: string
  title: string
  structure?: string
  photo: string
  biography: string
  engagements?: string[]
  langue?: string
  competences: Competence[]
  phone: string
}

export default function LawyerProfile({
  name,
  title,
  structure,
  photo,
  biography,
  engagements,
  langue,
  competences,
  phone,
}: LawyerProfileProps) {
  // Paragraphes : retours à la ligne explicites, ou découpage intelligent par phrases
  const bioParagraphs = (() => {
    const trimmed = biography.trim()
    if (/\n\n+/.test(trimmed)) {
      return trimmed.split(/\n\n+/).filter(Boolean)
    }
    // Découper après un point/… (précédé d’une lettre minuscule ou chiffre pour éviter "M.") puis espace et majuscule
    const sentenceSplit = /(?<=[a-z0-9»\)])[.!?…]\s+(?=[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜÇ])/
    const segments = trimmed.split(sentenceSplit).map((s) => s.trim()).filter(Boolean)
    if (segments.length <= 1) return [trimmed]
    // Remettre le point à la fin de chaque segment et grouper par 2 phrases
    const sentences = segments.map((seg) => (/[.!?…]$/.test(seg) ? seg : seg + '.'))
    const paragraphs: string[] = []
    for (let i = 0; i < sentences.length; i += 2) {
      paragraphs.push(sentences.slice(i, i + 2).join(' '))
    }
    return paragraphs
  })()

  return (
    <div className="bg-white">
      {/* Header compact */}
      <div className="bg-[#f8f9f9] pt-24 pb-4">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <Link
              href="/#equipe"
              className="inline-flex items-center gap-2 text-[#313e35]/50 hover:text-[#E5493D] text-xs tracking-[0.2em] uppercase transition-colors duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Notre équipe
            </Link>
          </FadeInSection>
        </div>
      </div>

      {/* Contenu compact — tient sur une page */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid lg:grid-cols-[200px_1fr] gap-8 lg:gap-10">
          {/* Colonne gauche — photo réduite */}
          <FadeInSection>
            <div>
              <div className="w-[200px] h-[240px] overflow-hidden bg-[#f2f2f2] flex-shrink-0 mx-auto lg:mx-0">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h1
                className="text-[#313e35] text-xl lg:text-2xl font-semibold mt-4 mb-1"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {name}
              </h1>
              <p className="text-[#313e35] text-sm font-medium mb-1">{title}</p>
              <div className="w-8 h-[2px] bg-[#E5493D] mb-4" />
              <div className="flex flex-wrap gap-1.5 mb-4">
                {competences.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="text-[#E5493D] text-xs font-medium tracking-wider uppercase hover:underline"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
              <p className="text-[#4d6263] text-xs font-medium uppercase tracking-wider mb-2">Contact</p>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-[#313e35] text-sm font-medium hover:text-[#E5493D] transition-colors"
              >
                {phone}
              </a>
              <div className="flex justify-start mt-3">
                <ContactIcons />
              </div>
            </div>
          </FadeInSection>

          {/* Colonne droite — biographie et engagements avec forme */}
          <FadeInSection delay={0.1}>
            <div className="min-w-0">
              <p className="text-[#E5493D] text-xs font-semibold tracking-[0.2em] uppercase mb-2">Biographie</p>
              <div className="w-10 h-[2px] bg-[#E5493D] mb-4" />
              {bioParagraphs.length > 0 ? (
                <div className="space-y-4 mb-6">
                  {bioParagraphs.map((para, i) => (
                    <p key={i} className="text-[#313e35]/90 text-sm leading-[1.75]">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-[#313e35]/90 text-sm leading-[1.75] mb-6">{biography}</p>
              )}

              {langue && (
                <div className="mb-5">
                  <p className="text-[#E5493D] text-xs font-semibold tracking-[0.15em] uppercase mb-1">Langue</p>
                  <p className="text-[#4d6263] text-sm">{langue}</p>
                </div>
              )}

              {engagements && engagements.length > 0 && (
                <div>
                  <p className="text-[#E5493D] text-xs font-semibold tracking-[0.15em] uppercase mb-2">Engagements</p>
                  <div className="w-10 h-[2px] bg-[#E5493D] mb-3" />
                  <ul className="space-y-0">
                    {engagements.map((e, idx) => (
                      <li
                        key={e}
                        className={`py-2 text-[#313e35]/90 text-sm ${
                          idx < engagements.length - 1 ? 'border-b border-[#E5493D]/25' : ''
                        }`}
                      >
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-[#E5493D]/30">
                <Link
                  href="/informations-et-contact#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5493D] text-white text-xs font-semibold tracking-wider uppercase hover:bg-[#c73d32] transition-colors duration-300"
                >
                  Prendre contact
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  )
}
