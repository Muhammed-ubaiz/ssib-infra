import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  copper:
    'bg-ink-950 text-white hover:bg-black border border-white/10 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]',
  white:
    'bg-white text-ink-950 hover:bg-silver-200 border border-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]',
  light:
    'bg-white text-ink-950 hover:bg-silver-100 border border-silver-200 shadow-sm',
  ghostLight:
    'border border-white/35 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm',
  dark:
    'bg-ink-900 text-white hover:bg-ink-700',
  outline:
    'border border-ink-900/20 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white',
}

export default function Button({ to, href, variant = 'copper', icon: Icon = ArrowUpRight, children, className = '', ...rest }) {
  const Tag = to ? Link : href ? 'a' : 'button'
  return (
    <Tag
      to={to}
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-premium ${variants[variant] || variants.copper} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {Icon && (
        <Icon
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Tag>
  )
}
