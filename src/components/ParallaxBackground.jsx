import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Eye, Terminal, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.parallax-element');
      
      elements.forEach((el) => {
        gsap.to(el, {
          y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Background Parallax Floating Elements */}
      <div className="parallax-element absolute top-[10%] left-[5%] opacity-10 text-cyber-blue" data-speed="0.1">
        <Code size={120} />
      </div>
      <div className="parallax-element absolute top-[30%] right-[10%] opacity-10 text-purple-500" data-speed="0.2">
        <Database size={150} />
      </div>
      <div className="parallax-element absolute top-[60%] left-[15%] opacity-10 text-gray-400" data-speed="0.15">
        <Layers size={100} />
      </div>
      <div className="parallax-element absolute top-[80%] right-[20%] opacity-10 text-cyber-blue" data-speed="0.05">
        <Eye size={200} />
      </div>
      <div className="parallax-element absolute top-[20%] right-[40%] opacity-5 text-[#00ff41]" data-speed="0.25">
        <Terminal size={80} />
      </div>
    </div>
  );
}
