import PageHeader from '../components/ui/PageHeader'
import Contact from '../components/Contact'
import usePageTitle from '../components/ui/usePageTitle'

export default function ContactPage() {
  usePageTitle('Contact Us')
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let’s talk about your next project."
        intro="Reach our Ernakulam office by phone or email, or send us your project details."
        image="/images/road-rollers.webp"
      />
      <Contact />
    </>
  )
}
