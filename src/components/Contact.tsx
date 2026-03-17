import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react'

const CD = '"Clash Display", sans-serif'
const CG = '"Cabinet Grotesk", sans-serif'

const ITEMS = [
  { Icon: Phone,     label: 'Phone',     value: '+91 96096 81739',             href: 'tel:+919609681739',                       gradient: false },
  { Icon: Mail,      label: 'Email',     value: '999tatva.media@gmail.com',    href: 'mailto:999tatva.media@gmail.com',          gradient: false },
  { Icon: MapPin,    label: 'Address',   value: 'Hyderabad, Telangana, India', href: null,                                       gradient: false },
  { Icon: Instagram, label: 'Instagram', value: '@999tatva.media',             href: 'https://www.instagram.com/999tatva.media', gradient: true  },
  { Icon: Clock,     label: 'Hours',     value: 'Mon–Sat: 9:00 AM – 6:00 PM | Sun: Holiday', href: null,                       gradient: false },
]

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 0', overflow: 'hidden' }}>
      <div className="container-main">

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>Get In Touch</p>
          <h2 style={{ fontFamily: CD, fontWeight: 600, fontSize: 'clamp(40px, 5vw, 72px)', lineHeight: 1.1, color: '#fff' }}>
            Let's Build Something<br />
            <span className="gradient-text">Great</span>
          </h2>
          <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 16, color: 'rgba(255,255,255,0.45)', maxWidth: 360, lineHeight: 1.7, marginTop: 20 }}>
            Ready to take your brand to the next level? Let's talk about your goals and build something remarkable together.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 40, marginTop: 64, alignItems: 'start' }}>

          {/* Contact Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {ITEMS.map(({ Icon, label, value, href, gradient }) => (
              <div key={label} className="contact-item">
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={17} style={{ color: '#FF3CAC' }} />
                </div>
                <div>
                  <p style={{ fontFamily: CG, fontWeight: 400, fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '1px', marginBottom: 3, textTransform: 'uppercase' }}>
                    {label}
                  </p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      style={{
                        fontFamily: CG, fontWeight: 500, fontSize: 15,
                        color: gradient ? 'transparent' : '#fff',
                        background: gradient ? 'var(--brand-gradient)' : 'none',
                        WebkitBackgroundClip: gradient ? 'text' : 'unset',
                        backgroundClip: gradient ? 'text' : 'unset',
                        WebkitTextFillColor: gradient ? 'transparent' : '#fff',
                        textDecoration: 'none',
                      }}
                    >{value}</a>
                  ) : (
                    <span style={{ fontFamily: CG, fontWeight: 500, fontSize: 15, color: '#fff' }}>{value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            style={{
              background: 'rgba(10,10,10,0.85)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 24, padding: 40,
              backdropFilter: 'blur(20px)',
            }}
          >
            <input type="text"  placeholder="Your Name"                     className="form-input" />
            <input type="email" placeholder="Email Address"                 className="form-input" />
            <input type="tel"   placeholder="Phone Number"                  className="form-input" />
            <textarea           placeholder="Tell us about your project..." rows={4} className="form-input" style={{ resize: 'none', marginBottom: 8 }} />
            <motion.button
              type="submit"
              className="btn-primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', marginTop: 8, borderRadius: 12, padding: 16, fontSize: 16 }}
            >
              Send Message →
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
