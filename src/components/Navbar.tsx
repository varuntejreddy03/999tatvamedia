import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowRight, Phone, Mail } from 'lucide-react'

const NAV_LINKS = ['Home', 'Services', 'About', 'Vision', 'Contact']

function scrollTo(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [hovered, setHovered] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 60))

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + 140
      NAV_LINKS.forEach((link) => {
        const el = document.getElementById(link.toLowerCase())
        if (el && el.offsetTop <= scrollPos) setActive(link)
      })
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      {/* ── Main Navbar ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#FFFFFF' }}>
        <motion.nav
          animate={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : '#FFFFFF',
            backdropFilter: scrolled ? 'blur(20px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(0,0,0,0.08)',
            boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ width: '100%', background: '#FFFFFF' }}
        >
          <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 60 : 64, transition: 'height 0.4s ease', position: 'relative' }}>

            {/* Logo */}
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); scrollTo('home') }}
              style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <img src="/logo.png" alt="999 Tatva Media" style={{ height: 32, width: 'auto', objectFit: 'contain', display: 'block' }} />
            </motion.a>

            {/* Desktop Nav — pill container, absolutely centered */}
            <div
              className="hidden md:flex"
              style={{
                position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                alignItems: 'center', gap: 4,
                background: 'rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 50,
                padding: '5px 8px',
                whiteSpace: 'nowrap',
              }}
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => { scrollTo(link); setActive(link) }}
                  onMouseEnter={() => setHovered(link)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: 'relative',
                    fontFamily: '"Cabinet Grotesk", sans-serif',
                    fontWeight: active === link ? 600 : 500,
                    fontSize: 13.5,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '7px 16px',
                    borderRadius: 50,
                    letterSpacing: '0.1px',
                    color: active === link ? '#000000' : hovered === link ? '#000000' : '#1a1a1a',
                    transition: 'color 0.2s',
                    zIndex: 1,
                  }}
                >
                  {/* Active pill bg */}
                  {active === link && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute', inset: 0, borderRadius: 50,
                        background: 'rgba(0,0,0,0.07)',
                        border: '1px solid rgba(0,0,0,0.1)',
                        zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link}
                  {/* Gradient dot for active */}
                  {active === link && (
                    <span style={{
                      display: 'inline-block', width: 4, height: 4,
                      borderRadius: '50%', background: 'var(--brand-gradient)',
                      marginLeft: 6, verticalAlign: 'middle',
                      boxShadow: '0 0 6px rgba(255,60,172,0.8)',
                    }} />
                  )}
                </button>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <motion.button
              className="md:hidden"
              onClick={() => setOpen(true)}
              whileTap={{ scale: 0.9 }}
              style={{
                background: 'rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: 10,
                cursor: 'pointer', color: '#1a1a1a',
                width: 40, height: 40,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0 0 0% 0)', opacity: 1 }}
            exit={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              position: 'fixed', inset: 0, zIndex: 110,
              background: '#050505',
              display: 'flex', flexDirection: 'column',
            }}
          >
            {/* Top bar */}
            <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64, flexShrink: 0 }}>
              <img src="/logo.png" alt="999 Tatva Media" style={{ height: 28, width: 'auto' }} />
              <motion.button
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10, cursor: 'pointer', color: '#fff',
                  width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Gradient line */}
            <div style={{ height: 1, background: 'var(--brand-gradient)', opacity: 0.4, flexShrink: 0 }} />

            {/* Links */}
            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '32px 24px 24px', overflowY: 'auto' }}>
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const, duration: 0.4 }}
                  onClick={() => { setOpen(false); scrollTo(link) }}
                  style={{
                    fontFamily: '"Clash Display", sans-serif', fontWeight: 600,
                    fontSize: 'clamp(26px, 7vw, 38px)',
                    color: active === link ? '#fff' : 'rgba(255,255,255,0.4)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '13px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    textAlign: 'left', letterSpacing: '-0.02em',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <span>{link}</span>
                  {active === link && (
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: 'var(--brand-gradient)',
                      boxShadow: '0 0 10px rgba(255,60,172,0.7)',
                      flexShrink: 0,
                    }} />
                  )}
                </motion.button>
              ))}

              {/* CTA */}
              <motion.button
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34, ease: [0.16, 1, 0.3, 1] as const }}
                className="btn-primary"
                whileTap={{ scale: 0.97 }}
                onClick={() => { setOpen(false); scrollTo('contact') }}
                style={{ marginTop: 28, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 15, padding: '15px 24px' }}
              >
                Get In Touch <ArrowRight size={15} />
              </motion.button>

              {/* Contact strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.44 }}
                style={{
                  marginTop: 28, paddingTop: 20,
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex', flexDirection: 'column', gap: 10,
                }}
              >
                <a href="tel:+916309681739" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: '"Cabinet Grotesk", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                  <Phone size={13} style={{ color: '#FF3CAC' }} /> +91 63096 81739
                </a>
                <a href="mailto:999tatva.media@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: '"Cabinet Grotesk", sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>
                  <Mail size={13} style={{ color: '#FF3CAC' }} /> 999tatva.media@gmail.com
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
