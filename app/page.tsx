import type { Metadata } from 'next'
import Link from 'next/link'
import LawyerCard from '@/components/LawyerCard'
import HeroSection from '@/components/HeroSection'
import FadeInSection from '@/components/FadeInSection'
import { getDepartmentIcon } from '@/components/DepartmentIcons'

export const metadata: Metadata = {
  title: "ADM – Avocats du Molinel | Cabinet d'avocats à Lille",
  description: "Cabinet d'avocats pluridisciplinaire en droit des affaires au Barreau de Lille. Droit commercial, pénal, social et fiscal. Wasquehal.",
}

const lawyers = [
  { name: 'Frank BECKELYNCK', title: 'Avocat spécialiste en droit pénal / Avocat en droit civil et commercial', tags: ['Droit pénal', 'Droit civil / Droit commercial'], photo: '/images/equipe/frank-beckelynk.jpg', href: '/frank-beckelynck-avocat', email: 'fbeckelynck@admavocats.fr', linkedin: 'https://www.linkedin.com/in/frank-beckelynck-45a51316/' },
  { name: 'Caroline DUQUESNE', title: 'Avocat en droit social', tags: ['Droit social'], photo: '/images/equipe/caroline-duquesne-.jpg', href: '/caroline-duquesne-avocat', email: 'cduquesne@admavocats.fr', linkedin: 'https://www.linkedin.com/in/caroline-duquesne-5069aa39/' },
  { name: 'Eric GARDIN', title: 'Avocat fiscaliste', tags: ['Droit fiscal & Droit des sociétés'], photo: '/images/equipe/eric-gardin.png', href: '/eric-gardin', email: 'gardin.avocat@gmail.com', linkedin: 'https://www.linkedin.com/in/eric-gardin-070174337/' },
  { name: 'Raphaël THOMAS', title: 'Avocat en droit pénal et commercial', tags: ['Droit pénal', 'Droit commercial'], photo: '/images/equipe/raphael-thomas.jpg', href: '/raphael-thomas-avocat', email: 'rthomas@admavocats.fr', linkedin: 'https://www.linkedin.com/in/rapha%C3%ABl-thomas-6a8666154/' },
  { name: 'Charlotte LEFEBVRE', title: 'Avocat en droit social', tags: ['Droit social'], photo: '/images/equipe/charlotte-lefebvre.png', href: '/charlotte-lefebvre-avocat', email: 'clefebvre@admavocats.fr', linkedin: 'https://www.linkedin.com/in/charlotte-lefebvre-1668b1143/' },
  { name: 'Claire FRYS', title: 'Avocat en droit social', tags: ['Droit social'], photo: '/images/equipe/claire-frys.jpg', href: '/claire-frys-avocat', email: 'cduquesne@admavocats.fr', linkedin: 'https://www.linkedin.com/in/claire-frys-5a883810b/' },
  { name: 'Christophe LECLERCQ', title: 'Avocat en droit social', tags: ['Droit social'], photo: '/images/equipe/christophe-leclerq.jpg', href: '/leclercq-christophe', email: 'cduquesne@admavocats.fr', linkedin: 'https://www.linkedin.com/in/christophe-leclercq-b6a265101/' },
]

const competences = [
  { label: 'DROIT COMMERCIAL & DROIT CIVIL', href: '/competences#droit-commercial', desc: 'Contrats, contentieux, recouvrement, droit bancaire', iconKey: 'commercial' },
  { label: 'DROIT PÉNAL', href: '/competences#droit-penal', desc: 'Droit pénal des affaires, presse, responsabilité', iconKey: 'penal' },
  { label: 'DROIT SOCIAL', href: '/competences#droit-social', desc: 'Relations du travail, contentieux, négociation', iconKey: 'social' },
  { label: 'DROIT FISCAL & DROIT DES SOCIÉTÉS', href: '/competences#droit-fiscal', desc: 'Contrôle fiscal, contentieux, fusions, acquisitions, création de sociétés', iconKey: 'fiscal' },
]

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* PRÉSENTATION — style épuré, titre centré, listes à lignes rouges */}
      <section id="presentation" className="relative bg-white pt-20 pb-24 md:pt-28 md:pb-32 rounded-t-2xl shadow-[0_-4px_24px_rgba(49,62,53,0.06)]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <FadeInSection subtleScale>
            <div className="text-center mb-12 md:mb-14">
              <h2
                className="text-[#313E35] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-5 md:mb-6"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Cabinet d'avocats pluridisciplinaire<br className="hidden sm:block" /> en droit des affaires.
              </h2>
              <p className="text-[#4d6263] text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Depuis 2006, les Avocats du Molinel accompagnent avec réactivité et rigueur l'ensemble des opérateurs économiques à chaque étape de leurs projets et proposent des prestations juridiques personnalisées, constructives et stratégiques.
              </p>
            </div>
          </FadeInSection>

          <div className="mb-12 md:mb-14" />

          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-[#313E35]/10">
            {[
              { title: 'Notre activité', items: ['Conseil et assistance', 'Défense et contentieux', 'Accompagnement et formation'], iconKey: 'activite' as const },
              { title: 'Nos qualités', items: ['Pragmatisme', 'Engagement', 'Exigence'], iconKey: 'qualites' as const },
              { title: 'Nos valeurs', items: ['Disponibilité', 'Confiance', 'Sécurité'], iconKey: 'valeurs' as const },
            ].map((col, i) => (
              <FadeInSection key={col.title} delay={i * 0.1}>
                <div
                  className={[
                    'flex flex-col py-10 md:py-0 md:px-10 lg:px-14',
                    i === 0 ? 'md:!pl-0 border-b md:border-b-0' : '',
                    i === 1 ? 'border-b md:border-b-0' : '',
                    i === 2 ? 'md:!pr-0' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {/* Numéro éditorial */}
                  <span
                    aria-hidden="true"
                    className="block font-bold leading-none mb-3 select-none text-[#313E35]/[0.07] tabular-nums"
                    style={{ fontFamily: 'var(--font-playfair)', fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icône + titre */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#313E35] flex items-center justify-center text-white [&_svg]:w-[1.1rem] [&_svg]:h-[1.1rem] shrink-0">
                      {getDepartmentIcon(col.iconKey)}
                    </div>
                    <p className="text-[#E5493D] text-sm font-semibold italic tracking-[0.15em] uppercase">
                      {col.title}
                    </p>
                  </div>

                  {/* Liste */}
                  <ul className="border-t border-[#313E35]/10">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 py-3.5 border-b border-[#313E35]/10 text-[#313E35] text-base font-medium"
                      >
                        <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINES DE COMPÉTENCE */}
      <section className="bg-[#f8f9f9] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16">
              <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-3">Expertise</p>
              <h2
                className="text-[#313E35] text-3xl md:text-4xl font-semibold"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Domaines de compétence
              </h2>
              <p className="text-[#4d6263] text-base mt-4 max-w-xl">
                Une expertise reconnue au service des entreprises et des particuliers.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 items-stretch">
            {competences.map((c, i) => (
              <FadeInSection key={c.label} delay={i * 0.06} subtleScale>
                <Link
                  href={c.href}
                  className="group relative flex flex-col items-center text-center bg-white rounded-xl p-6 md:p-8 h-full border border-[#313E35]/5 shadow-sm hover:shadow-md hover:border-[#313E35]/15 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-10 -top-px h-[2px] bg-gradient-to-r from-[#E5493D] via-[#e88b6b] to-[#4d6263] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="w-14 h-14 rounded-full bg-[#E5493D] flex items-center justify-center mb-6 text-white [&_svg]:w-7 [&_svg]:h-7">
                    {getDepartmentIcon(c.iconKey)}
                  </div>
                  <h3
                    className="text-[#313E35] text-xs font-semibold tracking-[0.15em] uppercase mb-3 group-hover:text-[#E5493D] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {c.label}
                  </h3>
                  <p className="text-[#4d6263] text-sm leading-relaxed">
                    {c.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-auto pt-6 text-[#E5493D] text-xs font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    En savoir plus
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section id="equipe" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <div className="mb-16 text-center">
              <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-3">Le cabinet</p>
              <h2
                className="text-[#313E35] text-3xl md:text-4xl font-semibold"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Notre équipe
              </h2>
              <p className="text-[#4d6263] text-base mt-3">
                Avocats au Barreau de Lille
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center items-stretch">
              {lawyers.slice(0, 3).map((lawyer, i) => (
                <LawyerCard key={lawyer.name} {...lawyer} delay={i * 0.06} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center items-stretch">
              {lawyers.slice(3).map((lawyer, i) => (
                <LawyerCard key={lawyer.name} {...lawyer} delay={0.2 + i * 0.06} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="relative bg-[#313E35] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} aria-hidden />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          <FadeInSection subtleScale>
            <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-5">Prendre contact</p>
            <h2
              className="text-white text-3xl md:text-4xl lg:text-[2.5rem] font-semibold mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Vous avez une question ?
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Notre équipe se tient disponible pour vous accompagner dans vos démarches juridiques.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/informations-et-contact#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E5493D] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#c73d32] hover:shadow-md hover:shadow-[#E5493D]/25 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Nous contacter
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              <a
                href="tel:0320121060"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white/90 text-sm font-medium tracking-wide hover:border-white/60 hover:bg-white/5 transition-all duration-300 rounded-full w-full sm:w-auto"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                03 20 12 10 60
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  )
}
