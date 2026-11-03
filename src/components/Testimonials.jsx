import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  MapPin,
  Star,
  ShieldCheck,
  Building2,
  LayoutGrid,
  Sparkles,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { testimonials } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

// Monogram generator for author avatars
function getInitials(name) {
  return name
    .split(' ')
    .filter((w) => !['—', '-', 'and', '&', 'for'].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [viewMode, setViewMode] = useState('spotlight') // 'spotlight' | 'grid'
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)

  const activeItem = testimonials[current]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Smooth auto-rotation with progress bar when in spotlight view and not hovered
  useEffect(() => {
    if (viewMode !== 'spotlight' || isPaused) {
      setProgress(0)
      return
    }

    const intervalMs = 50
    const totalMs = 7000
    const step = (intervalMs / totalMs) * 100

    timerRef.current = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          next()
          return 0
        }
        return old + step
      })
    }, intervalMs)

    return () => clearInterval(timerRef.current)
  }, [current, isPaused, viewMode])

  const handleSelectSlide = (idx) => {
    setCurrent(idx)
    setProgress(0)
  }

  return (
    <section
      id="testimonials"
      className="relative bg-ink-950 text-white py-14 sm:py-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-[450px] w-[450px] rounded-full bg-copper-600/10 blur-[140px]" />
        <div className="grain absolute inset-0 opacity-15" />
      </div>

      <div className="container-x relative">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-white/10 pb-6">
          <SectionHeading
            tone="dark"
            eyebrow="Client & Partner Endorsements"
            title="Trusted on Kerala's Most Critical Sites."
            intro="Verified statements from national infrastructure consortia, hospitality developers, and institutional project directors."
          />

          {/* Header Controls & View Switcher */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            {/* View Mode Toggle */}
            <div className="inline-flex items-center border border-white/15 bg-white/5 p-1 text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode('spotlight')}
                className={`flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
                  viewMode === 'spotlight'
                    ? 'bg-copper-600 text-white font-semibold shadow-sm'
                    : 'text-silver-400 hover:text-white'
                }`}
              >
                <Sparkles className="h-3 w-3" />
                <span>Spotlight</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-2.5 py-1 transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-copper-600 text-white font-semibold shadow-sm'
                    : 'text-silver-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="h-3 w-3" />
                <span>All</span>
              </button>
            </div>

            {/* Slider Arrows (Spotlight view) */}
            {viewMode === 'spotlight' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous endorsement"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5 text-white transition-all duration-200 hover:bg-copper-600 hover:border-copper-500"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next endorsement"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 bg-white/5 text-white transition-all duration-200 hover:bg-copper-600 hover:border-copper-500"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Compact Credibility Summary Metrics Bar */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 border border-white/10 bg-white/[0.02] p-3 sm:grid-cols-4 sm:p-3.5 backdrop-blur-sm">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-500/10 text-copper-400">
              <Star className="h-3.5 w-3.5 fill-copper-400" />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-white leading-tight">5.0 / 5.0 Rating</p>
              <p className="text-[0.65rem] text-silver-400">Consortia Partner Reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-500/10 text-copper-400">
              <ShieldCheck className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-white leading-tight">A-Class Licensed</p>
              <p className="text-[0.65rem] text-silver-400">Govt of Kerala PWD</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-500/10 text-copper-400">
              <Building2 className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-white leading-tight">₹100+ Cr Sites</p>
              <p className="text-[0.65rem] text-silver-400">Single Contract Scale</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-500/10 text-copper-400">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </div>
            <div>
              <p className="font-display text-xs font-bold text-white leading-tight">Zero Critical Delay</p>
              <p className="text-[0.65rem] text-silver-400">Own Equipment Fleet</p>
            </div>
          </div>
        </div>

        {/* VIEW 1: SPOTLIGHT CINEMATIC STAGE */}
        {viewMode === 'spotlight' && (
          <div className="mt-5">
            {/* 4 Interactive Partner Tabs (Compact) */}
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {testimonials.map((t, idx) => {
                const isActive = idx === current
                return (
                  <button
                    key={t.id || idx}
                    type="button"
                    onClick={() => handleSelectSlide(idx)}
                    className={`group relative text-left p-2.5 sm:p-3 border transition-all duration-200 ${
                      isActive
                        ? 'border-copper-500 bg-white/[0.06] shadow-md'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Active Top Glow Line */}
                    {isActive && (
                      <motion.div
                        layoutId="active-endorsement-tab"
                        className="absolute inset-x-0 top-0 h-0.5 bg-copper-400 shadow-[0_0_8px_rgba(200,113,79,0.9)]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}

                    <span className="text-[0.62rem] font-mono tracking-wider text-copper-400 uppercase block truncate">
                      {t.clientName}
                    </span>
                    <h4 className="mt-0.5 font-display text-xs sm:text-sm font-bold text-white truncate group-hover:text-copper-200 transition-colors">
                      {t.project.split('(')[0]}
                    </h4>
                    <p className="mt-0.5 text-[0.68rem] text-silver-400 truncate">
                      {t.location}
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Main Spotlight Stage (Compact Dual Column) */}
            <div className="mt-4 border border-white/15 bg-ink-900/60 shadow-xl backdrop-blur-md overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease }}
                  className="grid gap-0 lg:grid-cols-12 items-stretch"
                >
                  {/* Left Column: Quote & Detailed Credentials */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
                    {/* Subtle Copper Monogram Glow */}
                    <div className="absolute top-4 right-5 font-display text-6xl font-black text-white/[0.02] select-none pointer-events-none">
                      0{current + 1}
                    </div>

                    <div>
                      {/* Top Badges & Rating */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-1 text-copper-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-copper-400" />
                          ))}
                          <span className="ml-1.5 font-mono text-[0.68rem] font-semibold tracking-wider uppercase text-copper-300">
                            Verified Endorsement
                          </span>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[0.68rem] font-mono text-silver-400 bg-white/5 border border-white/10 px-2 py-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          {activeItem.sector}
                        </span>
                      </div>

                      {/* Compact Testimonial Quote */}
                      <div className="mt-4 relative">
                        <Quote
                          className="h-7 w-7 text-copper-500/40 mb-2.5"
                          aria-hidden="true"
                        />
                        <blockquote className="font-display text-base sm:text-lg lg:text-xl font-medium leading-relaxed tracking-tight text-white">
                          &ldquo;{activeItem.quote}&rdquo;
                        </blockquote>
                      </div>
                    </div>

                    {/* Author & Project Sign-Off */}
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        {/* Monogram Badge */}
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-copper-400/50 bg-copper-950/60 font-mono text-xs font-bold text-copper-300 shadow-sm">
                          {getInitials(activeItem.author)}
                        </div>

                        <div>
                          <p className="font-display text-sm font-bold text-white">
                            {activeItem.author}
                          </p>
                          <p className="text-xs text-silver-300 font-light">
                            {activeItem.company}
                          </p>
                          <p className="text-[0.68rem] font-mono text-copper-400">
                            {activeItem.clientName}
                          </p>
                        </div>
                      </div>

                      <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r-0 border-white/10 pl-3 sm:pl-0">
                        <span className="text-[0.62rem] font-mono tracking-widest text-silver-500 uppercase block">
                          Execution Scale
                        </span>
                        <span className="font-display text-xs font-bold text-copper-300 block mt-0.5">
                          {activeItem.metric}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Project Photograph Card */}
                  <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-ink-950">
                    <img
                      src={activeItem.image}
                      alt={activeItem.project}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                    <div className="absolute inset-0 bg-copper-900/10 mix-blend-color" />

                    {/* Overlay Metadata Card */}
                    <div className="absolute bottom-4 left-4 right-4 border border-white/15 bg-ink-950/85 p-4 backdrop-blur-md">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[0.62rem] font-bold tracking-widest text-copper-400 uppercase">
                          Project Association
                        </span>
                        <span className="inline-flex items-center gap-1 text-[0.62rem] font-mono text-silver-300 bg-white/10 px-1.5 py-0.5">
                          A-Class Site
                        </span>
                      </div>

                      <h4 className="font-display mt-1 text-base sm:text-lg font-bold text-white leading-snug">
                        {activeItem.project}
                      </h4>

                      <p className="mt-1 flex items-center gap-1.5 text-xs text-silver-300 font-light">
                        <MapPin className="h-3 w-3 text-copper-400 shrink-0" />
                        <span>{activeItem.location}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide Progress Bar */}
              <div className="h-0.5 w-full bg-white/10">
                <div
                  className="h-full bg-copper-500 transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Slider Dots & Slide Number Indicator */}
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-silver-400">
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectSlide(i)}
                    aria-label={`Jump to slide ${i + 1}`}
                    className={`h-1.5 transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-copper-500'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <span className="text-[0.7rem]">
                0{current + 1} / 0{testimonials.length} · Auto-rotates
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: ALL ENDORSEMENTS COMPACT 2x2 BENTO GRID */}
        {viewMode === 'grid' && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                className="group relative flex flex-col justify-between border border-white/10 bg-white/[0.02] transition-all duration-300 hover:border-copper-500/60 hover:bg-white/[0.04] overflow-hidden"
              >
                {/* Real Project Image Banner */}
                <div className="relative aspect-[16/6.5] w-full overflow-hidden bg-ink-900 border-b border-white/10">
                  <img
                    src={item.image}
                    alt={item.project}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="font-mono text-[0.62rem] tracking-wider uppercase bg-ink-950/80 border border-white/15 px-2 py-0.5 text-copper-300 backdrop-blur-sm">
                      {item.sector}
                    </span>
                    <div className="flex items-center gap-0.5 bg-ink-950/80 border border-white/15 px-1.5 py-0.5 backdrop-blur-sm">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="h-2.5 w-2.5 fill-copper-400 text-copper-400" />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Project Title in Banner */}
                  <div className="absolute bottom-2.5 left-3 right-3">
                    <h4 className="font-display text-xs sm:text-sm font-bold text-white truncate">
                      {item.project}
                    </h4>
                    <p className="flex items-center gap-1 text-[0.68rem] text-silver-300 font-light mt-0.5">
                      <MapPin className="h-2.5 w-2.5 text-copper-400 shrink-0" />
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <Quote className="h-5 w-5 text-copper-500/40 mb-2" aria-hidden="true" />
                    <p className="font-display text-xs sm:text-sm font-normal leading-relaxed text-silver-100">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-copper-400/40 bg-copper-950/50 font-mono text-[0.65rem] font-bold text-copper-300">
                        {getInitials(item.author)}
                      </div>
                      <div>
                        <p className="font-display text-xs font-bold text-white leading-tight">
                          {item.author}
                        </p>
                        <p className="text-[0.68rem] text-silver-400 font-light">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-[0.62rem] font-mono text-copper-400 bg-copper-900/30 border border-copper-500/30 px-1.5 py-0.5 shrink-0">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
