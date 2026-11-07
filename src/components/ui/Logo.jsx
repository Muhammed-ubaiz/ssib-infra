// The official SSIB logo artwork in the signature Royal Blue identity (#0000FE).

export function LogoMark({ className = 'h-10 w-auto sm:h-11', tone = 'light' }) {
  const isDark = tone === 'dark'
  return (
    <svg
      viewBox="0 0 75 67"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 group-hover:scale-105 shrink-0 ${
        isDark ? 'text-copper-400' : 'text-copper-500'
      } ${className}`}
      aria-label="SSIB Monogram"
    >
      <polygon points="28.94,17.65 58.67,0.00 58.67,14.96 57.45,14.26 28.94,30.52" />
      <polygon points="9.25,45.21 43.98,26.69 43.98,42.40 9.25,59.00" />
      <polygon points="43.98,26.69 57.27,33.73 57.27,15.49 58.62,16.09 58.62,14.91 74.99,23.26 74.99,66.84 65.11,66.84 65.11,40.60 43.98,29.50" />
      <polygon points="0.00,66.84 43.96,58.35 43.96,42.41 57.29,49.42 57.29,66.84" />
    </svg>
  )
}

export function LogoFull({ className = '', tone = 'light' }) {
  const isDark = tone === 'dark'
  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={isDark ? '/images/logo-ssib-white.png' : '/images/logo-ssib.png'}
        alt="SSIB Infra Builders Private Limited"
        width="827"
        height="504"
        className="h-auto w-full max-w-[320px] drop-shadow-sm"
      />
    </div>
  )
}

export function LogoLockup({ className = '', tone = 'light' }) {
  const isDark = tone === 'dark'
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-9 w-auto sm:h-10" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.18rem] font-black tracking-[0.12em] transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-copper-600'
          }`}
        >
          SSIB
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
            isDark ? 'text-copper-200' : 'text-copper-700'
          }`}
        >
          Infra Builders Pvt Ltd
        </span>
      </span>
    </span>
  )
}
