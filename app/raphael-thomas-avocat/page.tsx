import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Raphaël THOMAS – Avocat en droit pénal et commercial',
  description: 'Raphaël Thomas, avocat au Barreau de Lille, intervient en droit pénal et droit commercial. Associé de la SELARL Beckelynck & Thomas.',
}

export default function RaphaelThomasPage() {
  return (
    <LawyerProfile
      name="Raphaël THOMAS"
      title="Avocat au Barreau de LILLE"
      structure="SELARL d'avocats BECKELYNCK & THOMAS"
      photo="/images/equipe/raphael-thomas.jpg"
      biography={`Titulaire d'une Maîtrise mention carrières judiciaires et sciences criminelles (Université Paris II Panthéon-Assas), Raphaël THOMAS a prêté serment au Barreau de PARIS en 2014. Il débute sa carrière au sein d’un Cabinet spécialisé en Droit pénal avant de rejoindre le Cabinet ADM en 2015.

 

Il s'associe en 2025 avec Frank BECKELYNCK au sein de la SELARL d'Avocats BECKELYNCK & THOMAS.

 

Raphaël THOMAS intervient en droit pénal et en droit commercial, en conseil comme en contentieux, sur l'ensemble du territoire national, y compris Outre-Mer. Il accompagne également les victimes dans les procédures d'indemnisation de leurs préjudices, en particulier à la suite d'accidents de la circulation.`}
      engagements={[
        'Membre des EDC',
        'Membre de l’Association Française de Criminologie',
      ]}
      competences={[
        { label: 'Droit civil & Droit commercial', href: '/competences#droit-commercial' },
        { label: 'Droit pénal', href: '/competences#droit-penal' },
      ]}
      phone="03 20 12 10 60"
      email="rthomas@admavocats.fr"
      linkedin="https://www.linkedin.com/in/rapha%C3%ABl-thomas-6a8666154/"
    />
  )
}
