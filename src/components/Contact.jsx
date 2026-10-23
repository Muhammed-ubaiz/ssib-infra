import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Info, Mail, MapPin, MessageCircle, Phone, ReceiptText, RotateCcw, Send } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { contact } from '../data/site'

const empty = { name: '', email: '', phone: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Please enter a valid email address.'
  if (v.phone.trim() && !/^[+\d][\d\s()-]{6,}$/.test(v.phone.trim())) e.phone = 'Please enter a valid phone number.'
  if (v.message.trim().length < 10) e.message = 'Please tell us a little more (at least 10 characters).'
  return e
}

function Field({ id, label, error, optional, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-xs font-semibold tracking-[0.14em] text-ink-600 uppercase">
        {label}
        {optional && <span className="font-normal tracking-normal text-silver-500 normal-case">Optional</span>}
      </label>
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
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-700">
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
    ? `mailto:${contact.email}?subject=${encodeURIComponent(`Website enquiry from ${submitted.name}`)}&body=${encodeURIComponent(
        `${submitted.message}\n\n— ${submitted.name}\nEmail: ${submitted.email}${submitted.phone ? `\nPhone: ${submitted.phone}` : ''}`,
      )}`
    : undefined

  const details = [
    { icon: MapPin, label: 'Office', content: contact.addressLines.join(' '), href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`, external: true },
    { icon: Phone, label: 'Phone', content: contact.phone, href: contact.phoneHref },
    contact.whatsapp && { icon: MessageCircle, label: 'WhatsApp', content: 'Chat with us on WhatsApp', href: `https://wa.me/${contact.whatsapp}`, external: true },
    { icon: Mail, label: 'Email', content: contact.email, href: `mailto:${contact.email}` },
    contact.hours && { icon: Clock, label: 'Business hours', content: contact.hours },
    { icon: ReceiptText, label: 'GSTIN', content: contact.gstin },
  ].filter(Boolean)

  return (
    <section id="contact" className="relative bg-white py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact Us"
            title="Office & enquiries"
            intro="Call or email our Ernakulam office directly, or use the form to prepare an enquiry."
          />
          <dl className="mt-10 border-t border-silver-200">
            {details.map(({ icon: Icon, label, content, href, external }, i) => (
              <Reveal key={label} delay={i * 0.06} className="flex gap-5 border-b border-silver-200 py-5">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-copper-600" strokeWidth={1.6} aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-silver-500 uppercase">{label}</dt>
                  <dd className="mt-1 break-words text-ink-800">
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="underline-offset-4 transition-colors hover:text-copper-700 hover:underline"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
          {contact.social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-3">
              {contact.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center border border-silver-300 px-4 text-sm text-ink-700 hover:border-ink-900">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <Reveal delay={0.2} className="mt-8 aspect-[16/10] overflow-hidden bg-silver-100">
            <iframe
              title="Map showing the SSIB Infra Builders office in Kothad, Ernakulam"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&z=15&output=embed`}
              className="h-full w-full border-0 grayscale-[0.6]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative border border-silver-200 bg-paper p-6 sm:p-10 lg:p-12">
            <span className="absolute top-0 left-0 h-[3px] w-24 bg-copper-500" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              {!submitted ? (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  aria-labelledby="enquiry-title"
                >
                  <h3 id="enquiry-title" className="font-display text-2xl font-semibold text-ink-900">
                    Send an enquiry
                  </h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-ink-500">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-copper-600" aria-hidden="true" />
                    Demo form: details are checked in your browser and prepared as an email — nothing is sent to a server.
                  </p>
                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <Field id="name" label="Name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
                    <Field id="email" label="Email" type="email" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
                    <div className="sm:col-span-2">
                      <Field id="phone" label="Phone" type="tel" autoComplete="tel" optional value={values.phone} onChange={onChange} error={errors.phone} />
                    </div>
                    <div className="sm:col-span-2">
                      <Field id="message" label="Message" textarea rows={4} value={values.message} onChange={onChange} error={errors.message} placeholder="Tell us about the project, location and scope…" />
                    </div>
                  </div>
                  <Button type="submit" variant="copper" icon={Send} className="mt-10 w-full sm:w-auto">
                    Prepare enquiry
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  role="status"
                >
                  <CheckCircle2 className="h-10 w-10 text-copper-600" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="font-display mt-6 text-2xl font-semibold text-ink-900 sm:text-3xl">
                    Thank you, {submitted.name.trim().split(' ')[0]}. Your enquiry is ready.
                  </h3>
                  <p className="mt-4 max-w-lg leading-relaxed text-ink-500">
                    This website is a frontend demo and <strong className="font-semibold text-ink-800">has not sent your message</strong>. To
                    reach SSIB Infra, send it from your email app or call the office directly.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button href={mailto} variant="copper" icon={Mail}>
                      Send via email
                    </Button>
                    <Button href={contact.phoneHref} variant="outline" icon={Phone}>
                      Call {contact.phone}
                    </Button>
                  </div>
                  <button type="button" onClick={reset} className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-900">
                    <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start a new enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
