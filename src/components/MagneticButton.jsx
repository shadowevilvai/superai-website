import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', onClick }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Move the button towards the cursor
      gsap.to(button, {
        x: x * 0.3, // Strength of the magnetic pull
        y: y * 0.3,
        duration: 1,
        ease: 'power3.out',
      });
    };

    const handleMouseLeave = () => {
      // Snap back to original position
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
