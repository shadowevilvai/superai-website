import React, { useEffect, useState } from 'react';

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e) => {
      // Limit the number of particles to avoid performance issues
      if (Math.random() > 0.5) return; 

      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY, // Removed window.scrollY because container is fixed
        color: Math.random() > 0.5 ? '#00f0ff' : '#ffffff', // Added white for visibility
      };

      setParticles((prev) => [...prev.slice(-20), newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none animate-ping"
          style={{
            left: p.x - 4,
            top: p.y - 4,
            width: '8px',
            height: '8px',
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
            animationDuration: '1s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </div>
  );
}
