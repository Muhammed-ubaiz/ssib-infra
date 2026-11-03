// The official SSIB logo artwork is used unaltered (white background removed only).

export function LogoFull({ className = '', tone = 'light' }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src="/images/logo-ssib.png"
        alt="SSIB — Trusted name in construction"
        width="640"
        height="674"
        className={`h-auto ${tone === 'dark' ? 'brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]' : ''}`}
      />
    </div>
  )
}

export function LogoLockup({ className = '', tone = 'light' }) {
  const isDark = tone === 'dark'
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/logo-ssib-mark.png"
        alt="SSIB Monogram"
        width="260"
        height="288"
        className="h-10 w-auto sm:h-11 transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.15rem] font-bold tracking-[0.14em] transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-ink-900'
          }`}
        >
          SSIB
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 ${
            isDark ? 'text-silver-300' : 'text-silver-600'
          }`}
        >
          Infra Builders Pvt Ltd
        </span>
      </span>
    </span>
  )
}
