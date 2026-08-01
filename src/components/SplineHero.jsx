import React, { Suspense } from 'react';

// Lazy load Spline to prevent it from blocking the main thread during initial render
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineHero() {
  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-auto">
      <Suspense 
        fallback={
          <div className="flex flex-col items-center justify-center h-full text-cyber-blue font-mono animate-pulse">
            <div className="w-16 h-16 border-4 border-cyber-blue border-t-transparent rounded-full animate-spin mb-4"></div>
            Loading 3D Model...
          </div>
        }
      >
        {/* 
          This is an interactive 3D robot/object from Spline that tracks the cursor.
          You can replace this URL with your own `.splinecode` export if you design a custom robot!
        */}
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </Suspense>
    </div>
  );
}
