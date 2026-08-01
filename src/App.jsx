import { useState } from 'react'
import InterlockingPreloader from './components/InterlockingPreloader'
import MainWebsite from './components/MainWebsite'
import ErrorBoundary from './components/ErrorBoundary'
import { RotateCcw } from 'lucide-react'

function App() {
  const [isPreloading, setIsPreloading] = useState(true)

  const handlePreloadComplete = () => {
    setIsPreloading(false)
  }

  const replayPreloader = () => {
    setIsPreloading(true)
  }

  return (
    <>
      {isPreloading && <InterlockingPreloader onComplete={handlePreloadComplete} />}
      
      {!isPreloading && (
        <div className="relative">
          <ErrorBoundary>
            <MainWebsite />
          </ErrorBoundary>
          
          {/* Replay Button for Testing */}
          <button 
            onClick={replayPreloader}
            className="fixed bottom-6 right-6 z-50 p-4 bg-cyber-dark border border-cyber-blue text-cyber-blue rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:bg-cyber-blue hover:text-black hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300 group flex items-center justify-center"
            title="Replay Preloader"
          >
            <RotateCcw className="w-6 h-6 group-hover:-rotate-180 transition-transform duration-500" />
          </button>
        </div>
      )}
    </>
  )
}

export default App
