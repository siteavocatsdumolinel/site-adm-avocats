'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

// Images du carrousel : mettez vos images dans public/images/ et utilisez '/images/hero-1.jpg' etc.
const CAROUSEL_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
]

// Images de démo (justice / cabinet) si public/images/ est vide
const DEMO_IMAGES = [
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80',
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [useDemo, setUseDemo] = useState(false)
  const images = useDemo ? DEMO_IMAGES : CAROUSEL_IMAGES

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [images.length])

  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#313E35]">
      {/* Carrousel d'images en arrière-plan */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img
              src={images[currentSlide]}
              alt=""
              className="w-full h-full object-cover blur-[3px] scale-105"
              onError={() => setUseDemo(true)}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay sombre pour lisibilité (couleurs du site) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(49, 62, 53, 0.85) 0%, rgba(77, 98, 99, 0.75) 50%, rgba(49, 62, 53, 0.9) 100%)',
        }}
      />

      {/* Content — z-20 pour rester au-dessus du bloc du bas et garder les boutons cliquables */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
          
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
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

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-white/80 text-lg md:text-xl font-light tracking-wide mb-12 max-w-lg"
          >
            Cabinet d'avocats au Barreau de Lille
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/competences"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E5493D] text-white text-sm font-semibold tracking-wider uppercase hover:bg-[#c73d32] transition-colors duration-300"
            >
              Nos compétences
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/informations-et-contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white/90 text-sm tracking-wider hover:border-[#E5493D] hover:text-white transition-colors duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Indicateurs du carrousel + Découvrir */}
      <div className="absolute bottom-0 left-0 right-0 pt-20 pb-10 px-6 lg:px-8 z-[5] flex flex-col items-center gap-8">
        <div className="flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-[#E5493D] w-8' : 'bg-white/50 hover:bg-white/70 w-1.5'
              }`}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>

        <a
          href="#presentation"
          className="flex flex-col items-center gap-3 text-white hover:text-[#E5493D] transition-colors duration-300 group"
          aria-label="Voir la suite"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase">Découvrir</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/60 group-hover:border-[#E5493D] group-hover:bg-white/5 transition-all duration-300">
            <svg className="h-4 w-4 translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </span>
        </a>

        <div className="flex items-center justify-between w-full max-w-7xl text-white/60 text-[10px] tracking-[0.2em] uppercase">
          <span>Depuis 2006</span>
          <span>Wasquehal</span>
        </div>
      </div>
    </section>
  )
}
