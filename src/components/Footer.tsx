import { motion } from 'framer-motion'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'

const CD = '"Clash Display", sans-serif'
const CG = '"Cabinet Grotesk", sans-serif'
const NAV_LINKS = ['Home', 'Services', 'About', 'Vision', 'Contact']

function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer style={{ background: '#050505', width: '100%' }}>

      {/* Top gradient line */}
      <div style={{ height: 1, background: 'var(--brand-gradient)', opacity: 0.35 }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ background: '#050505', padding: '72px 0 48px' }}
      >
        <div className="container-main">

          {/* Top row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: 40, marginBottom: 56 }}>

            {/* Brand */}
            <div style={{ background: '#050505' }}>
              <img src="/logo.png" alt="999 Tatva Media" style={{ height: 32, width: 'auto', marginBottom: 16 }} />
              <p style={{ fontFamily: CG, fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: 220 }}>
                A full-service digital marketing &amp; creative production agency based in Hyderabad, India.
              </p>
              <p style={{ fontFamily: CG, fontSize: 12, color: 'rgba(255,255,255,0.25)', marginTop: 12, letterSpacing: '0.5px' }}>
                Marketing · Branding · Social Media
              </p>
            </div>

            {/* Quick Links */}
            <div style={{ background: '#050505' }}>
              <p style={{ fontFamily: CG, fontWeight: 500, fontSize: 11, letterSpacing: '2.5px', color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase' }}>
                Quick Links
              </p>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    marginBottom: 12, fontFamily: CG, fontWeight: 400,
                    fontSize: 14, color: 'rgba(255,255,255,0.45)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: 0, transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Connect */}
            <div style={{ background: '#050505' }}>
              <p style={{ fontFamily: CG, fontWeight: 500, fontSize: 11, letterSpacing: '2.5px', color: 'rgba(255,255,255,0.25)', marginBottom: 20, textTransform: 'uppercase' }}>
                Connect
              </p>

              <a
                href="https://www.instagram.com/999tatva.media"
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', marginBottom: 16, padding: '10px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,60,172,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,60,172,0.04)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)' }}
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--brand-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Instagram size={15} style={{ color: '#fff' }} />
                </div>
                <div>
                  <p style={{ fontFamily: CG, fontSize: 13, color: '#fff', fontWeight: 500 }}>@999tatva.media</p>
                  <p style={{ fontFamily: CG, fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>Instagram</p>
                </div>
                <ArrowUpRight size={14} style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }} />
              </a>

              <a
                href="mailto:999tatva.media@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', padding: '10px 14px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.2s, background 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(43,134,197,0.3)'; (e.currentTarget as HTMLElement).style.background = 'rgba(43,134,197,0.04)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)' }}
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--brand-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={15} style={{ color: '#fff' }} />
                </div>
                <div>
                  <p style={{ fontFamily: CG, fontSize: 13, color: '#fff', fontWeight: 500 }}>999tatva.media@gmail.com</p>
                  <p style={{ fontFamily: CG, fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 1 }}>Email Us</p>
                </div>
                <ArrowUpRight size={14} style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }} />
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, background: '#050505' }}>
            <p style={{ fontFamily: CG, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
              © 2025 999Tatva Media. All Rights Reserved.
            </p>
            <p style={{ fontFamily: CG, fontSize: 12, color: 'rgba(255,255,255,0.22)' }}>
              Hyderabad, India
            </p>
          </div>

        </div>
      </motion.div>

      {/* Bottom gradient line */}
      <div style={{ height: 2, background: 'var(--brand-gradient)' }} />

    </footer>
  )
}
