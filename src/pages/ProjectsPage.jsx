import PageHeader from '../components/ui/PageHeader'
import { ClientShowcase, FeaturedProjects, ProjectRegister, ProjectStats } from '../components/Projects'
import Gallery from '../components/Gallery'
import ContactBand from '../components/ContactBand'
import usePageTitle from '../components/ui/usePageTitle'

export default function ProjectsPage() {
  usePageTitle('Projects')
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work that carries highways, campuses and communities."
        intro="Road tarring, earthworks, rock cutting, paving, building and restoration for clients including Shivalaya Construction, Lulu, Tata and Sobha."
        image="/images/nh66-earthworks.webp"
      >
        <ProjectStats className="mt-12 max-w-md border-t border-white/15 pt-8" />
      </PageHeader>
      <FeaturedProjects />
      <ProjectRegister />
      <Gallery />
      <ClientShowcase />
      <ContactBand title="Have a project in mind?" />
    </>
  )
}
