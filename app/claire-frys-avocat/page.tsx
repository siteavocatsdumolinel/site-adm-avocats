import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Claire FRYS – Avocat en droit social',
  description: 'Claire Frys, avocat au Barreau de Lille, intervient en droit social et relations individuelles du travail. Anglophone.',
}

export default function ClaireFrysPage() {
  return (
    <LawyerProfile
      name="Claire FRYS"
      title="Avocat au Barreau de LILLE"
      photo="/images/equipe/claire-frys.jpg"
      biography={`Titulaire d'un Master en droit social et gestion des ressources humaines, Claire FRYS a prêté serment en 2013, et a rejoint le cabinet ADM la même année.

Elle intervient en accompagnement juridique et contentieux, dans tous les aspects du droit social, et plus particulièrement sur les relations individuelles du travail.`}
      langue="Anglais"
      competences={[
        { label: 'Droit social', href: '/competences#droit-social' },
      ]}
      phone="03 20 12 10 60"
    />
  )
}
