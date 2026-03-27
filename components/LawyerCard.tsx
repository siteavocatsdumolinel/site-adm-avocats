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
  email?: string
  linkedin?: string
  /** Délai d'entrée pour effet stagger (optionnel) */
  delay?: number
}

export default function LawyerCard({ name, title, tags, photo, href, email, linkedin, delay = 0 }: LawyerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px', amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full max-w-[240px] mx-auto h-full"
    >
      <div className="group/card relative bg-[#f8f9f9] hover:bg-white border border-[#313E35]/5 hover:border-[#313E35]/12 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col items-center p-4 pt-5 overflow-hidden h-[300px]">

        {/* Lien de navigation : couvre toute la carte sauf l'overlay */}
        <Link href={href} className="group flex flex-col items-center w-full">
          <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-[#313E35]/5 group-hover:ring-[#E5493D]/25 transition-all duration-300 mb-3">
            <img
              src={photo}
              alt={name}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="text-center">
            <h3
              className="text-[#313E35] text-sm font-semibold tracking-wide mb-1 group-hover:text-[#E5493D] transition-colors duration-300"
            >
              {name}
            </h3>
            <p className="text-[#4d6263] text-xs leading-relaxed pb-4 line-clamp-2">
              {title}
            </p>
          </div>
        </Link>

        {/* Overlay au hover : ContactIcons + CTA — en dehors du Link pour éviter <a> dans <a> */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#313E35]/85 via-[#313E35]/55 to-transparent translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ease-out flex flex-col items-center justify-end gap-3 pb-5">
          <ContactIcons email={email} linkedin={linkedin} className="[&_a]:border-[#E5493D] [&_a]:text-white [&_a]:bg-[#E5493D] [&_a:hover]:bg-[#c93a2f] [&_a:hover]:border-[#c93a2f] [&_a:hover]:text-white" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-white font-semibold bg-[#E5493D] px-4 py-2 pointer-events-none">
            Voir le profil complet
          </span>
        </div>

      </div>
    </motion.div>
  )
}
