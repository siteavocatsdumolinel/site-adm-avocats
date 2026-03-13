'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ContactIcons from '@/components/ContactIcons'

interface LawyerCardProps {
  name: string
  title: string
  tags: string[]
  photo: string
  href: string
  /** Délai d'entrée pour effet stagger (optionnel) */
  delay?: number
}

export default function LawyerCard({ name, title, tags, photo, href, delay = 0 }: LawyerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px', amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-[280px] mx-auto h-full"
    >
      <Link href={href} className="group block h-full">
        <div className="group/card relative bg-[#f8f9f9] hover:bg-white border border-[#313E35]/5 hover:border-[#313E35]/10 rounded-xl shadow-sm hover:shadow-lg hover:shadow-[#313E35]/06 hover:-translate-y-1 transition-all duration-300 ease-out h-full flex flex-col p-6 overflow-hidden h-[340px] md:h-[360px]">
          {/* Photo */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-[#313E35]/5 group-hover:ring-[#E5493D]/25 transition-all duration-300">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div onClick={(e) => e.stopPropagation()} className="mt-3">
              <ContactIcons />
            </div>
          </div>

          {/* Content principal */}
          <div className="text-center flex flex-col flex-1">
            <h3
              className="text-[#313E35] text-base font-semibold tracking-wide mb-1 group-hover:text-[#E5493D] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {name}
            </h3>
            <p className="text-[#4d6263] text-xs leading-relaxed mb-4 flex-1">
              {title}
            </p>
          </div>

          {/* Overlay profil au hover : simple CTA */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#313E35]/85 via-[#313E35]/55 to-transparent translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out flex items-end justify-center pb-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-white font-semibold bg-[#E5493D] px-4 py-2">
              Voir le profil complet
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
