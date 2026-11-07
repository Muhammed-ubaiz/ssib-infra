import { Link } from 'react-router'
import { ArrowUp, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { LogoLockup } from './ui/Logo'
import { company, contact, navLinks, services } from '../data/site'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com' },
  { name: 'Instagram', href: 'https://instagram.com' },
  { name: 'Facebook', href: 'https://facebook.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-copper-500/20 blur-[130px] pointer-events-none" />
      <div className="grain absolute inset-0 opacity-15 pointer-events-none" />

      {/* Main Footer Links Grid */}
      <div className="container-x relative py-20 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link to="/" aria-label="SSIB Infra Builders — Home" className="inline-block">
              <LogoLockup tone="dark" />
            </Link>

            <p className="mt-6 text-sm leading-relaxed text-silver-300 font-light max-w-sm">
              {company.intro}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 border border-copper-400/30 bg-copper-500/10 px-3.5 py-1.5 text-xs text-copper-200">
              <ShieldCheck className="h-4 w-4 text-copper-400 shrink-0" />
              <span>A-Class Government Licenced Contractor</span>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-silver-400">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <nav aria-label="Footer Navigation" className="lg:col-span-2">
            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-silver-300 uppercase">
              Navigation
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-silver-300 transition-colors duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Disciplines / Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-silver-300 uppercase">
              Disciplines
            </h3>
            <ul className="mt-6 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-silver-300 transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-silver-300 uppercase">
              Corporate Office
            </h3>
            <address className="mt-6 space-y-3 text-sm leading-relaxed text-silver-300 not-italic">
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-silver-400 shrink-0 mt-1" />
                <span>
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <p className="flex items-center gap-2.5 pt-2">
                <Phone className="h-4 w-4 text-silver-400 shrink-0" />
                <a href={contact.phoneHref} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-silver-400 shrink-0" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-white transition-colors">
                  {contact.email}
                </a>
              </p>
              <p className="text-xs text-silver-500 pt-2 font-mono">
                GSTIN: {contact.gstin}
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-4 text-xs text-silver-400 sm:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>A-Class Contractor · Kerala, India</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-semibold text-silver-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
