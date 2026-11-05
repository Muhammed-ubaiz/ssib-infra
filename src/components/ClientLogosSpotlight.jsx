import { ArrowUpRight, Building2, MapPin } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { featuredClientLogos } from '../data/site'

export default function ClientLogosSpotlight({ tone = 'dark' }) {
  const dark = tone === 'dark'

  return (
    <section
      id="clients-spotlight"
      className={`relative py-24 sm:py-32 ${dark ? 'bg-ink-950 text-white' : 'bg-paper text-ink-900'}`}
      aria-labelledby="clients-spotlight-title"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Key Corporate & Hospitality Clients"
          title={
            <span id="clients-spotlight-title">
              Trusted by world-renowned hospitality brands & infrastructure leaders.
            </span>
          }
          intro="From landmark 5-star hospitality centres to IT hubs and state-level river restorations, SSIB Infra Builders executes critical infrastructure for India's foremost developers."
          tone={dark ? 'dark' : 'light'}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredClientLogos.map((client, index) => (
            <Reveal
              key={client.id}
              delay={(index % 3) * 0.08}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${
                dark
                  ? 'border-white/10 bg-ink-900/60 hover:border-copper-500/50 hover:bg-ink-900 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)]'
                  : 'border-silver-200 bg-white hover:border-copper-500/50 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header: Logo & Category Tag */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-16 w-36 items-center justify-center rounded-xl bg-white p-3 shadow-xs ring-1 ring-silver-100 transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-mono font-semibold tracking-wider uppercase ${
                      dark ? 'bg-white/10 text-silver-300' : 'bg-silver-100 text-copper-700'
                    }`}
                  >
                    {client.subtitle.split(' ')[0]}
                  </span>
                </div>

                {/* Client Info */}
                <div className="mt-6">
                  <h3 className={`font-display text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-ink-900'}`}>
                    {client.brand}
                  </h3>
                  <p className={`mt-1 text-xs font-medium ${dark ? 'text-copper-400' : 'text-copper-700'}`}>
                    {client.subtitle}
                  </p>
                </div>

                {/* Landmark Project Scope */}
                <div className={`mt-5 rounded-xl border p-4 ${dark ? 'border-white/5 bg-ink-950/50' : 'border-silver-100 bg-silver-50/60'}`}>
                  <p className={`text-[11px] font-mono tracking-wider uppercase ${dark ? 'text-silver-400' : 'text-silver-600'}`}>
                    Landmark Work Delivered
                  </p>
                  <p className={`mt-1 text-sm font-semibold ${dark ? 'text-silver-100' : 'text-ink-800'}`}>
                    {client.scope}
                  </p>
                </div>
              </div>

              {/* Footer Meta */}
              <div className={`mt-6 flex items-center justify-between border-t pt-4 text-xs ${dark ? 'border-white/10 text-silver-400' : 'border-silver-200 text-silver-600'}`}>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-silver-400 shrink-0" />
                  <span className="truncate">{client.location}</span>
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-silver-400">
                  Delivered
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
