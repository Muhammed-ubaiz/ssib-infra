import PageHeader from '../components/ui/PageHeader'
import ServicesDetailed, { ServiceJumpNav } from '../components/ServicesDetailed'
import { Fleet } from '../components/WhyChooseUs'
import ContactBand from '../components/ContactBand'
import usePageTitle from '../components/ui/usePageTitle'

export default function ServicesPage() {
  usePageTitle('Our Services')
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Six disciplines. One accountable contractor."
        intro="Every service is delivered with our own crews, machinery and bitumen plants — from the first cut of earth to the final surface."
        image="/images/tarring-works.webp"
      >
        <ServiceJumpNav />
      </PageHeader>
      <ServicesDetailed />
      <Fleet />
      <ContactBand title="Need a quote for road, earth or rock work?" />
    </>
  )
}
