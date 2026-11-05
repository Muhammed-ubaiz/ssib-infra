import { Phone } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { contact } from '../data/site'

export default function ContactBand({ title = 'Planning a road, site or building project?' }) {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-white/5 blur-[120px]" />
      <div className="container-x relative flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-silver-300">Get in touch</p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-5xl">{title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" variant="copper" className="bg-white text-ink-950 hover:bg-silver-200 border-white shadow-lg">
            Contact Us
          </Button>
          <Button href={contact.phoneHref} variant="ghostLight" icon={Phone}>
            {contact.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
