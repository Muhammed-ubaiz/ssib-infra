// The official SSIB logo artwork is used unaltered (white background removed only).
// It is designed for light surfaces, so it is always placed on light backgrounds.

export function LogoFull({ className = '' }) {
  return (
    <img
      src="/images/logo-ssib.png"
      alt="SSIB — Trusted name in construction"
      width="640"
      height="674"
      className={`h-auto ${className}`}
    />
  )
}

export function LogoLockup({ className = '' }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <img src="/images/logo-ssib-mark.png" alt="" width="260" height="288" className="h-10 w-auto sm:h-11" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-bold tracking-[0.14em] text-ink-900">SSIB</span>
        <span className="mt-1 text-[0.62rem] font-medium tracking-[0.18em] text-silver-600 uppercase">
          Infra Builders Pvt Ltd
        </span>
      </span>
    </span>
  )
}
