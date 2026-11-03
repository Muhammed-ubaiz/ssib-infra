import PageHeader from '../components/ui/PageHeader'
import ServicesDetailed, { ServiceJumpNav } from '../components/ServicesDetailed'
import Process from '../components/Process'
import { Fleet } from '../components/WhyChooseUs'
import CTA from '../components/CTA'
import usePageTitle from '../components/ui/usePageTitle'

export default function ServicesPage() {
  usePageTitle('Our Services')
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Six disciplines. One accountable contractor."
        intro="Every service is delivered with our own crews, machinery and bitumen plants — from the first cut of earth to the final surface."
        image="/images/apollo-sensor-paver-highway.jpg"
      >
        <ServiceJumpNav />
      </PageHeader>
      <ServicesDetailed />
      <Process />
      <Fleet />
      <CTA />
    </>
  )
}
