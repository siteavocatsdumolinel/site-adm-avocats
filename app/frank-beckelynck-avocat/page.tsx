import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Frank BECKELYNCK – Avocat spécialiste droit pénal et commercial',
  description: 'Frank Beckelynck, avocat au Barreau de Lille depuis 1994, spécialiste en droit pénal des affaires et droit commercial. SELARL Beckelynck & Thomas.',
}

export default function FrankBeckelynckPage() {
  return (
    <LawyerProfile
      name="Frank BECKELYNCK"
      title="Avocat au Barreau de LILLE"
      structure="SELARL d'avocats BECKELYNCK & THOMAS"
      photo="https://adm-avocatsdumolinel.com/wp-content/uploads/2018/05/frank-beckelink.jpg"
      biography="Avocat depuis 1994 et fort d'une sérieuse expérience en droit des affaires, Frank Beckelynck assiste les justiciables, et notamment les opérateurs économiques, dans leurs réflexions juridiques et la résolution de leurs contentieux. Il sécurise les différentes étapes des relations contractuelles (négociation, rédaction, exécution, rupture…) et intervient efficacement en droit commercial. Riche de son expérience dans l'enseignement supérieur à la Faculté de droit de Lille et dans de grandes écoles de commerce (EDHEC, SKEMA…), il assure des formations adaptées aux problématiques de l'entreprise. Spécialiste en droit pénal dès 1997, et particulièrement en droit pénal des affaires, il assure un accompagnement juridique pragmatique dans toutes les situations sensibles (gestion des médias, assistance et pilotage lors des contrôles et enquêtes des autorités, assistance et représentation devant toutes les juridictions, aménagement des sanctions). Membre de l'APM."
      competences={[
        { label: 'Droit commercial', href: '/competences#droit-commercial' },
        { label: 'Droit pénal', href: '/competences#droit-penal' },
      ]}
      phone="03 20 12 10 60"
    />
  )
}
