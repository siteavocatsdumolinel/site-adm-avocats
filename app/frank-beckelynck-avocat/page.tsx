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
      photo="/images/equipe/frank-beckelynk.jpg"
      biography={`Avocat depuis 1994 et fort d'une sérieuse expérience en droit des affaires, Frank Beckelynck assiste les justiciables, et notamment les opérateurs économiques, dans leurs réflexions juridiques et la résolution de leurs contentieux.

Il sécurise les différentes étapes des relations contractuelles (négociation, rédaction, exécution, rupture…) et intervient efficacement en droit commercial.

Spécialiste en droit pénal dès 1997, et particulièrement en droit pénal des affaires, il assure un accompagnement juridique pragmatique dans toutes les situations sensibles (gestion des médias, assistance et pilotage lors des contrôles et enquêtes des autorités, assistance et représentation devant toutes les juridictions, aménagement des sanctions).`}
      engagements={[
        "Membre de l'APM (Association Progrès du Management) depuis 2011",
        "Ancien Membre de la Table Ronde Française jusqu'en 2003",
        "Professeur de Droit pénal des affaires - ESC / SKEMA (2006–2010)",
        "Professeur de Droit pénal des affaires - IAE (Institut d'Administration des Entreprises) (2005–2006)",
        "Chargé de cours en Droit pénal des affaires - Université Catholique de Lille, DESS juriste d'entreprise (2002–2005)",
        "Responsable de la formation en Droit pénal - CRFPB, Cour d'appel de Douai (1999–2001)",
        "Professeur de Droit pénal des affaires - EDHEC (1987–1990)",
      ]}
      competences={[
        { label: 'Droit civil & Droit commercial', href: '/competences#droit-commercial' },
        { label: 'Droit pénal', href: '/competences#droit-penal' },
      ]}
      phone="03 20 12 10 60"
      email="fbeckelynck@admavocats.fr"
      linkedin="https://www.linkedin.com/in/frank-beckelynck-45a51316/"
      badge="/images/equipe/logo-specialiste2.gif"
    />
  )
}
