import { Link } from 'react-router'
import { ArrowUp, FileText } from 'lucide-react'
import { LogoFull } from './ui/Logo'
import { company, contact, navLinks, services } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-silver-200 bg-paper">
      <div className="container-x grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <LogoFull className="w-32" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-500">{company.intro}</p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-900 uppercase">Quick links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-500 transition-colors hover:text-copper-700">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={company.profilePdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-ink-500 transition-colors hover:text-copper-700">
                Company Profile <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-900 uppercase">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/services#${s.id}`} className="text-ink-500 transition-colors hover:text-copper-700">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-900 uppercase">Contact</h2>
          <address className="mt-5 space-y-3 text-sm leading-relaxed text-ink-500 not-italic">
            <p>
              {contact.addressLines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p>
              <a href={contact.phoneHref} className="transition-colors hover:text-copper-700">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="break-all transition-colors hover:text-copper-700">
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-silver-200">
        <div className="container-x flex flex-col items-start justify-between gap-4 py-6 text-xs text-silver-600 sm:flex-row sm:items-center">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>GSTIN {contact.gstin}</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex min-h-10 items-center gap-2 font-semibold text-ink-700 transition-colors hover:text-copper-700"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
