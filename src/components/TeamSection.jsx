import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamData = {
  faculties: [
    { name: "Dr. Shiwani Gupta", role: "HOD AI&ML", linkedin: "https://www.linkedin.com/in/dr-shiwani-gupta-9b731a53?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
    { name: "Mrs. Shilpa Mathur", role: "Faculty In-Charge", linkedin: "https://www.linkedin.com/in/shilpa-mathur-83660a18?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" }
  ],
  heads: [
    { name: "Sanchita Warkad", role: "President", linkedin: "https://www.linkedin.com/in/sanchita-warkad-59a872329?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
    { name: "Mitesh Purohit", role: "Vice President", linkedin: "https://www.linkedin.com/in/miteshkumar-purohit-4ba0ab328", github: "#", image: "" },
    { name: "Nikita Mishra", role: "Tech Head", linkedin: "https://www.linkedin.com/in/nikita1310", github: "#", image: "" },
    { name: "Abhishek Vishwakarma", role: "Secretary", linkedin: "https://www.linkedin.com/in/atabhishekx?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
    { name: "Nimeet", role: "Creative Lead", linkedin: "https://www.linkedin.com/in/nimeet-chouhan-5791a2337?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" }
  ],
  juniorCore: {
    tech: [
      { name: "Guruprasad Dubey", role: "Tech Associate", linkedin: "https://www.linkedin.com/in/guruprasad-dubey-b14b66382?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/guruprasad dubey.jpeg" },
      { name: "Saurabh Jaiswal", role: "Tech WC", linkedin: "https://www.linkedin.com/in/saurabh-jaiswal-87b218387?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/saurabh.jpeg", position: "object-[50%_35%]" },
      { name: "Sayam Kala", role: "Tech WC", linkedin: "https://www.linkedin.com/in/sayam-kala-jain?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/sayam kala.jpeg" }
    ],
    creativeSocial: [
      { name: "Nilu Yadav", role: "Creative Associate", linkedin: "https://www.linkedin.com/in/nilu-yadav-3939bb262?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/nilu yadav.jpeg" },
      { name: "Vibha Varma", role: "Creative WC", linkedin: "https://www.linkedin.com/in/vibha-varma-82641041a?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
      { name: "Sarthak Katariya", role: "Creative WC", linkedin: "https://www.linkedin.com/in/sarthak-katariya-0a8910363?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/sarthak katariya.jpeg" },
      { name: "Riya Giri", role: "Social WC", linkedin: "https://www.linkedin.com/in/riya-giri-39b8793bb?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
      { name: "Kshitij Singh", role: "Social WC", linkedin: "https://www.linkedin.com/in/kshitij-singh-303025322?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
      { name: "Samarth Singh", role: "Social WC", linkedin: "https://www.linkedin.com/in/samarth-singh-38b554321?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/samarth.jpg.jpeg" }
    ],
    adminDoc: [
      { name: "Aarushi Shah", role: "Joint Secretary", linkedin: "https://www.linkedin.com/in/aarushi-shah-engg29?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/aarushi shah.jpeg" },
      { name: "Aryan Rama", role: "Doc Associate", linkedin: "https://www.linkedin.com/in/arynram?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" }
    ]
  }
};

const HexMemberCard = ({ member, size = "md", isCircle = false, color = "cyber-blue" }) => {
  let dimensions = "w-32 h-[147px] md:w-36 md:h-[165px]"; // standard hexagon ratio
  if (size === "lg") dimensions = "w-48 h-48 md:w-56 md:h-56";
  else if (size === "md") dimensions = "w-36 h-[165px] md:w-40 md:h-[184px]";

  const shapeClass = isCircle 
    ? "rounded-full" 
    : "[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]";

  let glowColor = "bg-cyber-blue/30 group-hover:bg-cyber-blue";
  if (color === "green") glowColor = "bg-green-500/30 group-hover:bg-green-500";
  if (color === "purple") glowColor = "bg-purple-500/30 group-hover:bg-purple-500";
  if (color === "gold") glowColor = "bg-yellow-500/30 group-hover:bg-yellow-500";

  let textColor = "text-cyber-blue";
  if (color === "green") textColor = "text-green-500";
  if (color === "purple") textColor = "text-purple-400";
  if (color === "gold") textColor = "text-yellow-400";

  return (
    <div className={`relative group ${dimensions} transition-all duration-500 hover:scale-[1.25] hover:z-50 cursor-pointer shrink-0`}>
      {/* Outer Glow / Border Simulation */}
      <div className={`absolute inset-0 ${glowColor} transition-colors duration-300 ${shapeClass}`}>
        {/* Inner Background (1px border effect) */}
        <div className={`absolute inset-[2px] bg-[#0a0a0f] overflow-hidden ${shapeClass}`}>
          {/* Image Placeholder */}
          {member.image ? (
            <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.position || 'object-top'}`} />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-80 group-hover:opacity-100 transition-opacity"></div>
          )}

          {/* Always Visible Gradient at Bottom for Name Readability */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end items-center pb-3 transition-opacity duration-300 group-hover:opacity-0">
            <h4 className="text-white font-semibold text-[11px] md:text-sm text-center px-1 leading-tight">{member.name}</h4>
            <p className={`${textColor} text-[9px] md:text-[10px] font-mono mt-1 text-center truncate px-2`}>{member.role}</p>
          </div>

          {/* Hover Overlay with Info & Links */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
            <h4 className="text-white font-bold text-sm md:text-base text-center mb-1 leading-tight">{member.name}</h4>
            <p className={`${textColor} text-[10px] md:text-xs font-mono text-center mb-4`}>{member.role}</p>
            
            <div className="flex gap-4">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform" onClick={(e) => e.stopPropagation()}>
                <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:scale-125 transition-transform" onClick={(e) => e.stopPropagation()}>
                <img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" className="w-7 h-7 md:w-8 md:h-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.reveal-node');
      
      gsap.fromTo(nodes,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={containerRef} className="w-full py-32 px-4 md:px-6 max-w-7xl mx-auto relative min-h-screen flex flex-col items-center overflow-hidden">
      
      <div className="text-center mb-16 reveal-node relative z-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">The Core Team</h2>
        <div className="inline-block px-4 py-1.5 border border-cyber-blue/30 bg-cyber-blue/5 rounded-full backdrop-blur-sm">
          <p className="text-cyber-blue text-xs md:text-sm font-mono tracking-widest uppercase">
            SuperAI Organizational Network
          </p>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-20">
        
        {/* Tier 1: Faculties */}
        <div className="w-full flex justify-center gap-8 md:gap-32 reveal-node relative z-20">
          {teamData.faculties.map((member, i) => (
            <HexMemberCard key={`fac-${i}`} member={member} size="lg" isCircle={true} color="gold" />
          ))}
        </div>

        {/* Tier 2: Main Heads */}
        <div className="w-full flex justify-center flex-wrap gap-4 md:gap-6 reveal-node relative z-20 mt-[-1rem] md:mt-[-2rem]">
          {teamData.heads.map((member, i) => (
            <HexMemberCard key={`head-${i}`} member={member} size="md" color="cyber-blue" />
          ))}
        </div>

        {/* Tier 3: Junior Core Clusters */}
        <div className="w-full flex flex-col items-center gap-10 mt-4 relative z-20">
          
          <div className="flex items-center gap-4 mb-4 reveal-node w-full max-w-lg justify-center opacity-70">
             <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-500"></div>
             <h3 className="text-gray-400 font-orbitron tracking-[0.2em] text-[10px] md:text-xs uppercase text-center whitespace-nowrap">Junior Core</h3>
             <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-500"></div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-center items-stretch gap-6 md:gap-8">
            
            {/* Tech Team Cluster */}
            <div className="flex-1 flex flex-col items-center bg-cyber-blue/5 border border-cyber-blue/20 rounded-3xl p-6 reveal-node hover:border-cyber-blue/40 transition-colors hover:bg-cyber-blue/10">
              <h4 className="text-cyber-blue font-mono tracking-widest text-xs mb-8 uppercase text-center">Tech Team</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {teamData.juniorCore.tech.map((member, i) => (
                  <HexMemberCard key={`tech-${i}`} member={member} size="sm" color="cyber-blue" />
                ))}
              </div>
            </div>

            {/* Creative & Social Teams Cluster */}
            <div className="flex-[1.5] flex flex-col items-center bg-green-500/5 border border-green-500/20 rounded-3xl p-6 reveal-node hover:border-green-500/40 transition-colors hover:bg-green-500/10">
              <h4 className="text-green-500 font-mono tracking-widest text-xs mb-8 uppercase text-center">Creative & Social</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {teamData.juniorCore.creativeSocial.map((member, i) => (
                  <HexMemberCard key={`cs-${i}`} member={member} size="sm" color="green" />
                ))}
              </div>
            </div>

            {/* Admin & Documentation Cluster */}
            <div className="flex-1 flex flex-col items-center bg-purple-500/5 border border-purple-500/20 rounded-3xl p-6 reveal-node hover:border-purple-500/40 transition-colors hover:bg-purple-500/10">
              <h4 className="text-purple-400 font-mono tracking-widest text-xs mb-8 uppercase text-center">Admin & Doc</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {teamData.juniorCore.adminDoc.map((member, i) => (
                  <HexMemberCard key={`doc-${i}`} member={member} size="sm" color="purple" />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
