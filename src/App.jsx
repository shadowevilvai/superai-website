import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import InterlockingPreloader from './components/InterlockingPreloader'
import ErrorBoundary from './components/ErrorBoundary'
import { RotateCcw } from 'lucide-react'

// Components
import Navbar from './components/Navbar'
import MeshGradient from './components/MeshGradient'
import FloatingOrbs from './components/FloatingOrbs'
import FloatingParticles from './components/FloatingParticles'
import ParallaxBackground from './components/ParallaxBackground'
import CursorTrail from './components/CursorTrail'

import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Events from './pages/Events'
import Projects from './pages/Projects'
import Contact from './pages/Contact'



function ScrollToTop() {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  
  return null;
}

function App() {
  const [isPreloading, setIsPreloading] = useState(true)
  const [theme, setTheme] = useState('cyber')
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    // Only run preloader once per session
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader')
    if (hasSeenPreloader) {
      setIsPreloading(false)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsScrolledDown(true)
      } else {
        setIsScrolledDown(false)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handlePreloadComplete = () => {
    sessionStorage.setItem('hasSeenPreloader', 'true')
    setIsPreloading(false)
  }

  const replayPreloader = () => {
    sessionStorage.removeItem('hasSeenPreloader')
    setIsPreloading(true)
  }

  return (
    <Router>
      <ScrollToTop />
      {isPreloading && <InterlockingPreloader onComplete={handlePreloadComplete} />}
      
      {!isPreloading && (
        <>
            <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
              theme === 'hacker' 
                ? 'bg-black text-[#00ff41] font-mono selection:bg-[#00ff41]/30 selection:text-[#00ff41]' 
                : 'bg-[#020205] text-white font-sans selection:bg-white/20 selection:text-white'
            }`}>
              {/* Background Elements Shared Across Pages */}
              <MeshGradient />
              <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${theme === 'hacker' ? 'opacity-30' : 'opacity-10'}`} 
                   style={{
                     backgroundImage: `linear-gradient(to right, ${theme === 'hacker' ? '#00ff41' : '#ffffff'} 1px, transparent 1px), linear-gradient(to bottom, ${theme === 'hacker' ? '#00ff41' : '#ffffff'} 1px, transparent 1px)`,
                     backgroundSize: '40px 40px',
                     maskImage: 'linear-gradient(to bottom, transparent 20%, black 80%, transparent 100%)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 80%, transparent 100%)',
                     transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(100px)'
                   }}>
              </div>
              <FloatingOrbs />
              <FloatingParticles />
              <ParallaxBackground />
              <CursorTrail />
              
              <Navbar isScrolledDown={isScrolledDown} theme={theme} setTheme={setTheme} />
              
              <div className="relative z-10 pt-24">
                <ErrorBoundary>
                  <Routes>
                    <Route path="/" element={<Home theme={theme} />} />
                    <Route path="/about" element={<About theme={theme} />} />
                    <Route path="/team" element={<Team theme={theme} />} />
                    <Route path="/events" element={<Events theme={theme} />} />
                    <Route path="/projects" element={<Projects theme={theme} />} />
                    <Route path="/contact" element={<Contact theme={theme} />} />
                  </Routes>
                </ErrorBoundary>
              </div>
            </div>
          
          {/* Replay Button for Testing */}
          <button 
            onClick={replayPreloader}
            className="fixed bottom-6 right-6 z-50 p-4 bg-cyber-dark border border-cyber-blue text-cyber-blue rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:bg-cyber-blue hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300 group flex items-center justify-center"
            title="Replay Preloader"
          >
            <RotateCcw className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
          </button>
          
        </>
      )}
    </Router>
  )
}

export default App
