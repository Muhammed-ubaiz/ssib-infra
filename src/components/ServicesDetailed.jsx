import { Link } from 'react-router'
import { Check } from 'lucide-react'
import Reveal, { RevealImage } from './ui/Reveal'
import { allProjects, services } from '../data/site'

// Which project-list category belongs to each service (bitumen plants support all road work).
const serviceCategory = {
  tarring: 'Road Tarring',
  earthworks: 'Earthworks',
  rock: 'Rock Cutting',
  paving: 'Paving Tiles',
  building: 'Building',
}

export function ServiceJumpNav() {
  return (
    <nav aria-label="Services on this page" className="border-t border-white/10 pt-3 sm:pt-4">
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 sm:gap-2.5">
        {services.map((s, i) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="group flex flex-col justify-between rounded-sm border border-white/10 bg-ink-950/70 p-2 sm:p-2.5 backdrop-blur-md transition-all hover:border-copper-400/60 hover:bg-copper-950/50"
            >
              <span className="font-mono text-[0.62rem] font-semibold text-copper-300">0{i + 1}</span>
              <span className="mt-0.5 text-[0.75rem] sm:text-xs font-semibold text-white leading-tight group-hover:text-copper-200 transition-colors">{s.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function ServicesDetailed() {
  return (
    <section className="bg-white py-20 sm:py-28" aria-label="Our services in detail">
      <div className="container-x space-y-24 sm:space-y-32">
        {services.map((s, i) => {
          const cat = serviceCategory[s.id]
          const works = cat ? allProjects.filter((p) => p.category === cat) : []
          const flip = i % 2 === 1
          return (
            <article key={s.id} id={s.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <RevealImage
                src={s.image}
                alt={s.alt}
                className={`aspect-[4/3] bg-silver-200 lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}
              />
              <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
                <Reveal>
                  <p className="font-display text-6xl font-semibold text-silver-200">0{i + 1}</p>
                  <p className="eyebrow mt-4 text-copper-700">{s.short}</p>
                  <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">{s.title}</h2>
                  <p className="mt-5 leading-relaxed text-ink-500">{s.description}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <ul className="mt-6 space-y-2.5">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[0.95rem] text-ink-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper-600" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {works.length > 0 && (
                    <p className="mt-8 border-t border-silver-200 pt-5 text-sm text-ink-500">
                      <span className="font-display text-2xl font-semibold text-ink-900">{works.length}</span>{' '}
                      {cat.toLowerCase()} {works.length === 1 ? 'project' : 'projects'} in our company profile ·{' '}
                      <Link to="/projects#project-list" className="font-semibold text-copper-700 underline-offset-4 hover:underline">
                        see the list
                      </Link>
                    </p>
                  )}
                </Reveal>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
