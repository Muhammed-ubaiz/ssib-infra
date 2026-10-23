import { BadgeCheck, Factory, Handshake, Leaf, Truck, Users, Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal, { RevealImage } from './ui/Reveal'
import { fleet, objectives, strengths } from '../data/site'

const icons = { BadgeCheck, Factory, Handshake, Leaf, Truck, Users }

/** Key strengths — "Quality is our priority" (company profile, page 2). */
export function Strengths() {
  return (
    <section id="why-ssib" className="relative bg-paper py-24 sm:py-32" aria-labelledby="why-heading">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Why choose SSIB Infra"
              title={<span id="why-heading">Quality is our priority.</span>}
              intro="It is the first line of our company profile — and the standard behind every road, cut and structure we deliver."
            />
          </div>
          <RevealImage
            src="/images/handshake.webp"
            alt="Handshake between a contractor and client over a safety helmet"
            className="aspect-[16/9] bg-silver-200 lg:col-span-5"
            imgClassName="object-[60%_center]"
          />
        </div>

        <div className="mt-16 grid border-t border-l border-silver-200 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s, i) => {
            const Icon = icons[s.icon]
            return (
              <Reveal
                key={s.title}
                delay={(i % 3) * 0.08}
                className="group relative border-r border-b border-silver-200 bg-paper p-8 transition-colors duration-500 hover:bg-white sm:p-10"
              >
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-copper-500 transition-all duration-700 ease-premium group-hover:w-full" aria-hidden="true" />
                <Icon className="h-8 w-8 text-copper-600" strokeWidth={1.4} aria-hidden="true" />
                <h3 className="font-display mt-6 text-xl font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-500">{s.text}</p>
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
            src="/images/road-paving-aerial.webp"
            alt="Aerial view of a highway being paved"
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
          src="/images/machine-grader.webp"
          alt="Motor grader from the SSIB fleet on a gravel site"
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
              { src: '/images/bitumen-batch.webp', label: 'Bitumen batch mix plant' },
              { src: '/images/drum-mix-3.webp', label: 'Bitumen drum mix plant' },
              { src: '/images/drum-mix-2.webp', label: 'Drum mix plant on site' },
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
