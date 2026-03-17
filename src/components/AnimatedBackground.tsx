import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 0,
      pointerEvents: 'none', overflow: 'hidden',
      background: '#050505',
    }}>
      {/* Orange — top left, fast */}
      <motion.div
        animate={{ x: [0, 160, -80, 40, 0], y: [0, -100, 80, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-5%', left: '-8%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,107,0,0.32) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Pink — top right */}
      <motion.div
        animate={{ x: [0, -140, 60, -30, 0], y: [0, 120, -60, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-5%', right: '-8%',
          width: 650, height: 650, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,60,172,0.28) 0%, transparent 60%)',
          filter: 'blur(65px)',
        }}
      />

      {/* Purple — center left, slow drift */}
      <motion.div
        animate={{ x: [0, 100, -60, 20, 0], y: [0, -120, 100, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '38%', left: '10%',
          width: 600, height: 600, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,75,160,0.26) 0%, transparent 60%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Blue — bottom right */}
      <motion.div
        animate={{ x: [0, -120, 70, -40, 0], y: [0, 80, -100, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: '0%', right: '-5%',
          width: 700, height: 700, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43,134,197,0.26) 0%, transparent 60%)',
          filter: 'blur(65px)',
        }}
      />

      {/* Center pulse — breathes */}
      <motion.div
        animate={{ scale: [1, 1.3, 0.9, 1.15, 1], opacity: [0.5, 0.9, 0.6, 0.85, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 800, height: 400, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(120,75,160,0.18) 0%, transparent 65%)',
          filter: 'blur(90px)',
        }}
      />
    </div>
  )
}
