import type { Metadata } from 'next'
import Link from 'next/link'
import FadeInSection from '@/components/FadeInSection'
import ContactIcons from '@/components/ContactIcons'
import ClickStopPropagation from '@/components/ClickStopPropagation'
import DepartmentSectionHeader from '@/components/DepartmentSectionHeader'

export const metadata: Metadata = {
  title: 'Compétences – Droit commercial, pénal, social, fiscal',
  description: "Découvrez les domaines de compétence des Avocats du Molinel : droit commercial, droit pénal des affaires, droit social et droit fiscal.",
}

const referents = {
  commercial: [
    { name: 'Frank BECKELYNCK', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-frank-beckelink--232x232.jpg', href: '/frank-beckelynck-avocat' },
    { name: 'Raphaël THOMAS', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-raphael-thomas-232x232.jpg', href: '/raphael-thomas-avocat' },
  ],
  penal: [
    { name: 'Frank BECKELYNCK', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-frank-beckelink--232x232.jpg', href: '/frank-beckelynck-avocat' },
    { name: 'Raphaël THOMAS', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-raphael-thomas-232x232.jpg', href: '/raphael-thomas-avocat' },
  ],
  social: [
    { name: 'Caroline DUQUESNE', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-caroline-duquesne--232x232.jpg', href: '/caroline-duquesne-avocat' },
    { name: 'Charlotte LEFEBVRE', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2026/02/rd-charlotte-lefebvre-232x232.png', href: '/charlotte-lefebvre-avocat' },
    { name: 'Claire FRYS', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/rd-claire-frys--232x232.jpg', href: '/claire-frys-avocat' },
    { name: 'Christophe LECLERCQ', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2025/04/Cleclercq-bw-232x232.png', href: '/leclercq-christophe' },
  ],
  fiscal: [
    { name: 'Eric GARDIN', photo: 'https://adm-avocatsdumolinel.com/wp-content/uploads/2025/04/circle-bw-eric-232x232.png', href: '/eric-gardin' },
  ],
}

function ReferentAvatars({ people }: { people: { name: string; photo: string; href: string }[] }) {
  return (
    <div className="flex flex-col gap-6">
      {people.map((p) => (
        <Link key={p.href} href={p.href} className="group flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-[#313E35]/10 group-hover:ring-[#E5493D]/30 transition-all duration-300 shrink-0 mb-3">
            <img src={p.photo} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
          </div>
          <span className="text-[#313E35] text-sm font-medium group-hover:text-[#E5493D] transition-colors duration-200 mb-2">
            {p.name}
          </span>
          <ClickStopPropagation className="inline-block">
            <ContactIcons className="mb-0" />
          </ClickStopPropagation>
        </Link>
      ))}
    </div>
  )
}

export default function CompetencesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-[#f8f9f9] pt-28 pb-20 md:pt-36 md:pb-24 border-b border-[#313E35]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <p className="text-[#E5493D] text-xs tracking-[0.3em] uppercase mb-4">Expertise</p>
            <h1
              className="text-[#313E35] text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Compétences
            </h1>
            <p className="text-[#4d6263] text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
              Un cabinet pluridisciplinaire au service des opérateurs économiques et des particuliers.
            </p>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <nav className="flex flex-wrap gap-3 mt-12" aria-label="Domaines">
              {[
                { label: 'Droit commercial', href: '#droit-commercial' },
                { label: 'Droit pénal', href: '#droit-penal' },
                { label: 'Droit social', href: '#droit-social' },
                { label: 'Droit fiscal', href: '#droit-fiscal' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-white border border-[#313E35]/8 text-sm font-medium text-[#4d6263] hover:text-[#E5493D] hover:border-[#E5493D]/30 hover:shadow-sm transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </FadeInSection>
        </div>
      </div>

      {/* DROIT COMMERCIAL */}
      <section id="droit-commercial" className="py-20 md:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <DepartmentSectionHeader title="Droit commercial" iconKey="commercial" />
            <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-24 lg:items-center">
              <div className="lg:sticky lg:top-28">
                <ReferentAvatars people={referents.commercial} />
              </div>
              <div className="rounded-2xl border border-[#313E35]/6 bg-[#f8f9f9]/50 p-8 md:p-10">
                <ul className="space-y-4">
                  {[
                    "Contrats (contrats cadres, CGV, CGU…) — négociation, rédaction, exécution, rupture, déréférencement",
                    "Garanties contractuelles, voies d'exécution",
                    "Recouvrement de créances (mises en demeure, injonction de payer, procédures contentieuses)",
                    "Droit de la faillite",
                    "Copropriété, baux, relations de voisinage",
                    "Contentieux civils et commerciaux (litiges clients/fournisseurs, concurrence déloyale)",
                    "Droit bancaire",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[#4d6263] text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/40 shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="h-px bg-[#313E35]/8" /></div>

      {/* DROIT PÉNAL */}
      <section id="droit-penal" className="py-20 md:py-28 bg-[#f8f9f9] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <DepartmentSectionHeader title="Droit pénal" iconKey="penal" />
            <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-24 lg:items-center">
              <div className="lg:sticky lg:top-28">
                <ReferentAvatars people={referents.penal} />
              </div>
              <div className="space-y-10">
                <div className="rounded-2xl border border-[#313E35]/6 bg-white p-6 md:p-8">
                  <h3 className="text-[#313E35] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Droit pénal des affaires</h3>
                  <ul className="space-y-3">
                    {[
                      "Mise en place de délégation de pouvoirs",
                      "Hygiène et sécurité, accident du travail, faute inexcusable",
                      "Conformité des produits et services",
                      "Éthique et compliance",
                      "Gestion des situations de crise (médias, contrôle et enquête des autorités administratives, audition libre/garde à vue)",
                      "Formation aux chefs d'entreprise sur la prévention des risques",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4d6263] text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/40 shrink-0 mt-2" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#313E35]/6 bg-white p-6 md:p-8">
                  <h3 className="text-[#313E35] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Droit de la presse</h3>
                  <ul className="space-y-3">
                    {["Diffamation et injure, droit de réponse, notification loi LCEN"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4d6263] text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/40 shrink-0 mt-2" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#313E35]/6 bg-white p-6 md:p-8">
                  <h3 className="text-[#313E35] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Responsabilité pénale et civile</h3>
                  <ul className="space-y-3">
                    {[
                      "Liquidation de dommages et intérêts",
                      "Sanctions disciplinaires et administratives",
                      "Droit de la circulation, préservation des permis de conduire",
                      "Aménagement des peines, sanctions et mentions au casier judiciaire et au TAJ",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#4d6263] text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/40 shrink-0 mt-2" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="h-px bg-[#313E35]/8" /></div>

      {/* DROIT SOCIAL */}
      <section id="droit-social" className="py-20 md:py-28 bg-[#ffffff] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <DepartmentSectionHeader title="Droit social" iconKey="social" />
            <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-24 lg:items-start">
              <div className="lg:sticky lg:top-28">
                <ReferentAvatars people={referents.social} />
              </div>

              {/* Colonne droite : blocs de texte + liste */}
              <div className="space-y-8">
                <div className="rounded-2xl border border-[#313E35]/6 bg-white p-8 md:p-10">
                  <div>
                    <h3 className="text-[#313E35] text-sm font-semibold uppercase tracking-wide mb-2">Partenaires des entreprises</h3>
                    <p className="text-[#4d6263] text-sm leading-relaxed">Conseil – Contentieux – Négociation – Formation</p>
                    <div className="w-12 h-[2px] bg-[#E5493D] mt-4" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-[#313E35] text-sm font-semibold uppercase tracking-wide mb-2">Relations individuelles et collectives du travail</h3>
                    <p className="text-[#4d6263] text-sm leading-relaxed">Droit de la protection sociale – Droit de la sécurité sociale – Droit de la fonction publique</p>
                    <div className="w-12 h-[2px] bg-[#E5493D] mt-4" />
                  </div>
                  <div className="mt-6">
                    <h3 className="text-[#313E35] text-sm font-semibold uppercase tracking-wide mb-2">Intervention</h3>
                    <p className="text-[#4d6263] text-sm leading-relaxed">devant le Conseil de prud'hommes, le Tribunal des Affaires de la Sécurité Sociale, le Tribunal du Contentieux de l'Incapacité, le Tribunal administratif, la Cour d'appel</p>
                    <div className="w-12 h-[2px] bg-[#E5493D] mt-4" />
                  </div>
                </div>
                <div className="rounded-2xl border border-[#313E35]/6 bg-white p-8 md:p-10">
                  <ul className="space-y-2.5">
                    {[
                      "Contrat de travail",
                      "Règlement intérieur",
                      "Accords collectifs",
                      "Audit droit social",
                      "Gestion du risque social",
                      "Situation d'urgence – « Hotline »",
                      "Accompagnement dans toute procédure touchant au droit social",
                      "Droit disciplinaire",
                      "Durée du travail",
                      "Rémunération",
                      "Harcèlement",
                      "Enquêtes internes",
                      "Rupture du contrat de travail",
                      "Élections professionnelles",
                      "Accident du travail et maladie professionnelle",
                      "Faute inexcusable",
                    ].map((item) => (
                      <li key={item} className="text-[#313E35] text-sm leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="w-12 h-[2px] bg-[#E5493D] mt-8" />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8"><div className="h-px bg-[#313E35]/8" /></div>

      {/* DROIT FISCAL */}
      <section id="droit-fiscal" className="py-20 md:py-28 bg-[#f8f9f9] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <DepartmentSectionHeader title="Droit fiscal" iconKey="fiscal" />
            <div className="grid lg:grid-cols-[1fr_2fr] gap-14 lg:gap-24 lg:items-center">
              <div className="lg:sticky lg:top-28">
                <ReferentAvatars people={referents.fiscal} />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Contrôle fiscal', items: ["On subit souvent ce que l'on ne prépare pas ou insuffisamment", "Méfiance mais pas défiance, collaborer au contrôle tout en maîtrisant le niveau des informations délivrées", "Expliciter vos décisions de gestion", "Replacer la gestion fiscale de votre entreprise dans un juste contexte : un outil pour l'entreprise et non une fin en soi"] },
                  { title: 'Fusions – Acquisitions, TUP, Transmissions', items: ["Audit fiscal préalable à une acquisition", "Contrôle fiscal « à blanc » de votre entreprise", "Fusions-Acquisitions", "Accompagnement lors de la cession", "Création de tous types de sociétés"] },
                  { title: 'Formation fiscale', items: ["Ce qui se conçoit bien s'énonce clairement…", "L'occasion d'un enrichissement personnel favorisé par l'échange", "Formation à la carte pour vos équipes"] },
                  { title: 'Contentieux fiscal et douanier', items: ["Examen de la régularité des procédures", "Computation des délais et rédaction de réclamations", "Saisines des diverses commissions fiscales", "Sollicitation d'entretiens hiérarchiques", "Recours devant tous types de juridictions"] },
                ].map((block) => (
                  <div key={block.title} className="rounded-2xl border border-[#313E35]/6 bg-white p-6 md:p-8">
                    <h3 className="text-[#313E35] text-xs font-semibold tracking-[0.15em] uppercase mb-5">{block.title}</h3>
                    <ul className="space-y-3">
                      {block.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#4d6263] text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E5493D]/40 shrink-0 mt-2" />{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
