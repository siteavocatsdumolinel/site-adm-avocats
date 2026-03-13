'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const competencesLinks = [
  { label: 'Droit commercial', href: '/competences#droit-commercial' },
  { label: 'Droit pénal', href: '/competences#droit-penal' },
  { label: 'Droit social', href: '/competences#droit-social' },
  { label: 'Droit fiscal', href: '/competences#droit-fiscal' },
]

const equipeLinks = [
  { label: 'Frank BECKELYNCK', href: '/frank-beckelynck-avocat' },
  { label: 'Caroline DUQUESNE', href: '/caroline-duquesne-avocat' },
  { label: 'Eric GARDIN', href: '/eric-gardin' },
  { label: 'Raphaël THOMAS', href: '/raphael-thomas-avocat' },
  { label: 'Charlotte LEFEBVRE', href: '/charlotte-lefebvre-avocat' },
  { label: 'Claire FRYS', href: '/claire-frys-avocat' },
  { label: 'Christophe LECLERCQ', href: '/leclercq-christophe' },
]

const contactLinks = [
  { label: 'Coordonnées', href: '/informations-et-contact#coordonnees' },
  { label: 'Situation', href: '/informations-et-contact#situation' },
  { label: 'Contact', href: '/informations-et-contact#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navBg = 'bg-white shadow-sm shadow-[#313E35]/10'
  const linkClass = 'text-[#313E35]/90 hover:text-[#E5493D]'
  const burgerColor = 'bg-[#313E35]'

  return (
    <nav
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label="ADM Avocats du Molinel - Accueil">
            <Image
              src="/logo-adm.jpg"
              alt="ADM Avocats du Molinel"
              width={140}
              height={48}
              className="h-16 w-auto object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <DropdownItem
              label="Compétences"
              href="/competences"
              isOpen={openDropdown === 'competences'}
              onToggle={() => setOpenDropdown(openDropdown === 'competences' ? null : 'competences')}
              links={competencesLinks}
              linkClass={linkClass}
            />
            <DropdownItem
              label="Équipe"
              href="/#equipe"
              isOpen={openDropdown === 'equipe'}
              onToggle={() => setOpenDropdown(openDropdown === 'equipe' ? null : 'equipe')}
              links={equipeLinks}
              linkClass={linkClass}
            />
            <DropdownItem
              label="Infos & Contact"
              href="/informations-et-contact"
              isOpen={openDropdown === 'contact'}
              onToggle={() => setOpenDropdown(openDropdown === 'contact' ? null : 'contact')}
              links={contactLinks}
              linkClass={linkClass}
            />
            <Link
              href="/le-blog"
              className={`px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${linkClass}`}
              onClick={() => setOpenDropdown(null)}
            >
              Blog
            </Link>
            <a
              href="tel:0320121060"
              className="ml-4 px-5 py-2 bg-[#E5493D] text-white text-sm tracking-wider hover:bg-[#c73d32] transition-colors duration-300"
            >
              03 20 12 10 60
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-full h-[1.5px] ${burgerColor} transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-full h-[1.5px] ${burgerColor} transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-[1.5px] ${burgerColor} transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-40 transition-all duration-300 overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          <MobileDropdown label="Compétences" href="/competences" isOpen={mobileExpanded === 'competences'} onToggle={() => setMobileExpanded(mobileExpanded === 'competences' ? null : 'competences')} links={competencesLinks} onClose={() => setMobileOpen(false)} />
          <MobileDropdown label="Équipe" href="/#equipe" isOpen={mobileExpanded === 'equipe'} onToggle={() => setMobileExpanded(mobileExpanded === 'equipe' ? null : 'equipe')} links={equipeLinks} onClose={() => setMobileOpen(false)} />
          <MobileDropdown label="Infos & Contact" href="/informations-et-contact" isOpen={mobileExpanded === 'contact'} onToggle={() => setMobileExpanded(mobileExpanded === 'contact' ? null : 'contact')} links={contactLinks} onClose={() => setMobileOpen(false)} />
          <Link href="/le-blog" className="block py-4 text-[#313E35]/80 text-base tracking-wide border-t border-[#313E35]/10" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <div className="pt-6">
            <a href="tel:0320121060" className="block text-center py-3 bg-[#E5493D] text-white tracking-wider hover:bg-[#c73d32] transition-colors" onClick={() => setMobileOpen(false)}>
              03 20 12 10 60
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

interface DropdownItemProps {
  label: string
  href: string
  isOpen: boolean
  onToggle: () => void
  links: { label: string; href: string }[]
  linkClass: string
}

function DropdownItem({ label, href, isOpen, onToggle, links, linkClass }: DropdownItemProps) {
  return (
    <div className="relative">
      <button
        className={`flex items-center gap-1.5 px-4 py-2 text-sm tracking-wide transition-colors duration-200 ${linkClass}`}
        onClick={onToggle}
      >
        {label}
        <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-1 w-56 bg-white border border-[#313E35]/10 shadow-lg py-1 rounded-md overflow-hidden"
          >
            <Link href={href} className="block px-4 py-2.5 text-sm text-[#E5493D] hover:bg-[#f8f9f9] transition-colors duration-200 border-b border-[#313E35]/5 mb-1" onClick={onToggle}>
              Voir tout
            </Link>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-[#4d6263] hover:text-[#313E35] hover:bg-[#f8f9f9] transition-colors duration-200" onClick={onToggle}>
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface MobileDropdownProps {
  label: string
  href: string
  isOpen: boolean
  onToggle: () => void
  links: { label: string; href: string }[]
  onClose: () => void
}

function MobileDropdown({ label, href, isOpen, onToggle, links, onClose }: MobileDropdownProps) {
  return (
    <div className="border-t border-[#313E35]/10">
      <button className="w-full flex items-center justify-between py-4 text-[#313E35] text-base tracking-wide" onClick={onToggle}>
        {label}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-2 space-y-1 pl-4">
          <Link href={href} className="block py-2.5 text-sm text-[#E5493D]" onClick={onClose}>Voir tout</Link>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block py-2.5 text-sm text-[#4d6263] hover:text-[#313E35] transition-colors" onClick={onClose}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
