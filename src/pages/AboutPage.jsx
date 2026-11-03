import AboutHero from '../components/AboutHero'
import About from '../components/About'
import Team from '../components/Team'
import { Objectives } from '../components/WhyChooseUs'
import { ClientsMarquee } from '../components/Projects'
import CompanyProfile from '../components/CompanyProfile'
import CTA from '../components/CTA'
import usePageTitle from '../components/ui/usePageTitle'

export default function AboutPage() {
  usePageTitle('About Us')
  return (
    <>
      <AboutHero />
      <About />
      <Team />
      <Objectives />
      <ClientsMarquee tone="light" />
      <CompanyProfile />
      <CTA />
    </>
  )
}
