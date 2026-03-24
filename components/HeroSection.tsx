'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Images du carrousel : mettez vos images dans public/images/ et utilisez '/images/hero-1.jpg' etc.
const CAROUSEL_IMAGES = [
  '/images/hero/hero-1.jfif',
  '/images/hero/hero-2.jfif',
  '/images/hero/hero-3.jfif',
]

// Images de démo (justice / cabinet) si public/images/ est vide
const DEMO_IMAGES = [
  '/images/hero/hero-1.jfif',
  '/images/hero/hero-2.jfif',
  '/images/hero/hero-3.jfif',
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [useDemo, setUseDemo] = useState(false)
  const images = useDemo ? DEMO_IMAGES : CAROUSEL_IMAGES

  const handleDiscoverClick = () => {
    if (typeof document === 'undefined') return
    const section = document.getElementById('presentation')
    if (section) {
      const navOffset = 80
      const rect = section.getBoundingClientRect()
      const targetY = rect.top + window.pageYOffset - navOffset
      window.scrollTo({ top: targetY, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative z-0 min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#313E35] pt-20">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentSlide]}
              alt=""
              className="w-full h-full object-cover blur-[4px] scale-110"
              onError={() => setUseDemo(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay sombre pour lisibilité (couleurs du site) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(circle at 0% 0%, rgba(229, 73, 61, 0.42) 0, transparent 40%), radial-gradient(circle at 80% 20%, rgba(77, 98, 99, 0.26) 0, transparent 55%), linear-gradient(135deg, rgba(49, 62, 53, 0.9) 0%, rgba(77, 98, 99, 0.78) 50%, rgba(49, 62, 53, 0.94) 100%)',
        }}
      />

      {/* Décor de formes en arrière-plan */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 0.75, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="pointer-events-none absolute -right-32 md:-right-10 top-24 md:top-32 w-72 h-72 md:w-[22rem] md:h-[22rem] rounded-[40%] bg-gradient-to-br from-[#4d6263]/60 via-[#313E35]/40 to-[#E5493D]/30 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.55, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pointer-events-none absolute -bottom-32 md:-bottom-40 left-1/2 -translate-x-1/2 w-[130%] h-64 md:h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(184,201,202,0.22),transparent_70%)]"
      />

      {/* Contenu au premier plan */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24 pb-10 sm:pb-12 flex flex-col justify-between gap-12 min-h-[80vh]">
        {/* Halo dégradé derrière le titre */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pointer-events-none absolute -left-10 md:left-0 -top-10 md:-top-6 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-[#E5493D]/40 via-[#4d6263]/20 to-transparent blur-3xl"
        />

        <div className="relative max-w-4xl w-full mx-auto text-center md:text-left">
          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white font-bold leading-none mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              letterSpacing: '-0.02em',
            }}
          >
            AVOCATS
            <br />
            <span className="text-[#b8c9ca]">DU MOLINEL</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-8 sm:mb-12 max-w-lg mx-auto md:mx-0"
          >
            Cabinet d'avocats au Barreau de Lille
          </motion.p>


          {/* Boutons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/competences"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E5493D] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#c73d32] transition-all duration-300 hover:shadow-md hover:shadow-[#E5493D]/25 hover:-translate-y-0.5"
            >
              Nos compétences
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/informations-et-contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white/90 text-sm tracking-wider rounded-full hover:border-[#E5493D] hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Barre bas : Depuis 2006 | Découvrir | Wasquehal */}
        <div className="flex items-center justify-between w-full">
          <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">Depuis 2006</span>

          <motion.button
            type="button"
            onClick={handleDiscoverClick}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group"
            aria-label="Voir la suite"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase">Découvrir</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 group-hover:border-white bg-black/20 backdrop-blur-sm transition-all duration-300">
              <svg className="h-3.5 w-3.5 translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.button>

          <span className="text-white/60 text-[10px] tracking-[0.2em] uppercase">Wasquehal</span>
        </div>
      </div>
    </section>
  )
}
