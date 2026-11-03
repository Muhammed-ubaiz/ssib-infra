import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { expertiseServices } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef([])
  const lockScrollUntilRef = useRef(0)

  // Synchronize active service item with user scroll
  useEffect(() => {
    const handleScroll = () => {
      // If user recently hovered or clicked, preserve their explicit choice briefly
      if (Date.now() < lockScrollUntilRef.current) return

      const items = itemRefs.current
      if (!items || items.length === 0) return

      // Focal reading line at ~42% from the top of the viewport
      const focalY = window.innerHeight * 0.42
      let closestIdx = 0
      let minDistance = Infinity

      items.forEach((el, index) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const rowCenter = rect.top + rect.height / 2
        const distance = Math.abs(rowCenter - focalY)

        // Only consider if row is within the active viewport area
        if (rect.bottom > 60 && rect.top < window.innerHeight - 60) {
          if (distance < minDistance) {
            minDistance = distance
            closestIdx = index
          }
        }
      })

      if (minDistance !== Infinity) {
        setActiveIndex(closestIdx)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSelect = (index) => {
    setActiveIndex(index)
    // Lock scroll override for 1.2s when mouse hovers or user clicks
    lockScrollUntilRef.current = Date.now() + 1200
  }

  return (
    <section id="services" className="relative bg-ink-950 text-white py-28 sm:py-36">
      {/* Background Architectural Grid wrapped in local clipping div */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="grain absolute inset-0 opacity-15" />
      </div>

      <div className="container-x relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end border-b border-white/10 pb-12">
          <SectionHeading
            tone="dark"
            eyebrow="Our Expertise"
            title="Engineered for Precision. Built for Scale."
            intro="Delivered through our own specialized crews, heavy machinery fleet, and computerised bitumen batch plants across Kerala."
          />
          <Reveal delay={0.2} className="hidden lg:block text-right">
            <span className="font-mono text-xs tracking-widest text-copper-400 uppercase">Disciplines</span>
            <p className="font-display text-6xl font-bold text-white/20">0{expertiseServices.length}</p>
          </Reveal>
        </div>

        {/* Interactive Dual-Layout Service Presentation */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Numbered Service Rows */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-t border-b border-white/10">
            {expertiseServices.map((service, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={service.num}
                  ref={(el) => (itemRefs.current[index] = el)}
                  onMouseEnter={() => handleSelect(index)}
                  onClick={() => handleSelect(index)}
                  className={`group relative py-7 sm:py-8 transition-all duration-300 cursor-pointer ${
                    isActive ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-6 sm:gap-8">
                      {/* Large Numbered Service Label */}
                      <span
                        className={`font-mono text-2xl sm:text-3xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-copper-400' : 'text-silver-500/70 group-hover:text-silver-300'
                        }`}
                      >
                        {service.num}
                      </span>

                      <div>
                        <span className="text-[0.68rem] font-mono tracking-widest text-copper-400 uppercase">
                          {service.category}
                        </span>
                        <h3 className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-copper-200 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-silver-300 font-light leading-relaxed max-w-xl">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 text-xs text-silver-400 bg-white/5 border border-white/10 px-2.5 py-1"
                            >
                              <Check className="h-3 w-3 text-copper-400" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Arrow Indicator linking to Services page */}
                    <Link
                      to="/services"
                      aria-label={`Explore ${service.title} details`}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border transition-all duration-300 ease-premium ${
                        isActive
                          ? 'border-copper-500 bg-copper-600 text-white translate-x-1 shadow-md'
                          : 'border-white/15 bg-white/5 text-silver-400 group-hover:border-white/30 group-hover:text-white'
                      }`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {/* Mobile & Tablet Inline Image (< lg) */}
                  <div className="lg:hidden mt-5 overflow-hidden border border-white/10 bg-ink-900">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[16/9] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Sticky Dynamic Image Preview with Smooth Reveal */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="sticky top-28 sm:top-32 max-h-[calc(100vh-9rem)]">
              <div className="relative aspect-[4/5] max-h-[580px] w-full overflow-hidden border border-white/15 bg-ink-900 shadow-2xl">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease }}
                    className="absolute inset-0"
                  >
                    <img
                      src={expertiseServices[activeIndex].image}
                      alt={expertiseServices[activeIndex].title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-85" />
                    
                    {/* Overlay Info Card */}
                    <div className="absolute bottom-6 left-6 right-6 border border-white/15 bg-ink-950/90 p-6 backdrop-blur-md">
                      <span className="font-mono text-xs font-bold tracking-widest text-copper-400 uppercase">
                        Featured Discipline · {expertiseServices[activeIndex].num}
                      </span>
                      <h4 className="font-display mt-1 text-xl font-bold text-white">
                        {expertiseServices[activeIndex].title}
                      </h4>
                      <p className="mt-1 text-xs text-silver-300 font-light">
                        {expertiseServices[activeIndex].category}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
