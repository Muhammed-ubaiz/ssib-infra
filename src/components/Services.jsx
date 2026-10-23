import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { services } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

function Highlights({ items, tone = 'dark' }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((h) => (
        <li key={h} className={`flex items-start gap-2.5 text-sm ${tone === 'dark' ? 'text-silver-200' : 'text-ink-600'}`}>
          <Check className={`mt-0.5 h-4 w-4 shrink-0 ${tone === 'dark' ? 'text-copper-300' : 'text-copper-600'}`} aria-hidden="true" />
          {h}
        </li>
      ))}
    </ul>
  )
}

export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Services"
            title="Six disciplines. One accountable contractor."
            intro="Every service below is delivered with our own crews, machinery and bitumen plants — from the first cut of earth to the final surface."
          />
          <Reveal delay={0.2} className="hidden text-right lg:block">
            <p className="font-display text-7xl font-semibold text-silver-200">0{services.length}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Index */}
          <ul className="lg:col-span-5" role="list">
            {services.map((s, i) => {
              const isActive = i === active
              return (
                <Reveal as="li" key={s.id} delay={i * 0.06} className="border-b border-silver-200 first:border-t">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => window.matchMedia('(min-width: 1024px)').matches && setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={`service-panel-${s.id}`}
                    className="group flex w-full items-center gap-5 py-5 text-left sm:py-6"
                  >
                    <span className={`w-7 text-xs font-semibold tracking-widest transition-colors ${isActive ? 'text-copper-600' : 'text-silver-400'}`}>
                      0{i + 1}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`font-display block text-xl font-semibold tracking-tight transition-colors duration-300 sm:text-2xl ${
                          isActive ? 'text-ink-900' : 'text-ink-500 group-hover:text-ink-900'
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 block text-xs tracking-[0.16em] text-silver-500 uppercase">{s.short}</span>
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className={`h-5 w-5 transition-all duration-500 ease-premium ${
                        isActive ? 'translate-x-0 text-copper-600 opacity-100' : '-translate-x-2 text-silver-500 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                      } max-lg:rotate-90`}
                    />
                  </button>

                  {/* Mobile / tablet inline panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`service-panel-${s.id}`}
                        className="overflow-hidden lg:hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                      >
                        <div className="pb-8">
                          <img src={s.image} alt={s.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                          <p className="mt-5 leading-relaxed text-ink-600">{s.description}</p>
                          <Highlights items={s.highlights} tone="light" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              )
            })}
            <Reveal as="li" delay={0.3} className="pt-8">
              <Button to="/services" variant="outline">
                View all services
              </Button>
            </Reveal>
          </ul>

          {/* Desktop visual panel */}
          <Reveal delay={0.15} className="hidden lg:col-span-7 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[5/4] overflow-hidden bg-ink-900" aria-live="polite">
                <AnimatePresence mode="sync">
                  <motion.img
                    key={current.id}
                    src={current.image}
                    alt={current.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    className="absolute inset-x-0 bottom-0 p-10"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <p className="eyebrow text-copper-200">Service 0{active + 1}</p>
                    <h3 className="font-display mt-4 text-3xl font-semibold text-white xl:text-4xl">{current.title}</h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-silver-200">{current.description}</p>
                    <Highlights items={current.highlights} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
