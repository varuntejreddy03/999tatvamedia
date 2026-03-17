import { motion } from 'framer-motion'
import { Target, Share2, TrendingUp, Film, Package, Users, Palette, ArrowUpRight } from 'lucide-react'

const CD = '"Clash Display", sans-serif'
const CG = '"Cabinet Grotesk", sans-serif'

const SERVICES = [
  { icon: Target,    name: 'Brand Strategy',                      desc: 'Positioning, identity, and messaging that makes your brand unforgettable in a crowded market.', span: 2 },
  { icon: Share2,    name: 'Social Media Marketing',              desc: 'Platform-native content that builds community and drives real engagement.',                       span: 1 },
  { icon: TrendingUp,name: 'Performance Marketing',               desc: 'Data-driven paid campaigns that maximize ROI across every channel.',                             span: 1 },
  { icon: Film,      name: 'Content Creation',                    desc: 'Reels, videos, and ad creatives that stop the scroll and convert viewers.',                      span: 1 },
  { icon: Package,   name: 'Packaging Design',                    desc: 'Shelf-ready packaging that communicates brand value at a glance.',                               span: 1 },
  { icon: Users,     name: 'Influencer & Digital Campaigns',      desc: 'Authentic influencer partnerships that amplify reach and build trust.',                          span: 1 },
  { icon: Palette,   name: 'Creative Design & Media Production',  desc: 'End-to-end creative production — from concept to final delivery.',                              span: 2 },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0' }}>
      <div className="container-main">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 56 }}
        >
          <p className="eyebrow" style={{ marginBottom: 16 }}>What We Offer</p>
          <h2 style={{ fontFamily: CD, fontWeight: 600, fontSize: 'clamp(40px, 5vw, 64px)', color: '#fff' }}>
            What We <span className="gradient-text">Do</span>
          </h2>
          <div style={{ width: 60, height: 1, background: 'var(--brand-gradient)', marginTop: 24 }} />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1,
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 4,
            overflow: 'hidden',
          }}
          className="services-grid"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.name}
                variants={item}
                className="service-card"
                style={{ gridColumn: `span ${s.span}` }}
              >
                {/* Corner arrow */}
                <div style={{ position: 'absolute', top: 20, right: 20, color: 'rgba(255,255,255,0.2)', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff'; (e.currentTarget as HTMLElement).style.transform = 'translate(3px,-3px)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLElement).style.transform = 'translate(0,0)' }}
                >
                  <ArrowUpRight size={18} />
                </div>

                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={22} style={{ color: '#FF3CAC' }} />
                </div>

                <h3 style={{ fontFamily: CD, fontWeight: 600, fontSize: 20, color: '#fff', marginBottom: 10 }}>
                  {s.name}
                </h3>
                <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: 340 }}>
                  {s.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
