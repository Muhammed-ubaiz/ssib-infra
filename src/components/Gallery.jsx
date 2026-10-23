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
      className="fixed inset-0 z-[70] flex flex-col bg-ink-950/95 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 text-sm text-silver-300 sm:px-8">
        <span>
          {index + 1} / {items.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close image"
          className="inline-flex h-11 w-11 items-center justify-center text-white hover:text-copper-200"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.figure
            key={item.src}
            className="flex max-h-full flex-col items-center"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease }}
          >
            <img src={item.src} alt={item.caption} className="max-h-[72vh] w-auto max-w-full object-contain" />
            <figcaption className="mt-4 text-center text-sm text-silver-200">
              {item.caption} <span className="text-silver-500">· {item.category}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
        <button
          type="button"
          onClick={() => onMove(-1)}
          aria-label="Previous image"
          className="absolute left-2 inline-flex h-12 w-12 items-center justify-center bg-white/10 text-white hover:bg-white/20 sm:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => onMove(1)}
          aria-label="Next image"
          className="absolute right-2 inline-flex h-12 w-12 items-center justify-center bg-white/10 text-white hover:bg-white/20 sm:right-6"
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
    <section id="gallery" className="bg-ink-900 py-24 text-white sm:py-32" aria-labelledby="gallery-title">
      <div className="container-x">
        <SectionHeading
          tone="dark"
          eyebrow="Gallery"
          title={<span id="gallery-title">On site with SSIB.</span>}
          intro="Earthworks, rock cutting, building, restoration, our bitumen plants and machinery — photographed on our projects."
        />

        <div role="group" aria-label="Filter gallery" className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`min-h-10 shrink-0 border px-4 text-xs font-semibold tracking-wide transition-colors duration-300 ${
                filter === c ? 'border-copper-400 bg-copper-500 text-white' : 'border-white/15 text-silver-300 hover:border-white/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
          <AnimatePresence initial={false}>
            {items.map((g, i) => (
              <motion.li
                layout
                key={g.src}
                className="mb-3 break-inside-avoid sm:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block w-full overflow-hidden bg-ink-800 text-left"
                  aria-label={`View larger: ${g.caption}`}
                >
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading="lazy"
                    decoding="async"
                    className="w-full transition-transform duration-1000 ease-premium group-hover:scale-105"
                  />
                  <span className="absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink-950/85 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4">
                    <span className="text-xs font-medium text-white sm:text-sm">{g.caption}</span>
                    <Expand className="h-4 w-4 shrink-0 text-copper-200" aria-hidden="true" />
                  </span>
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
