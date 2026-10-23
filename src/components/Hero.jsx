import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from './ui/Button'
import { company, heroSlides, heroStats } from '../data/site'

const ease = [0.22, 1, 0.36, 1]
const headline = ['Building Infrastructure.', 'Shaping the Future.']
const SLIDE_MS = 7000

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mediaY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0])
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    if (reduce) return
    heroSlides.slice(1).forEach((s) => (new Image().src = s.src))
    const t = setInterval(() => setSlide((i) => (i + 1) % heroSlides.length), SLIDE_MS)
    return () => clearInterval(t)
  }, [reduce])

  return (
    <section id="home" ref={ref} aria-label="Introduction" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-950">
      <motion.div className="absolute inset-0 -z-10" style={{ y: mediaY }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={slide}
            src={heroSlides[slide].src}
            alt={slide === 0 ? heroSlides[0].alt : ''}
            fetchPriority={slide === 0 ? 'high' : undefined}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.14 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.8, ease: 'easeInOut' }, scale: { duration: SLIDE_MS / 1000 + 2, ease: 'linear' } }}
          />
        </AnimatePresence>
      </motion.div>

      {/* overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-transparent to-ink-950/30" />
      <div className="grain absolute inset-0 -z-10" />

      <motion.div style={{ opacity: contentOpacity }} className="container-x flex flex-1 flex-col justify-end pt-32 pb-10 sm:pb-14">
        <div className="max-w-4xl">
          <motion.p
            className="eyebrow text-copper-200"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
          >
            {company.tagline} · Since {company.founded}
          </motion.p>

          <h1 className="font-display mt-6 text-[2.6rem] leading-[0.98] font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${i === 1 ? 'text-copper-gradient-light' : ''}`}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.1, ease, delay: 0.35 + i * 0.14 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-xl text-base leading-relaxed text-silver-200 sm:text-lg"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.75 }}
          >
            From six-laning earthworks on NH 66 to BM &amp; BC roads, rock cutting, paving and building works — SSIB Infra
            Builders has delivered for Kerala&rsquo;s leading developers since 2005, backed by its own machinery fleet and
            bitumen mix plants.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
          >
            <Button to="/services" variant="copper">
              Explore Our Services
            </Button>
            <Button to="/projects" variant="ghostLight">
              View Our Projects
            </Button>
          </motion.div>
        </div>

        <motion.dl
          className="mt-14 grid grid-cols-2 border-t border-white/15 lg:mt-20 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.15 }}
        >
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-1 py-5 pr-4 sm:py-6 ${i % 2 === 1 ? 'pl-4 sm:pl-6' : ''} ${
                i > 0 ? 'lg:border-l lg:border-white/15 lg:pl-6' : ''
              } ${i % 2 === 1 ? 'border-l border-white/15' : ''} ${i > 1 ? 'border-t border-white/15 lg:border-t-0' : ''}`}
            >
              <dt className="text-xs leading-snug text-silver-300 sm:text-[0.8rem]">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold text-white sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <a
        href="#services"
        className="absolute right-5 bottom-8 hidden flex-col items-center gap-3 text-[0.65rem] font-semibold tracking-[0.3em] text-silver-300 uppercase transition-colors hover:text-white sm:right-8 md:flex lg:right-12"
        aria-label="Scroll to services"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <span className="relative block h-14 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-copper-300"
            animate={reduce ? undefined : { y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </section>
  )
}
