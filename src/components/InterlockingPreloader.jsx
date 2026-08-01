import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../styles/preloader.css';

// Component for random scrolling hex/binary data
const DataStream = ({ style, delay = 0 }) => {
  const [data, setData] = useState("0x00000000");
  
  useEffect(() => {
    const chars = '0123456789ABCDEF';
    const interval = setInterval(() => {
      let str = "0x";
      for (let i = 0; i < 8; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      setData(str);
    }, 100 + Math.random() * 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-[10px] md:text-xs text-cyber-blue/40 tracking-widest" style={{...style, animationDelay: `${delay}s`}}>
      {data}
    </div>
  );
};

export default function InterlockingPreloader({ onComplete }) {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const flareRef = useRef(null);
  const progressFillRef = useRef(null);
  
  const [status, setStatus] = useState("ESTABLISHING SECURE CONNECTION...");
  const [progress, setProgress] = useState(0);
  
  const statusMessages = [
    "ESTABLISHING SECURE CONNECTION...",
    "SYNCHRONIZING CORE DATA...",
    "AUTHENTICATING TCET ACCESS...",
    "DECRYPTING USER PROFILE...",
    "INITIALIZING NEURAL NETWORKS..."
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    gsap.set([leftDoorRef.current, rightDoorRef.current], { x: 0 });
    gsap.set(flareRef.current, { opacity: 0, scaleX: 0 });
    
    // Status text cycle
    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % statusMessages.length;
      setStatus(statusMessages[msgIndex]);
    }, 700);

    // 1. Loading Phase (Fill bar)
    tl.to(progressFillRef.current, {
      width: "100%",
      duration: 3,
      ease: "power2.inOut",
      onUpdate: function() {
        setProgress(Math.round(this.progress() * 100));
      }
    });

    // 2. Unlock Phase
    tl.add(() => {
      clearInterval(msgInterval);
      setStatus("AUTHENTICATION SUCCESSFUL. WEBSITE DECRYPTED (100%)...");
    });

    // Central blinding laser flare
    tl.to(flareRef.current, {
      opacity: 1,
      scaleX: 1,
      duration: 0.15,
      ease: "power4.out"
    });
    
    // Doors jitter slightly before opening
    tl.to([leftDoorRef.current, rightDoorRef.current], {
      x: (index) => index === 0 ? "-3px" : "3px",
      yoyo: true,
      repeat: 3,
      duration: 0.05
    });

    // 3. Doors Blast Open
    tl.to(leftDoorRef.current, {
      x: "-55vw",
      duration: 1.5,
      ease: "power4.inOut"
    }, "+=0.1");

    tl.to(rightDoorRef.current, {
      x: "55vw",
      duration: 1.5,
      ease: "power4.inOut"
    }, "<");

    tl.to(flareRef.current, {
      scaleX: 6,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "<");

    // Fade out preloader container
    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      display: "none"
    }, "-=0.5");

    return () => {
      clearInterval(msgInterval);
      tl.kill();
    };
  }, [onComplete]);

  const DoorContent = () => (
    <div className="door-content">
      <div className="door-frame">
        <div className="inner-panel">
          {/* Hexagonal / Mesh Base Texture */}
          <div className="mesh-texture"></div>

          {/* Futuristic HUD SVG Elements */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50 z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            {/* Corner Targeting Brackets */}
            <path d="M 5 10 L 5 5 L 10 5" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.8"/>
            <path d="M 95 10 L 95 5 L 90 5" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.8"/>
            <path d="M 5 90 L 5 95 L 10 95" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.8"/>
            <path d="M 95 90 L 95 95 L 90 95" fill="none" stroke="#00f0ff" strokeWidth="0.5" opacity="0.8"/>
            
            {/* Radar Rings / Crosshairs */}
            <circle cx="50" cy="50" r="30" fill="none" stroke="#00f0ff" strokeWidth="0.2" strokeDasharray="2 5" opacity="0.3" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#00f0ff" strokeWidth="0.2" strokeDasharray="1 4" opacity="0.15" />
            
            {/* HUD Scale Lines */}
            <path d="M 50 10 L 50 15" fill="none" stroke="#00f0ff" strokeWidth="0.2" />
            <path d="M 50 85 L 50 90" fill="none" stroke="#00f0ff" strokeWidth="0.2" />
            <path d="M 15 50 L 10 50" fill="none" stroke="#00f0ff" strokeWidth="0.2" />
            <path d="M 90 50 L 85 50" fill="none" stroke="#00f0ff" strokeWidth="0.2" />

            {/* Circuit Lines */}
            <path d="M 0 15 L 15 15 L 20 20 L 20 35" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
            <circle cx="20" cy="35" r="1" fill="#00f0ff" />
            <circle cx="10" cy="15" r="0.5" fill="#00f0ff" />
            
            <path d="M 5 85 L 15 85 L 25 75 L 25 60" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
            <circle cx="25" cy="60" r="1" fill="#00f0ff" />

            <path d="M 100 25 L 85 25 L 80 30 L 80 45" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
            <circle cx="80" cy="45" r="1" fill="#00f0ff" />

            <path d="M 100 75 L 80 75 L 75 70 L 75 55" fill="none" stroke="#00f0ff" strokeWidth="0.5" />
            <circle cx="75" cy="55" r="1" fill="#00f0ff" />

            {/* Neural Network Nodes (Connecting logic) */}
            <path d="M 10 40 L 15 35 L 15 25 L 25 20" fill="none" stroke="#00f0ff" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.4" />
            <circle cx="10" cy="40" r="0.5" fill="#00f0ff" />
            <circle cx="15" cy="35" r="0.8" fill="#00f0ff" />
            <circle cx="15" cy="25" r="0.5" fill="#00f0ff" />
            <circle cx="25" cy="20" r="0.8" fill="#00f0ff" />

            <path d="M 90 60 L 85 65 L 85 75 L 75 80" fill="none" stroke="#00f0ff" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.4" />
            <circle cx="90" cy="60" r="0.5" fill="#00f0ff" />
            <circle cx="85" cy="65" r="0.8" fill="#00f0ff" />
            <circle cx="85" cy="75" r="0.5" fill="#00f0ff" />
            <circle cx="75" cy="80" r="0.8" fill="#00f0ff" />
          </svg>

          {/* Dynamic Data Streams */}
          <div className="absolute top-[20vh] left-[5vw] flex flex-col gap-1 z-10">
            <DataStream delay={0.1} />
            <DataStream delay={0.3} />
            <DataStream delay={0.5} />
            <div className="text-cyber-blue/60 text-[10px] font-mono mt-2 animate-pulse">SYS_OPTIMAL</div>
          </div>
          
          <div className="absolute top-[20vh] right-[5vw] flex flex-col gap-1 z-10 items-end">
            <DataStream delay={0.2} />
            <DataStream delay={0.4} />
            <DataStream delay={0.6} />
            <div className="text-cyber-blue/60 text-[10px] font-mono mt-2 animate-pulse">AI_CORE_ONLINE</div>
          </div>

          {/* Glowing Vortex behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] bg-cyber-blue/20 rounded-full blur-[80px]"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vh] h-[35vh] border-[2px] border-cyber-blue/30 rounded-full shadow-[inset_0_0_40px_rgba(0,240,255,0.3)] animate-[spin_15s_linear_infinite]"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25vh] h-[25vh] border border-cyber-blue/50 rounded-full border-dashed animate-[spin_10s_linear_infinite_reverse]"></div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vh] h-[45vh] border-l-2 border-r-2 border-cyber-blue/40 rounded-full animate-[spin_20s_linear_infinite]"></div>

          {/* Core Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-20">
            <h1 className="preloader-title">SUPER AI</h1>
            <p className="text-cyber-blue font-mono tracking-[0.2em] md:tracking-[0.4em] uppercase text-xs md:text-sm shadow-cyber-blue drop-shadow-[0_0_8px_#00f0ff] bg-black/40 px-4 py-1 rounded border border-cyber-blue/20">
              AIML Club - Thakur College
            </p>
          </div>

          {/* Advanced Progress Bar */}
          <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-20">
            <div className="flex justify-between items-end mb-2 px-1">
              <span className="text-cyber-blue/90 font-mono text-[10px] md:text-xs tracking-widest">{status}</span>
              <span className="text-cyber-blue font-orbitron font-bold text-sm bg-black/50 px-2 rounded">{progress}%</span>
            </div>
            
            <div className="relative h-[4px] bg-[#000] border border-cyber-blue/30 rounded-sm overflow-hidden box-content shadow-[0_0_15px_rgba(0,240,255,0.2)]">
              <div 
                ref={progressFillRef} 
                className="absolute top-0 left-0 h-full w-0 bg-cyber-blue shadow-[0_0_10px_#00f0ff,0_0_20px_#00f0ff]" 
              ></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="preloader-container">
      {/* Background bright light that flashes through the crack when opening */}
      <div className="absolute inset-0 bg-cyber-blue opacity-20"></div>
      
      {/* Laser Flare right on the seam */}
      <div ref={flareRef} className="center-flare"></div>

      {/* Left Door Panel */}
      <div ref={leftDoorRef} className="door-left">
        <DoorContent />
      </div>

      {/* Right Door Panel */}
      <div ref={rightDoorRef} className="door-right">
        <DoorContent />
      </div>
    </div>
  );
}
