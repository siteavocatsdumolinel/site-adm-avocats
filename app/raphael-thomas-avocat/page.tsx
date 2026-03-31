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
      biography={`Titulaire d'une maîtrise mention carrières judiciaires et sciences criminelles (Université Panthéon-Assas), Raphaël THOMAS a prêté serment au Barreau de PARIS en 2014, et a rejoint le Cabinet ADM en 2015 après avoir acquis une première expérience au sein d'un Cabinet spécialisé en Droit pénal.

Il s'associe en 2025 avec Frank BECKELYNCK au sein de la SELARL d'Avocats BECKELYNCK & THOMAS.

Il intervient en droit pénal et en droit commercial, tant en conseil qu'au contentieux sur l'ensemble du territoire national, y compris Outre-Mer.

Il intervient également dans les procédures d'indemnisation des victimes, en particulier à la suite d'accidents de la circulation.`}
      engagements={[
        'Membre des EDC (Entrepreneurs et Dirigeants Chrétiens)',
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
