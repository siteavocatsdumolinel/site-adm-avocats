import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Charlotte LEFEBVRE – Avocat en droit social, Associée',
  description: 'Charlotte Lefebvre, avocat associée au cabinet ADM, spécialisée en droit social des entreprises. Présidente du CJD Lille Métropole 2024-2026.',
}

export default function CharlotteLefebvrePage() {
  return (
    <LawyerProfile
      name="Charlotte LEFEBVRE"
      title="Avocat au Barreau de LILLE — Associée"
      photo="/images/equipe/charlotte-lefebvre.png"
      biography={`Titulaire d'un Master en Droit social (Université Paris I Panthéon-Sorbonne), Charlotte LEFEBVRE a prêté serment au Barreau de PARIS en 2013. Elle débute sa carrière au sein de cabinets spécialisés en droit social des entreprises, FROMONT BRIENS puis VOLTAIRE AVOCATS, où elle accompagne une clientèle d'entreprises sur l'ensemble de leurs problématiques sociales.

Elle exerce ensuite pendant 9 années les fonctions de Directrice Générale de l'entreprise LEFEBVRE TEXTILE. Cette expérience de Direction lui apporte une connaissance concrète de l'entreprise, de ses enjeux humains, économiques et organisationnels, ainsi qu'une approche pragmatique du droit social.

Charlotte LEFEBVRE est aujourd'hui redevenue Avocat et a rejoint le cabinet ADM en qualité d'Associée. Elle intervient en droit social des entreprises, en conseil comme en contentieux, avec une attention particulière portée à l'accompagnement stratégique des dirigeants et à la recherche de solutions opérationnelles et durables.`}
      engagements={[
        'Présidente du Centre des Jeunes Dirigeants (CJD) Lille Métropole 2024-2026',
        'Membre du syndicat AVOSIAL',
        'Membre du MEDEF Lille Métropole',
      ]}
      competences={[
        { label: 'Droit social', href: '/competences#droit-social' },
      ]}
      phone="03 20 12 10 60"
      email="clefebvre@admavocats.fr"
      linkedin="https://www.linkedin.com/in/charlotte-lefebvre-1668b1143/"
    />
  )
}
