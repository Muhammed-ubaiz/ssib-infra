import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Phone, ShieldCheck, Sparkles, ChevronRight, Play, Pause } from 'lucide-react'
import Button from './ui/Button'
import { company, aiHeroScenes } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const containerRef = useRef(null)
  const reduce = useReducedMotion()

  const [activeScene, setActiveScene] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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

  // Preload all AI hero images
  useEffect(() => {
    aiHeroScenes.forEach((scene) => {
      const img = new Image()
      img.src = scene.src
    })
  }, [])

  // Auto-rotate AI scenes every 7 seconds
  useEffect(() => {
    if (reduce || !isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % aiHeroScenes.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [reduce, isAutoPlaying])

  const current = aiHeroScenes[activeScene] || aiHeroScenes[0]

  return (
    <section
      id="home"
      ref={containerRef}
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink-950 text-white"
    >
      {/* Background AI Visual Stage with Parallax */}
      <motion.div className="absolute inset-0 -z-20 overflow-hidden" style={{ y: mediaY }}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={current.id}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={current.src}
              alt={current.title}
              fetchPriority="high"
              className="h-full w-full object-cover object-center"
              style={{
                filter: 'contrast(1.06) saturate(1.12) brightness(0.96)',
                imageRendering: '-webkit-optimize-contrast',
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Brand Gradient Overlays */}
        {/* Left-to-right dark wash for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/65 to-ink-950/30" />
        {/* Bottom-to-top vignette to anchor content */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/30" />
        {/* Subtle Royal Blue ambient glow for SSIB brand identity */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-copper-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-copper-600/15 blur-3xl pointer-events-none" />

        {/* Architectural subtle grid lines */}
        <div className="absolute inset-x-8 sm:inset-x-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
        <div className="absolute right-8 sm:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div
        style={{ opacity, y: textY }}
        className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10 flex flex-1 flex-col justify-center pt-28 pb-10 sm:pt-36 sm:pb-14"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Headline & Primary Actions (cols 1-7) */}
          <div className="lg:col-span-7 max-w-3xl">
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

            {/* Redesigned Large Headline */}
            <h1 className="font-display mt-4 text-[2.6rem] leading-[0.98] font-extrabold tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[5.2rem] drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block text-white"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: 0.15 }}
                >
                  BUILDING KERALA&apos;S
                </motion.span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <motion.span
                  className="block text-copper-gradient-light"
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.9, ease, delay: 0.3 }}
                >
                  NEXT-GEN INFRASTRUCTURE.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle with High Authority */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.5 }}
              className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl font-light leading-relaxed text-silver-200"
            >
              Pioneering turnkey highway corridors, heavy civil foundations, and precision asphalt
              engineering with German-sensor technology, self-owned batching plants, and Kerala&apos;s
              most formidable equipment fleet.
            </motion.p>

            {/* Primary Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.65 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="group shadow-2xl shadow-copper-500/35 relative overflow-hidden"
              >
                <span>Explore Signature Projects</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Button>

              <Button href="#contact" variant="secondary" size="lg">
                Request Technical Proposal
              </Button>

              <a
                href={`tel:${company.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-mono tracking-wider text-silver-300 hover:text-white transition-colors"
                aria-label={`Call SSIB directly at ${company.phone}`}
              >
                <Phone className="h-3.5 w-3.5 text-copper-400" />
                <span>{company.phone}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive AI Infrastructure HUD Showcase (cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="relative overflow-hidden rounded-sm border border-white/15 bg-ink-950/85 p-6 backdrop-blur-xl shadow-2xl"
            >
              {/* Header with Live AI indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-copper-300 font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-copper-400" />
                  <span>AI Infrastructure Vision</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    aria-label={isAutoPlaying ? 'Pause rotation' : 'Play rotation'}
                    className="flex items-center gap-1 text-[0.65rem] font-mono text-silver-400 hover:text-white px-2 py-0.5 border border-white/10 transition-colors"
                  >
                    {isAutoPlaying ? <Pause className="h-2.5 w-2.5 text-copper-400" /> : <Play className="h-2.5 w-2.5 text-copper-400" />}
                    <span>{isAutoPlaying ? 'Auto' : 'Paused'}</span>
                  </button>
                  <span className="text-xs font-mono text-silver-400">
                    0{activeScene + 1} / 0{aiHeroScenes.length}
                  </span>
                </div>
              </div>

              {/* Dynamic Scene Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="py-4"
                >
                  <div className="text-[0.68rem] font-mono uppercase tracking-wider text-copper-300">
                    {current.category}
                  </div>
                  <h3 className="font-display mt-1 text-lg sm:text-xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-silver-300">
                    {current.spec}
                  </p>
                  <div className="mt-2.5 flex items-center gap-1.5 text-[0.7rem] font-mono text-silver-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    <span>{current.location}</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Scene Switcher Selector */}
              <div className="mt-2 pt-3 border-t border-white/10">
                <div className="text-[0.65rem] font-mono uppercase tracking-wider text-silver-400 mb-2">
                  Select Visual Perspective:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {aiHeroScenes.map((scene, idx) => (
                    <button
                      key={scene.id}
                      type="button"
                      onClick={() => {
                        setActiveScene(idx)
                        setIsAutoPlaying(false)
                      }}
                      className={`text-left p-2 border transition-all text-xs rounded-none ${
                        activeScene === idx
                          ? 'border-copper-400 bg-copper-950/40 text-white shadow-md'
                          : 'border-white/10 bg-white/[0.02] text-silver-400 hover:border-white/30 hover:text-white'
                      }`}
                    >
                      <div className="text-[0.62rem] font-mono text-copper-400 mb-0.5">
                        0{idx + 1}
                      </div>
                      <div className="font-medium text-[0.72rem] leading-tight line-clamp-1">
                        {scene.shortLabel}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Redesigned Key Infrastructure Metrics Dock */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.8 }}
          className="mt-12 sm:mt-16 border border-white/15 bg-ink-950/75 backdrop-blur-md p-4 sm:p-5 rounded-sm shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="pt-2 sm:pt-0 sm:px-4 first:px-0">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
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
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-copper-400 tracking-tight">
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
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  50+
                </span>
                <span className="text-xs font-mono uppercase text-copper-400 font-semibold">Heavy Assets</span>
              </div>
              <p className="mt-1 text-xs text-silver-300">
                Self-owned Vögele pavers, Volvo rollers, and tippers
              </p>
            </div>

            <div className="pt-2 sm:pt-0 sm:px-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-copper-400 tracking-tight">
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
            Explore SSIB
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
