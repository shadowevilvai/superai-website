import React from 'react';
import { motion } from 'framer-motion';

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030008]">
      {/* 
        High-Performance Premium Gradient
        Uses standard blur-3xl and simple transforms to ensure 60fps on all devices.
      */}
      <div className="absolute inset-0 opacity-40">
        
        {/* Animated Blob 1 - Purple */}
        <motion.div
          animate={{
            x: ['-10vw', '10vw', '-10vw'],
            y: ['-10vh', '10vh', '-10vh'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#7000FF]/30 rounded-full blur-3xl"
        />

        {/* Animated Blob 2 - Cyan */}
        <motion.div
          animate={{
            x: ['10vw', '-10vw', '10vw'],
            y: ['10vh', '-10vh', '10vh'],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] left-[40%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-[#00F0FF]/20 rounded-full blur-3xl"
        />

        {/* Animated Blob 3 - Magenta */}
        <motion.div
          animate={{
            x: ['0vw', '15vw', '-15vw', '0vw'],
            y: ['15vh', '0vh', '10vh', '15vh'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FF0055]/20 rounded-full blur-3xl"
        />

      </div>
      
      {/* Subtle Grid Overlay (No animation, cheap to render) */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
