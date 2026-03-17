import { motion } from 'framer-motion'

const ITEMS =
  'MARKETING · BRANDING · CONTENT CREATION · REELS · ADS · STRATEGY · PACKAGING DESIGN · INFLUENCER CAMPAIGNS · PERFORMANCE MARKETING · '

const CONTENT = ITEMS.repeat(4)

const tickerStyle = {
  fontFamily: '"Clash Display", sans-serif',
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: '3px',
  paddingRight: 40,
}

export default function MarqueeTicker() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#080808',
        overflow: 'hidden',
        padding: '20px 0',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'var(--brand-gradient)', opacity: 0.35,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
        background: 'var(--brand-gradient)', opacity: 0.35,
      }} />

      <div className="marquee-inner">
        <span className="gradient-text" style={tickerStyle}>{CONTENT}</span>
        <span className="gradient-text" style={tickerStyle}>{CONTENT}</span>
      </div>
    </motion.div>
  )
}
