import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, ReceiptText, RotateCcw, Send, Building2, ExternalLink } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { contact, projectTypes } from '../data/site'

const empty = { name: '', email: '', phone: '', projectType: projectTypes[0], message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (!v.projectType) e.projectType = 'Please select a project category.'
  if (v.message.trim().length < 10) e.message = 'Please provide details about your project (at least 10 characters).'
  return e
}

function Field({ id, label, error, optional, textarea, children, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-xs font-semibold tracking-[0.14em] text-ink-700 uppercase">
        {label}
        {optional && <span className="font-normal tracking-normal text-silver-500 normal-case">Optional</span>}
      </label>
      {children ? (
        children
      ) : (
        <Tag
          id={id}
          name={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`mt-2 block w-full border-b bg-transparent py-3 text-base text-ink-900 transition-colors duration-300 outline-none placeholder:text-silver-400 focus:border-copper-500 focus-visible:outline-none ${
            error ? 'border-red-600' : 'border-silver-300'
          } ${textarea ? 'min-h-32 resize-y' : ''}`}
          {...props}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }
    setSubmitted(values)
  }

  const reset = () => {
    setValues(empty)
    setErrors({})
    setSubmitted(null)
  }

  const mailto = submitted
    ? `mailto:${contact.email}?subject=${encodeURIComponent(
        `[Project Quote] ${submitted.projectType} — ${submitted.name}`
      )}&body=${encodeURIComponent(
        `Project Type: ${submitted.projectType}\nClient Name: ${submitted.name}\nEmail: ${submitted.email}\nPhone: ${submitted.phone || 'N/A'}\n\nProject Details:\n${submitted.message}`
      )}`
    : undefined

  const details = [
    {
      icon: MapPin,
      label: 'Head Office',
      content: contact.addressLines.join(' '),
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`,
      external: true,
    },
    { icon: Phone, label: 'Direct Phone', content: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: 'Official Email', content: contact.email, href: `mailto:${contact.email}` },
    { icon: ReceiptText, label: 'GSTIN Number', content: contact.gstin },
    { icon: Clock, label: 'Office Hours', content: 'Mon – Sat, 9:00 am – 6:30 pm' },
  ]

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="container-x">
        {/* Section Header */}
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact SSIB"
              title="LET'S BUILD SOMETHING GREAT."
              intro="Connect directly with our Ernakulam engineering headquarters to discuss your civil, highway, earthworks, or building requirements."
            />

            {/* Direct Details List */}
            <dl className="mt-12 divide-y divide-silver-200 border-t border-b border-silver-200">
              {details.map(({ icon: Icon, label, content, href, external }) => (
                <div key={label} className="py-4 flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-silver-200 bg-paper text-copper-700">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <dt className="text-[0.68rem] font-bold tracking-widest text-silver-500 uppercase">{label}</dt>
                    <dd className="mt-1 text-sm font-medium text-ink-900 leading-snug">
                      {href ? (
                        <a
                          href={href}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="hover:text-copper-700 transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>{content}</span>
                          {external && <ExternalLink className="h-3.5 w-3.5 text-silver-400" />}
                        </a>
                      ) : (
                        content
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* Google Maps Office Location */}
            <div className="mt-8 border border-silver-300 bg-paper p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-silver-200">
                <span className="text-xs font-bold tracking-wider text-ink-900 uppercase flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-copper-600" />
                  Office Location Map
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-copper-700 hover:text-copper-800 transition-colors inline-flex items-center gap-1"
                  >
                    Directions <ExternalLink className="h-3 w-3" />
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-silver-600 hover:text-ink-900 transition-colors inline-flex items-center gap-1"
                  >
                    Google Maps <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <div className="mt-4 relative aspect-[16/10] w-full overflow-hidden bg-silver-200 border border-silver-300 shadow-inner">
                <iframe
                  title="SSIB Infra Office Location Map"
                  src="https://maps.google.com/maps?q=Mareena%20Centre,%20Container%20Road,%20Kothad,%20Ernakulam%20682027&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  tabIndex="-1"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-silver-600 leading-relaxed font-medium">
                Mareena Centre, Container Road, Kothad P.O., Ernakulam – 682027, Kerala
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="border border-silver-200 bg-paper p-8 sm:p-12 shadow-sm">
              <div className="border-b border-silver-200 pb-6 mb-8">
                <span className="text-xs font-mono font-semibold tracking-widest text-copper-700 uppercase">
                  Tender &amp; Project Inquiries
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold text-ink-950">
                  Request a Comprehensive Quote
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  Submit your site specifications and requirements for rapid engineering evaluation.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-8 text-center"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-copper-100 text-copper-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h4 className="font-display mt-6 text-2xl font-bold text-ink-950">
                      Enquiry Prepared Successfully
                    </h4>
                    <p className="mt-3 text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-ink-900">{submitted.name}</strong>. Your enquiry for{' '}
                      <strong className="font-semibold text-ink-900">{submitted.projectType}</strong> has been structured.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                      {mailto && (
                        <Button href={mailto} variant="copper" icon={Send}>
                          Send via Email Client
                        </Button>
                      )}
                      <Button onClick={reset} variant="outline" icon={RotateCcw}>
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={onSubmit} noValidate className="space-y-6">
                    {/* Name */}
                    <Field
                      id="name"
                      label="Your Name / Organization"
                      placeholder="e.g. Rahul Menon / Skyline Developments"
                      value={values.name}
                      onChange={onChange}
                      error={errors.name}
                      required
                    />

                    {/* Email and Phone in 2 cols */}
                    <div className="grid gap-6 sm:grid-cols-2">
                      <Field
                        id="email"
                        type="email"
                        label="Email Address"
                        placeholder="e.g. name@company.com"
                        value={values.email}
                        onChange={onChange}
                        error={errors.email}
                        required
                      />
                      <Field
                        id="phone"
                        type="tel"
                        label="Phone Number"
                        placeholder="+91 98460 00000"
                        value={values.phone}
                        onChange={onChange}
                        error={errors.phone}
                        optional
                      />
                    </div>

                    {/* Project Type Selector */}
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold tracking-[0.14em] text-ink-700 uppercase">
                        Project Type / Discipline
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={values.projectType}
                        onChange={onChange}
                        className="mt-2 block w-full border-b border-silver-300 bg-transparent py-3 text-base text-ink-900 transition-colors duration-300 outline-none focus:border-copper-500 focus-visible:outline-none cursor-pointer"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-white text-ink-900 py-2">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-2 text-xs font-medium text-red-600">{errors.projectType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <Field
                      id="message"
                      label="Project Description &amp; Scope"
                      textarea
                      placeholder="Outline site location, approximate volume/area, scope of road/earth/rock work, timeline, and any specific structural requirements..."
                      value={values.message}
                      onChange={onChange}
                      error={errors.message}
                      required
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="copper"
                        icon={Send}
                        className="w-full sm:w-auto px-10 py-4 text-base font-semibold tracking-wider uppercase shadow-lg"
                      >
                        Submit Project Request
                      </Button>
                      <p className="mt-3 text-xs text-silver-500">
                        Our engineering desk typically responds within 24 hours of tender appraisal.
                      </p>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
