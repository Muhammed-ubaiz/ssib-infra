import { Suspense, lazy } from 'react'
import { MotionConfig } from 'framer-motion'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollManager from './components/ScrollManager'
import FloatingContact from './components/ui/FloatingContact'
import HomePage from './pages/HomePage'

// Lazy load secondary routes for optimal initial page performance
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ClientsPage = lazy(() => import('./pages/ClientsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-paper">
      <div className="flex items-center gap-3 text-xs font-mono font-semibold tracking-widest text-copper-700 uppercase">
        <span className="h-2 w-2 rounded-full bg-copper-600 animate-ping" />
        <span>Loading SSIB Architecture...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollManager />
      <a
        href="#main"
        className="sr-only z-[60] bg-ink-900 px-4 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingContact />
    </MotionConfig>
  )
}
