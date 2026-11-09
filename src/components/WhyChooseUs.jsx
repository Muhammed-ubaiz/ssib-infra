import { BadgeCheck, Factory, Handshake, Leaf, Truck, Users, Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal, { RevealImage } from './ui/Reveal'
import { fleet, objectives, strengths } from '../data/site'

const icons = { BadgeCheck, Factory, Handshake, Leaf, Truck, Users }

/** Key strengths — Why Choose SSIB (Company profile page 2). */
export function Strengths() {
  return (
    <section id="why-ssib" className="relative bg-ink-950 text-white py-28 sm:py-36 overflow-hidden border-t border-white/10" aria-labelledby="why-heading">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-15 pointer-events-none" />

      <div className="container-x relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              tone="dark"
              eyebrow="Why Choose SSIB"
              title={<span id="why-heading">Quality is Our Priority.</span>}
              intro="It is the founding principle of our organization — the rigorous standard behind every national highway, bulk excavation, and architectural landmark we deliver."
            />
          </div>
          <div className="lg:col-span-5 relative">
            <RevealImage
              src="/images/crowne-plaza-entrance-paved.jpg"
              alt="Finished architectural interlock roadway entrance by SSIB Infra"
              className="aspect-[16/9] border border-white/15 bg-ink-900 shadow-2xl"
              imgClassName="object-cover"
            />
          </div>
        </div>

        {/* Strengths Grid */}
        <div className="mt-16 grid border-t border-l border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.08}
                className="group relative border-r border-b border-white/10 bg-ink-900/60 p-8 sm:p-10 transition-all duration-500 hover:bg-ink-900 hover:border-copper-500/50"
              >
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-copper-400 transition-all duration-700 ease-premium group-hover:w-full" aria-hidden="true" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-copper-400 transition-transform duration-300 group-hover:scale-110 group-hover:border-copper-500/60">
                    <Icon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  {s.pillar && (
                    <span className="text-[0.65rem] font-mono font-semibold tracking-wider text-copper-300 uppercase bg-copper-950/80 border border-copper-400/40 px-2.5 py-1">
                      {s.pillar}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-6 text-xl sm:text-2xl font-bold text-white group-hover:text-copper-200 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-silver-300 font-light">
                  {s.text}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/** Main objectives (company profile, page 4). */
export function Objectives() {
  return (
    <section id="objectives" className="bg-white py-24 sm:py-32" aria-labelledby="objectives-heading">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Our main objectives"
            title={<span id="objectives-heading">A clear mission, held to every day.</span>}
            intro="The objectives that keep our teams focused — on site, with clients and in the community."
          />
          <Reveal delay={0.2}>
            <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {objectives.map((o) => (
                <li key={o} className="flex items-start gap-3 border-b border-silver-200 pb-3 text-[0.95rem] text-ink-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper-600" aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:pl-6">
          <RevealImage
            src="/images/tea-estate-highway-paving.jpg"
            alt="Bituminous highway paving through tea plantations in Kerala"
            className="aspect-[4/3] bg-silver-200 lg:aspect-[6/5]"
          />
        </div>
      </div>
    </section>
  )
}

/** Machinery fleet and bitumen plants (company profile, pages 19–23). */
export function Fleet() {
  return (
    <section id="fleet" className="bg-paper py-24 sm:py-32" aria-labelledby="fleet-heading">
      <div className="container-x grid gap-4 lg:grid-cols-12">
        <RevealImage
          src="/images/volvo-roller-compaction.jpg"
          alt="Volvo tandem vibratory roller and asphalt compaction fleet"
          className="aspect-[4/3] bg-silver-200 lg:col-span-5 lg:aspect-auto"
        />
        <div className="flex flex-col bg-ink-900 p-8 text-white sm:p-12 lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-copper-300">Our machineries</p>
            <h2 id="fleet-heading" className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Our own fleet. Our own asphalt.
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-silver-300">
              Owning the equipment and the bitumen supply means fewer dependencies on site — and tighter control over quality and
              schedule.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {fleet.map((f) => (
                <li key={f} className="border border-white/15 px-3 py-1.5 text-sm text-silver-200">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-auto lg:pt-10">
            {[
              { src: '/images/apollo-sensor-paver-highway.jpg', label: 'Apollo AP 600 sensor paver' },
              { src: '/images/volvo-roller-compaction.jpg', label: 'Volvo tandem vibratory roller' },
              { src: '/images/nh66-shivalaya-volvo-shihas-fleet.jpg', label: 'Heavy earthmoving & excavator fleet' },
            ].map((p, i) => (
              <Reveal key={p.label} delay={0.1 + i * 0.08} className={i === 2 ? 'hidden sm:block' : ''}>
                <figure>
                  <div className="aspect-[4/3] overflow-hidden bg-ink-800">
                    <img src={p.src} alt={p.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-premium hover:scale-105" />
                  </div>
                  <figcaption className="mt-2 text-xs text-silver-400">{p.label}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
