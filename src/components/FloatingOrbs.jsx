import React, { useMemo } from 'react';

export default function FloatingOrbs() {
  const orbs = useMemo(() => {
    return Array.from({ length: 8 }).map(() => ({
      size: Math.random() * 150 + 50, // 50px to 200px
      left: Math.random() * 100, // 0% to 100%
      top: Math.random() * 100, // 0% to 100%
      color: Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.15)' : 'rgba(168, 85, 247, 0.15)', // Cyber blue or purple
      animationDuration: Math.random() * 20 + 15, // 15s to 35s
      animationDelay: Math.random() * -20 // Random negative delay
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full mix-blend-screen animate-float"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            animationDuration: `${orb.animationDuration}s`,
            animationDelay: `${orb.animationDelay}s`,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  );
}
