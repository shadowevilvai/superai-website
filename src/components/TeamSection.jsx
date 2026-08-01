import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Terminal, RefreshCw } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    id: 0,
    domain: "Faculty Advisors",
    hasCommittee: false,
    heads: [
      { name: "Dr. Shiwani Gupta", role: "HOD AI&ML", linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Mrs. Shilpa Mathur", role: "Faculty In-Charge", linkedin: "https://www.linkedin.com/in/shilpa-mathur-83660a18?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ],
    committee: []
  },
  {
    id: 1,
    domain: "Executive",
    hasCommittee: false,
    heads: [
      { name: "Sanchita Warkad", role: "President", linkedin: "https://www.linkedin.com/in/sanchita-warkad-59a872329?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Mitesh Purohit", role: "Vice President", linkedin: "https://www.linkedin.com/in/miteshkumar-purohit-4ba0ab328", github: "#" }
    ],
    committee: []
  },
  {
    id: 2,
    domain: "Operations",
    hasCommittee: false,
    heads: [
      { name: "Abhishek Vishwakarma", role: "Secretary", linkedin: "https://www.linkedin.com/in/atabhishekx?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Aarushi Shah", role: "Joint Secretary", linkedin: "https://www.linkedin.com/in/aarushi-shah-engg29?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ],
    committee: []
  },
  {
    id: 3,
    domain: "Technical",
    hasCommittee: true,
    heads: [
      { name: "Nikita Mishra", role: "Tech Head", linkedin: "https://www.linkedin.com/in/nikita1310", github: "#" },
      { name: "Guruprasad Dubey", role: "Technical Associate", linkedin: "https://www.linkedin.com/in/guruprasad-dubey-b14b66382?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ],
    committee: [
      { name: "Saurabh Jaiswal", role: "Committee", linkedin: "https://www.linkedin.com/in/saurabh-jaiswal-87b218387?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Sayam Kala", role: "Committee", linkedin: "https://www.linkedin.com/in/sayam-kala-jain?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ]
  },
  {
    id: 4,
    domain: "Creative",
    hasCommittee: true,
    heads: [
      { name: "Nimeet", role: "Creative Head", linkedin: "https://www.linkedin.com/in/nimeet-chouhan-5791a2337?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Nilu Yadav", role: "Creative Associate", linkedin: "https://www.linkedin.com/in/nilu-yadav-3939bb262?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ],
    committee: [
      { name: "Vibha Varma", role: "Committee", linkedin: "https://www.linkedin.com/in/vibha-varma-82641041a?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Sarthak Katariya", role: "Committee", linkedin: "https://www.linkedin.com/in/sarthak-katariya-0a8910363?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ]
  },
  {
    id: 5,
    domain: "Documentation",
    hasCommittee: false,
    heads: [
      { name: "Aryan Rama", role: "Documentation Associate", linkedin: "#", github: "#" }
    ],
    committee: []
  },
  {
    id: 6,
    domain: "Social",
    hasCommittee: true,
    heads: [],
    committee: [
      { name: "Riya Giri", role: "Committee", linkedin: "https://www.linkedin.com/in/riya-giri-39b8793bb?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Kshitij Singh", role: "Committee", linkedin: "https://www.linkedin.com/in/kshitij-singh-303025322?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
      { name: "Samarth Singh", role: "Committee", linkedin: "https://www.linkedin.com/in/samarth-singh-38b554321?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" }
    ]
  }
];

const MemberCard = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="w-36 md:w-40 h-48 md:h-56 perspective-1000 cursor-pointer group shrink-0"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-[#0a0a0f] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-end group-hover:border-cyber-blue/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 left-0 w-full h-3/4 bg-gradient-to-b from-gray-800 to-black">
             {/* Image placeholder */}
          </div>
          <div className="relative z-10 w-full bg-black/90 backdrop-blur-md p-3 border-t border-white/10 text-center">
            <h4 className="font-semibold text-sm truncate text-white">{member.name}</h4>
            <p className="text-[9px] md:text-[10px] text-cyber-blue font-mono tracking-widest truncate">{member.role}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#11111a] border border-cyber-blue/40 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-4 shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <h4 className="font-semibold text-sm mb-4 text-center text-white">{member.name}</h4>
          <div className="flex gap-3 mb-4">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-white/5 rounded-full hover:bg-cyber-blue hover:text-black transition-colors"><img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="w-5 h-5" /></a>
            <a href={member.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2 bg-white/5 rounded-full hover:bg-cyber-blue hover:text-black transition-colors"><img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" className="w-5 h-5" /></a>
          </div>
          <div className="text-[9px] text-gray-400 font-mono tracking-widest uppercase text-center flex items-center gap-1 group-hover:text-cyber-blue transition-colors">
            <RefreshCw size={10} /> Flip Back
          </div>
        </div>
      </div>
    </div>
  );
};

const DomainRow = ({ data, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative w-full flex flex-col mb-12 md:mb-16 reveal-node z-20`}>
      
      {/* Header Row: Title & Dot (Restricted to 50% width to keep dots near center) */}
      <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div className={`w-full md:w-[calc(50%-2rem)] flex items-center gap-4 mb-6 ${isLeft ? 'justify-center md:justify-start pr-2 md:pr-0' : 'justify-center md:justify-end pl-2 md:pl-0'} 
          ${isFlipped && isLeft ? 'md:justify-end' : ''} 
          ${isFlipped && !isLeft ? 'md:justify-start' : ''} 
          transition-all duration-700`}
        >
          {/* Connector Dot for Right-aligned items */}
          {!isLeft && (
            <div className="wire-node w-3 h-3 rounded-full bg-cyber-blue shadow-[0_0_10px_#00f0ff] shrink-0 relative z-20"></div>
          )}
          
          <h3 className="text-xl md:text-2xl font-orbitron font-bold tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {data.domain}
          </h3>
          
          {/* Connector Dot for Left-aligned items */}
          {isLeft && (
            <div className="wire-node w-3 h-3 rounded-full bg-cyber-blue shadow-[0_0_10px_#00f0ff] shrink-0 relative z-20"></div>
          )}

          {data.hasCommittee && (
            <button 
              onClick={() => setIsFlipped(!isFlipped)}
              className={`flex items-center gap-2 px-3 py-1.5 border rounded-full transition-all text-[10px] md:text-xs font-mono md:cursor-none ml-2
                ${isFlipped 
                  ? 'bg-cyber-blue text-black border-cyber-blue shadow-[0_0_15px_rgba(0,240,255,0.4)]' 
                  : 'bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30 hover:bg-cyber-blue/20'}
              `}
            >
              <RefreshCw size={12} className={isFlipped ? 'animate-spin-slow' : ''} />
              {isFlipped ? 'VIEW HEADS' : 'VIEW COMMITTEE'}
            </button>
          )}
        </div>
      </div>

      {/* Cards Row (Wider width 90% to prevent wrapping) */}
      <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div className={`w-full md:w-[90%] perspective-1000 ${isLeft ? 'pr-2 md:pr-0' : 'pl-2 md:pl-0'}`}>
          {/* 3D Flip Container for the entire row */}
          <div className={`relative w-full transition-transform duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ minHeight: '190px' }}>
          
          {/* Front: Domain Heads */}
          <div className={`absolute top-0 w-full backface-hidden flex gap-4 md:gap-6 flex-wrap ${isLeft ? 'justify-center md:justify-start' : 'justify-center md:justify-end'} ${isFlipped ? 'pointer-events-none' : ''}`}>
            {data.heads.map((head, i) => (
              <MemberCard key={`head-${i}`} member={head} />
            ))}
          </div>

          {/* Back: Working Committee */}
          {data.hasCommittee && (
            <div className={`absolute top-0 w-full backface-hidden rotate-y-180 flex gap-4 md:gap-6 flex-wrap ${isLeft ? 'justify-center md:justify-end' : 'justify-center md:justify-start'} ${!isFlipped ? 'pointer-events-none' : ''}`}>
              {data.committee.map((member, i) => (
                <MemberCard key={`com-${i}`} member={member} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default function TeamSection() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const ghostPathRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const drawPath = () => {
        if (!containerRef.current || !pathRef.current || !ghostPathRef.current) return 0;
        
        const nodes = containerRef.current.querySelectorAll('.wire-node');
        if (nodes.length === 0) return 0;

        const containerRect = containerRef.current.getBoundingClientRect();
        
        let d = "";
        nodes.forEach((node, i) => {
          const rect = node.getBoundingClientRect();
          // center of the node relative to container
          const x = rect.left - containerRect.left + rect.width / 2;
          const y = rect.top - containerRect.top + rect.height / 2;
          
          if (i === 0) {
            // start high above the first node and curve into it
            d += `M ${x} ${y - 150} C ${x} ${y - 75}, ${x} ${y - 75}, ${x} ${y} `;
          } else {
            const prevNode = nodes[i-1];
            const prevRect = prevNode.getBoundingClientRect();
            const prevX = prevRect.left - containerRect.left + prevRect.width / 2;
            const prevY = prevRect.top - containerRect.top + prevRect.height / 2;
            
            // Start curving down from the dot, then cross over horizontally, then down into the next dot
            // Creates a beautiful S-curve between the dots
            d += `C ${prevX} ${prevY + 80}, ${x} ${y - 80}, ${x} ${y} `;
          }
        });
        
        // Extend slightly below the last node
        const lastNode = nodes[nodes.length - 1];
        const rect = lastNode.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;
        d += `C ${x} ${y + 50}, ${x} ${y + 100}, ${x} ${y + 150} `;

        ghostPathRef.current.setAttribute('d', d);
        pathRef.current.setAttribute('d', d);
        
        return pathRef.current.getTotalLength();
      };

      const updatePath = () => {
        const length = drawPath();
        if (length) {
          gsap.set(pathRef.current, { strokeDasharray: length });
        }
      };

      // Initial draw
      updatePath();
      
      // Animate the path drawing on scroll
      let pathLength = 0;
      try {
        if (pathRef.current && pathRef.current.getAttribute('d')) {
          pathLength = pathRef.current.getTotalLength();
        }
      } catch (e) {
        console.warn("SVG length calculation failed", e);
      }

      if (pathLength > 0) {
        gsap.fromTo(pathRef.current, 
          { strokeDashoffset: pathLength },
          {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
              end: "bottom center",
              scrub: 1,
            }
          }
        );
      }

      // Ensure it updates on window resize
      ScrollTrigger.addEventListener("refreshInit", updatePath);

      // Nodes popping in animation
      const nodes = gsap.utils.toArray('.reveal-node');
      nodes.forEach(node => {
        gsap.fromTo(node,
          { opacity: 0, scale: 0.9, y: 50 },
          {
            opacity: 1,
            scale: 1, 
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.5)',
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
            }
          }
        );
      });

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", updatePath);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={containerRef} className="w-full py-32 px-4 md:px-6 max-w-7xl mx-auto relative min-h-screen">
      
      <div className="text-center mb-24 md:mb-40 reveal-node relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Core Team</h2>
        <p className="text-gray-500 text-lg font-light max-w-2xl mx-auto px-4">
          Driven by passion. Guided by experience. Meet the minds steering the vision of SUPER AI.
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto">
        
        {/* SVG Overlay for Freeform Wire */}
        <svg 
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
          style={{ overflow: 'visible' }}
        >
          {/* Ghost path */}
          <path ref={ghostPathRef} stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
          {/* Animated path */}
          <path 
            ref={pathRef} 
            stroke="#00f0ff" 
            strokeWidth="3" 
            fill="none" 
            style={{ filter: 'drop-shadow(0 0 10px #00f0ff)' }} 
          />
        </svg>

        {/* Layout Rows */}
        <div className="flex flex-col relative w-full pt-10">
          {teamData.map((data, index) => (
            <DomainRow key={data.id} data={data} index={index} />
          ))}
        </div>
      </div>

    </section>
  );
}
