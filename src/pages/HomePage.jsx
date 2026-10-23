import Hero from '../components/Hero'
import Services from '../components/Services'
import { FeaturedProjects, ClientsMarquee } from '../components/Projects'
import { Strengths } from '../components/WhyChooseUs'
import CompanyProfile from '../components/CompanyProfile'
import ContactBand from '../components/ContactBand'
import usePageTitle from '../components/ui/usePageTitle'

export default function HomePage() {
  usePageTitle(null)
  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects compact />
      <ClientsMarquee />
      <Strengths />
      <CompanyProfile />
      <ContactBand />
    </>
  )
}
