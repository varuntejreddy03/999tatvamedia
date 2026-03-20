import { motion } from 'framer-motion'
import { Target, BookOpen, BarChart3, BarChart2 } from 'lucide-react'

const CD = '"Clash Display", sans-serif'
const CG = '"Cabinet Grotesk", sans-serif'

const PILLARS = [
  { Icon: Target,    color: '#FF3CAC', title: 'Strategic Thinking',               body: "Marketing is not just visibility. It's crafting meaningful brand experiences that build lasting loyalty." },
  { Icon: BookOpen,  color: '#FF3CAC', title: 'Compelling Storytelling',           body: 'Every campaign tells a brand story that resonates deeply with your audience, turning viewers into advocates.' },
  { Icon: BarChart3, color: '#FF3CAC', title: 'Performance-Driven',                body: 'Data-backed campaigns that deliver real, measurable ROI. Creativity without results is just art.' },
  { Icon: BarChart2, color: '#2B86C5', title: 'Market Insight & Audience Targeting', body: 'We dig deep into market trends and audience behavior to ensure every campaign reaches the right people at the right time with the right message.' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }

export default function Approach() {
  return (
    <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }} className="noise-bg">
      <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} style={{ maxWidth: 600, marginBottom: 64 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>How We Work</p>
          <h2 style={{ fontFamily: CD, fontWeight: 600, fontSize: 'clamp(40px, 5vw, 64px)', color: '#fff' }}>
            Our <span className="gradient-text">Approach</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}
          className="approach-grid"
        >
          {PILLARS.map(({ Icon, color, title, body }) => (
            <motion.div key={title} variants={fadeUp} className="pillar-card">
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                <Icon size={24} style={{ color }} />
              </div>
              <div style={{ width: 40, height: 2, background: 'var(--brand-gradient)', marginBottom: 20 }} />
              <h3 style={{ fontFamily: CD, fontWeight: 600, fontSize: 22, color: '#fff', marginBottom: 12 }}>{title}</h3>
              <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{body}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
