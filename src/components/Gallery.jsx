import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { gallery, galleryCategories } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

function Lightbox({ items, index, onClose, onMove }) {
  const closeRef = useRef(null)
  const item = items[index]

  useEffect(() => {
    const prevFocus = document.activeElement
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prevFocus?.focus?.()
    }
  }, [onClose, onMove])

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={item.caption}
      className="fixed inset-0 z-[70] flex flex-col bg-ink-950/98 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 text-xs tracking-wider text-silver-300 uppercase sm:px-8">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">SSIB Archive</span>
          <span className="text-white/20">|</span>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-copper-400/30 bg-copper-500/10 px-2.5 py-0.5 text-[0.65rem] font-bold text-copper-300">
            <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
            {item.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-mono text-silver-400">
            {index + 1} / {items.length}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 bg-white/5 text-white transition-colors hover:border-copper-400 hover:text-copper-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex flex-1 items-center justify-center p-4 sm:px-20 sm:pb-8" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.figure
            key={item.src}
            className="flex max-h-full flex-col items-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="relative overflow-hidden rounded-md border border-white/15 bg-black/50 shadow-2xl">
              <img
                src={item.src}
                alt={item.caption}
                className="img-premium max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 max-w-2xl text-center text-sm font-medium text-white sm:text-base">
              {item.caption}
            </figcaption>
            <span className="mt-1 text-xs text-silver-400">
              High-Definition Site Photography · SSIB Infra Project Portfolio
            </span>
          </motion.figure>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          type="button"
          onClick={() => onMove(-1)}
          aria-label="Previous image"
          className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-white/10 bg-ink-900/80 text-white backdrop-blur-md transition-all hover:border-copper-400 hover:bg-copper-600 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => onMove(1)}
          aria-label="Next image"
          className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-white/10 bg-ink-900/80 text-white backdrop-blur-md transition-all hover:border-copper-400 hover:bg-copper-600 sm:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)
  const items = useMemo(() => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)), [filter])

  const close = useCallback(() => setOpen(null), [])
  const move = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length])

  return (
    <section id="gallery" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32" aria-labelledby="gallery-title">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-0 h-[480px] w-[480px] rounded-full bg-copper-500/10 blur-[130px]" />
      
      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Gallery"
          title={<span id="gallery-title">On site with SSIB.</span>}
          intro="High-definition site photography from SSIB highway road tarring, precision paver tile laying, bulk earthworks and heavy machinery operations."
        />

        {/* Filter Categories Bar with Item Counts */}
        <div role="group" aria-label="Filter gallery" className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {galleryCategories.map((c) => {
            const count = c === 'All' ? gallery.length : gallery.filter((g) => g.category === c).length
            return (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`min-h-10 shrink-0 rounded-sm border px-4 text-xs font-semibold tracking-wide transition-all duration-300 ${
                  filter === c
                    ? 'border-copper-400 bg-copper-500 text-white shadow-lg shadow-copper-500/25'
                    : 'border-white/15 bg-white/5 text-silver-300 hover:border-white/40 hover:text-white'
                }`}
              >
                {c} <span className={`font-mono text-[11px] ml-1.5 ${filter === c ? 'text-copper-100' : 'text-silver-400'}`}>({count})</span>
              </button>
            )
          })}
        </div>

        {/* High-Definition Masonry Gallery */}
        <motion.ul layout className="mt-10 columns-2 gap-4 sm:gap-5 lg:columns-3">
          <AnimatePresence initial={false}>
            {items.map((g, i) => (
              <motion.li
                layout
                key={g.src}
                className="mb-4 break-inside-avoid sm:mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden rounded-md border border-white/10 bg-ink-900 text-left transition-all duration-500 hover:border-copper-400/60 hover:shadow-2xl hover:shadow-black/70"
                  aria-label={`View high-res: ${g.caption}`}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    decoding="async"
                    className="img-premium w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />

                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-ink-950/80 px-2.5 py-1 text-[0.62rem] font-bold tracking-widest text-white uppercase backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                    {g.category}
                  </span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/95 via-ink-950/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:p-5">
                    <p className="text-xs font-semibold leading-snug text-white sm:text-sm">
                      {g.caption}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between border-t border-white/15 pt-2 text-[0.7rem] text-copper-300">
                      <span className="font-mono uppercase tracking-wider">Inspect High-Res</span>
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-copper-500/20 text-copper-300 border border-copper-400/30">
                        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <AnimatePresence>{open !== null && <Lightbox items={items} index={open} onClose={close} onMove={move} />}</AnimatePresence>
    </section>
  )
}
