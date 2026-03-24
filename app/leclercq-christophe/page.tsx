import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Christophe LECLERCQ – Avocat en droit social',
  description: 'Christophe Leclercq, avocat au Barreau de Lille, intervient en droit social, relations individuelles et collectives du travail.',
}

export default function ChristopheLeclercqPage() {
  return (
    <LawyerProfile
      name="Christophe LECLERCQ"
      title="Avocat au Barreau de LILLE"
      photo="/images/equipe/christophe-leclerq.jpg"
      biography={`Titulaire d'un master 2 en droit social et gestion des ressources humaines, Christophe LECLERCQ dispose de plusieurs expériences en entreprise en gestion des ressources humaines et en tant que juriste droit social. Il a prêté serment le 22 novembre 2021 et a rejoint le cabinet la même année.

Il intervient en accompagnement juridique et contentieux, dans tous les aspects du droit social, et plus particulièrement sur les relations individuelles et collectives de travail.`}
      competences={[
        { label: 'Droit social', href: '/competences#droit-social' },
      ]}
      phone="03 20 12 10 60"
    />
  )
}
