import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  const mouseX = useMotionValue(-400)
  const mouseY = useMotionValue(-400)

  const springConfig = { damping: 25, stiffness: 150 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <motion.div
      style={{
        position: 'fixed',
        zIndex: 999,
        pointerEvents: 'none',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,60,172,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
        translateX: '-50%',
        translateY: '-50%',
        left: cursorX,
        top: cursorY,
      }}
    />
  )
}
