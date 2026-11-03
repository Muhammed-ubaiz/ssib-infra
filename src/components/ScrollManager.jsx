import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

// Guarantees that the website always loads at the top (Hero section) on initial load / refresh,
// and handles smooth scrolling on subsequent in-app navigation.
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  const isInitialLoad = useRef(true)

  useEffect(() => {
    // On initial load/refresh, always ensure we are at the top (Hero section)
    if (isInitialLoad.current) {
      isInitialLoad.current = false
      window.scrollTo(0, 0)
      const t = setTimeout(() => {
        window.scrollTo(0, 0)
      }, 50)
      return () => clearTimeout(t)
    }

    // Subsequent user navigation with hash (e.g. clicking #team, #services)
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(t)
    }

    // Subsequent navigation to new pages without hash
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
