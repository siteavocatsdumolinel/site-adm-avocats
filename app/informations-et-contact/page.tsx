import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Informations & Contact – ADM Avocats du Molinel',
  description: 'Contactez le cabinet ADM – Avocats du Molinel à Wasquehal. Coordonnées, accès et formulaire de contact.',
}

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#f2f2f2] pt-32 pb-16 border-b border-[#313e35]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-[#E5493D]" />
              <span className="text-[#E5493D] text-xs tracking-[0.3em] uppercase">Le cabinet</span>
            </div>
            <h1
              className="text-[#313e35] text-4xl md:text-5xl lg:text-6xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Informations & Contact
            </h1>
          </FadeInSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <section id="coordonnees" className="mb-14">
              <FadeInSection>
                <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-6">Coordonnées</p>
                <div className="space-y-1 text-[#4d6263] text-sm leading-relaxed mb-6">
                  <p className="text-[#313e35] font-medium text-base">Centre d'Affaires du Molinel, Bât. E</p>
                  <p>Avenue de la Marne</p>
                  <p>Allée de la Marque</p>
                  <p>59290 Wasquehal</p>
                </div>
                <a
                  href="tel:0320121060"
                  className="inline-flex items-center gap-2 text-[#E5493D] hover:text-[#c73b2f] text-base transition-colors duration-200"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  03 20 12 10 60
                </a>
              </FadeInSection>
            </section>

            <section id="situation">
              <FadeInSection delay={0.1}>
                <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-6">Situation</p>
                <div className="w-full aspect-[16/9] overflow-hidden rounded-xl mb-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1774960094525!6m8!1m7!1stKkbgyfGKfz1zqzXlVj_ew!2m2!1d50.68167603904637!2d3.115184384007071!3f210.96716!4f0!5f0.7820865974627469"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Vue Street View du cabinet ADM Avocats du Molinel"
                  />
                </div>
                <div className="w-full aspect-[4/3] overflow-hidden bg-[#f2f2f2] mb-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.4!2d3.1148888!3d50.6819575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQwJzU1LjEiTiAzwrAwNic1My42IkU!5e0!3m2!1sfr!2sfr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation ADM Avocats du Molinel"
                  />
                </div>
                <a
                  href="https://www.google.com/maps/dir//50.6819575,3.1148888/@50.681958,3.114889,16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4d6263] hover:text-[#E5493D] text-sm transition-colors duration-200"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Calculer votre itinéraire
                </a>
              </FadeInSection>
            </section>
          </div>

          <section id="contact">
            <FadeInSection delay={0.15}>
              <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-6">Formulaire de contact</p>
              <ContactForm />
            </FadeInSection>
          </section>
        </div>
      </div>
    </div>
  )
}
