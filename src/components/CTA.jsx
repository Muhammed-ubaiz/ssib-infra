import { motion } from 'framer-motion'
import { ArrowUpRight, Phone, FileText } from 'lucide-react'
import Button from './ui/Button'
import Reveal from './ui/Reveal'
import { company, contact } from '../data/site'

export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-28 text-white sm:py-36">
      {/* Background Architectural Photography with Parallax/Scale */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/resort-curb-road-finished.jpg"
          alt="Finished highway corridor with curbstone stormwater drainage"
          className="img-premium h-full w-full object-cover object-center scale-105 filter brightness-60"
        />
        {/* Dark Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/80" />
        <div className="grain absolute inset-0 opacity-20 pointer-events-none" />
        {/* Copper glow accent */}
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-copper-600/20 blur-[140px] pointer-events-none" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow text-copper-300">
              Start Your Collaboration
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05]">
              LET&rsquo;S BUILD SOMETHING GREAT TOGETHER.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-silver-200 font-light max-w-2xl">
              From ₹100 Crore national highway six-laning earthworks to precision campus road networks and controlled rock cutting — SSIB Infra Builders brings two decades of A-Class contractor excellence to your site.
            </p>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <Button
              to="/contact"
              variant="copper"
              className="px-8 py-4 text-base font-semibold tracking-wider uppercase shadow-[0_15px_35px_rgba(200,113,79,0.4)]"
            >
              Start Your Project
            </Button>
            <Button
              href={contact.phoneHref}
              variant="ghostLight"
              icon={Phone}
              className="px-8 py-4 text-base font-semibold tracking-wider uppercase"
            >
              {contact.phone}
            </Button>
          </Reveal>

          {/* Quick credibility points */}
          <Reveal delay={0.32} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-silver-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              A-Class Government Licenced Contractor
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              In-House Bitumen Plants &amp; Fleet
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              Direct Engineering Consultation
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
