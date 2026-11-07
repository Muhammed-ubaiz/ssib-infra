import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDown, Play, Pause, MapPin, ChevronLeft, ChevronRight, Film, Image as ImageIcon } from 'lucide-react'
import Button from './ui/Button'
import { company, heroSlides } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const reduce = useReducedMotion()

  const [mediaMode, setMediaMode] = useState('photo') // 'photo' by default for pristine crystal-clear imagery
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '12%'])

  // Ensure hero starts at top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Preload all high-definition hero slides
  useEffect(() => {
    heroSlides.forEach((s) => {
      const img = new Image()
      img.src = s.src
    })
  }, [])

  // Smooth automatic rotation for photography showcase
  useEffect(() => {
    if (reduce || mediaMode !== 'photo') return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [reduce, mediaMode])

  const toggleVideoPlay = () => {
    if (!videoRef.current) return
    if (videoPlaying) {
      videoRef.current.pause()
      setVideoPlaying(false)
    } else {
      videoRef.current.play()
      setVideoPlaying(true)
    }
  }

  const toggleMediaMode = () => {
    if (mediaMode === 'photo') {
      setMediaMode('video')
      setVideoPlaying(true)
      if (videoRef.current) videoRef.current.play()
    } else {
      setMediaMode('photo')
      if (videoRef.current) videoRef.current.pause()
      setVideoPlaying(false)
    }
  }

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink-950 text-white"
    >
      {/* Background Media Container with Parallax */}
      <motion.div className="absolute inset-0 -z-20 overflow-hidden" style={{ y: mediaY }}>
        {/* Crystal-Clear Real Project Photography Slideshow (Default) */}
        <AnimatePresence initial={false} mode="sync">
          {mediaMode === 'photo' && (
            <motion.div
              key={activeSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={heroSlides[activeSlide].src}
                alt={heroSlides[activeSlide].alt}
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
                style={{
                  filter: 'contrast(1.04) saturate(1.08) brightness(1.0)',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cinematic Video Element (When Video Mode Active) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            mediaMode === 'video' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
        >
          <source src="/videos/grand_hyatt_kochi_bolgatty_mast.webm" type="video/webm" />
        </video>

        {/* Ultra-clear gradient overlays: focused vignette behind text only, leaving photography 100% visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-ink-950/25 pointer-events-none" />

        {/* Architectural framing lines */}
        <div className="absolute inset-x-8 sm:inset-x-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
        <div className="absolute right-8 sm:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ opacity, y: textY }}
        className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10 flex flex-1 flex-col justify-center pt-28 pb-12 sm:pt-36 sm:pb-16"
      >
        <div className="max-w-5xl">
          {/* Large Headline: "BUILDING BEYOND EXPECTATIONS." */}
          <h1 className="font-display mt-2 sm:mt-4 text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block text-white"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease, delay: 0.2 }}
              >
                BUILDING BEYOND
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block text-copper-gradient-light"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease, delay: 0.35 }}
              >
                EXPECTATIONS.
              </motion.span>
            </span>
          </h1>

          {/* Short Professional Company Introduction */}
          <motion.p
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-silver-100 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
          >
            Delivering landmark highways, bulk earthworks, and architectural infrastructure with unyielding precision across Kerala since {company.founded}.
          </motion.p>

          {/* Action Buttons: Explore Projects and Contact Us */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
          >
            <Button
              to="/projects"
              variant="white"
              className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase"
            >
              Explore Projects
            </Button>
            <Button
              to="/contact"
              variant="copper"
              className="px-8 py-3.5 text-sm font-semibold tracking-wider uppercase"
            >
              Contact Us
            </Button>

            {/* Media Mode Toggle (Photo Slideshow vs Drone Video) */}
            <button
              type="button"
              onClick={toggleMediaMode}
              className="inline-flex items-center gap-2 border border-white/20 bg-ink-950/60 px-4 py-3 text-xs tracking-wider text-white uppercase backdrop-blur-md transition-all hover:bg-white hover:text-ink-950 active:scale-95 ml-1"
              aria-label={mediaMode === 'photo' ? 'Switch to Drone Video' : 'Switch to Photos'}
            >
              {mediaMode === 'photo' ? (
                <>
                  <Film className="h-4 w-4 text-copper-300" />
                  <span className="text-[0.72rem] font-bold">Watch Drone Video</span>
                </>
              ) : (
                <>
                  <ImageIcon className="h-4 w-4 text-copper-300" />
                  <span className="text-[0.72rem] font-bold">View Clear Photos</span>
                </>
              )}
            </button>

            {mediaMode === 'video' && videoLoaded && (
              <button
                type="button"
                onClick={toggleVideoPlay}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider text-silver-300 uppercase hover:text-white transition-colors"
                aria-label={videoPlaying ? 'Pause video' : 'Play video'}
              >
                {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span className="text-[0.7rem]">{videoPlaying ? 'Pause' : 'Play'}</span>
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Interactive Project Slide Badge & Controls (Bottom Right) */}
      {mediaMode === 'photo' && (
        <div className="hidden md:flex absolute bottom-8 right-8 lg:right-14 z-20 items-end gap-3 pointer-events-auto">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="border border-white/15 bg-ink-950/90 p-4 backdrop-blur-md max-w-sm text-left shadow-2xl rounded-sm"
          >
            <div className="flex items-center justify-between gap-3 text-[0.65rem] font-mono uppercase tracking-wider text-copper-300">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-copper-400 animate-pulse" />
                {heroSlides[activeSlide].tag}
              </span>
              <span className="text-silver-400 font-mono">0{activeSlide + 1} / 0{heroSlides.length}</span>
            </div>
            <p className="font-display mt-1 text-sm font-bold text-white tracking-tight">
              {heroSlides[activeSlide].project}
            </p>
            <p className="mt-1 text-xs text-silver-300 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-copper-400 shrink-0" />
              <span>{heroSlides[activeSlide].location}</span>
            </p>
          </motion.div>

          {/* Slide Navigation Buttons */}
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
              aria-label="Previous slide"
              className="flex h-9 w-9 items-center justify-center border border-white/15 bg-ink-950/85 text-white hover:bg-copper-600 hover:border-copper-500 transition-colors active:scale-95"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
              aria-label="Next slide"
              className="flex h-9 w-9 items-center justify-center border border-white/15 bg-ink-950/85 text-white hover:bg-copper-600 hover:border-copper-500 transition-colors active:scale-95"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Elegant Minimal Scroll Indicator */}
      <div className="relative z-10 pb-8 flex justify-center">
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-[0.62rem] font-mono tracking-[0.25em] text-silver-400 uppercase transition-colors hover:text-copper-300"
          aria-label="Scroll down to About section"
        >
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            Scroll
          </span>
          <span className="relative block h-10 w-px overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-copper-400"
              animate={reduce ? undefined : { y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
          <ArrowDown className="h-3 w-3 text-copper-400 animate-bounce" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
