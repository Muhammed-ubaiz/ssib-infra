import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play, Pause, ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import { company } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const containerRef = useRef(null)
  const videoRef = useRef(null)
  const reduce = useReducedMotion()

  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(true)

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
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
        >
          <source src="/videos/grand_hyatt_kochi_bolgatty_mast.webm" type="video/webm" />
        </video>

        {/* Ambient fallback gradient when loading */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-brand-dark/40 to-ink-950" />
        )}

        {/* Ultra-clear gradient overlays: focused vignette behind text only, leaving visual clarity intact */}
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

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.55 }}
            className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-silver-200"
          >
            Engineering resilient transportation corridors, heavy civil foundations, and industrial
            ecosystems across Kerala with German-calibrated paving tech and self-owned machinery fleets.
          </motion.p>

          {/* Micro Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-y border-white/10 py-4 max-w-3xl"
          >
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">100+ km</div>
              <div className="text-[0.7rem] uppercase tracking-wider text-silver-300 font-mono mt-0.5">Paved Roads</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-copper-400 tracking-tight">15+ Yrs</div>
              <div className="text-[0.7rem] uppercase tracking-wider text-silver-300 font-mono mt-0.5">Engineering</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">50+ Fleet</div>
              <div className="text-[0.7rem] uppercase tracking-wider text-silver-300 font-mono mt-0.5">Heavy Assets</div>
            </div>
            <div>
              <div className="font-display text-xl sm:text-2xl font-bold text-copper-400 tracking-tight">ISO 9001</div>
              <div className="text-[0.7rem] uppercase tracking-wider text-silver-300 font-mono mt-0.5">Certified</div>
            </div>
          </motion.div>

          {/* Primary Actions & Video Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              className="group shadow-2xl shadow-copper-500/25"
            >
              <span>Explore Projects</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>

            {videoLoaded && (
              <button
                type="button"
                onClick={toggleVideoPlay}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs tracking-wider text-silver-300 uppercase hover:text-white transition-colors ml-1"
                aria-label={videoPlaying ? 'Pause video' : 'Play video'}
              >
                {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span className="text-[0.7rem]">{videoPlaying ? 'Pause Video' : 'Play Video'}</span>
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>

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
