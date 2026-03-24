import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Mentions légales – ADM Avocats du Molinel',
  description: 'Mentions légales du cabinet ADM – Avocats du Molinel. Éditeur, hébergement, propriété intellectuelle.',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#313E35] text-lg font-semibold mb-3 mt-10 first:mt-0" style={{ fontFamily: 'var(--font-playfair)' }}>
      {children}
    </h2>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <SectionTitle>{title}</SectionTitle>
      <div className="w-10 h-[2px] bg-[#E5493D] mb-4" />
      <div className="text-[#4d6263] text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#f8f9f9] pt-24 pb-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <p className="text-[#E5493D] text-xs tracking-[0.2em] uppercase mb-2">Informations</p>
            <h1 className="text-[#313E35] text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Mentions légales
            </h1>
          </FadeInSection>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <FadeInSection>
          <Section title="Éditeur">
            <p>
              Le site accessible à l'adresse http://www.adm-avocatsdumolinel.com est édité et publié par le cabinet ADM AVOCATS DU MOLINEL, exerçant son activité Centre d'affaires du Molinel Bâtiment E avenue de la Marne – 59290 WASQUEHAL.
            </p>
            <p>
              Coordonnées téléphoniques : <a href="tel:0320121060" className="text-[#E5493D] hover:underline">03 20 12 10 60</a>
            </p>
            <p>
              Email : <a href="mailto:fbeckelynck@admavocats.fr" className="text-[#E5493D] hover:underline">fbeckelynck@admavocats.fr</a>
            </p>
          </Section>

          <Section title="Hébergement">
            <p>
            Vercel Inc. – 340 S Lemon Ave #4133, Walnut, CA 91789, USA
         
            </p>
            <p>
            Site : vercel.com – Privacy : vercel.com/legal/privacy-policy
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              Tous les éléments graphiques, la structure et, plus généralement, le contenu du site www.adm-avocatsdumolinel.com sont protégés par le droit d'auteur. Toute reproduction ou représentation de tout ou partie du site est interdite. Le non-respect des dispositions ci-dessus est susceptible de constituer une contrefaçon engageant la responsabilité civile et pénale de son auteur.
            </p>
            <p>
              La création d'un lien hypertexte vers le site www.adm-avocatsdumolinel.com ne peut se faire qu'avec l'autorisation expresse et préalable du cabinet ADM AVOCATS DU MOLINEL, et sous réserve qu'aucune confusion ne puisse exister dans l'esprit des internautes sur l'identité du site ou la provenance des informations.
            </p>
          </Section>

          <Section title="Crédits photos">
            <p>Xavier Dumont</p>
          </Section>

          <Section title="Réalisations">
            <p>Pierre Aboucaya EI - Orchesia</p>
          </Section>

          <Section title="Collecte et utilisation des données à caractère personnel">
            <p>
              Notre <Link href="/politique-de-confidentialite" className="text-[#E5493D] hover:underline font-medium">politique de confidentialité</Link> décrit la collecte et l'utilisation des données personnelles sur ce site.
            </p>
          </Section>
        </FadeInSection>
      </div>
    </div>
  )
}
