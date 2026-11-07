import PageHeader from '../components/ui/PageHeader'
import ClientLogosSpotlight from '../components/ClientLogosSpotlight'
import { ClientShowcase, ClientsMarquee } from '../components/Projects'
import CTA from '../components/CTA'
import usePageTitle from '../components/ui/usePageTitle'

export default function ClientsPage() {
  usePageTitle(
    'Clients & Partners — Grand Hyatt, Tata, Marriott, Galfar | SSIB Infra',
    'SSIB Infra Builders is the trusted civil and road infrastructure partner for leading developers across Kerala including Grand Hyatt, Crowne Plaza, Marriott, Tata, LuLu, and Galfar.'
  )

  return (
    <>
      <PageHeader
        eyebrow="Clients & Partners"
        title="Trusted by luxury hospitality leaders, major developers & public bodies."
        intro="From Grand Hyatt Bolgatty and Marriott to Tata, SmartCity Kochi, and Galfar — SSIB Infra Builders executes large-scale road tarring, earthworks, and paving projects with precision."
        image="/images/crowne-plaza-entrance-paved.jpg"
      >
        <div className="border-t border-white/15 pt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className="rounded-sm border border-white/10 bg-ink-950/60 p-4 backdrop-blur-md">
            <p className="text-[0.65rem] font-mono tracking-wider text-silver-300 uppercase">Hospitality Leaders</p>
            <p className="mt-1 text-xs font-semibold text-white">Grand Hyatt, Marriott, Crowne Plaza</p>
          </div>
          <div className="rounded-sm border border-white/10 bg-ink-950/60 p-4 backdrop-blur-md">
            <p className="text-[0.65rem] font-mono tracking-wider text-silver-300 uppercase">Corporate Developers</p>
            <p className="mt-1 text-xs font-semibold text-white">Lulu, Sobha, Tata, Shivalaya</p>
          </div>
          <div className="rounded-sm border border-white/10 bg-ink-950/60 p-4 backdrop-blur-md">
            <p className="text-[0.65rem] font-mono tracking-wider text-silver-300 uppercase">Contract Scope</p>
            <p className="mt-1 text-xs font-semibold text-white">Major Turnkey & EPC Execution</p>
          </div>
          <div className="rounded-sm border border-white/10 bg-ink-950/60 p-4 backdrop-blur-md">
            <p className="text-[0.65rem] font-mono tracking-wider text-silver-300 uppercase">Govt Contractor</p>
            <p className="mt-1 text-xs font-semibold text-white">A-Class Licensed Kerala & NH</p>
          </div>
        </div>
      </PageHeader>

      {/* Featured 6 client logos spotlight */}
      <ClientLogosSpotlight tone="light" />

      {/* Animated infinite logo marquee */}
      <ClientsMarquee tone="dark" />

      {/* Complete client project register showcase */}
      <ClientShowcase />

      {/* Call to action */}
      <CTA />
    </>
  )
}
