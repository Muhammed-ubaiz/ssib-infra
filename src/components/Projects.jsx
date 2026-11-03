import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MapPin, Search } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { allProjects, clients, featuredClientLogos, featuredProjects, projectCategories } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

const layout = [
  'md:col-span-2 lg:col-span-8 lg:row-span-2 aspect-[4/3] lg:aspect-auto',
  'md:col-span-1 lg:col-span-4 aspect-[4/3]',
  'md:col-span-1 lg:col-span-4 aspect-[4/3]',
  'md:col-span-1 lg:col-span-4 aspect-[4/3]',
  'md:col-span-1 lg:col-span-4 aspect-[4/3]',
  'md:col-span-1 lg:col-span-4 aspect-[4/3]',
]

const parseCr = (v) => (v ? parseFloat(v.replace(/[^\d.]/g, '')) : 0)
const totalValue = allProjects.reduce((sum, p) => sum + parseCr(p.value), 0)

function ProjectCard({ project, index, total = featuredProjects.length }) {
  const big = index === 0
  const cardLayout = layout[index] || 'md:col-span-1 lg:col-span-4 aspect-[4/3]'
  return (
    <motion.article
      className={`group relative isolate overflow-hidden rounded-md border border-white/10 bg-ink-950 transition-all duration-700 hover:border-copper-400/50 hover:shadow-2xl hover:shadow-black/70 ${cardLayout}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.8, ease, delay: (index % 3) * 0.1 }}
    >
      {/* High-Definition Image Rendering */}
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="img-premium absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
      />

      {/* Multi-layered Cinematic Gradient Scrim */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-ink-950/45 to-ink-950/10 transition-opacity duration-500 group-hover:from-ink-950" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/60 via-transparent to-transparent opacity-80" />

      {/* Engineering Blueprint Corner Accents */}
      <span className="pointer-events-none absolute top-2 left-2 text-[10px] font-mono text-white/20 transition-colors duration-500 group-hover:text-copper-400/60">+</span>
      <span className="pointer-events-none absolute top-2 right-2 text-[10px] font-mono text-white/20 transition-colors duration-500 group-hover:text-copper-400/60">+</span>
      <span className="pointer-events-none absolute bottom-2 left-2 text-[10px] font-mono text-white/20 transition-colors duration-500 group-hover:text-copper-400/60">+</span>
      <span className="pointer-events-none absolute bottom-2 right-2 text-[10px] font-mono text-white/20 transition-colors duration-500 group-hover:text-copper-400/60">+</span>

      <div className="flex h-full flex-col justify-between p-5 sm:p-7">
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-ink-950/80 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
              {project.category}
            </span>
            {project.status && (
              <span className={`inline-flex items-center gap-1 rounded-sm px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.14em] uppercase backdrop-blur-md ${
                project.status === 'Current'
                  ? 'border border-copper-400/40 bg-copper-600/90 text-white'
                  : 'border border-white/15 bg-white/10 text-silver-300'
              }`}>
                {project.status === 'Current' && <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
                {project.status}
              </span>
            )}
          </div>

          {project.value && (
            <span className="font-display rounded-sm border border-copper-400/30 bg-ink-950/85 px-3 py-1 text-xs font-semibold tracking-wider text-copper-300 backdrop-blur-md sm:text-sm">
              {project.value}
            </span>
          )}
        </div>

        {/* Bottom Project Metadata */}
        <div>
          <h3 className={`font-display mt-2 font-semibold tracking-tight text-white drop-shadow-sm ${big ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'}`}>
            {project.title}
          </h3>

          {project.specs && (
            <p className="mt-2 line-clamp-1 text-xs font-medium tracking-wide text-copper-200/90">
              {project.specs}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-silver-300">
            {project.location && (
              <p className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-copper-400" aria-hidden="true" />
                {project.location}
              </p>
            )}
            {project.client && (
              <span className="text-silver-400">
                Client: <strong className="font-medium text-silver-200">{project.client}</strong>
              </span>
            )}
          </div>
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
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter
      const matchQuery =
        !query ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        (p.client && p.client.toLowerCase().includes(query.toLowerCase())) ||
        (p.category && p.category.toLowerCase().includes(query.toLowerCase()))
      return matchCat && matchQuery
    })
  }, [filter, query])

  return (
    <section id="project-list" className="bg-white py-24 sm:py-32" aria-labelledby="register-title">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project ledger"
            title={<span id="register-title">Every project in our company profile.</span>}
            intro="Filter by work category or search directly by project name or developer."
          />
          <div className="relative w-full max-w-xs shrink-0">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-silver-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or clients..."
              className="w-full rounded-sm border border-silver-300 bg-paper py-2.5 pl-9 pr-3 text-xs text-ink-900 placeholder:text-silver-500 focus:border-copper-500 focus:bg-white focus:outline-none"
            />
          </div>
        </div>

        <div role="group" aria-label="Filter projects by category" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {projectCategories.map((c) => {
            const count = c === 'All' ? allProjects.length : allProjects.filter((p) => p.category === c).length
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`min-h-10 shrink-0 rounded-sm border px-4 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  filter === c
                    ? 'border-ink-900 bg-ink-900 text-white shadow-sm'
                    : 'border-silver-200 bg-white text-ink-600 hover:border-ink-900 hover:text-ink-900'
                }`}
              >
                {c} <span className={filter === c ? 'text-copper-300 font-mono ml-1' : 'text-silver-500 font-mono ml-1'}>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-8 border-t border-silver-200">
          <div className="hidden grid-cols-12 gap-4 border-b border-silver-200 py-3 text-[0.68rem] font-semibold tracking-[0.18em] text-silver-500 uppercase md:grid">
            <span className="col-span-5">Project Scope</span>
            <span className="col-span-3">Client / Authority</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-2 text-right">Listed Value</span>
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
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-12 gap-x-4 gap-y-1.5 border-b border-silver-200 py-4.5 text-sm transition-colors hover:bg-paper/80"
                >
                  <span className="col-span-9 font-medium text-ink-900 md:col-span-5">
                    {p.name}
                    {p.status === 'Current' && (
                      <span className="ml-2 inline-flex items-center gap-1 bg-copper-100 px-2 py-0.5 align-middle text-[0.62rem] font-bold tracking-widest text-copper-800 uppercase rounded-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-copper-600 animate-pulse" />
                        Current
                      </span>
                    )}
                  </span>
                  <span className="font-display col-span-3 text-right font-semibold text-copper-700 md:order-last md:col-span-2">
                    {p.value ?? '—'}
                  </span>
                  <span className="col-span-12 text-ink-600 md:col-span-3">
                    {p.client ? <span className="font-medium">{p.client}</span> : <span className="text-silver-400">—</span>}
                  </span>
                  <span className="col-span-12 text-xs text-silver-500 md:col-span-2 md:text-sm">
                    <span className="inline-block rounded-xs bg-silver-100 px-2 py-0.5 text-[0.7rem] font-medium text-silver-600 uppercase">
                      {p.category}
                    </span>
                  </span>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          {rows.length === 0 && (
            <div className="py-12 text-center text-sm text-silver-500">
              No projects found matching "{query}". Try a different search term or category.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export function ClientsMarquee({ tone = 'dark' }) {
  const dark = tone === 'dark'
  const marqueeItems = [...featuredClientLogos, ...featuredClientLogos]

  return (
    <div className={`relative border-y py-12 ${dark ? 'border-white/10 bg-ink-900' : 'border-silver-200 bg-paper'}`}>
      <div className="container-x mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className={`eyebrow ${dark ? 'text-silver-400' : 'text-copper-700'}`}>Clients we have worked with</p>
          <p className={`font-display mt-2 text-xl font-semibold sm:text-2xl ${dark ? 'text-white' : 'text-ink-900'}`}>
            Global Hospitality Brands & Corporate Developers
          </p>
        </div>
        <a
          href="/clients"
          className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
            dark ? 'text-copper-400 hover:text-copper-300' : 'text-copper-700 hover:text-copper-800'
          }`}
        >
          <span>Explore client portfolio</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <ul className="animate-marquee flex shrink-0 items-center gap-6 sm:gap-8 motion-reduce:flex-wrap motion-reduce:justify-center" aria-label="Clients">
          {marqueeItems.map((c, i) => (
            <li
              key={`${c.id}-${i}`}
              aria-hidden={i >= featuredClientLogos.length ? 'true' : undefined}
              className={`shrink-0 ${i >= featuredClientLogos.length ? 'motion-reduce:hidden' : ''}`}
            >
              <div
                className={`group flex items-center gap-4 rounded-xl border px-6 py-3.5 transition-all duration-300 ${
                  dark
                    ? 'border-white/10 bg-ink-950/80 hover:border-copper-500/40 hover:bg-ink-800 shadow-sm'
                    : 'border-silver-200 bg-white hover:border-copper-500/40 hover:shadow-md'
                }`}
              >
                <div className="flex h-12 w-28 sm:w-32 items-center justify-center rounded-lg bg-white p-2 shadow-xs ring-1 ring-silver-100">
                  <img
                    src={c.logo}
                    alt={`${c.name} logo`}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pr-2">
                  <span className={`block font-display text-sm font-semibold whitespace-nowrap ${dark ? 'text-white' : 'text-ink-900'}`}>
                    {c.name}
                  </span>
                  <span className={`block text-[11px] whitespace-nowrap ${dark ? 'text-silver-400' : 'text-silver-600'}`}>
                    {c.subtitle}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function ClientShowcase() {
  const rows = clients.map((c) => {
    const works = allProjects.filter((p) => p.client?.includes(c.match) || p.name?.includes(c.match))
    return { ...c, works, value: works.reduce((s, w) => s + parseCr(w.value), 0) }
  })

  return (
    <section id="clients" className="bg-paper py-24 sm:py-32" aria-labelledby="clients-title">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our clients & partners"
          title={<span id="clients-title">Trusted by developers, luxury hotel chains and public bodies.</span>}
          intro="The corporate clients, hotel groups and public authorities named in our company portfolio, with the works executed for each."
        />
        <div className="mt-14 grid border-t border-l border-silver-200 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.06} className="border-r border-b border-silver-200 bg-paper p-7 transition-colors duration-500 hover:bg-white sm:p-8 flex flex-col justify-between">
              <div>
                {c.logo && (
                  <div className="mb-5 flex h-14 w-36 items-center justify-center rounded-lg border border-silver-200 bg-white p-2.5 shadow-xs">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-900">{c.name}</h3>
                    {c.full && <p className="mt-1 text-xs text-silver-600">{c.full}</p>}
                  </div>
                  {c.value > 0 && <p className="font-display shrink-0 text-lg font-semibold text-copper-700">₹{+c.value.toFixed(1)} Cr</p>}
                </div>
              </div>
              {c.works.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-silver-200 pt-4">
                  {c.works.map((w) => (
                    <li key={w.name + w.category} className="flex items-start justify-between gap-3 text-sm">
                      <span className="text-ink-600">{w.name}</span>
                      <span className="shrink-0 text-xs font-mono text-silver-500">{w.category}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
