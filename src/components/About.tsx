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
            setCount(Math.round(eased * value))
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
      <div
        className="gradient-text"
        style={{ fontFamily: CD, fontWeight: 600, fontSize: 48, lineHeight: 1 }}
      >
        {typeof value === 'string' ? value : count}{suffix}
      </div>
      <div
        style={{
          fontFamily: CG,
          fontSize: 13,
          color: 'rgba(255,255,255,0.45)',
          marginTop: 10,
          letterSpacing: '0.5px'
        }}
      >
        {label}
      </div>
    </div>
  )
}

const FOUNDERS = [
  {
    initials: 'SK',
    name: 'Sai Kiran',
    title: 'Founder',
    image: '/sai-kiran.png',
    objectPosition: '48% 10%',
  },
  {
    initials: 'V',
    name: 'Vishnu',
    title: 'Co-Founder',
    image: '/Vishnu.jpeg',
    objectPosition: '50% 18%',
  },
  {
    initials: 'VD',
    name: 'Vijay Daniel',
    title: 'COO',
    image: '/Vijay.png',
    objectPosition: '50% 16%',
  },
  {
    initials: 'AS',
    name: 'Akilesh Singh',
    title: 'Creative Head',
    image: '/Akilesh singh.jpeg',
    objectPosition: '50% 20%',
  },
  {
    initials: 'B',
    name: 'Bhavani',
    title: 'Legal Advisor',
    image: '/Bhavani.png',
    objectPosition: '50% 16%',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }
  },
}

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container-main">

        {/* Story + Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 48,
            alignItems: 'center',
            marginBottom: 80,
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="eyebrow" style={{ marginBottom: 20 }}>Our Story</p>
            <h2
              style={{
                fontFamily: CD,
                fontWeight: 600,
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.1,
                color: '#fff'
              }}
            >
              Built to Make<br />
              <span className="gradient-text">Brands</span><br />
              Matter
            </h2>
            <p
              style={{
                fontFamily: CG,
                fontSize: 16,
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.8,
                maxWidth: 440,
                marginTop: 24
              }}
            >
              999Tatva Media is a full-service digital marketing &amp; creative agency helping brands build powerful online
              presence, drive measurable growth, and connect with modern audiences through innovation.
            </p>
            <p
              style={{
                fontFamily: CG,
                fontSize: 14,
                color: 'rgba(255,255,255,0.28)',
                lineHeight: 1.8,
                maxWidth: 440,
                marginTop: 16
              }}
            >
              We blend creativity, technology, and data-driven insights to craft campaigns that don&apos;t just look good. They perform.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            <StatCard value={7} suffix="+" label="Services Offered" />
            <StatCard value={100} suffix="%" label="Client Focus" />
            <StatCard value={15} suffix="+" label="Expert Team Members" />
            <StatCard value="∞" label="Creative Ideas" />
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ height: 1, background: 'rgba(255,255,255,0.08)', marginBottom: 48 }} />

          <p className="eyebrow" style={{ marginBottom: 16 }}>The Team</p>
          <h2 style={{ fontFamily: CD, fontWeight: 600, fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.1, color: '#fff', marginBottom: 48 }}>
            Meet the <span className="gradient-text">Minds</span> Behind It
          </h2>

          <style>{`
            .team-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
              gap: 12px;
              align-items: stretch;
            }

            .team-card {
              position: relative;
              border-radius: 16px;
              overflow: hidden;
              background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
              border: 1px solid rgba(255,255,255,0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
              box-shadow: 0 8px 20px rgba(0,0,0,0.25);
            }

            .team-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 16px 36px rgba(0,0,0,0.4);
              border-color: rgba(255,255,255,0.13);
            }

            .team-photo-wrap {
              position: relative;
              height: 200px;
              overflow: hidden;
              background: #0b0b0b;
            }

            .team-photo-wrap::after {
              content: '';
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(13,13,13,0.98) 0%, rgba(13,13,13,0.45) 22%, rgba(13,13,13,0.04) 55%, transparent 100%);
              pointer-events: none;
            }

            .team-photo {
              width: 100%;
              height: 100%;
              object-fit: cover;
              display: block;
              filter: grayscale(100%) contrast(1.1) brightness(0.9);
              transition: transform 0.4s ease, filter 0.3s ease;
            }

            .team-card:hover .team-photo {
              transform: scale(1.04);
              filter: grayscale(100%) contrast(1.12) brightness(0.96);
            }

            .team-info {
              position: relative;
              padding: 12px 14px 18px;
              background: #0D0D0D;
            }

            .team-name {
              font-family: ${CD};
              font-weight: 600;
              font-size: 16px;
              line-height: 1.2;
              color: #fff;
              margin: 0 0 4px;
              letter-spacing: -0.01em;
            }

            .team-role {
              font-family: ${CG};
              font-size: 12px;
              line-height: 1.4;
              color: rgba(255,255,255,0.45);
              margin: 0;
              letter-spacing: 0.3px;
            }

            .team-card::after {
              content: '';
              position: absolute;
              left: 10px;
              right: 10px;
              bottom: 0;
              height: 2px;
              border-radius: 999px;
              background: linear-gradient(90deg, rgba(255,107,0,0.85), rgba(255,60,172,0.9), rgba(43,134,197,0.85));
            }

            @media (max-width: 768px) {
              .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
              .team-photo-wrap { height: 160px; }
              .team-name { font-size: 14px; }
              .team-role { font-size: 11px; }
              .team-info { padding: 10px 12px 16px; }
            }

            @media (max-width: 480px) {
              .team-photo-wrap { height: 140px; }
            }
          `}</style>

          <div className="team-grid">
            {FOUNDERS.map((f, i) => (
              <motion.div
                key={f.name}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1] as const
                }}
              >
                {f.image ? (
                  <div className="team-photo-wrap">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="team-photo"
                      style={{ objectPosition: f.objectPosition }}
                    />
                  </div>
                ) : (
                  <div
                    className="team-photo-wrap"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg,#FF6B00,#FF3CAC,#784BA0,#2B86C5)'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: CD,
                        fontWeight: 600,
                        fontSize: 42,
                        color: '#fff'
                      }}
                    >
                      {f.initials}
                    </span>
                  </div>
                )}

                <div className="team-info">
                  <p className="team-name">{f.name}</p>
                  <p className="team-role">{f.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}