import PageHeader from '../components/ui/PageHeader'
import { FeaturedProjects, ProjectRegister, ProjectStats } from '../components/Projects'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'
import usePageTitle from '../components/ui/usePageTitle'

export default function ProjectsPage() {
  usePageTitle('Projects')
  return (
    <>
      <PageHeader
        eyebrow="Infrastructure Portfolio"
        title="Engineering highways, campuses and landmark civil works."
        intro="High-precision bituminous road tarring, heavy-duty interlocking paver roadways, bulk earthworks, and specialized plant operations delivered across Kerala since 2005."
        image="/images/tea-estate-highway-paving.jpg"
      >
        <div className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ProjectStats className="max-w-md" />
          <nav aria-label="Quick jump" className="flex flex-wrap items-center gap-2">
            <a
              href="#featured-projects"
              className="rounded-sm border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/10"
            >
              Featured Sites
            </a>
            <a
              href="#project-list"
              className="rounded-sm border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md transition-colors hover:border-white/50 hover:bg-white/10"
            >
              Project Ledger
            </a>
            <a
              href="#gallery"
              className="rounded-sm border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-white uppercase backdrop-blur-md transition-colors hover:bg-white hover:text-ink-950"
            >
              Photo Archive
            </a>
          </nav>
        </div>
      </PageHeader>
      <FeaturedProjects />
      <ProjectRegister />
      <Gallery />
      <CTA />
    </>
  )
}
