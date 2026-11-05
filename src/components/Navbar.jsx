import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react'
import { contact, navLinks } from '../data/site'
import { LogoLockup } from './ui/Logo'

const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()

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
        <div className="container-x pt-2.5 sm:pt-4">
          <div
            className={`pointer-events-auto flex items-center justify-between px-4 sm:px-8 transition-all duration-500 ease-premium border ${
              scrolled
                ? 'h-14 sm:h-[68px] bg-ink-950/95 border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)] backdrop-blur-2xl'
                : 'h-16 sm:h-[84px] bg-ink-950/85 sm:bg-transparent border-white/10 sm:border-transparent backdrop-blur-xl sm:backdrop-blur-none shadow-lg sm:shadow-none'
            }`}
          >
            {/* SSIB Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="SSIB Infra Builders — Home"
              className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 shrink-0"
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
                          className="absolute inset-x-4 -bottom-1 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                          transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Bar & Mobile Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Call Button (Mobile Only) */}
              <a
                href={contact.phoneHref}
                aria-label="Call SSIB Office Directly"
                className="lg:hidden flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white shadow-sm hover:bg-white hover:text-ink-950 transition-all active:scale-95"
              >
                <Phone className="h-4 w-4" />
              </a>

              {/* Desktop CTA Button */}
              <Link
                to="/contact"
                className="group hidden sm:inline-flex min-h-11 items-center gap-2 border border-white/20 bg-white px-5 text-[0.82rem] font-semibold tracking-wider text-ink-950 uppercase transition-all duration-300 ease-premium hover:bg-silver-200 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span>Get In Touch</span>
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>

              {/* Mobile Menu Trigger Button */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Menu' : 'Open Menu'}
                className="inline-flex lg:hidden h-10 w-10 sm:h-11 sm:w-11 items-center justify-center border border-white/15 bg-white/5 text-white transition-all duration-300 hover:bg-white/15 hover:border-white/30 active:scale-95"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Elegant Full-Screen Expandable Mobile / Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="fullscreen-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Full site navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink-950/98 backdrop-blur-2xl text-white overflow-y-auto"
          >
            {/* Top Bar with Logo and Close */}
            <div className="container-x flex items-center justify-between h-16 sm:h-20 border-b border-white/10 shrink-0">
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group"
              >
                <LogoLockup tone="dark" />
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-mono font-semibold tracking-wider text-white uppercase hover:bg-white/15 transition-colors active:scale-95"
              >
                <span>Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Menu Body */}
            <div className="container-x py-6 sm:py-10 grid gap-8 lg:grid-cols-12 items-center flex-1">
              {/* Navigation List */}
              <div className="lg:col-span-7">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 sm:mb-6">
                  <span className="text-[0.68rem] font-mono tracking-widest text-copper-400 uppercase">
                    Navigation Index
                  </span>
                  <span className="text-[0.68rem] font-mono text-silver-400">
                    06 Core Disciplines
                  </span>
                </div>

                <ul className="divide-y divide-white/5 border-b border-white/5">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04, duration: 0.4, ease }}
                    >
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        onClick={() => {
                          setMenuOpen(false)
                          if (link.to === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        className={({ isActive }) =>
                          `group flex items-center justify-between py-3 sm:py-4 transition-all duration-300 ${
                            isActive ? 'text-copper-400 font-bold' : 'text-white hover:text-copper-200'
                          }`
                        }
                      >
                        <div className="flex items-baseline gap-3.5 sm:gap-5">
                          <span className="text-xs sm:text-sm font-mono text-copper-500/70">
                            0{i + 1}
                          </span>
                          <span className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight">
                            {link.label}
                          </span>
                        </div>
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center border border-white/10 bg-white/5 text-silver-400 transition-all duration-300 group-hover:border-copper-500 group-hover:bg-copper-600 group-hover:text-white group-hover:translate-x-1">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Company Info & Quick Actions Sidebar */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10 space-y-5">
                {/* Quick Action Buttons */}
                <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  <Link
                    to="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-white/20 bg-white px-5 text-xs font-semibold tracking-wider text-ink-950 uppercase transition-colors hover:bg-silver-200 shadow-md active:scale-95"
                  >
                    <span>Request Project Consultation</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href="https://wa.me/919846902000?text=Hello%20SSIB%20Infra%20Builders%2C%20I%20would%20like%20to%20inquire%20about%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-emerald-600 bg-emerald-600/20 px-5 text-xs font-semibold tracking-wider text-emerald-300 uppercase transition-colors hover:bg-emerald-600 hover:text-white active:scale-95"
                  >
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Direct Contact Details */}
                <div className="space-y-2.5 text-xs sm:text-sm text-silver-300 pt-4 border-t border-white/10">
                  <a
                    href="tel:+919846902000"
                    className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/5 hover:border-copper-500/40 transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-copper-400/30 bg-copper-500/10 text-copper-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[0.62rem] text-silver-400 uppercase block font-mono">Direct Founder Line</span>
                      <span className="font-semibold text-white text-sm">+91 98469 02000</span>
                    </div>
                  </a>

                  <a
                    href="mailto:shihaskyline2000@gmail.com"
                    className="flex items-center gap-3 p-2.5 bg-white/5 border border-white/5 hover:border-copper-500/40 transition-colors"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-copper-400/30 bg-copper-500/10 text-copper-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[0.62rem] text-silver-400 uppercase block font-mono">Tendering Email</span>
                      <span className="font-semibold text-white text-xs truncate block">shihaskyline2000@gmail.com</span>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 p-2.5 bg-white/5 border border-white/5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-copper-400/30 bg-copper-500/10 text-copper-400 mt-0.5">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[0.62rem] text-silver-400 uppercase block font-mono">Headquarters</span>
                      <span className="text-xs text-silver-300">Mareena Centre, Container Rd, Ernakulam</span>
                    </div>
                  </div>
                </div>

                {/* Licence Badge */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 border border-copper-500/30 bg-copper-950/40 px-3 py-1.5 text-xs text-copper-300">
                    <ShieldCheck className="h-3.5 w-3.5 text-copper-400 shrink-0" />
                    <span>A-Class Government Licenced Contractor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer Bar */}
            <div className="container-x py-4 border-t border-white/10 text-xs text-silver-500 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
              <p>© {new Date().getFullYear()} SSIB Infra Builders Pvt Ltd. All rights reserved.</p>
              <p className="font-mono text-silver-400">Ernakulam · Kerala, India</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
