import { motion } from 'framer-motion'
import AnimatedCounter from './ui/AnimatedCounter'
import Reveal from './ui/Reveal'
import { company } from '../data/site'

const actualStats = [
  {
    numeric: 20,
    suffix: '+',
    label: 'Years in Construction',
    sub: 'Founded in 2005 by Shihas P. I',
  },
  {
    prefix: '₹',
    numeric: 100,
    suffix: ' Cr+',
    label: 'Single Project Scale',
    sub: 'NH 66 six-laning earthworks',
  },
  {
    display: 'A-Class',
    label: 'Government Contractor',
    sub: 'Licensed for public infrastructure',
  },
  {
    numeric: 10,
    suffix: '+',
    label: 'Tier-1 Developers',
    sub: 'Lulu, Tata, Sobha, Shivalaya',
  },
]

export default function Stats() {
  return (
    <section className="relative bg-ink-950 text-white py-24 sm:py-32 overflow-hidden border-t border-b border-white/10">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-15 pointer-events-none" />

      <div className="container-x relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <p className="eyebrow text-copper-400">Verified Credentials</p>
            <h2 className="font-display mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Proven Performance by the Numbers.
            </h2>
          </div>
          <p className="text-sm font-light text-silver-400 max-w-sm">
            Audited infrastructure metrics based on official SSIB corporate profile data.
          </p>
        </div>

        {/* Minimal Oversized Numbers Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {actualStats.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 0.1}
              className={`flex flex-col justify-center ${index > 0 ? 'sm:pl-8 lg:pl-10' : ''} ${
                index % 2 === 1 ? 'max-sm:pt-8 max-sm:border-t max-sm:border-white/10' : ''
              }`}
            >
              {/* Oversized Number */}
              <div className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                {item.display ? (
                  <span className="text-copper-gradient-light">{item.display}</span>
                ) : (
                  <span className="text-white">
                    <AnimatedCounter
                      value={item.numeric}
                      prefix={item.prefix || ''}
                      suffix={item.suffix || ''}
                    />
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <p className="mt-4 text-sm sm:text-base font-bold tracking-tight text-copper-300">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-silver-400 font-light">
                {item.sub}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
