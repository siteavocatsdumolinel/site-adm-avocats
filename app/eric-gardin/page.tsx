import type { Metadata } from 'next'
import LawyerProfile from '@/components/LawyerProfile'

export const metadata: Metadata = {
  title: 'Eric GARDIN – Avocat fiscaliste',
  description: 'Eric Gardin, avocat fiscaliste au Barreau de Lille. Ancien inspecteur à la DGFIP, expert en contrôle fiscal, contentieux fiscal et transmissions d\'entreprise.',
}

export default function EricGardinPage() {
  return (
    <LawyerProfile
      name="Eric GARDIN"
      title="Avocat au Barreau de LILLE"
      photo="/images/equipe/eric-gardin.png"
      biography={`Éric Gardin débute sa carrière au sein de la Direction Générale des Finances Publiques (DGFIP) en tant qu'inspecteur vérificateur, avant de devenir rédacteur des mémoires devant les tribunaux administratifs. Après avoir réussi la sélection d'Inspecteur Principal, il prend la tête d'une brigade à la Direction Régionale de Lille, puis est choisi pour assister le Directeur Interrégional lors de la création de la DIRCOFI Nord, issue de la fusion des directions de Lille, Rouen et Amiens.

Il joue un rôle actif dans la réforme du contrôle fiscal, en lien avec les services centraux de Bercy, et participe à des échanges avec les administrations fiscales du Bénélux. Il intervient également au niveau européen pour présenter le modèle français de lutte contre la fraude fiscale aux pays candidats à l'Union européenne.

Passionné par la transmission du savoir, il fonde en 1997 le Mastère de Gestion Fiscale de l'ex-ESC Lille (aujourd'hui SKEMA). Repéré par le cabinet FIDAL, il le rejoint en 2000 pour concevoir des formations fiscales et devient avocat au barreau de Lille.

À 40 ans, Éric Gardin choisit de mettre son expertise au service des contribuables. En 2006, il crée son propre cabinet aux côtés de confrères spécialisés en transmission d'entreprise, droit des sociétés et gestion patrimoniale. Il accompagne particuliers et entreprises dans la préparation, la gestion et le contentieux liés au contrôle fiscal.`}
      competences={[
        { label: 'Droit fiscal', href: '/competences#droit-fiscal' },
        { label: 'Droit douanier', href: '/competences#droit-fiscal' },
      ]}
      phone="06 28 49 29 33"
    />
  )
}
