import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDown, Play, Pause, Video, Images, ChevronLeft, ChevronRight, ShieldCheck, MapPin } from 'lucide-react'
import Button from './ui/Button'
import { company, heroSlides } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const reduce = useReducedMotion()

  // Media Mode: 'video' by default (high-clarity cinematic Bolgatty waterfront)
  const [mediaMode, setMediaMode] = useState('video')
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(true)
  const [activeSlide, setActiveSlide] = useState(0)

  // Scroll parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '10%'])

  // Ensure hero starts at top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Preload all real project photography slides
  useEffect(() => {
    heroSlides.forEach((s) => {
      const img = new Image()
      img.src = s.src
    })
  }, [])

  // Auto-rotate real photography slides when in photo mode
  useEffect(() => {
    if (reduce || mediaMode !== 'photo') return
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [reduce, mediaMode])

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (videoPlaying) {
      videoRef.current.pause()
      setVideoPlaying(false)
    } else {
      videoRef.current.play()
      setVideoPlaying(true)
    }
  }

  const switchMode = (mode) => {
    setMediaMode(mode)
    if (mode === 'video') {
      if (videoRef.current) videoRef.current.play()
      setVideoPlaying(true)
    } else {
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
        {/* Cinematic Video Element — optimized for vivid clarity & high definition */}
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

        {/* Real Project Photography Slideshow (When in Photo mode or video loading) */}
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
                  filter: 'contrast(1.04) saturate(1.08) brightness(0.98)',
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ultra-clear gradient overlays: focused vignette behind text only, leaving visual clarity intact */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-transparent to-ink-950/25 pointer-events-none" />

        {/* Subtle Royal Blue ambient corner glow */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-copper-600/15 blur-3xl pointer-events-none" />

        {/* Architectural framing lines */}
        <div className="absolute inset-x-8 sm:inset-x-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
        <div className="absolute right-8 sm:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ opacity, y: textY }}
        className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 sm:pt-36 sm:pb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-8 max-w-3xl">
            {/* Government Accredited Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-copper-400/30 bg-ink-950/70 backdrop-blur-md shadow-lg"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-copper-500" />
              </span>
              <span className="text-[0.68rem] sm:text-xs font-mono uppercase tracking-widest text-white font-medium">
                Government Accredited Class-A Infra Contractor
              </span>
              <ShieldCheck className="h-3.5 w-3.5 text-copper-400" />
            </motion.div>

            {/* Large Headline: "BUILDING BEYOND EXPECTATIONS." */}
            <h1 className="font-display mt-4 text-[2.7rem] leading-[0.98] font-extrabold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem] drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block text-white"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: 0.15 }}
                >
                  BUILDING BEYOND
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block text-copper-gradient-light"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: 0.3 }}
                >
                  EXPECTATIONS.
                </motion.span>
              </span>
            </h1>

            {/* Short Professional Company Introduction */}
            <motion.p
              className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-silver-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.5 }}
            >
              Delivering landmark highways, heavy civil foundations, and precision asphalt engineering
              across Kerala with German-calibrated paving tech and self-owned machinery fleets since {company.founded}.
            </motion.p>

            {/* Action Buttons & Media Controls */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.65 }}
            >
              <Button
                to="/projects"
                variant="white"
                className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase shadow-xl"
              >
                Explore Projects
              </Button>
              <Button
                to="/contact"
                variant="copper"
                className="px-8 py-3.5 text-sm font-bold tracking-wider uppercase shadow-xl"
              >
                Contact Us
              </Button>

              {/* Seamless Media Switcher Pill: Drone Video / Real Photos */}
              <div className="inline-flex items-center p-1 border border-white/20 bg-ink-950/80 backdrop-blur-md rounded-full shadow-lg">
                <button
                  type="button"
                  onClick={() => switchMode('video')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    mediaMode === 'video'
                      ? 'bg-copper-600 text-white font-bold shadow-md'
                      : 'text-silver-300 hover:text-white'
                  }`}
                  aria-label="Switch to Cinematic Drone Video"
                >
                  <Video className="h-3.5 w-3.5" />
                  <span>Drone Video</span>
                </button>
                <button
                  type="button"
                  onClick={() => switchMode('photo')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    mediaMode === 'photo'
                      ? 'bg-copper-600 text-white font-bold shadow-md'
                      : 'text-silver-300 hover:text-white'
                  }`}
                  aria-label="Switch to Real Project Photography"
                >
                  <Images className="h-3.5 w-3.5" />
                  <span>Real Photos ({heroSlides.length})</span>
                </button>
              </div>

              {/* Video Play/Pause Toggle (When Video Active) */}
              {mediaMode === 'video' && videoLoaded && (
                <button
                  type="button"
                  onClick={toggleVideo}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider text-silver-300 uppercase hover:text-white transition-colors"
                  aria-label={videoPlaying ? 'Pause video' : 'Play video'}
                >
                  {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                  <span className="text-[0.7rem]">{videoPlaying ? 'Pause' : 'Play'}</span>
                </button>
              )}
            </motion.div>
          </div>

          {/* Right Column: Dynamic Location / Project HUD Badge */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="w-full max-w-sm rounded-sm border border-white/15 bg-ink-950/85 p-4 backdrop-blur-xl shadow-2xl"
            >
              {mediaMode === 'video' ? (
                <div>
                  <div className="flex items-center justify-between text-[0.65rem] font-mono uppercase tracking-wider text-copper-300">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-copper-400 animate-pulse" />
                      Cinematic Aerial Footage
                    </span>
                    <span className="text-silver-400">4K Live</span>
                  </div>
                  <h3 className="font-display mt-2 text-sm sm:text-base font-bold text-white tracking-tight">
                    Bolgatty Waterfront & Marine Corridor
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-xs text-silver-300">
                    <MapPin className="h-3.5 w-3.5 text-copper-400 shrink-0" />
                    <span>Kochi, Kerala — SSIB Regional Operations</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-[0.65rem] font-mono uppercase tracking-wider text-copper-300">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-copper-400 animate-pulse" />
                      {heroSlides[activeSlide].tag}
                    </span>
                    <span className="text-silver-400 font-mono">
                      0{activeSlide + 1} / 0{heroSlides.length}
                    </span>
                  </div>
                  <h3 className="font-display mt-2 text-sm sm:text-base font-bold text-white tracking-tight">
                    {heroSlides[activeSlide].project}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-1 text-xs text-silver-300">
                    <MapPin className="h-3.5 w-3.5 text-copper-400 shrink-0" />
                    <span>{heroSlides[activeSlide].location}</span>
                  </div>

                  {/* Slide controls */}
                  <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[0.65rem] font-mono text-silver-400 uppercase">
                      Site Photography
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                        }
                        aria-label="Previous slide"
                        className="flex h-7 w-7 items-center justify-center border border-white/15 bg-white/[0.05] text-white hover:bg-copper-600 hover:border-copper-500 transition-colors"
                      >
                        <ChevronLeft className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
                        aria-label="Next slide"
                        className="flex h-7 w-7 items-center justify-center border border-white/15 bg-white/[0.05] text-white hover:bg-copper-600 hover:border-copper-500 transition-colors"
                      >
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Refined Infrastructure Metrics Bar (Bottom Dock) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.75 }}
          className="mt-10 sm:mt-14 border border-white/15 bg-ink-950/75 backdrop-blur-md p-4 sm:p-5 rounded-sm shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-2 sm:pt-0 sm:px-4 first:px-0">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  100+
                </span>
                <span className="text-xs font-mono uppercase text-copper-400 font-semibold">KM Paved</span>
              </div>
              <p className="mt-1 text-xs text-silver-300">
                State & National Highway networks across Kerala
              </p>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-copper-400 tracking-tight">
                  15+
                </span>
                <span className="text-xs font-mono uppercase text-silver-300 font-semibold">Years</span>
              </div>
              <p className="mt-1 text-xs text-silver-300">
                Engineering trust serving Tier-1 contractors & Govt.
              </p>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  50+
                </span>
                <span className="text-xs font-mono uppercase text-copper-400 font-semibold">Fleet Assets</span>
              </div>
              <p className="mt-1 text-xs text-silver-300">
                Self-owned Vögele pavers, Volvo rollers, and tippers
              </p>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-copper-400 tracking-tight">
                  ISO 9001
                </span>
                <span className="text-xs font-mono uppercase text-silver-300 font-semibold">:2015</span>
              </div>
              <p className="mt-1 text-xs text-silver-300">
                Audited bitumen QA & workplace safety compliance
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Elegant Minimal Scroll Indicator */}
      <div className="relative z-10 pb-6 flex justify-center">
        <a
          href="#about"
          className="group flex flex-col items-center gap-1.5 text-[0.62rem] font-mono tracking-[0.25em] text-silver-400 uppercase transition-colors hover:text-copper-300"
          aria-label="Scroll down to About section"
        >
          <span className="transition-transform duration-300 group-hover:translate-y-1">
            Scroll
          </span>
          <span className="relative block h-8 w-px overflow-hidden bg-white/20">
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
