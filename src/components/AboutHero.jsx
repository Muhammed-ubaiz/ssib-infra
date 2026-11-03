import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router'
import { ChevronRight, FileText, ArrowDown, Award, ShieldCheck, MapPin, Building2 } from 'lucide-react'
import Button from './ui/Button'
import { company } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function AboutHero() {
  const containerRef = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0])

  const quickBadges = [
    { icon: Award, label: 'Established', value: '2005 · Thrissur' },
    { icon: ShieldCheck, label: 'Govt Contractor', value: 'A-Class Licence' },
    { icon: Building2, label: 'Current Scale', value: '₹100 Cr NH 66' },
    { icon: MapPin, label: 'Headquarters', value: 'Ernakulam, Kerala' },
  ]

  return (
    <section
      ref={containerRef}
      className="relative isolate flex min-h-[100svh] lg:h-screen lg:max-h-[880px] flex-col justify-between overflow-hidden bg-ink-950 pt-24 sm:pt-28 text-white"
    >
      {/* Background Photography with Parallax */}
      <motion.div className="absolute inset-0 -z-20 overflow-hidden" style={{ y: mediaY }}>
        <img
          src="/images/resort-curb-road-finished.jpg"
          alt="SSIB Executed Road Infrastructure Works"
          className="img-premium h-full w-full object-cover scale-105 filter brightness-90"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />
        <div className="grain absolute inset-0 opacity-15 pointer-events-none" />

        {/* Architectural grid lines */}
        <div className="absolute inset-x-8 sm:inset-x-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
        <div className="absolute right-8 sm:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
      </motion.div>

      {/* Main Content Area */}
      <motion.div style={{ opacity }} className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10 flex flex-1 flex-col justify-center py-4 sm:py-6">
        {/* Breadcrumb Navigation */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2 text-xs font-mono tracking-wider text-silver-400 uppercase"
        >
          <Link to="/" className="hover:text-copper-300 transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-copper-400" />
          <span className="text-copper-200">About SSIB Infra</span>
        </motion.nav>

        <div className="mt-3 sm:mt-4 max-w-4xl">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 border border-copper-400/40 bg-copper-950/60 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-copper-200 uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              Two Decades of Engineering Excellence · Est. {company.founded}
            </span>
          </motion.div>

          {/* Large Bold Headline */}
          <h1 className="font-display mt-3 text-2xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-extrabold tracking-[-0.03em] leading-[1.02] text-white">
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease, delay: 0.2 }}
              >
                SHAPING INFRASTRUCTURE.
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span
                className="block text-copper-gradient-light"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, ease, delay: 0.35 }}
              >
                BUILDING TRUST.
              </motion.span>
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-silver-300 font-light max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.5 }}
          >
            From material supply in Vadanappally to an A-Class Government licensed infrastructure contractor managing ₹100+ Crore national highway six-laning earthworks and landmark developments across Kerala.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
          >
            <Button
              href={company.profilePdf}
              target="_blank"
              rel="noopener noreferrer"
              variant="copper"
              icon={FileText}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_10px_25px_rgba(200,113,79,0.35)]"
            >
              Company Profile (PDF)
            </Button>
            <a
              href="#about"
              className="inline-flex min-h-10 items-center gap-2 border border-white/20 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider text-white uppercase backdrop-blur-sm transition-all hover:bg-white hover:text-ink-950"
            >
              <span>Our Story &amp; Leadership</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Credentials Strip */}
      <div className="relative z-10 border-t border-white/10 bg-ink-950/80 backdrop-blur-md">
        <div className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-white/10 py-3 sm:py-4">
            {quickBadges.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className={`flex items-center gap-3 px-3 sm:px-6 py-2 ${i === 0 ? 'sm:pl-0' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 + i * 0.08 }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-copper-400/40 bg-copper-900/30 text-copper-300">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-mono tracking-wider text-silver-400 uppercase">{label}</p>
                  <p className="font-display text-sm sm:text-base font-bold text-white tracking-tight">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
