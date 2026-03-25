import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Caroline DUQUESNE – Avocat en droit social',
  description: 'Caroline Duquesne, avocat au Barreau de Lille, accompagne les entreprises en droit social. Médiatrice diplômée, membre du CJD et AVOSIAL.',
}

export default function CarolineDuquesnePage() {
  return (
    <LawyerProfile
      name="Caroline DUQUESNE"
      title="Avocat au Barreau de LILLE"
      photo="/images/equipe/caroline-duquesne-.jpg"
      biography={`Forte d'une solide expérience, Caroline DUQUESNE accompagne en droit social les entreprises de toute taille.

Sa bonne connaissance de l'entreprise et de son fonctionnement lui permet de définir, avec ses interlocuteurs, une stratégie globale.

Soucieuse d'être une aide à la décision, elle gère plus particulièrement les aspects stratégiques des projets en intégrant l'analyse et la gestion des risques.

Elle accompagne les entreprises dans leurs réorganisations (fusion-acquisition, croissance externe…), et dans la gestion de leurs éventuelles difficultés économiques.

Elle est aux côtés du chef d'entreprise dans ses négociations avec les partenaires sociaux.

Son expérience du contentieux l'a amenée à s'intéresser aux MARD (Modes alternatifs de résolution des différends). Elle souhaite privilégier les accords aux procès longs, coûteux et aléatoires. Elle s'est donc formée et a obtenu le diplôme de Médiateur en 2020 (ICP).

Elle anime une équipe composée de deux avocats.`}
      engagements={[
        'Membre du Centre des Jeunes Dirigeants',
        'Membre du syndicat AVOSIAL',
        "Membre de l'association NORD MEDIATION",
        "Ancien membre du Conseil de l'ordre du Barreau de LILLE (1998-1999)",
        "Ancien secrétaire de la Conférence (concours d'éloquence)",
        'Ancien chargé d\'enseignement en droit du travail à la SKEMA BUSINESS SCHOOL (2006-2008)',
      ]}
      competences={[
        { label: 'Droit social', href: '/competences#droit-social' },
      ]}
      phone="03 20 12 10 60"
      email="cduquesne@admavocats.fr"
      linkedin="https://www.linkedin.com/in/caroline-duquesne-5069aa39/"
  
    />
  )
}
