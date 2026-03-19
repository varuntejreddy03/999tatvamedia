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
  { initials: 'VD', name: 'Daniel Vijay Kumar', title: 'COO', photo: '/Vijay.png', position: '50% 26%', featured: false },
  { initials: 'SK', name: 'Sai Kiran', title: 'Founder', photo: '/Sai kiran.png', position: '50% 18%', featured: true },
  { initials: 'V', name: 'Vishnu', title: 'Co-Founder', photo: '/Vishnu.jpeg', position: '50% 22%', featured: true },
  { initials: 'AS', name: 'Akilesh Singh', title: 'Creative Head', photo: '/Akilesh singh.jpeg', position: '50% 34%', featured: false },
  { initials: 'JB', name: 'J. Bhavani', title: 'Legal Advisor', photo: '/Bhavani.png', position: '50% 24%', featured: false },
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
            <StatCard value={7} suffix="+" label="Services Offered" />
            <StatCard value={100} suffix="%" label="Client Focus" />
            <StatCard value={5} label="Expert Team" />
            <StatCard value="∞" label="Creative Ideas" />
          </motion.div>
        </div>

        {/* Founders */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="mb-12 h-px bg-white/10" />
          <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#080607] px-4 py-10 sm:px-6 lg:px-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-red-900/30 via-orange-700/10 to-transparent blur-2xl" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-violet-700/30 via-rose-700/10 to-transparent blur-2xl" />

            <p className="eyebrow relative z-10 mb-8">The Team</p>

            <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-7xl flex-nowrap items-end justify-center gap-2 overflow-x-hidden pb-2 lg:gap-3">
              {FOUNDERS.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                  className="group relative flex min-w-0 flex-[1_1_0] flex-col items-center overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0b0f]/90 px-2.5 py-5 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_14px_30px_rgba(0,0,0,0.42)] backdrop-blur-sm sm:px-3 lg:min-h-[220px]"
                >
                  <div className="relative mb-3 flex h-16 w-16 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-white/10 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                    <img
                      src={f.photo}
                      alt={f.name}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement | null
                        if (fallback) fallback.style.display = 'flex'
                      }}
                      className="h-full w-full rounded-full object-cover grayscale"
                      style={{ objectPosition: f.position }}
                    />
                    <div className="absolute inset-0 hidden items-center justify-center rounded-full bg-zinc-800 text-xl font-semibold text-white">
                      {f.initials}
                    </div>
                  </div>

                  <p className="text-[13px] text-white sm:text-[15px] lg:text-[18px]" style={{ fontFamily: CD, fontWeight: 600, lineHeight: 1.2 }}>
                    {f.name}
                  </p>
                  <p className="mt-1 text-[10px] sm:text-[11px] text-white/55" style={{ fontFamily: CG }}>
                    {f.title}
                  </p>

                  <div className="pointer-events-none absolute inset-x-4 bottom-0 h-[2px] rounded-full bg-gradient-to-r from-red-500/80 via-orange-400/85 to-rose-500/80" />
                  <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-white/5 transition group-hover:ring-white/15" />
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

      </div>
    </section>
  )
}
