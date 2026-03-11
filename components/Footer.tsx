import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#313E35]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-adm.jpg"
                alt="ADM Avocats du Molinel"
                width={180}
                height={62}
                className="h-14 w-auto object-contain object-left opacity-95 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Cabinet d'avocats pluridisciplinaire<br />
              au Barreau de Lille depuis 2006.
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Adresse
            </h3>
            <address className="not-italic text-white/50 text-sm leading-relaxed space-y-1">
              <p>Centre d'affaires du Molinel – Bat E</p>
              <p>Avenue de la Marne</p>
              <p>Allée de la Marque</p>
              <p>59290 Wasquehal</p>
              <a
                href="tel:0320121060"
                className="inline-block mt-2 text-[#E5493D] hover:text-white transition-colors"
              >
                03 20 12 10 60
              </a>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/competences" className="text-white/50 hover:text-white transition-colors">
                  Compétences
                </Link>
              </li>
              <li>
                <Link href="/#equipe" className="text-white/50 hover:text-white transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link href="/informations-et-contact" className="text-white/50 hover:text-white transition-colors">
                  Infos & Contact
                </Link>
              </li>
              <li>
                <Link href="/le-blog" className="text-white/50 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs tracking-wide">
            © ADM 2018 – 2026. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link href="/mentionslegales" className="text-white/30 hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-white/30 hover:text-white/60 transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
