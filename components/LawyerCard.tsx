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
}

export default function LawyerCard({ name, title, tags, photo, href }: LawyerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link href={href} className="group block h-full">
        <div className="bg-[#f8f9f9] hover:bg-white border border-[#313E35]/5 hover:border-[#313E35]/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col p-6">
          {/* Photo */}
          <div className="flex flex-col items-center mb-4">
            <div className="relative w-36 h-36 rounded-full overflow-hidden ring-2 ring-[#313E35]/5 group-hover:ring-[#E5493D]/25 transition-all duration-300">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div onClick={(e) => e.stopPropagation()} className="mt-3">
              <ContactIcons />
            </div>
          </div>

          {/* Content */}
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
            <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase text-[#313E35] bg-[#4d6263]/15 px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
