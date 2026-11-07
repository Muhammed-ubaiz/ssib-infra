import { useState, useEffect } from 'react'
import { Phone, MessageSquare, X } from 'lucide-react'
import { contact } from '../../data/site'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)

  // Show after user scrolls 150px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  const whatsappUrl = `https://wa.me/919846902000?text=${encodeURIComponent(
    'Hello SSIB Infra Builders, I would like to inquire about a project.'
  )}`

  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center gap-2.5 transition-all duration-500 ease-premium"
    >
      {/* Tap to Call (Mobile Only) */}
      <a
        href={contact.phoneHref}
        aria-label="Call SSIB Office Directly"
        className="sm:hidden flex h-12 w-12 items-center justify-center rounded-full bg-copper-600 text-white shadow-[0_8px_24px_rgba(0,0,254,0.4)] border border-white/20 active:scale-95 transition-transform"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Floating WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SSIB on WhatsApp"
        className="group flex h-12 items-center gap-2.5 rounded-full bg-emerald-600 px-4 text-white shadow-[0_8px_24px_rgba(5,150,105,0.45)] border border-emerald-400/30 transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_10px_30px_rgba(5,150,105,0.6)] active:scale-95"
      >
        <MessageSquare className="h-5 w-5 text-white transition-transform group-hover:scale-110" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wider uppercase font-mono">
          WhatsApp Us
        </span>
      </a>
    </aside>
  )
}
