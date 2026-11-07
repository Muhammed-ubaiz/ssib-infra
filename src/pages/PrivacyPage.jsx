import { Link } from 'react-router'
import { ShieldCheck, Lock, Mail, Phone } from 'lucide-react'
import usePageTitle from '../components/ui/usePageTitle'
import { company, contact } from '../data/site'

export default function PrivacyPage() {
  usePageTitle('Privacy Policy | SSIB Infra Builders')

  return (
    <div className="bg-paper min-h-screen pt-28 pb-20">
      <div className="container-x max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono tracking-wider text-silver-500 uppercase">
          <Link to="/" className="hover:text-copper-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-copper-700">Privacy Policy</span>
        </nav>

        <div className="mt-8 border-b border-silver-200 pb-8">
          <span className="eyebrow text-copper-700">Legal &amp; Data Transparency</span>
          <h1 className="font-display mt-3 text-3xl sm:text-5xl font-extrabold text-ink-950 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-silver-500 font-mono">
            Last Updated: November 2026 · SSIB Infra Builders Private Limited
          </p>
        </div>

        <div className="mt-10 space-y-8 text-base leading-relaxed text-ink-700 font-light">
          <section>
            <h2 className="font-display text-xl font-bold text-ink-950">1. Overview</h2>
            <p className="mt-2">
              SSIB Infra Builders Private Limited (&ldquo;SSIB&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to respecting and protecting the privacy of our website visitors, project clients, and commercial partners. This Privacy Policy outlines how we handle personal and project information collected through our website (<a href="https://ssib-cb668.web.app" className="text-copper-600 hover:underline">ssib-cb668.web.app</a>).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink-950">2. Information We Collect</h2>
            <p className="mt-2">
              When you submit an enquiry, request a project quote, or contact us directly via telephone or WhatsApp, we may collect:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-ink-800">
              <li>Full Name and Company or Organization Name</li>
              <li>Phone number and email address</li>
              <li>Project location, work discipline (e.g. Road Tarring, Bulk Earthworks, Paving), and project specifications</li>
              <li>Any engineering drawings, BOQs, or project briefs uploaded or shared</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink-950">3. How We Use Your Information</h2>
            <p className="mt-2">
              The information you provide is used solely to:
            </p>
            <ul className="mt-2 list-disc pl-6 space-y-1 text-ink-800">
              <li>Review site requirements and calculate accurate cost estimates and quotations</li>
              <li>Coordinate engineering site visits and direct founder consultation</li>
              <li>Fulfill statutory contract requirements and compliance for A-Class government works</li>
              <li>Communicate project milestones and commercial updates</li>
            </ul>
            <p className="mt-3">
              We never sell, rent, or trade your contact or project details to any third-party marketing brokers.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink-950">4. Data Security</h2>
            <p className="mt-2">
              All communications sent through this website are transmitted over secure HTTPS (SSL/TLS encrypted connections). Access to client estimates and tender data is restricted strictly to authorized engineering management.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink-950">5. Contact Regarding Privacy</h2>
            <div className="mt-4 border border-silver-200 bg-white p-6 rounded-md shadow-xs">
              <p className="font-semibold text-ink-900">SSIB Infra Builders Private Limited</p>
              <p className="text-sm text-ink-600 mt-1">{contact.address}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
                <a href={contact.phoneHref} className="inline-flex items-center gap-1.5 text-copper-700 hover:underline">
                  <Phone className="h-3.5 w-3.5" />
                  <span>{contact.phone}</span>
                </a>
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 text-copper-700 hover:underline">
                  <Mail className="h-3.5 w-3.5" />
                  <span>{contact.email}</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
