'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  className?: string
  /** Légère mise à l'échelle à l'entrée (0.98 → 1) */
  subtleScale?: boolean
}

export default function FadeInSection({ children, delay = 0, className = '', subtleScale = false }: FadeInSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        ...(subtleScale && { scale: 0.98 }),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(subtleScale && { scale: 1 }),
      }}
      viewport={{ once: true, margin: '-60px', amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
