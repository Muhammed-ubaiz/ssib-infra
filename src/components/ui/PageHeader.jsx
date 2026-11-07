import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export default function PageHeader({ eyebrow, title, intro, image, children, className = '' }) {
  return (
    <section className={`relative isolate flex min-h-svh lg:h-screen lg:max-h-[880px] flex-col justify-between overflow-hidden bg-ink-950 pt-20 pb-5 text-white sm:pt-28 sm:pb-10 ${className}`}>
      <motion.img
        src={image}
        alt={`${eyebrow || 'SSIB Infrastructure'} engineering site in Kerala`}
        className="img-premium absolute inset-0 -z-10 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/80 to-ink-950/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/95 via-transparent to-ink-950/40" />
      <div className="grain absolute inset-0 opacity-15 pointer-events-none -z-10" />

      {/* Architectural subtle framing lines */}
      <div className="absolute inset-x-8 sm:inset-x-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />
      <div className="absolute right-8 sm:right-12 top-0 bottom-0 w-px bg-white/[0.04] pointer-events-none hidden md:block" />

      <div className="w-full max-w-[1560px] mx-auto px-5 sm:px-8 lg:px-14 flex-1 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs font-mono tracking-wider text-silver-400 uppercase">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3 w-3 text-copper-400" aria-hidden="true" />
              <li aria-current="page" className="text-copper-200">
                {eyebrow}
              </li>
            </ol>
          </nav>
        </motion.div>

        <div className="my-auto py-3 sm:py-6 max-w-5xl">
          <h1 className="font-display overflow-hidden text-2xl sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-extrabold tracking-[-0.03em] leading-[1.05] sm:leading-[1.02] text-balance">
            <motion.span className="block" initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 1, ease, delay: 0.15 }}>
              {title}
            </motion.span>
          </h1>
          {intro && (
            <motion.p
              className="mt-2.5 sm:mt-4 max-w-3xl text-xs sm:text-base lg:text-lg leading-relaxed text-silver-200 font-light"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
            >
              {intro}
            </motion.p>
          )}
        </div>

        {children ? (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }} className="w-full">
            {children}
          </motion.div>
        ) : (
          <div className="w-full border-t border-white/10 pt-3 sm:pt-4 flex flex-wrap items-center justify-between text-xs font-mono text-silver-400 uppercase">
            <span>SSIB Infrastructure Engineering</span>
            <span className="text-copper-300">Highway · Earthworks · Paving · Bitumen Plants</span>
          </div>
        )}
      </div>
    </section>
  )
}
