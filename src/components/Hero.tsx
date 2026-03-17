import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'

const WORDS = ['Convert.', 'Inspire.', 'Dominate.']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 90,
        paddingBottom: 40,
      }}
    >
      <div style={{ width: '100%' }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                padding: '6px 16px', borderRadius: 50,
                fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 500,
                fontSize: 11, letterSpacing: '2.5px',
                color: 'rgba(255,255,255,0.5)', marginBottom: 48,
                textTransform: 'uppercase',
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                style={{ width: 5, height: 5, borderRadius: '50%', background: '#FF3CAC', flexShrink: 0 }}
              />
              Hyderabad, India
            </motion.div>

            {/* Headline */}
            <div style={{ overflow: 'hidden' }}>
              {['We Build', 'Brands'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.18 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: '"Clash Display", sans-serif', fontWeight: 600,
                    fontSize: 'clamp(48px, 9vw, 108px)',
                    lineHeight: 0.95, color: '#fff',
                    letterSpacing: '-0.03em', display: 'block',
                  }}
                >
                  {line}
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: '"Clash Display", sans-serif', fontWeight: 600,
                  fontSize: 'clamp(48px, 9vw, 108px)',
                  lineHeight: 0.95, letterSpacing: '-0.03em',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '0.2em', flexWrap: 'wrap',
                }}
              >
                <span style={{ color: '#fff' }}>That</span>
                <span style={{ display: 'inline-block', minWidth: '5ch' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={wordIdx}
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                      className="gradient-text"
                      style={{ display: 'inline-block' }}
                    >
                      {WORDS[wordIdx]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: '"Cabinet Grotesk", sans-serif', fontWeight: 400,
                fontSize: 'clamp(15px, 2vw, 18px)',
                color: 'rgba(255,255,255,0.45)',
                maxWidth: 440, lineHeight: 1.7, marginTop: 32,
              }}
            >
              Full-service digital marketing &amp; creative production agency — Hyderabad, India
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.76, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', gap: 12, marginTop: 40, flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
              >
                View Our Work <ArrowRight size={16} />
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Talk to Us
              </motion.button>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.95 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 24, marginTop: 56,
                paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.07)',
                width: '100%', maxWidth: 480,
              }}
            >
              {[['7+', 'Services'], ['100%', 'Focus'], ['3', 'Founders'], ['∞', 'Ideas']].map(([num, label]) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div className="gradient-text" style={{ fontFamily: '"Clash Display", sans-serif', fontWeight: 600, fontSize: 'clamp(20px, 4vw, 28px)', lineHeight: 1 }}>{num}</div>
                  <div style={{ fontFamily: '"Cabinet Grotesk", sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.32)', marginTop: 4, letterSpacing: '0.8px', textTransform: 'uppercase' }}>{label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}
      >
        <span style={{ fontFamily: '"Cabinet Grotesk", sans-serif', fontSize: 9, letterSpacing: '3px', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} style={{ color: 'rgba(255,255,255,0.18)' }}>
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>

    </section>
  )
}
