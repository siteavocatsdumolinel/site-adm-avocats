'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const competencesLinks = [
  { label: 'Droit civil & Droit commercial', href: '/competences#droit-commercial' },
  { label: 'Droit pénal', href: '/competences#droit-penal' },
  { label: 'Droit social', href: '/competences#droit-social' },
  { label: 'Droit fiscal & Droit des sociétés', href: '/competences#droit-fiscal' },
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

  return (
    <nav
      ref={dropdownRef}
      className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#313E35]/8 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-20">

          {/* Logo — gauche */}
          <Link href="/" className="flex items-center" aria-label="ADM Avocats du Molinel - Accueil">
            <Image
              src="/images/logo_adm.png"
              alt="ADM Avocats du Molinel"
              width={200}
              height={70}
              className="h-20 w-auto object-contain object-left"
              priority
            />
          </Link>

          {/* Navigation — centre */}
          <div className="hidden lg:flex items-center justify-center gap-0">
            <DropdownItem
              label="Compétences"
              href="/competences"
              isOpen={openDropdown === 'competences'}
              onToggle={() => setOpenDropdown(openDropdown === 'competences' ? null : 'competences')}
              links={competencesLinks}
            />
            <DropdownItem
              label="Équipe"
              href="/#equipe"
              isOpen={openDropdown === 'equipe'}
              onToggle={() => setOpenDropdown(openDropdown === 'equipe' ? null : 'equipe')}
              links={equipeLinks}
            />
            <Link
              href="/informations-et-contact"
              className="relative group/nav pl-4 pr-4 py-2 text-sm font-medium tracking-wide text-[#313E35]/80 hover:text-[#E5493D] transition-colors duration-200 whitespace-nowrap"
            >
              Infos & Contact
              <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E5493D] rounded-full scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
            
          </div>

          {/* Téléphone — droite */}
          <div className="hidden lg:flex items-center justify-end">
            <a
              href="tel:0320121060"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5493D] text-white text-sm font-semibold tracking-wider rounded-full hover:bg-[#c73d32] hover:shadow-md hover:shadow-[#E5493D]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              03 20 12 10 60
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="lg:hidden col-start-3 flex flex-col justify-center items-end gap-[5px] w-8 h-8 ml-auto p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block w-full h-[1.5px] bg-[#313E35] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-[#313E35] transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-full h-[1.5px] bg-[#313E35] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-white z-[110] transition-all duration-300 overflow-y-auto ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-6 py-8 space-y-1">
          <MobileDropdown label="Compétences" href="/competences" isOpen={mobileExpanded === 'competences'} onToggle={() => setMobileExpanded(mobileExpanded === 'competences' ? null : 'competences')} links={competencesLinks} onClose={() => setMobileOpen(false)} />
          <MobileDropdown label="Équipe" href="/#equipe" isOpen={mobileExpanded === 'equipe'} onToggle={() => setMobileExpanded(mobileExpanded === 'equipe' ? null : 'equipe')} links={equipeLinks} onClose={() => setMobileOpen(false)} />
          <div className="border-t border-[#313E35]/10">
            <Link href="/informations-et-contact" className="block py-4 text-[#313E35] text-base tracking-wide" onClick={() => setMobileOpen(false)}>
              Infos & Contact
            </Link>
          </div>
          <div className="pt-6">
            <a
              href="tel:0320121060"
              className="flex items-center justify-center gap-2 py-3 bg-[#E5493D] text-white tracking-wider rounded-full hover:bg-[#c73d32] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
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
}

function DropdownItem({ label, href, isOpen, onToggle, links }: DropdownItemProps) {
  return (
    <div className="relative group/dropdown">
      {/* Trigger */}
      <div className="relative flex items-center text-sm font-medium tracking-wide text-[#313E35]/80 group-hover/dropdown:text-[#E5493D] transition-colors duration-200">
        <Link href={href} className="pl-4 pr-1 py-2 whitespace-nowrap">
          {label}
        </Link>
        <span className="pr-4 py-2 cursor-default">
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover/dropdown:rotate-180"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
        {/* Soulignement */}
        <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#E5493D] rounded-full scale-x-0 group-hover/dropdown:scale-x-100 transition-transform duration-200 origin-left" />
      </div>

      {/* Dropdown — s'ouvre au hover via CSS, pont invisible pour ne pas perdre le focus */}
      <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-opacity duration-150">
        <div className="w-56 bg-white border border-[#313E35]/10 shadow-xl shadow-[#313E35]/8 py-2 rounded-xl overflow-hidden">
          <Link href={href} className="block px-4 py-2.5 text-sm text-[#E5493D] font-medium hover:bg-[#f8f9f9] transition-colors duration-150 border-b border-[#313E35]/5 mb-1">
            Voir tout →
          </Link>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-[#4d6263] hover:text-[#313E35] hover:bg-[#f8f9f9] transition-colors duration-150">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
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
