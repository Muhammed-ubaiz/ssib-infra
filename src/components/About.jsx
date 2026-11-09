import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ShieldCheck, MapPin, Award } from 'lucide-react'
import { Link } from 'react-router'
import Reveal, { RevealImage } from './ui/Reveal'
import { about, company } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  const imageRef = useRef(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, reduce ? 1.08 : 0.98])
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', reduce ? '-6%' : '6%'])

  return (
    <section id="about" className="relative bg-paper py-16 sm:py-24 overflow-hidden">
      <div className="container-x relative">
        {/* Asymmetric Editorial Grid */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 items-center">
          {/* Left Column: Large Architectural Image with subtle scroll animation */}
          <div ref={imageRef} className="relative lg:col-span-6 lg:order-1">
            <div className="relative overflow-hidden bg-silver-200 border border-silver-300 shadow-2xl">
              <motion.div style={{ scale: imageScale, y: imageY }} className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                <img
                  src="/images/nh66-shivalaya-earthworks-fleet.jpg"
                  alt="SSIB heavy earthmoving fleet and excavator operations on NH 66 for Shivalaya Construction Ltd"
                  className="img-premium h-full w-full object-cover"
                />
              </motion.div>

              {/* Floating Metallic Silver Badge */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-xs bg-ink-950/90 border border-white/15 p-6 backdrop-blur-md text-white shadow-2xl">
                <div className="flex items-center gap-2 text-copper-400 text-xs font-mono font-semibold uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  <span>A-Class Licence</span>
                </div>
                <p className="font-display mt-2 text-2xl font-bold tracking-tight text-white">
                  Since 2005
                </p>
                <p className="mt-1 text-xs text-silver-300 font-light leading-relaxed">
                  Headquartered in Ernakulam, delivering landmark civil and highway infrastructure across Kerala.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Introduction & Premium Heading */}
          <div className="lg:col-span-6 lg:order-2 lg:pl-6">
            <Reveal>
              <span className="eyebrow text-copper-700">About SSIB</span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-3xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-ink-950 leading-[1.08]">
                Two Decades of Building, From the Ground Up.
              </h2>
            </Reveal>

            <div className="mt-8 space-y-5 text-base sm:text-lg leading-relaxed text-ink-600 font-light">
              <Reveal delay={0.16}>
                <p>
                  Founded in 2005 by young entrepreneur <strong className="font-semibold text-ink-900">Mr. Shihas P. I</strong> in Vadanappally, Thrissur District, SSIB began with a commitment to material supply and uncompromising work ethic.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <p>
                  Today, SSIB operates as an <strong className="font-semibold text-ink-900">A-Class Licensed Government Contractor</strong> executing complex highway networks, ₹100 Crore bulk earthworks, and institutional landmarks for leading developers including Shivalaya Construction, Lulu Group, Tata, and Sobha.
                </p>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="border-l-2 border-copper-500 bg-white/70 p-5 shadow-sm">
                  <p className="text-sm font-medium leading-relaxed text-ink-800 italic">
                    &ldquo;Our vision is to strive to deliver the best and to be people-oriented. We put integrity at the heart of our business, delivering lasting excellence for our clients and the community.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-wider text-copper-700 uppercase">
                    — Shihas P. I, Founder &amp; Managing Director
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Discover Our Company Link */}
            <Reveal delay={0.4} className="mt-10">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wider text-ink-950 uppercase transition-colors hover:text-copper-700"
              >
                <span className="border-b-2 border-ink-950 pb-1 transition-colors group-hover:border-copper-600">
                  Discover Our Company
                </span>
                <span className="flex h-9 w-9 items-center justify-center border border-ink-950 bg-ink-950 text-white transition-all duration-300 ease-premium group-hover:bg-copper-600 group-hover:border-copper-600 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
