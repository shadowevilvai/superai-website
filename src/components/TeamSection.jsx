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
    { name: "Abhishek V.", role: "Secretary", linkedin: "https://www.linkedin.com/in/atabhishekx?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
    { name: "Nikita Mishra", role: "Tech Head", linkedin: "https://www.linkedin.com/in/nikita1310", github: "#", image: "" },
    { name: "Nimeet", role: "Creative Lead", linkedin: "https://www.linkedin.com/in/nimeet-chouhan-5791a2337?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" }
  ],
  juniorCore: {
    operations: {
      title: "OPERATIONS & ADMIN",
      members: [
        { name: "Aarushi Shah", role: "Jt. Sec", linkedin: "https://www.linkedin.com/in/aarushi-shah-engg29?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/aarushi shah.jpeg" },
        { name: "Aryan Rama", role: "Docs Associate", linkedin: "https://www.linkedin.com/in/arynram?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/aryan rama.jpeg" }
      ]
    },
    tech: {
      title: "TECHNICAL TEAM",
      members: [
        { name: "Guruprasad D.", role: "Tech Assoc.", linkedin: "https://www.linkedin.com/in/guruprasad-dubey-b14b66382?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/guruprasad dubey.jpeg" },
        { name: "Saurabh Jaiswal", role: "Tech WC", linkedin: "https://www.linkedin.com/in/saurabh-jaiswal-87b218387?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/saurabh.jpeg", position: "object-[50%_35%]" },
        { name: "Sayam Kala", role: "Tech WC", linkedin: "https://www.linkedin.com/in/sayam-kala-jain?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/sayam kala.jpeg" }
      ]
    },
    creative: {
      title: "CREATIVE & DESIGN",
      members: [
        { name: "Nilu Yadav", role: "Creative Assoc.", linkedin: "https://www.linkedin.com/in/nilu-yadav-3939bb262?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/nilu yadav.jpeg" },
        { name: "Vibha Varma", role: "Creative WC", linkedin: "https://www.linkedin.com/in/vibha-varma-82641041a?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "" },
        { name: "Sarthak Katariya", role: "Creative WC", linkedin: "https://www.linkedin.com/in/sarthak-katariya-0a8910363?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/sarthak katariya.jpeg" }
      ]
    },
    social: {
      title: "SOCIAL WC",
      members: [
        { name: "Riya Giri", role: "Social WC", linkedin: "https://www.linkedin.com/in/riya-giri-39b8793bb?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/riya giri.jpeg", position: "object-bottom scale-[1.5]" },
        { name: "Kshitij Singh", role: "Social WC", linkedin: "https://www.linkedin.com/in/kshitij-singh-303025322?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/kshitij.jpeg" },
        { name: "Samarth Singh", role: "Social WC", linkedin: "https://www.linkedin.com/in/samarth-singh-38b554321?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#", image: "/team/samarth.jpg.jpeg" }
      ]
    }
  }
};

const colors = {
  cyan: { 
    border: 'border-[#00F0FF]/30', 
    text: 'text-[#00F0FF]', 
    glow: 'hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:border-[#00F0FF]' 
  },
  yellow: { 
    border: 'border-yellow-500/30', 
    text: 'text-yellow-500', 
    glow: 'hover:shadow-[0_0_25px_rgba(234,179,8,0.4)] hover:border-yellow-500' 
  }
};

const TeamCard = ({ member, color = "cyan" }) => {
  const theme = colors[color] || colors.cyan;
  
  return (
    <div className={`relative flex flex-col items-center p-3 pt-4 rounded-2xl transition-all duration-500 group cursor-pointer 
      border bg-[#0B0F19] w-[130px] sm:w-[140px] md:w-[150px] lg:w-[155px] min-h-[220px] shrink-0
      ${theme.border} ${theme.glow} hover:z-50`}>
      
      {/* Inner Image Card - Pops up out of the main card on hover! */}
      <div className={`w-full aspect-square rounded-xl border mb-3 relative overflow-hidden bg-[#131b2a] transition-all duration-500 ${theme.border} group-hover:border-transparent group-hover:-translate-y-8 group-hover:scale-105 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)] z-20`}>
        {member.image ? (
          <img src={member.image} alt={member.name} className={`w-full h-full object-cover ${member.position || 'object-top'}`} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a2333] to-[#0a0f18] text-gray-500">
            {/* Fallback avatar */}
            <svg className="w-10 h-10 opacity-40 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <span className="text-[10px] uppercase font-mono tracking-wider">{member.name.split(' ')[0]}</span>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center w-full transition-transform duration-500 group-hover:-translate-y-6">
        <h4 className="text-white font-bold text-[13px] md:text-sm text-center leading-tight mb-1 px-1">{member.name}</h4>
        <p className={`${theme.text} text-[10px] md:text-[11px] font-mono text-center px-1 mb-2`}>{member.role}</p>
      </div>

      {/* Social Links (Revealed at the bottom when image pops up) */}
      <div className="absolute bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-3">
        {member.linkedin && member.linkedin !== '#' && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white/10 rounded-md p-1" onClick={(e) => e.stopPropagation()}>
            <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
          </a>
        )}
        {member.github && member.github !== '#' && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-white/10 rounded-md p-1" onClick={(e) => e.stopPropagation()}>
            <img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" className="w-5 h-5 bg-white rounded-full" />
          </a>
        )}
      </div>
    </div>
  );
};

const SectionSubheading = ({ text }) => (
  <div className="flex flex-col items-center mb-8 reveal-node">
    <h3 className="text-[#00F0FF] text-sm md:text-base font-semibold tracking-widest uppercase mb-1">{text}</h3>
    <div className="w-8 h-[2px] bg-[#00F0FF]"></div>
  </div>
);

const JuniorCoreGroup = ({ data }) => (
  <div className="flex flex-col items-center p-4 md:p-6 border border-dashed border-[#1a2333] rounded-3xl reveal-node bg-black/20 w-full">
    <h4 className="text-gray-400 font-mono tracking-widest text-[10px] md:text-xs mb-6 uppercase text-center">{data.title}</h4>
    <div className="flex flex-row flex-wrap xl:flex-nowrap justify-center gap-3 w-full">
      {data.members.map((member, i) => (
        <TeamCard key={i} member={member} color="cyan" />
      ))}
    </div>
  </div>
);

export default function TeamSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const nodes = gsap.utils.toArray('.reveal-node');
      
      gsap.fromTo(nodes,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team" ref={containerRef} className="w-full py-32 px-4 md:px-6 max-w-[1400px] mx-auto relative min-h-screen flex flex-col items-center overflow-hidden font-inter">
      
      <div className="text-center mb-16 reveal-node relative z-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">THE CORE TEAM</h2>
        <div className="inline-block px-4 py-1.5 border border-[#00F0FF]/30 bg-[#00F0FF]/5 rounded-full backdrop-blur-sm">
          <p className="text-[#00F0FF] text-[10px] md:text-xs font-mono tracking-widest uppercase">
            SUPERAI ORGANIZATIONAL NETWORK
          </p>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center gap-16 md:gap-24 relative z-20">
        
        {/* Tier 1: Faculties */}
        <div className="w-full flex flex-col items-center">
          <SectionSubheading text="FACULTY IN-CHARGE" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 reveal-node">
            {teamData.faculties.map((member, i) => (
              <TeamCard key={`fac-${i}`} member={member} color="yellow" />
            ))}
          </div>
        </div>

        {/* Tier 2: Senior Core */}
        <div className="w-full flex flex-col items-center">
          <SectionSubheading text="SENIOR CORE TEAM" />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 reveal-node">
            {teamData.heads.map((member, i) => (
              <TeamCard key={`head-${i}`} member={member} color="cyan" />
            ))}
          </div>
        </div>

        {/* Tier 3: Junior Core */}
        <div className="w-full flex flex-col items-center">
          <SectionSubheading text="JUNIOR CORE TEAM" />
          
          {/* Use xl:grid-cols-2 to give them enough room to prevent 3-member wrapping on medium desktops */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-[1200px]">
            <JuniorCoreGroup data={teamData.juniorCore.operations} />
            <JuniorCoreGroup data={teamData.juniorCore.tech} />
            <JuniorCoreGroup data={teamData.juniorCore.creative} />
            <JuniorCoreGroup data={teamData.juniorCore.social} />
          </div>
        </div>

      </div>
    </section>
  );
}
