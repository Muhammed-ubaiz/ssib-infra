import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function AnimatedCounter({ value, duration = 2, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [displayValue, setDisplayValue] = useState(0)

  // Extract numeric value from string if needed (e.g., "20" from "20+")
  const numericTarget = typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, ''), 10) || 0

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = numericTarget
    const totalFrames = Math.round(duration * 60)
    let frame = 0

    const counter = setInterval(() => {
      frame++
      const progress = frame / totalFrames
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(start + (end - start) * easeOut)

      setDisplayValue(current)

      if (frame >= totalFrames) {
        clearInterval(counter)
        setDisplayValue(end)
      }
    }, 1000 / 60)

    return () => clearInterval(counter)
  }, [isInView, numericTarget, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
