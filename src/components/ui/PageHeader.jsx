import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { ChevronRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1]

export default function PageHeader({ eyebrow, title, intro, image, children }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pt-36 pb-16 text-white sm:pt-44 sm:pb-24">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950/80 to-transparent" />

      <div className="container-x">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <ol className="flex items-center gap-2 text-xs text-silver-400">
            <li>
              <Link to="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <li aria-current="page" className="text-silver-200">
              {eyebrow}
            </li>
          </ol>
        </motion.nav>
        <div className="mt-8 max-w-4xl">
          <h1 className="font-display overflow-hidden text-[2.5rem] leading-[1.02] font-semibold tracking-[-0.025em] text-balance sm:text-6xl lg:text-7xl">
            <motion.span className="block" initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 1, ease, delay: 0.15 }}>
              {title}
            </motion.span>
          </h1>
          {intro && (
            <motion.p
              className="mt-6 max-w-2xl text-base leading-relaxed text-silver-300 sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.35 }}
            >
              {intro}
            </motion.p>
          )}
        </div>
        {children && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.55 }}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}
