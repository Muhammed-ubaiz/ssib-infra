import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, intro, tone = 'light', align = 'left', className = '' }) {
  const dark = tone === 'dark'
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      <Reveal>
        <p className={`eyebrow ${dark ? 'text-copper-300' : 'text-copper-700'}`}>{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`font-display mt-5 text-[2.1rem] leading-[1.04] font-semibold tracking-[-0.02em] text-balance sm:text-5xl lg:text-[3.6rem] ${
            dark ? 'text-white' : 'text-ink-900'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${dark ? 'text-silver-300' : 'text-ink-500'} ${align === 'center' ? 'mx-auto' : ''}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
