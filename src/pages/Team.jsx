import React from 'react';
import GlowCard from '../components/GlowCard';
import { Users, Code, FileText, Palette, MessageCircle, Shield } from 'lucide-react';
import TeamSection from '../components/TeamSection';

export default function Team({ theme }) {
  const roles = [
    {
      id: "core",
      title: "Core Committee",
      icon: Shield,
      color: "text-red-400",
      bg: "bg-red-400/10",
      description: "The leadership team guiding the vision, strategy, and execution of SuperAI.",
      members: ["Chairperson", "Vice Chairperson", "Secretary", "Treasurer"]
    },
    {
      id: "joint-sec",
      title: "Joint Secretary",
      icon: Users,
      color: "text-cyber-blue",
      bg: "bg-cyber-blue/10",
      description: "Oversees daily operations and acts as the crucial bridge between core members and associates.",
      members: ["Joint Secretaries"]
    },
    {
      id: "tech-assoc",
      title: "Tech Associate",
      icon: Code,
      color: "text-green-400",
      bg: "bg-green-400/10",
      description: "Builds and maintains the technical infrastructure, workshops, and innovative projects.",
      members: ["Technical Team"]
    },
    {
      id: "doc-assoc",
      title: "Document Associate",
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      description: "Manages reports, official content documentation, and maintains comprehensive event archives.",
      members: ["Documentation Team"]
    },
    {
      id: "joint-creative",
      title: "Joint Creative",
      icon: Palette,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      description: "Conceptualizes and designs all visual assets, UI/UX elements, and overall club branding.",
      members: ["Creative Team"]
    },
    {
      id: "joint-social",
      title: "Joint Social",
      icon: MessageCircle,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      description: "Handles social media presence, PR, and drives active community engagement across platforms.",
      members: ["Social Media & PR Team"]
    }
  ];

  return (
    <div className="w-full pb-24">
      {/* Legacy Team Section (Now at the top) */}
      <TeamSection />

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Header for Roles */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Team <span className="text-cyber-blue">Roles</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            The driving force behind SuperAI TCET. Our working committee is divided into specialized roles that work together to create impactful events and projects.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role) => (
            <GlowCard key={role.id} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${role.bg}`}>
                <role.icon className={role.color} size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-blue transition-colors">{role.title}</h3>
              <p className="text-gray-400 font-light text-sm mb-6 min-h-[60px]">
                {role.description}
              </p>
              <div className="border-t border-white/5 pt-4">
                <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  {role.members.join(", ")}
                </p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Recruitment Call to Action */}
        <div className="mt-32 p-12 rounded-[3rem] bg-gradient-to-br from-cyber-blue/10 to-purple-500/10 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyber-blue blur-[100px] opacity-30 rounded-full"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 blur-[100px] opacity-30 rounded-full"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Want to join the team?</h2>
          <p className="text-gray-300 font-light max-w-xl mx-auto mb-8 relative z-10">
            We're always looking for passionate students to join our working committee. Develop your skills, build your network, and leave an impact.
          </p>
          <a 
            href="https://forms.gle/Eewu8oQ3kkMEt5ka7" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex relative z-10 px-8 py-4 bg-white text-black font-semibold tracking-widest text-sm rounded-full hover:scale-105 hover:bg-cyber-blue transition-all duration-300"
          >
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
}
