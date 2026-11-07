import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  RotateCcw,
  CheckCircle2,
  ExternalLink,
  Navigation,
  Car,
  Plane,
  Train,
  Anchor,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  Building2,
  FileText,
  BadgeCheck,
} from 'lucide-react'
import PageHeader from '../components/ui/PageHeader'
import SectionHeading from '../components/ui/SectionHeading'
import Button from '../components/ui/Button'
import usePageTitle from '../components/ui/usePageTitle'
import { company, contact, projectTypes } from '../data/site'

const scaleOptions = [
  'Under ₹1 Crore',
  '₹1 Crore – ₹10 Crore',
  '₹10 Crore – ₹50 Crore',
  '₹50 Crore+ (NHAI / Govt Consortium)',
]

const faqs = [
  {
    q: 'What documentation is required to request a detailed engineering quote?',
    a: 'For civil, road, or earthwork tenders, providing the site location, approximate BOQ (Bill of Quantities), project drawings/levels, and target execution timeline allows our engineering team to provide an accurate estimate within 24 to 48 hours.',
  },
  {
    q: 'What is SSIB’s contractor classification and single-contract execution capacity?',
    a: 'SSIB Infra Builders holds an A-Class Government Licence from the Govt of Kerala PWD and Irrigation departments, with demonstrated capability executing single infrastructure contracts exceeding ₹100 Crore (such as the NH 66 Six-Laning earthworks).',
  },
  {
    q: 'How rapidly can heavy machinery and specialized crews be mobilized?',
    a: 'Because SSIB owns its entire fleet of 40+ hydraulic excavators, tippers, motor graders, sensor pavers, and road rollers, we can mobilize directly to active project sites across Kerala within 24 to 48 hours of contract award.',
  },
  {
    q: 'Does SSIB supply Bituminous Concrete (BC) and Bituminous Macadam (BM) directly?',
    a: 'Yes. Our computerised asphalt batch mix plant (100–120 TPH) and drum mix plants supply quality-controlled, lab-tested hot mix asphalt to our own projects as well as external contractor sites across the central Kerala corridor.',
  },
]

const emptyForm = {
  name: '',
  organization: '',
  email: '',
  phone: '',
  projectType: projectTypes[0],
  scale: scaleOptions[1],
  district: '',
  message: '',
}

export default function ContactPage() {
  usePageTitle(
    'Contact Us — SSIB Infra Builders Ernakulam, Kerala',
    'Get in touch with SSIB Infra Builders Private Limited, Mareena Centre, Container Road, Kothad, Ernakulam. Request project quotations for road tarring, bulk earthworks, and infrastructure engineering across Kerala.'
  )

  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleCategorySelect = (category) => {
    setForm((prev) => ({ ...prev, projectType: category }))
  }

  const validate = () => {
    const errs = {}
    if (form.name.trim().length < 2) errs.name = 'Please provide your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      errs.email = 'Please provide a valid email address.'
    }
    if (!form.phone.trim() || !/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim())) {
      errs.phone = 'Please provide a valid contact number.'
    }
    if (form.message.trim().length < 10) {
      errs.message = 'Please provide details about the scope of work (min 10 characters).'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    setSubmitted(form)
  }

  const handleReset = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(null)
  }

  // Pre-formatted mailto link
  const mailtoLink = submitted
    ? `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Tender Inquiry] ${submitted.projectType} — ${submitted.name}${
          submitted.organization ? ` (${submitted.organization})` : ''
        }`
      )}&body=${encodeURIComponent(
        `Client Name: ${submitted.name}\nOrganization: ${
          submitted.organization || 'Individual'
        }\nContact Phone: ${submitted.phone}\nEmail: ${
          submitted.email
        }\nProject Category: ${submitted.projectType}\nEstimated Scale: ${
          submitted.scale
        }\nSite Location / District: ${
          submitted.district || 'Kerala'
        }\n\nProject Scope & Specifications:\n${submitted.message}`
      )}`
    : ''

  // Pre-formatted WhatsApp link for direct mobile messaging
  const whatsappLink = `https://wa.me/919846902000?text=${encodeURIComponent(
    `Hello SSIB Infra Builders,\nI would like to discuss a project inquiry regarding ${form.projectType}.`
  )}`

  return (
    <div className="bg-white text-ink-900">
      {/* 1. CINEMATIC PAGE HEADER */}
      <PageHeader
        eyebrow="Corporate Headquarters & Tenders"
        title="Let’s talk about your next project."
        intro="Connect directly with our Ernakulam engineering headquarters to discuss your civil, highway, bulk earthworks, or building requirements."
        image="/images/township-road-bitumen-tarring.jpg"
      >
        <div className="border-t border-white/15 pt-3 sm:pt-6 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <div className="rounded-sm border border-white/15 bg-ink-950/80 p-2.5 sm:p-5 backdrop-blur-md transition-colors hover:border-copper-400/50">
            <p className="text-[0.62rem] sm:text-xs font-mono font-semibold tracking-wider text-copper-400 uppercase">Head Office</p>
            <p className="mt-1 font-display text-xs sm:text-base font-bold text-white leading-snug">
              Mareena Centre, Container Rd
            </p>
            <p className="mt-0.5 text-[0.68rem] sm:text-xs text-silver-300 font-light truncate sm:text-clip">
              Kothad P.O., Ernakulam – 682027
            </p>
          </div>

          <div className="rounded-sm border border-white/15 bg-ink-950/80 p-2.5 sm:p-5 backdrop-blur-md transition-colors hover:border-copper-400/50">
            <p className="text-[0.62rem] sm:text-xs font-mono font-semibold tracking-wider text-copper-400 uppercase">Founder &amp; MD Desk</p>
            <a
              href="tel:+919846902000"
              className="mt-1 block font-display text-xs sm:text-lg lg:text-xl font-bold tracking-tight text-white hover:text-copper-300 transition-colors"
            >
              +91 98469 02000
            </a>
            <p className="mt-0.5 text-[0.68rem] sm:text-xs text-silver-300 font-light">
              Mr. Shihas P. I · Direct Line
            </p>
          </div>

          <div className="rounded-sm border border-white/15 bg-ink-950/80 p-2.5 sm:p-5 backdrop-blur-md transition-colors hover:border-copper-400/50">
            <p className="text-[0.62rem] sm:text-xs font-mono font-semibold tracking-wider text-copper-400 uppercase">Official Tenders</p>
            <a
              href="mailto:shihaskyline2000@gmail.com"
              className="mt-1 block font-display text-xs sm:text-sm lg:text-[0.92rem] font-bold text-white truncate hover:text-copper-300 transition-colors"
            >
              shihaskyline2000@gmail.com
            </a>
            <p className="mt-0.5 text-[0.68rem] sm:text-xs text-silver-300 font-light">
              Direct Engineering Review
            </p>
          </div>

          <div className="rounded-sm border border-white/15 bg-ink-950/80 p-2.5 sm:p-5 backdrop-blur-md transition-colors hover:border-copper-400/50">
            <p className="text-[0.62rem] sm:text-xs font-mono font-semibold tracking-wider text-copper-400 uppercase">Office Hours</p>
            <p className="mt-1 font-display text-xs sm:text-base font-bold text-white leading-snug">
              Mon – Sat · 9 AM – 6:30 PM
            </p>
            <p className="mt-0.5 text-[0.68rem] sm:text-xs text-silver-300 font-light">
              Site Operations: 24/7 Active
            </p>
          </div>
        </div>
      </PageHeader>

      {/* 2. MAIN TENDERING & INQUIRY SUITE */}
      <section className="py-20 lg:py-28 relative">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            {/* Left Column: Comprehensive Engineering Quotation Form */}
            <div className="lg:col-span-7">
              <div className="border border-silver-200 bg-paper p-6 sm:p-10 shadow-sm">
                <div className="border-b border-silver-200 pb-6 mb-8">
                  <span className="text-xs font-mono font-semibold tracking-widest text-copper-700 uppercase flex items-center gap-2">
                    <FileText className="h-4 w-4 text-copper-600" />
                    Tender &amp; Project Evaluation
                  </span>
                  <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-ink-950">
                    Request an Engineering Proposal
                  </h2>
                  <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">
                    Submit site parameters, BOQ specifications, or equipment requirements. Our engineering directors will evaluate your critical path requirements.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-copper-100 text-copper-600 shadow-inner">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="font-display mt-6 text-2xl font-bold text-ink-950">
                        Proposal Request Structured
                      </h3>
                      <p className="mt-3 text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="font-semibold text-ink-900">{submitted.name}</strong>. Your inquiry for{' '}
                        <strong className="font-semibold text-copper-700">{submitted.projectType}</strong> ({submitted.scale}) has been formatted.
                      </p>

                      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        {mailtoLink && (
                          <Button href={mailtoLink} variant="copper" icon={Send}>
                            Send via Official Email
                          </Button>
                        )}
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 items-center gap-2 border border-emerald-600 bg-emerald-600 px-6 text-xs font-semibold tracking-wider text-white uppercase hover:bg-emerald-700 transition-colors shadow-sm"
                        >
                          <MessageSquare className="h-4 w-4" />
                          <span>Direct via WhatsApp</span>
                        </a>
                        <Button onClick={handleReset} variant="outline" icon={RotateCcw}>
                          Submit Another Inquiry
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Project Category Interactive Selector Pills */}
                      <div>
                        <label className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase mb-3">
                          Select Project Discipline / Service Required
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {projectTypes.map((cat) => {
                            const isSelected = form.projectType === cat
                            return (
                              <button
                                key={cat}
                                type="button"
                                onClick={() => handleCategorySelect(cat)}
                                className={`text-xs px-3 py-1.5 border transition-all duration-200 text-left ${
                                  isSelected
                                    ? 'border-copper-600 bg-copper-600 text-white font-medium shadow-sm'
                                    : 'border-silver-300 bg-white text-ink-700 hover:border-copper-400 hover:bg-copper-50/50'
                                }`}
                              >
                                {cat}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Name & Organization */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="e.g. Rahul Menon"
                            value={form.name}
                            onChange={handleChange}
                            className={`mt-2 block w-full border bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 ${
                              errors.name ? 'border-red-600' : 'border-silver-300'
                            }`}
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="organization" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Company / Organization <span className="font-normal text-silver-500">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            id="organization"
                            name="organization"
                            placeholder="e.g. Skyline Infrastructure Ltd"
                            value={form.organization}
                            onChange={handleChange}
                            className="mt-2 block w-full border border-silver-300 bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Corporate Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="name@company.com"
                            value={form.email}
                            onChange={handleChange}
                            className={`mt-2 block w-full border bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 ${
                              errors.email ? 'border-red-600' : 'border-silver-300'
                            }`}
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Phone / WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="+91 98460 00000"
                            value={form.phone}
                            onChange={handleChange}
                            className={`mt-2 block w-full border bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 ${
                              errors.phone ? 'border-red-600' : 'border-silver-300'
                            }`}
                          />
                          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                        </div>
                      </div>

                      {/* Scale & District */}
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="scale" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Estimated Project Budget / Scale
                          </label>
                          <select
                            id="scale"
                            name="scale"
                            value={form.scale}
                            onChange={handleChange}
                            className="mt-2 block w-full border border-silver-300 bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                          >
                            {scaleOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="district" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                            Site Location / District <span className="font-normal text-silver-500">(Optional)</span>
                          </label>
                          <input
                            type="text"
                            id="district"
                            name="district"
                            placeholder="e.g. Ernakulam / Kozhikode / NH 66"
                            value={form.district}
                            onChange={handleChange}
                            className="mt-2 block w-full border border-silver-300 bg-white px-3.5 py-2.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500"
                          />
                        </div>
                      </div>

                      {/* Scope & Details */}
                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold tracking-[0.12em] text-ink-700 uppercase">
                          Scope of Work / Tendering Specifications *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          placeholder="Please provide details regarding site area, BOQ quantities, target commencement date, or equipment required..."
                          value={form.message}
                          onChange={handleChange}
                          className={`mt-2 block w-full border bg-white p-3.5 text-sm text-ink-900 transition-colors outline-none focus:border-copper-500 focus:ring-1 focus:ring-copper-500 ${
                            errors.message ? 'border-red-600' : 'border-silver-300'
                          }`}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                        <Button type="submit" variant="copper" icon={Send} className="w-full sm:w-auto">
                          Submit Proposal Request
                        </Button>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-12 items-center justify-center gap-2 border border-emerald-600 bg-emerald-50 px-5 text-xs font-semibold tracking-wider text-emerald-800 uppercase hover:bg-emerald-600 hover:text-white transition-colors"
                        >
                          <MessageSquare className="h-4 w-4 text-emerald-600 group-hover:text-white" />
                          <span>Quick Chat on WhatsApp</span>
                        </a>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Executive Desk & Direct Credentials */}
            <div className="lg:col-span-5 space-y-6">
              {/* Executive Founder Desk Card */}
              <div className="border border-silver-300 bg-ink-950 text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 h-48 w-48 rounded-full bg-copper-600/20 blur-[60px] pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between pb-4 border-b border-white/15">
                    <span className="font-mono text-[0.68rem] font-bold tracking-widest text-copper-400 uppercase flex items-center gap-2">
                      <ShieldCheck className="h-4 w-4" />
                      Executive Leadership Desk
                    </span>
                    <span className="text-[0.65rem] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active Direct Line
                    </span>
                  </div>

                  <div className="mt-5">
                    <h3 className="font-display text-xl font-bold text-white">
                      Mr. Shihas P. I
                    </h3>
                    <p className="text-xs text-copper-300 font-light mt-0.5">
                      Founder &amp; Managing Director · SSIB Infra Builders
                    </p>
                    <p className="mt-3 text-xs text-silver-300 font-light leading-relaxed">
                      Overseeing central tendering, highway joint ventures, and heavy equipment logistics across all flagship sites in Kerala.
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 space-y-3 text-xs">
                    <a
                      href="tel:+919846902000"
                      className="flex items-center gap-3 text-white hover:text-copper-300 transition-colors p-2.5 bg-white/5 border border-white/10 hover:border-copper-500/50"
                    >
                      <Phone className="h-4 w-4 text-copper-400 shrink-0" />
                      <div className="flex-1">
                        <span className="text-[0.65rem] text-silver-400 block uppercase font-mono">Direct Mobile</span>
                        <span className="font-semibold text-sm">+91 98469 02000</span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-silver-500" />
                    </a>

                    <a
                      href="mailto:shihaskyline2000@gmail.com"
                      className="flex items-center gap-3 text-white hover:text-copper-300 transition-colors p-2.5 bg-white/5 border border-white/10 hover:border-copper-500/50"
                    >
                      <Mail className="h-4 w-4 text-copper-400 shrink-0" />
                      <div className="flex-1 truncate">
                        <span className="text-[0.65rem] text-silver-400 block uppercase font-mono">Tendering Email</span>
                        <span className="font-semibold text-xs truncate block">shihaskyline2000@gmail.com</span>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-silver-500" />
                    </a>
                  </div>
                </div>
              </div>

              {/* A-Class Contractor Credentials Card */}
              <div className="border border-silver-300 bg-paper p-6 sm:p-7">
                <span className="text-[0.68rem] font-mono font-bold tracking-widest text-copper-700 uppercase block pb-3 border-b border-silver-200">
                  Licence &amp; Registration Standards
                </span>

                <dl className="mt-4 space-y-3.5 text-xs text-ink-900">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-silver-500 font-medium">Contractor Grade</dt>
                    <dd className="font-bold text-copper-800 text-right">A-Class (Govt of Kerala PWD)</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-silver-500 font-medium">GSTIN Number</dt>
                    <dd className="font-mono font-semibold text-ink-900 text-right">{contact.gstin}</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-silver-500 font-medium">Corporate Office</dt>
                    <dd className="font-medium text-ink-900 text-right">Mareena Centre, Ernakulam</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-silver-500 font-medium">Plant Locations</dt>
                    <dd className="font-medium text-ink-900 text-right">Batch Mix (Central Kerala)</dd>
                  </div>
                </dl>
              </div>

              {/* Mobilization Guarantee Card */}
              <div className="border border-copper-400/40 bg-copper-50/60 p-5">
                <div className="flex items-center gap-2.5 text-copper-800 text-xs font-bold uppercase tracking-wider">
                  <BadgeCheck className="h-4 w-4 text-copper-700" />
                  <span>Rapid Mobilization Guarantee</span>
                </div>
                <p className="mt-2 text-xs text-copper-950 font-light leading-relaxed">
                  Owned machinery fleets and in-house engineering crews ensure site mobilization within 24–48 hours across Kerala for awarded contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED LOCATION & STRATEGIC TRANSIT HUB ("VISIT OUR HEADQUARTERS") */}
      <section className="bg-ink-950 text-white py-20 lg:py-28 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="grain absolute inset-0 opacity-15 pointer-events-none" />

        <div className="container-x relative">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end border-b border-white/10 pb-8">
            <SectionHeading
              tone="dark"
              eyebrow="Headquarters & Accessibility"
              title="Strategic Location on Container Road (NH 966A)"
              intro="Situated in Mareena Centre along Container Road, providing rapid, signal-free logistical reach across Kochi, National Highway 66, and Cochin Port corridors."
            />

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-copper-400/60 bg-copper-600 px-5 text-xs font-semibold tracking-wider text-white uppercase hover:bg-copper-500 transition-colors shadow-sm"
              >
                <Navigation className="h-4 w-4" />
                <span>Get Driving Directions</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 border border-white/20 bg-white/5 px-4 text-xs font-semibold tracking-wider text-white uppercase hover:bg-white/15 transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Map & Transport Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-12 items-stretch">
            {/* Left 7 cols: High-Res Vivid Interactive Google Map */}
            <div className="lg:col-span-7 flex flex-col border border-white/15 bg-ink-900 shadow-2xl overflow-hidden">
              {/* Map Title Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-white/10 bg-ink-950/90 backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-copper-400" />
                  <span className="font-mono text-xs font-bold tracking-wider text-white uppercase">
                    SSIB Infra Engineering HQ
                  </span>
                </div>
                <span className="text-[0.68rem] font-mono text-copper-300 bg-copper-900/40 border border-copper-500/30 px-2.5 py-0.5">
                  Pin: Kothad Bridge Corridor
                </span>
              </div>

              {/* Full Interactive Map Embed */}
              <div className="relative min-h-[380px] sm:min-h-[440px] w-full flex-1 bg-ink-950">
                <iframe
                  title="SSIB Infra Headquarters Location — Mareena Centre Container Road"
                  src="https://maps.google.com/maps?q=Mareena%20Centre,%20Container%20Road,%20Kothad,%20Ernakulam%20682027&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  tabIndex="0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Address Footer Bar */}
              <div className="px-6 py-4 border-t border-white/10 bg-ink-950/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-silver-300 font-light">
                <p>
                  <strong className="text-white font-medium">Full Postal Address:</strong> 2nd Floor, Door N06/160N, Mareena Centre, Container Road, Kothad P.O., Ernakulam – 682027, Kerala
                </p>
              </div>
            </div>

            {/* Right 5 cols: Strategic Transit Route Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              {/* Card 1: Highway Access */}
              <div className="border border-white/10 bg-white/[0.03] p-5 hover:border-copper-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-950/60 text-copper-400">
                    <Car className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Container Road (NH 966A) Arterial
                    </h4>
                    <p className="text-[0.72rem] text-silver-400">Direct 4-Lane Highway Access</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-300 font-light leading-relaxed">
                  Located right on Container Road connecting Kalamassery, Edappally junction, and Vallarpadam without city traffic congestion.
                </p>
              </div>

              {/* Card 2: Airport Proximity */}
              <div className="border border-white/10 bg-white/[0.03] p-5 hover:border-copper-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-950/60 text-copper-400">
                    <Plane className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Cochin International Airport (COK)
                    </h4>
                    <p className="text-[0.72rem] text-silver-400">~28 km · 35–40 Minutes Drive</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-300 font-light leading-relaxed">
                  Seamless transit via NH 544 and Container Road for visiting engineering delegates, client executives, and interstate consultants.
                </p>
              </div>

              {/* Card 3: Railway Station Transit */}
              <div className="border border-white/10 bg-white/[0.03] p-5 hover:border-copper-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-950/60 text-copper-400">
                    <Train className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Ernakulam Railway Terminals
                    </h4>
                    <p className="text-[0.72rem] text-silver-400">~11 km · 20 Minutes Drive</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-300 font-light leading-relaxed">
                  Fast access from Ernakulam Town (North) and Ernakulam Junction (South) central railway hubs.
                </p>
              </div>

              {/* Card 4: Maritime & Port Corridor */}
              <div className="border border-white/10 bg-white/[0.03] p-5 hover:border-copper-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-copper-500/40 bg-copper-950/60 text-copper-400">
                    <Anchor className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">
                      Cochin Port &amp; ICTT Vallarpadam
                    </h4>
                    <p className="text-[0.72rem] text-silver-400">Adjacent Maritime Logistics Corridor</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-silver-300 font-light leading-relaxed">
                  Direct proximity to Cochin Port, naval facilities, and industrial marine infrastructure projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TENDERING & CLIENT INQUIRIES FAQ */}
      <section className="py-20 lg:py-24 bg-paper border-t border-silver-200">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            <div className="text-center pb-12 border-b border-silver-200">
              <span className="text-xs font-mono font-semibold tracking-widest text-copper-700 uppercase flex items-center justify-center gap-2">
                <HelpCircle className="h-4 w-4 text-copper-600" />
                Tendering Protocols &amp; FAQs
              </span>
              <h2 className="font-display mt-2 text-2xl sm:text-3xl font-bold text-ink-950">
                Frequently Asked Tendering Questions
              </h2>
              <p className="mt-2 text-sm text-ink-600 max-w-lg mx-auto">
                Essential guidance for project directors, infrastructure consortiums, and civil engineering developers.
              </p>
            </div>

            <div className="mt-8 divide-y divide-silver-200 border-b border-silver-200">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 text-left font-display text-base sm:text-lg font-bold text-ink-950 hover:text-copper-700 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-copper-600 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 text-sm text-ink-600 font-light leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>

            {/* Direct Assistance CTA */}
            <div className="mt-10 p-6 border border-silver-300 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-display text-base font-bold text-ink-950">Need urgent site inspection or tender review?</p>
                <p className="text-xs text-ink-600 mt-0.5">Call our engineering management desk directly for immediate assistance.</p>
              </div>
              <a
                href="tel:+919846902000"
                className="inline-flex min-h-11 items-center gap-2 border border-copper-600 bg-copper-600 px-5 text-xs font-semibold tracking-wider text-white uppercase hover:bg-copper-700 transition-colors shrink-0"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call +91 98469 02000</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
