import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, FileText } from 'lucide-react'
import { company, contact, navLinks } from '../data/site'
import { LogoLockup } from './ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-premium ${
          scrolled || open
            ? 'bg-white/95 shadow-[0_1px_0_rgba(22,24,27,0.06),0_12px_30px_-18px_rgba(22,24,27,0.25)] backdrop-blur-xl'
            : 'bg-white/85 backdrop-blur-md'
        }`}
      >
        <nav
          aria-label="Primary"
          className={`container-x flex items-center justify-between transition-all duration-500 ease-premium ${
            scrolled ? 'h-16' : 'h-[76px]'
          }`}
        >
          <Link to="/" aria-label="SSIB Infra Builders — Home">
            <LogoLockup />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative block px-3 py-2 text-[0.84rem] font-medium transition-colors duration-300 xl:px-4 ${
                      isActive ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-copper-500 xl:inset-x-4"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href={company.profilePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-[0.84rem] font-medium text-ink-500 transition-colors hover:text-ink-900 xl:px-4"
              >
                Company Profile <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="sr-only">(PDF, opens in a new tab)</span>
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="group hidden min-h-11 items-center gap-2 bg-ink-900 px-5 text-[0.82rem] font-semibold tracking-wide text-white transition-colors duration-300 hover:bg-copper-600 sm:inline-flex"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-ink-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className={`fixed inset-x-0 bottom-0 overflow-y-auto bg-white lg:hidden ${scrolled ? 'top-16' : 'top-[76px]'}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="container-x flex min-h-full flex-col pt-6 pb-10">
              <ul className="border-t border-silver-200">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.4 }}
                    className="border-b border-silver-200"
                  >
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `font-display flex items-center justify-between py-4 text-2xl font-semibold ${isActive ? 'text-copper-700' : 'text-ink-900'}`
                      }
                    >
                      {link.label}
                      <span className="text-xs font-medium text-silver-500">0{i + 1}</span>
                    </NavLink>
                  </motion.li>
                ))}
                <li className="border-b border-silver-200">
                  <a
                    href={company.profilePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display flex items-center justify-between py-4 text-2xl font-semibold text-ink-900"
                  >
                    Company Profile
                    <FileText className="h-4 w-4 text-silver-500" aria-hidden="true" />
                  </a>
                </li>
              </ul>
              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center justify-center gap-2 bg-copper-600 font-semibold text-white"
                >
                  Get in Touch <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a href={contact.phoneHref} className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-500">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
