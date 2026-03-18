import { motion } from 'framer-motion'

const VISION = 'To become a leading digital marketing partner for ambitious brands. Delivering innovative campaigns that blend creativity, technology, and strategy to drive long-term growth.'

export default function Vision() {
  return (
    <section id="vision" style={{ padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container-main">
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.03)',
              padding: '6px 16px', borderRadius: 50,
              fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 500,
              fontSize: 11, letterSpacing: '2.5px',
              color: 'rgba(255,255,255,0.4)', marginBottom: 48,
              textTransform: 'uppercase',
            }}
          >
            Our Vision
          </motion.div>

          {/* Large quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="gradient-text"
            style={{
              fontFamily: '"Clash Display", sans-serif', fontWeight: 600,
              fontSize: 'clamp(80px, 12vw, 140px)',
              lineHeight: 0.7, display: 'block',
              marginBottom: 24, opacity: 0.25,
              userSelect: 'none',
            }}
          >
            "
          </motion.div>

          {/* Vision text */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              fontFamily: '"Clash Display", sans-serif', fontWeight: 500,
              fontSize: 'clamp(20px, 2.8vw, 36px)',
              lineHeight: 1.55, color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            {VISION}
          </motion.p>

          {/* Attribution */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{
              fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 400,
              fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 36,
            }}
          >
            — Our Vision,{' '}
            <span className="gradient-text" style={{ fontWeight: 500 }}>999Tatva Media</span>
          </motion.p>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ width: 80, height: 1, background: 'var(--brand-gradient)', margin: '28px auto 0', transformOrigin: 'center' }}
          />

        </div>
      </div>
    </section>
  )
}
