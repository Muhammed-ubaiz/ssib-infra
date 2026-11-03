import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { FeaturedProjects, ClientsMarquee } from '../components/Projects'
import ClientLogosSpotlight from '../components/ClientLogosSpotlight'
import { Strengths } from '../components/WhyChooseUs'
import Process from '../components/Process'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import usePageTitle from '../components/ui/usePageTitle'

export default function HomePage() {
  usePageTitle(null)
  return (
    <>
      {/* 2. CINEMATIC HERO */}
      <Hero />

      {/* 3. ABOUT SSIB (Asymmetric Editorial Layout) */}
      <About />

      {/* 4. OUR EXPERTISE (Numbered modern service presentation) */}
      <Services />

      {/* 5. FEATURED PROJECTS (Editorial-style portfolio) */}
      <FeaturedProjects compact />

      {/* Featured Client Logos Spotlight */}
      <ClientLogosSpotlight tone="dark" />

      {/* Client Logo Marquee */}
      <ClientsMarquee tone="dark" />

      {/* 6. WHY CHOOSE SSIB (Premium dark charcoal section) */}
      <Strengths />

      {/* 7. PROJECT PROCESS (6-phase timeline) */}
      <Process />

      {/* 8. STATISTICS (Minimal oversized animated numbers) */}
      <Stats />

      {/* Partner Endorsements */}
      <Testimonials />

      {/* 9. CONTACT SECTION ("LET'S BUILD SOMETHING GREAT.") */}
      <Contact />
    </>
  )
}
