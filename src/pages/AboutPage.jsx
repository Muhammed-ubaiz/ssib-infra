import AboutHero from '../components/AboutHero'
import About from '../components/About'
import Team from '../components/Team'
import { Objectives } from '../components/WhyChooseUs'
import { ClientsMarquee } from '../components/Projects'
import CompanyProfile from '../components/CompanyProfile'
import CTA from '../components/CTA'
import usePageTitle from '../components/ui/usePageTitle'

export default function AboutPage() {
  usePageTitle(
    'About Us — A-Class Contractors Ernakulam',
    'Founded in 2005 by Mr. Shihas P. I, SSIB Infra Builders is an A-Class Government Licensed infrastructure contractor headquartered in Ernakulam, executing ₹100 Cr highway earthworks and civil engineering across Kerala.'
  )
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
