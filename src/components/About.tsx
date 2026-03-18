import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const CD = '"Clash Display", sans-serif'
const CG = '"Cabinet Grotesk", sans-serif'

function StatCard({ value, label, suffix = '' }: { value: number | string; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [animated, setAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true)
        if (typeof value === 'number') {
          const duration = 1800
          const start = performance.now()
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - p, 4)
            setCount(Math.round(eased * (value as number)))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [animated, value])

  return (
    <div ref={ref} className="stat-card">
      <div className="gradient-text" style={{ fontFamily: CD, fontWeight: 600, fontSize: 48, lineHeight: 1 }}>
        {typeof value === 'string' ? value : count}{suffix}
      </div>
      <div style={{ fontFamily: CG, fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 10, letterSpacing: '0.5px' }}>
        {label}
      </div>
    </div>
  )
}

const FOUNDERS = [
  { initials: 'SK', name: 'J. Sai Kiran',       title: 'Founder',       photo: '/Sai kiran.png',       position: 'center top' },
  { initials: 'V',  name: 'Vishnu',              title: 'Co-Founder',    photo: '/Vishnu.jpeg',         position: 'center top' },
  { initials: 'VD', name: 'Daniel Vijay Kumar',  title: 'COO',           photo: '/Vijay.png',           position: 'center top' },
  { initials: 'AS', name: 'Akilesh Singh',       title: 'Creative Head', photo: '/Akilesh singh.jpeg',  position: 'center 25%' },
]

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container-main">

        {/* Two Column */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 48, alignItems: 'center', marginBottom: 80 }}>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="eyebrow" style={{ marginBottom: 20 }}>Our Story</p>
            <h2 style={{ fontFamily: CD, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, color: '#fff' }}>
              Built to Make<br />
              <span className="gradient-text">Brands</span><br />
              Matter
            </h2>
            <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: 440, marginTop: 24 }}>
              999Tatva Media is a full-service digital marketing &amp; creative agency helping brands build powerful online presence, drive measurable growth, and connect with modern audiences through innovation.
            </p>
            <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.28)', lineHeight: 1.8, maxWidth: 440, marginTop: 16 }}>
              We blend creativity, technology, and data-driven insights to craft campaigns that don't just look good — they perform.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            <StatCard value={7}   suffix="+" label="Services Offered" />
            <StatCard value={100} suffix="%" label="Client Focus" />
            <StatCard value={3}           label="Expert Founders" />
            <StatCard value="∞"           label="Creative Ideas" />
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 48 }} />
          <p className="eyebrow" style={{ marginBottom: 32 }}>The Team</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="founders-grid">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                className="founder-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                style={{ padding: '36px 24px 32px', minHeight: 240 }}
              >
                <img
                  src={f.photo}
                  alt={f.name}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  style={{
                    width: 120, height: 120, borderRadius: '50%',
                    objectFit: 'cover', objectPosition: f.position,
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.95)',
                    border: '2px solid rgba(255,255,255,0.1)',
                    margin: '0 auto 20px', display: 'block',
                  }}
                />
                {/* Fallback initials — shown only if image fails */}
                <div style={{
                  display: 'none', width: 120, height: 120, borderRadius: '50%',
                  background: 'var(--brand-gradient)',
                  alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: CD, fontWeight: 600, fontSize: 24, color: '#fff',
                }}>
                  {f.initials}
                </div>
                <p style={{ fontFamily: CD, fontWeight: 600, fontSize: 18, color: '#fff' }}>{f.name}</p>
                <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{f.title}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
