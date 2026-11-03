import { useState } from 'react'
import { motion } from 'framer-motion'
import { Compass, FileSpreadsheet, PencilRuler, HardHat, ClipboardCheck, KeyRound } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { processSteps } from '../data/site'

const stepIcons = [Compass, FileSpreadsheet, PencilRuler, HardHat, ClipboardCheck, KeyRound]

const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="process" className="relative bg-white py-28 sm:py-36 overflow-hidden border-t border-silver-200">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#16181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container-x relative">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Project Process"
            title="Disciplined Execution. Seamless Handover."
            intro="A structured six-phase engineering framework designed to deliver high-capacity infrastructure with uncompromising safety, quality and schedule adherence."
          />
          <Reveal delay={0.2} className="hidden lg:block text-right">
            <span className="font-mono text-xs tracking-widest text-copper-700 uppercase">Six Phases</span>
            <p className="font-display text-6xl font-bold text-silver-300">06</p>
          </Reveal>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative mt-20">
          {/* Animated Connecting Horizontal Bar for Desktop */}
          <motion.div
            aria-hidden="true"
            className="absolute top-7 left-0 right-0 hidden h-[2px] bg-silver-200 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1.4, ease }}
          >
            <motion.div
              className="h-full bg-copper-500 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease, delay: 0.2 }}
            />
          </motion.div>

          {/* Steps Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length]
              const isSelected = activeStep === index

              return (
                <motion.div
                  key={item.step}
                  className={`group relative flex flex-col justify-between border bg-paper p-5 sm:p-6 transition-all duration-500 ease-premium cursor-pointer ${
                    isSelected
                      ? 'border-copper-500 shadow-[0_15px_30px_-10px_rgba(200,113,79,0.2)] bg-white -translate-y-1'
                      : 'border-silver-200 hover:border-silver-400 hover:bg-white'
                  }`}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease, delay: index * 0.08 }}
                >
                  {/* Top node indicator */}
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Step Badge with Icon */}
                      <div
                        className={`relative z-10 flex h-11 w-11 items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? 'bg-copper-600 text-white shadow-[0_0_15px_rgba(200,113,79,0.5)]'
                            : 'bg-white border border-silver-300 text-ink-700 group-hover:border-copper-400 group-hover:text-copper-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>

                      <span
                        className={`font-mono text-xs font-bold tracking-wider transition-colors ${
                          isSelected ? 'text-copper-600' : 'text-silver-400 group-hover:text-ink-900'
                        }`}
                      >
                        {item.step}
                      </span>
                    </div>

                    {/* Step Title */}
                    <div className="mt-6">
                      <span className="text-[0.62rem] font-mono tracking-widest text-copper-700 uppercase">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display mt-1 text-lg font-bold tracking-tight text-ink-900 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs text-ink-500 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Metric Tag */}
                  <div className="mt-5 pt-3 border-t border-silver-200/80 flex items-center justify-between text-[0.68rem]">
                    <span className="font-mono text-silver-500 font-medium">Stage</span>
                    <span className="font-semibold text-copper-800 tracking-wide uppercase">
                      {item.metrics}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Active Phase Breakdown Bar */}
        <div className="mt-12 bg-ink-950 p-6 sm:p-8 text-white border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-copper-400/50 bg-copper-600/30 text-copper-300">
              <span className="font-mono text-sm font-bold">{processSteps[activeStep].step}</span>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold tracking-wider text-copper-400 uppercase">Selected Phase</p>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white mt-0.5">
                {processSteps[activeStep].title} — <span className="font-light text-silver-300 text-sm">{processSteps[activeStep].subtitle}</span>
              </h4>
            </div>
          </div>
          <span className="text-xs font-mono text-silver-400">Click any stage to inspect the engineering methodology</span>
        </div>
      </div>
    </section>
  )
}
