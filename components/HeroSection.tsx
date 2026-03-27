'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Images du carrousel : mettez vos images dans public/images/ et utilisez '/images/hero-1.jpg' etc.
const CAROUSEL_IMAGES = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
]

// Images de démo (justice / cabinet) si public/images/ est vide
const DEMO_IMAGES = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
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
    }, 9000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative z-0 min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <img
              src={images[currentSlide]}
              alt=""
              className="w-full h-full object-cover "
              onError={() => setUseDemo(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay sombre pour lisibilité (couleurs du site) */}
      <div className="absolute inset-0 z-[1] bg-[#313E35]/15" />

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
      <div className="relative z-20 w-full flex flex-col justify-between min-h-[80vh] pt-10 pb-10 sm:pb-12">
        {/* Halo dégradé derrière le titre */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-64 rounded-full bg-gradient-to-tr from-[#E5493D]/30 via-[#4d6263]/15 to-transparent blur-3xl"
        />

        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6">
          {/* Titre */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white font-bold leading-tight mb-6"
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.2rem, 7vw, 5.5rem)',
              letterSpacing: '0.05em',
              fontWeight: '400',
            }}
          >
            AVOCATS DU MOLINEL
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide"
          >
            Cabinet d'avocats au Barreau de Lille
          </motion.p>
        </div>

        {/* Barre bas : Depuis 2006 | Découvrir | Wasquehal */}
        <div className=" flex flex-col items-center justify-center text-center">
          
 
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

          
        </div>
      </div>
    </section>
  )
}
