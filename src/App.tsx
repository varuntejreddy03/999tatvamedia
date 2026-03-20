import { useEffect } from 'react'
import Lenis from 'lenis'
import AnimatedBackground from './components/AnimatedBackground'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/Marquee'
import Services from './components/Services'
import About from './components/About'
import Approach from './components/Approach'
import Vision from './components/Vision'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

const Divider = () => <div className="section-divider" />

export let lenisInstance: Lenis | null = null

export default function App() {
  useEffect(() => {
    document.body.style.background = '#050505'
    document.documentElement.style.background = '#050505'

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    })
    lenisInstance = lenis
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => { lenis.destroy(); lenisInstance = null }
  }, [])

  return (
    <div style={{ background: '#050505', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <AnimatedBackground />
      <CursorGlow />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Divider />
        <MarqueeTicker />
        <Services />
        <Divider />
        <About />
        <Divider />
        <Approach />
        <Divider />
        <Vision />
        <Divider />
        <Contact />
        <Divider />
        <Footer />
      </div>
    </div>
  )
}
