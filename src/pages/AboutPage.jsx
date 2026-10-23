import PageHeader from '../components/ui/PageHeader'
import About from '../components/About'
import { Objectives } from '../components/WhyChooseUs'
import { ClientsMarquee } from '../components/Projects'
import CompanyProfile from '../components/CompanyProfile'
import ContactBand from '../components/ContactBand'
import usePageTitle from '../components/ui/usePageTitle'

export default function AboutPage() {
  usePageTitle('About Us')
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Trusted name in construction since 2005."
        intro="From material supply in Vadanappally to an A-Class licensed infrastructure contractor working across Kerala."
        image="/images/city-road.webp"
      />
      <About />
      <Objectives />
      <ClientsMarquee tone="light" />
      <CompanyProfile />
      <ContactBand />
    </>
  )
}
