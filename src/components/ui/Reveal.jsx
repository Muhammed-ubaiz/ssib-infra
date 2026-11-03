import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export default function Reveal({ as = 'div', delay = 0, y = 28, className, children, ...rest }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function RevealImage({ src, alt, className = '', imgClassName = '', delay = 0, loading = 'lazy' }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: 'inset(12% 0% 0% 0%)', opacity: 0.4 }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.2, ease, delay }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`img-premium h-full w-full object-cover ${imgClassName}`}
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease, delay }}
      />
    </motion.div>
  )
}
