import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { allProjects, clients, featuredProjects, projectCategories } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const layout = [
  'md:col-span-2 lg:col-span-8 lg:row-span-2 aspect-[4/3] lg:aspect-auto',
  'lg:col-span-4 aspect-[4/3]',
  'lg:col-span-4 aspect-[4/3]',
  'lg:col-span-4 aspect-[4/3]',
  'lg:col-span-4 aspect-[4/3]',
  'md:col-span-2 lg:col-span-4 aspect-[4/3] md:aspect-[16/7] lg:aspect-[4/3]',
]

const parseCr = (v) => (v ? parseFloat(v.replace(/[^\d.]/g, '')) : 0)
const totalValue = allProjects.reduce((sum, p) => sum + parseCr(p.value), 0)

function ProjectCard({ project, index }) {
  const big = index === 0
  return (
    <motion.article
      className={`group relative isolate overflow-hidden bg-ink-800 ${layout[index]}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease, delay: (index % 3) * 0.1 }}
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1400ms] ease-premium group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-ink-950/35 to-ink-950/5 transition-opacity duration-500 group-hover:from-ink-950" />

      <div className="flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex flex-wrap gap-2">
          <span className="bg-white/90 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-ink-900 uppercase">{project.category}</span>
          {project.status && (
            <span className="bg-copper-500 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.14em] text-white uppercase">{project.status}</span>
          )}
        </div>
        <div>
          {project.value && (
            <p className={`font-display font-semibold text-copper-200 ${big ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{project.value}</p>
          )}
          <h3 className={`font-display mt-2 font-semibold tracking-tight text-white ${big ? 'text-2xl sm:text-4xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          {project.location ? (
            <p className="mt-2 flex items-start gap-1.5 text-sm text-silver-300">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {project.location}
            </p>
          ) : (
            project.client && <p className="mt-2 text-sm text-silver-300">{project.client}</p>
          )}
          {project.client && project.location && (
            <p className="mt-3 max-h-0 overflow-hidden text-xs tracking-wide text-silver-400 opacity-0 transition-all duration-500 ease-premium group-hover:max-h-10 group-hover:opacity-100 max-lg:max-h-10 max-lg:opacity-100">
              Client: <span className="text-silver-200">{project.client}</span>
            </p>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function ProjectStats({ className = '' }) {
  return (
    <div className={`grid grid-cols-2 gap-8 ${className}`}>
      <div>
        <p className="font-display text-4xl font-semibold text-white">{allProjects.length}</p>
        <p className="mt-1 text-xs leading-snug text-silver-400">
          Project engagements
          <br />
          in the company profile
        </p>
      </div>
      <div>
        <p className="font-display text-4xl font-semibold text-copper-300">₹{Math.floor(totalValue / 10) * 10}+ Cr</p>
        <p className="mt-1 text-xs leading-snug text-silver-400">
          Combined value
          <br />
          of listed works
        </p>
      </div>
    </div>
  )
}

/** Featured project grid. `compact` = home-page teaser with stats and a link to the Projects page. */
export function FeaturedProjects({ compact = false }) {
  return (
    <section id="featured-projects" className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-copper-500/10 blur-[120px]" />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            tone="dark"
            eyebrow="Featured projects"
            title={compact ? 'Work that carries highways, campuses and communities.' : 'Selected project sites.'}
            intro={
              compact
                ? 'Current and recent work for clients including Shivalaya Construction, Lulu, Tata and Sobha.'
                : 'Photography from current and recent SSIB project sites.'
            }
          />
          {compact && (
            <Reveal delay={0.2} className="shrink-0 border-t border-white/15 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <ProjectStats />
            </Reveal>
          )}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {compact && (
          <Reveal className="mt-12 border-t border-white/10 pt-8">
            <Button to="/projects" variant="ghostLight">
              View All Projects ({allProjects.length})
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  )
}

export function ProjectRegister() {
  const [filter, setFilter] = useState('All')
  const rows = useMemo(() => (filter === 'All' ? allProjects : allProjects.filter((p) => p.category === filter)), [filter])

  return (
    <section id="project-list" className="bg-white py-24 sm:py-32" aria-labelledby="register-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Project list"
          title={<span id="register-title">Every project in our company profile.</span>}
          intro="Filter by type of work. Values are as listed in the SSIB Infra Company Profile 2026."
        />

        <div role="group" aria-label="Filter projects by category" className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {projectCategories.map((c) => {
            const count = c === 'All' ? allProjects.length : allProjects.filter((p) => p.category === c).length
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`min-h-10 shrink-0 border px-4 text-xs font-semibold tracking-wide transition-colors duration-300 ${
                  filter === c ? 'border-ink-900 bg-ink-900 text-white' : 'border-silver-300 text-ink-600 hover:border-ink-900 hover:text-ink-900'
                }`}
              >
                {c} <span className={filter === c ? 'text-copper-200' : 'text-silver-500'}>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 border-t border-silver-200">
          <div className="hidden grid-cols-12 gap-4 border-b border-silver-200 py-3 text-[0.68rem] font-semibold tracking-[0.18em] text-silver-500 uppercase md:grid">
            <span className="col-span-5">Project</span>
            <span className="col-span-3">Client</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-2 text-right">Value</span>
          </div>
          <ul>
            <AnimatePresence initial={false}>
              {rows.map((p) => (
                <motion.li
                  layout
                  key={`${p.name}-${p.category}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-12 gap-x-4 gap-y-1 border-b border-silver-200 py-4 text-sm transition-colors hover:bg-paper"
                >
                  <span className="col-span-9 font-medium text-ink-900 md:col-span-5">
                    {p.name}
                    {p.status === 'Current' && (
                      <span className="ml-2 inline-block bg-copper-100 px-1.5 py-0.5 align-middle text-[0.6rem] font-semibold tracking-widest text-copper-700 uppercase">
                        Current
                      </span>
                    )}
                  </span>
                  <span className="font-display col-span-3 text-right font-semibold text-copper-700 md:order-last md:col-span-2">{p.value ?? '—'}</span>
                  <span className="col-span-12 text-ink-500 md:col-span-3">{p.client ?? '—'}</span>
                  <span className="col-span-12 text-xs text-silver-500 md:col-span-2 md:text-sm">{p.category}</span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function ClientsMarquee({ tone = 'dark' }) {
  const dark = tone === 'dark'
  return (
    <div className={`relative border-y py-10 ${dark ? 'border-white/10 bg-ink-900' : 'border-silver-200 bg-paper'}`}>
      <div className="container-x">
        <p className={`eyebrow ${dark ? 'text-silver-400' : 'text-copper-700'}`}>Clients we have worked with</p>
      </div>
      <div className="mt-8 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="animate-marquee flex shrink-0 items-center motion-reduce:flex-wrap motion-reduce:justify-center" aria-label="Clients">
          {[...clients, ...clients].map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              aria-hidden={i >= clients.length ? 'true' : undefined}
              className={`font-display flex items-center px-6 text-xl font-semibold whitespace-nowrap sm:px-10 sm:text-2xl ${
                dark ? 'text-silver-300' : 'text-ink-600'
              } ${i >= clients.length ? 'motion-reduce:hidden' : ''}`}
            >
              {c.name}
              <span className="ml-12 h-1.5 w-1.5 rotate-45 bg-copper-400 sm:ml-20" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ClientShowcase() {
  const rows = clients.map((c) => {
    const works = allProjects.filter((p) => p.client?.startsWith(c.match))
    return { ...c, works, value: works.reduce((s, w) => s + parseCr(w.value), 0) }
  })

  return (
    <section id="clients" className="bg-paper py-24 sm:py-32" aria-labelledby="clients-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our clients"
          title={<span id="clients-title">Trusted by developers, contractors and public bodies.</span>}
          intro="The clients named in our company profile, with the works listed for each."
        />
        <div className="mt-14 grid border-t border-l border-silver-200 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.06} className="border-r border-b border-silver-200 bg-paper p-7 transition-colors duration-500 hover:bg-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-900">{c.name}</h3>
                  {c.full && <p className="mt-1 text-xs text-silver-600">{c.full}</p>}
                </div>
                {c.value > 0 && <p className="font-display shrink-0 text-lg font-semibold text-copper-700">₹{+c.value.toFixed(1)} Cr</p>}
              </div>
              <ul className="mt-5 space-y-2 border-t border-silver-200 pt-4">
                {c.works.map((w) => (
                  <li key={w.name + w.category} className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-ink-600">{w.name}</span>
                    <span className="shrink-0 text-xs text-silver-500">{w.category}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
