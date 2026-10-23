import { motion, useReducedMotion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { company } from '../data/site'

const pages = [
  { src: '/images/profile-page-roads.webp', alt: 'Company profile page: BM and BC road project sites', rest: { rotate: -9, x: '-11%', y: 22 }, hover: { rotate: -13, x: '-19%', y: 30 } },
  { src: '/images/profile-page-cover.webp', alt: 'Company profile cover page', rest: { rotate: 6, x: '10%', y: 12 }, hover: { rotate: 10, x: '18%', y: 18 } },
  { src: '/images/profile-page-nh66.webp', alt: 'Company profile page: NH 66 earthworks current project', rest: { rotate: -1, x: 0, y: 0 }, hover: { rotate: 0, x: 0, y: -14 } },
]

export default function CompanyProfile() {
  const reduce = useReducedMotion()

  return (
    <section id="profile" className="silver-sheen relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_40%,rgba(221,140,109,0.16),transparent_70%)]" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow text-copper-700">Company profile 2026</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.02em] text-ink-900 sm:text-6xl">
              Discover <span className="text-copper-gradient">SSIB Infra</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-500">
              Our founder&rsquo;s story, vision and mission, current projects, client portfolio, machinery fleet and bitumen
              plants — all in one document.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href={company.profilePdf} target="_blank" rel="noopener noreferrer" variant="dark" icon={Eye}>
              View Company Profile
            </Button>
            <Button href={company.profilePdf} download="SSIB-Infra-Company-Profile-2026.pdf" variant="outline" icon={Download}>
              Download PDF
            </Button>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 flex items-center gap-2 text-xs text-silver-600">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" /> {company.profilePdfMeta}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <motion.a
            href={company.profilePdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the SSIB Infra company profile PDF in a new tab"
            className="relative mx-auto block aspect-[3/2] w-full max-w-[600px]"
            initial="hidden"
            whileInView="rest"
            whileHover={reduce ? undefined : 'hover'}
            viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          >
            {pages.map((p, i) => (
              <motion.img
                key={p.src}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-[8%] h-[84%] w-[84%] border border-white bg-white object-cover shadow-[0_30px_60px_-25px_rgba(22,24,27,0.45)]"
                variants={{
                  hidden: { opacity: 0, y: 60, rotate: 0, x: 0 },
                  rest: { opacity: 1, ...p.rest, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 } },
                  hover: { opacity: 1, ...p.hover, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                }}
              />
            ))}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
