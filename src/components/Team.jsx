import { motion } from 'framer-motion'
import { Award, Briefcase, ChevronRight, UserCheck } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { teamMembers, company } from '../data/site'

const ease = [0.22, 1, 0.36, 1]

export default function Team() {
  return (
    <section id="team" className="relative bg-paper py-24 sm:py-32 border-t border-silver-200">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end border-b border-silver-300 pb-10">
          <SectionHeading
            eyebrow="Leadership &amp; Engineering"
            title="Experienced Minds Behind Landmark Projects."
            intro="Led by founder Shihas P. I, our leadership team combines decades of heavy infrastructure execution, geotechnical competence, and A-Class contractor governance."
          />
          <Reveal delay={0.2} className="hidden lg:block text-right">
            <span className="font-mono text-xs tracking-widest text-copper-700 uppercase">Core Cadre</span>
            <p className="font-display text-5xl font-bold text-silver-400">Leadership</p>
          </Reveal>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.role}
              className="group relative flex flex-col justify-between border border-silver-200 bg-white p-7 transition-all duration-500 ease-premium hover:border-copper-500/80 hover:shadow-[0_20px_40px_-15px_rgba(22,24,27,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: index * 0.08 }}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 border border-copper-200 bg-copper-50 px-2.5 py-1 text-[0.68rem] font-semibold tracking-wider text-copper-800 uppercase">
                    <UserCheck className="h-3 w-3 text-copper-600" />
                    {member.badge}
                  </span>
                  <span className="font-mono text-xs text-silver-400">0{index + 1}</span>
                </div>

                {/* Member Name & Role */}
                <h3 className="font-display mt-6 text-xl font-bold text-ink-950 group-hover:text-copper-700 transition-colors">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-wider text-copper-800 uppercase">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink-500 font-normal">
                  {member.bio}
                </p>
              </div>

              {/* Bottom detail */}
              <div className="mt-8 pt-4 border-t border-silver-200 flex items-center justify-between text-xs text-silver-500">
                <span>SSIB Infra Cadre</span>
                <span className="font-semibold text-ink-800">Kerala Operations</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Founder Highlight Editorial Box */}
        <div className="mt-14 border border-silver-300 bg-white p-8 sm:p-12 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest text-copper-700 uppercase">
                Founder&rsquo;s Perspective
              </span>
              <h3 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-ink-950">
                &ldquo;Dedication to quality is the only lasting foundation.&rdquo;
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-600">
                From a modest beginning in 2005 supplying materials in Vadanappally, Mr. Shihas P. I envisioned a full-service infrastructure organization that owns its fleet, operates its own asphalt plants, and takes full accountability for quality on every kilometre of road and every metre of cut.
              </p>
            </div>
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-silver-200 pt-6 lg:pt-0 lg:pl-8">
              <p className="font-display text-lg font-bold text-ink-900">{company.founder}</p>
              <p className="text-xs text-copper-700 font-semibold uppercase tracking-wider">Managing Director &amp; Founder</p>
              <p className="mt-3 text-xs text-silver-600 leading-relaxed">
                SSIB Infra Builders Pvt Ltd<br />
                Head Office: Mareena Centre, Container Road, Ernakulam
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
