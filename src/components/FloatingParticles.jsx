import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';

export default function FloatingParticles() {
  const containerRef = useRef(null);
  
  // Memoize random values so they don't regenerate on every scroll/re-render
  const particles = useMemo(() => {
    return Array.from({ length: 30 }).map(() => ({
      size: Math.random() * 20 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.2
    }));
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const orbs = gsap.utils.toArray('.small-orb');
      
      orbs.forEach((orb) => {
        // Randomly animate each orb around the screen continuously
        gsap.to(orb, {
          x: () => `random(-200, 200)`,
          y: () => `random(-200, 200)`,
          rotation: () => `random(0, 360)`,
          duration: () => gsap.utils.random(15, 30), // Slower movement
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true // Get new random values on each repeat
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="small-orb absolute rounded-full mix-blend-screen"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)`,
            opacity: p.opacity,
            transform: 'translateZ(0)', // Hardware acceleration
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
}
