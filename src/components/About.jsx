import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal, { RevealImage } from './ui/Reveal'
import { LogoFull } from './ui/Logo'
import { about, company } from '../data/site'

export default function About() {
  return (
    <section id="about" className="relative bg-paper py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6 lg:pt-6">
            <SectionHeading
              eyebrow="About SSIB Infra"
              title="Two decades of building, from the ground up."
            />
            <div className="mt-8 max-w-xl space-y-5 text-[1.02rem] leading-relaxed text-ink-500">
              {about.story.map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.08}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <p className="border-l-2 border-copper-400 pl-5 text-ink-800">
                  The successful execution of these projects led to an <strong className="font-semibold">A-Class Contractor licence</strong> to
                  undertake Government projects — and the company now plans to extend its work to the UAE.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              <RevealImage
                src="/images/nh66-trucks.webp"
                alt="Tipper trucks working on the NH 66 earthworks site"
                className="col-span-8 col-start-5 aspect-[4/5] bg-silver-200"
              />
              <div className="col-span-7 col-start-1 -mt-40 sm:-mt-56">
                <RevealImage
                  src="/images/fleet-tipper.webp"
                  alt="Shihas & Co. tipper truck and excavator on a site"
                  className="aspect-[4/3] border-[6px] border-paper bg-silver-200 shadow-[0_30px_60px_-30px_rgba(22,24,27,0.45)]"
                  delay={0.15}
                />
              </div>
            </div>
            <Reveal
              delay={0.3}
              className="absolute top-6 left-0 hidden max-w-[220px] bg-ink-900 p-5 text-white shadow-xl sm:block lg:-left-4"
            >
              <p className="font-display text-4xl font-semibold text-copper-300">{company.founded}</p>
              <p className="mt-2 flex items-start gap-2 text-xs leading-relaxed text-silver-300">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                Founded in {company.hometown} by {company.founder}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-24 sm:mt-32">
          <Reveal>
            <h3 className="eyebrow text-copper-700">Our journey</h3>
          </Reveal>
          <ol className="relative mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <motion.span
              aria-hidden="true"
              className="absolute top-[7px] left-0 hidden h-px w-full origin-left bg-gradient-to-r from-copper-500 via-copper-300 to-silver-300 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '0px 0px -10% 0px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
            {about.milestones.map((m, i) => (
              <Reveal as="li" key={m.title} delay={0.15 + i * 0.12} className="relative">
                <span
                  className={`relative z-10 block h-[15px] w-[15px] rotate-45 border-2 ${
                    i === about.milestones.length - 1 ? 'border-copper-500 bg-paper' : 'border-copper-500 bg-copper-500'
                  }`}
                  aria-hidden="true"
                />
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-silver-500">0{i + 1}</p>
                <h4 className="font-display mt-2 text-lg leading-snug font-semibold text-ink-900">{m.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Vision & mission */}
        <div className="mt-24 grid border-y border-silver-200 sm:mt-32 lg:grid-cols-12">
          <Reveal className="silver-sheen flex items-center justify-center p-10 lg:col-span-4 lg:p-12">
            <LogoFull className="w-full max-w-[260px]" />
          </Reveal>
          <Reveal delay={0.1} className="border-t border-silver-200 py-10 lg:col-span-4 lg:border-t-0 lg:border-l lg:px-10 lg:py-14">
            <h3 className="eyebrow text-copper-700">Vision</h3>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-600">{about.vision}</p>
          </Reveal>
          <Reveal delay={0.2} className="border-t border-silver-200 py-10 lg:col-span-4 lg:border-t-0 lg:border-l lg:px-10 lg:py-14">
            <h3 className="eyebrow text-copper-700">Mission</h3>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-600">{about.mission}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
