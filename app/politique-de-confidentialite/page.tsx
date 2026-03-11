import type { Metadata } from 'next'
import FadeInSection from '@/components/FadeInSection'

export const metadata: Metadata = {
  title: 'Politique de confidentialité – ADM Avocats du Molinel',
  description: 'Politique de confidentialité et protection des données personnelles du cabinet ADM – Avocats du Molinel.',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#313E35] text-lg font-semibold mb-3 mt-10 first:mt-0" style={{ fontFamily: 'var(--font-playfair)' }}>
      {children}
    </h2>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <SectionTitle>{title}</SectionTitle>
      <div className="w-10 h-[2px] bg-[#E5493D] mb-4" />
      <div className="text-[#4d6263] text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#f8f9f9] pt-24 pb-10">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeInSection>
            <p className="text-[#E5493D] text-xs tracking-[0.2em] uppercase mb-2">Informations</p>
            <h1 className="text-[#313E35] text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Politique de confidentialité & protection des données personnelles
            </h1>
          </FadeInSection>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <FadeInSection>
          <div className="text-[#4d6263] text-sm leading-relaxed space-y-4 mb-10">
            <p>
              Dans le but de respecter la vie privée des utilisateurs de son site, ADM AVOCATS s'engage à traiter leurs données personnelles dans la plus stricte confidentialité et en totale conformité aux nouvelles réglementations européenne et française en vigueur.
            </p>
            <p>
              La présente charte de protection est destinée à informer les utilisateurs en toute transparence des méthodes de collecte de données personnelles qu'ADM AVOCATS utilise, de l'utilisation des données ainsi collectées, des procédures de sécurité mises en place et des droits dont disposent les utilisateurs.
            </p>
            <p>
              En utilisant le site www.adm-avocatsdumolinel.com, l'utilisateur reconnait avoir pris connaissance de la présente charte et reconnait en accepter les termes.
            </p>
            <p>
              La présente charte est valable pour toutes les pages hébergées sur le site et pour les enregistrements de ce site. Elle n'est pas valable pour les pages hébergées par des tiers auxquelles ADM AVOCATS pourrait renvoyer, dont ADM AVOCATS n'est pas responsable des contenus et dont les politiques de confidentialité peuvent différer. ADM AVOCATS ne peut dès lors être tenu pour responsable des éventuelles données traitées sur ces sites ou par ceux-ci.
            </p>
          </div>

          <Section title="Responsable de traitement">
            <p>
              ADM AVOCATS est le responsable de traitement et assume donc à ce titre la responsabilité de la collecte et de la gestion des données personnelles de ses utilisateurs conformément aux dispositions du règlement (UE) n°2016/679 du 27 avril 2016 relatif à la protection des données à caractère personnel.
            </p>
          </Section>

          <Section title="Finalités de la collecte">
            <p>
              ADM AVOCATS utilise les données de l'utilisateur afin de répondre à sa demande d'information relative aux services qu'elle propose.
            </p>
            <p>
              En remplissant et en envoyant le formulaire, l'utilisateur consent à ce qu'ADM AVOCATS collecte et traite ses données personnelles dans le cadre précis de sa demande de renseignement et de la relation commerciale qui pourrait en découler.
            </p>
            <p>
              La base légale du traitement est l'intérêt légitime (cf. article 6.1.f du Règlement européen sur la protection des données).
            </p>
          </Section>

          <Section title="Données personnelles collectées">
            <p>ADM AVOCATS peut collecter les données suivantes de l'utilisateur :</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Les données d'identification (nom, prénom, adresse e-mail).</li>
              <li>L'adresse IP attribuée à l'utilisateur.</li>
              <li>Les données de localisation ou autre données relatives à la communication.</li>
            </ul>
          </Section>

          <Section title="Méthodes de collecte">
            <p>
              Les données peuvent être collectées soit par l'intervention active de l'utilisateur soit automatiquement. Est une intervention active le fait pour l'utilisateur de transmettre ses données d'identification. D'autres données, telles que la date et l'heure de son accès au site, les pages consultées ou les données de localisation, sont collectées automatiquement, par le biais des serveurs consultés et des « cookies » placés sur le site. Pour en savoir plus sur l'ensemble des informations relatives aux « cookies », voir ci-dessous.
            </p>
          </Section>

          <Section title="Destinataire des données">
            <p>Les données personnelles sont destinées à ADM AVOCATS.</p>
          </Section>

          <Section title="Durée de conservation des données">
            <p>
              En ce qui concerne la collecte issue de l'intervention active de l'utilisateur, les données sont conservées le temps nécessaire à l'accomplissement des prestations ou le temps imposé par les différentes prescriptions légales notamment en matière fiscale, commerciale, pénale.
            </p>
            <p>
              En ce qui concerne la collecte automatique, les données sont conservées pendant 24 mois à compter de la dernière connexion puis anonymisées et conservées à des fins historiques et statistiques pour une durée de 36 mois sauf contraintes légales particulières.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Dans le cadre de la consultation du site, des cookies de navigation peuvent être implantés dans l'ordinateur de l'utilisateur et enregistrer des informations relatives à la navigation de l'ordinateur de l'utilisateur sur le site telles que les pages consultées, la date et heure de consultation, etc. Un bandeau passant d'information est alors diffusé et permet à l'utilisateur de s'y opposer.
            </p>
            <p>
              À tout moment, l'utilisateur a la possibilité de désactiver l'installation de cookies en adaptant en conséquence la configuration de son navigateur Internet. Si la plupart des navigateurs sont paramétrés par défaut pour accepter l'installation de cookies, l'utilisateur a la possibilité de désactiver l'utilisation des cookies en sélectionnant les paramètres appropriés de son navigateur. Toutefois, le refus des cookies et autres témoins de connexion est susceptible d'empêcher l'accès à certaines fonctionnalités, pages et/ou espaces du site, ce que l'utilisateur déclare expressément accepter.
            </p>
          </Section>

          <Section title="Google Analytics">
            <p>
              ADM AVOCATS se réserve le droit de suivre l'utilisation du Site par le visiteur en utilisant le service d'analyse de sites Internet dénommé Google Analytics fourni par la Société Google Inc. Le système Google Analytics utilise des données. Les données ainsi générées par les cookies concernant l'utilisation du site par l'utilisateur (y compris l'adresse IP de connexion) seront transmises et stockées par la Société Google Inc sur des serveurs situés aux Etats-Unis. Ces données seront utilisées dans le but d'évaluer l'utilisation du site, de compiler des rapports sur l'activité du site à destination d'ADM AVOCATS et de fournir d'autres services relatifs à l'activité du site et à l'utilisation du réseau Internet.
            </p>
            <p>
              La Société Google Inc est susceptible de communiquer ces données à des tiers en cas d'obligation légale ou lorsque ces tiers traitent ces données pour son compte. La Société Google Inc ne recoupera pas l'adresse IP de l'utilisateur avec toute autre donnée qu'elle viendrait à détenir. L'utilisateur a la possibilité de désactiver l'utilisation de cookies en sélectionnant les paramètres appropriés de son navigateur. Cependant, une telle désactivation pourrait empêcher l'utilisation de certaines fonctionnalités, pages et/ou espaces du site, ce que l'utilisateur déclare expressément accepter.
            </p>
          </Section>

          <Section title="Sécurité des données personnelles">
            <p>
              ADM AVOCATS s'engage à tout mettre en œuvre pour assurer la confidentialité et la sécurité des données de l'utilisateur ou à faire assurer ces obligations aux sous-traitants choisis.
            </p>
            <p>
              ADM AVOCATS assure des mesures optimales de sécurité contre la perte, l'intrusion frauduleuse, le mauvais usage et l'altération des informations qui lui sont confiées. Toutes les données reçues sur le site sont sauvegardées quotidiennement et conservées sur un support de sauvegarde.
            </p>
          </Section>

          <Section title="Droits des utilisateurs">
            <p>L'utilisateur dispose de façon permanente des droits suivants :</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Un droit d'accès, de rectification, de suppression, un droit d'opposition et d'effacement au traitement de ses données pour motif légitime en ce qui concerne une collecte obligatoire ou sans motif lorsqu'il s'agit d'une collecte facultative.</li>
              <li>Un droit à la limitation du traitement quand l'utilisateur s'est opposé au traitement ou lorsqu'il conteste l'exactitude des données ou lorsqu'il estime que le traitement est illicite.</li>
              <li>Un droit à la portabilité de ses données. L'utilisateur dispose du droit de recevoir les données à caractère personnel qu'il a communiqué à ADM AVOCATS. Il peut également lui demander de transmettre ces données à un autre responsable de traitement.</li>
            </ul>
            <p>
              Pour exercer ce droit, l'utilisateur pourra adresser sa demande accompagnée d'un justificatif d'identité par e-mail à l'adresse suivante : <a href="mailto:thomaskleparski@avocatline.fr" className="text-[#E5493D] hover:underline">thomaskleparski@avocatline.fr</a>.
            </p>
            <p>
              En cas de violation de ses données personnelles, l'utilisateur en sera tenu informé dans les plus brefs délais. L'utilisateur a toujours la possibilité de saisir l'autorité de contrôle compétente, en France, la CNIL.
            </p>
          </Section>

          <Section title="Mise à jour et modifications de la charte">
            <p>
              ADM AVOCATS se réserve le droit de modifier ou adapter sa charte notamment, afin de respecter toute nouvelle législation et/ou réglementation applicable, les recommandations de la CNIL, les lignes directrices, les recommandations et les bonnes pratiques du Comité européen de la protection des données et les décisions des cours et tribunaux en la matière. ADM AVOCATS en informera les utilisateurs via le site.
            </p>
          </Section>
        </FadeInSection>
      </div>
    </div>
  )
}
