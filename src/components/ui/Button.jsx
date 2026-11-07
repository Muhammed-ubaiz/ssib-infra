import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  copper:
    'bg-copper-500 text-white hover:bg-copper-600 border border-copper-400/40 shadow-[0_10px_30px_-10px_rgba(0,0,254,0.45)] active:scale-[0.98]',
  brand:
    'bg-copper-500 text-white hover:bg-copper-600 border border-copper-400/40 shadow-[0_10px_30px_-10px_rgba(0,0,254,0.45)] active:scale-[0.98]',
  white:
    'bg-white !text-ink-950 hover:bg-copper-50 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.4)]',
  light:
    'bg-white !text-copper-700 hover:bg-copper-50 border border-copper-200 shadow-sm',
  ghostLight:
    'border border-white/35 text-white hover:border-copper-400 hover:bg-white/15 backdrop-blur-sm',
  dark:
    'bg-ink-900 text-white hover:bg-copper-600',
  outline:
    'border border-copper-500/30 text-copper-600 hover:border-copper-500 hover:bg-copper-500 hover:text-white',
}

export default function Button({ to, href, variant = 'copper', icon: Icon = ArrowUpRight, children, className = '', ...rest }) {
  const Tag = to ? Link : href ? 'a' : 'button'
  const isWhite = variant === 'white' || variant === 'light' || className.includes('bg-white')
  return (
    <Tag
      to={to}
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-premium ${variants[variant] || variants.copper} ${className} ${isWhite ? '!text-ink-950' : ''}`}
      {...rest}
    >
      <span className={isWhite ? '!text-ink-950 font-bold' : ''}>{children}</span>
      {Icon && (
        <Icon
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isWhite ? '!text-ink-950' : ''}`}
        />
      )}
    </Tag>
  )
}
