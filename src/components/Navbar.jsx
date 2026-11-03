import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react'
import { company, contact, navLinks } from '../data/site'
import { LogoLockup } from './ui/Logo'

const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      {/* Floating Navigation Header */}
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium pointer-events-none">
        <div className="container-x pt-3 sm:pt-4">
          <div
            className={`pointer-events-auto flex items-center justify-between px-5 sm:px-8 transition-all duration-500 ease-premium border ${
              scrolled
                ? 'h-16 sm:h-[68px] bg-ink-950/90 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
                : 'h-20 sm:h-[84px] bg-transparent border-transparent'
            }`}
          >
            {/* SSIB Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="SSIB Infra Builders — Home"
              className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400"
            >
              <LogoLockup tone="dark" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main" className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => {
                    if (link.to === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[0.84rem] font-medium tracking-wide transition-colors duration-300 ${
                      isActive ? 'text-white font-semibold' : 'text-silver-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="active-nav-dot"
                          className="absolute inset-x-4 -bottom-1 h-[2px] bg-copper-400 shadow-[0_0_8px_rgba(200,113,79,0.8)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Bar & Menu Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="group hidden sm:inline-flex min-h-11 items-center gap-2 border border-copper-400/60 bg-copper-600/90 px-5 text-[0.82rem] font-semibold tracking-wider text-white uppercase transition-all duration-300 ease-premium hover:bg-copper-500 hover:border-copper-300 hover:shadow-[0_0_20px_rgba(200,113,79,0.4)]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>

              {/* Mobile Menu Trigger Button (Hidden on Desktop, Visible on Mobile/Tablet) */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                className="inline-flex lg:hidden h-11 w-11 items-center justify-center border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Elegant Full-Screen Expandable Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="fullscreen-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Full site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink-950 text-white overflow-y-auto"
          >
            {/* Top Bar with Logo and Close */}
            <div className="container-x flex items-center justify-between h-24 border-b border-white/10">
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <LogoLockup tone="dark" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-mono font-semibold tracking-wider text-white uppercase hover:bg-white/15 transition-colors"
              >
                <span>Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="container-x my-auto py-12 grid gap-12 lg:grid-cols-12 items-center">
              {/* Navigation List */}
              <div className="lg:col-span-7">
                <p className="text-xs font-mono tracking-widest text-copper-400 uppercase mb-6">
                  Navigation Index
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: -24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={() => {
                          setMenuOpen(false)
                          if (link.to === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className={({ isActive }) =>
                          `group flex items-baseline gap-4 text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight transition-all duration-300 ${
                            isActive ? 'text-copper-400' : 'text-white hover:text-silver-300 hover:translate-x-3'
                          }`
                        }
                      >
                        <span className="text-xs sm:text-sm font-mono text-copper-500/70">
                          0{i + 1}
                        </span>
                        <span>{link.label}</span>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Company Info & Credentials Sidebar */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 space-y-6">
                <div>
                  <p className="text-xs font-mono tracking-widest text-silver-400 uppercase">Corporate Overview</p>
                  <p className="mt-2 text-sm sm:text-base text-silver-300 font-light leading-relaxed">
                    SSIB Infra Builders Pvt Ltd is an A-Class Government licenced infrastructure contractor delivering major highways, earthworks, and landmark architecture across Kerala since 2005.
                  </p>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-silver-300 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-copper-400 shrink-0 mt-0.5" />
                    <span>{contact.addressLines.join(' ')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-copper-400 shrink-0" />
                    <a href={contact.phoneHref} className="hover:text-copper-300 transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-copper-400 shrink-0" />
                    <a href={`mailto:${contact.email}`} className="hover:text-copper-300 transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-copper-400/60 bg-copper-600 px-6 font-semibold tracking-wider text-white uppercase transition-colors hover:bg-copper-500"
                  >
                    <span>Request Project Consultation</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="container-x py-6 border-t border-white/10 text-xs text-silver-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <p>© {new Date().getFullYear()} SSIB Infra Builders Pvt Ltd. All rights reserved.</p>
              <p className="font-mono text-silver-400">A-Class Contractor · Kerala, India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
