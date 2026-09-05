import React from 'react';
import GlowCard from '../components/GlowCard';
import { Target, Eye, Layers, Zap, Heart, Globe } from 'lucide-react';

export default function About({ theme }) {
  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-24 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          About <span className="text-cyber-blue">SuperAI</span>
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-6">
          A student-led community of the Department of Artificial Intelligence & Machine Learning at TCET. We bridge the gap between classroom learning and the rapidly evolving world of Artificial Intelligence.
        </p>
        <div className="inline-flex gap-4 items-center justify-center text-sm md:text-base font-medium text-cyber-blue tracking-widest uppercase border border-cyber-blue/30 rounded-full px-6 py-3 bg-cyber-blue/5">
          <span>Learn Beyond Classrooms</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue"></span>
          <span>Build Beyond Projects</span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue"></span>
          <span>Lead Beyond Expectations</span>
        </div>
      </div>

      {/* Our Philosophy */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Our Philosophy</h2>
          <p className="text-gray-400 font-light max-w-2xl mx-auto">These five elements shape the way SuperAI approaches student development.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: Eye, title: "Research", desc: "Explore emerging technologies, ideas, and developments in AI.", color: "text-purple-400", bg: "bg-purple-400/10" },
            { icon: Target, title: "Learn", desc: "Go beyond the prescribed curriculum through peer learning and workshops.", color: "text-blue-400", bg: "bg-blue-400/10" },
            { icon: Layers, title: "Build", desc: "Transform knowledge into action by developing projects.", color: "text-green-400", bg: "bg-green-400/10" },
            { icon: Zap, title: "Innovate", desc: "Think beyond conventional solutions and address meaningful problems.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
            { icon: Globe, title: "Lead", desc: "Take initiative, collaborate, and develop the confidence to lead.", color: "text-pink-400", bg: "bg-pink-400/10" }
          ].map((val, idx) => (
            <div key={idx} className="glass-card bg-white/[0.01] border border-white/5 rounded-3xl p-8 text-center hover:bg-white/[0.03] transition-colors w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(20%-20px)]">
              <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-6 ${val.bg}`}>
                <val.icon className={val.color} size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stakeholder Connect */}
      <div className="mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Stakeholder Connect</h2>
          <p className="text-gray-400 font-light max-w-3xl mx-auto">
            SuperAI is built around one central idea. We bring stakeholders together to create a community where knowledge and experience flow beyond traditional classroom boundaries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 relative">
          {/* Visual Connection Line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent -translate-y-1/2 z-0"></div>
          
          {[
            { title: "Students", desc: "Bring curiosity, ideas, creativity, and the drive to explore." },
            { title: "Faculty", desc: "Provide mentorship, academic guidance, and direction." },
            { title: "Alumni", desc: "Bring real-world experiences, career insights, and mentorship." },
            { title: "Industry", desc: "Provide exposure to current technologies and expectations." }
          ].map((stakeholder, idx) => (
            <GlowCard key={idx} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative z-10 text-center">
              <h3 className="text-xl font-bold text-cyber-blue mb-3">{stakeholder.title}</h3>
              <p className="text-gray-400 text-sm font-light">{stakeholder.desc}</p>
            </GlowCard>
          ))}
        </div>
      </div>

      {/* What Makes Us Different */}
      <div className="mb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-8">What Makes SuperAI Different?</h2>
          <div className="space-y-8">
            {[
              { title: "Peer Learning", desc: "Our strongest identity. Learning isn't restricted to a classroom—every member can become both a learner and a contributor." },
              { title: "Industry Exposure", desc: "Through expert sessions, workshops, and alumni interactions, students get a glimpse of how AI is applied beyond academics." },
              { title: "AI-Focused Community", desc: "A dedicated environment for students passionate about AI, ML, GenAI, MLOps, and emerging technologies." },
              { title: "Learn Beyond Classrooms", desc: "We believe the classroom provides the foundation, but projects and real-world exposure complete the learning experience." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-cyber-blue/10 flex items-center justify-center border border-cyber-blue/20">
                  <Heart className="text-cyber-blue w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 font-light">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <GlowCard className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10 h-full flex flex-col justify-center">
           <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
           <p className="text-gray-400 font-light leading-relaxed text-lg mb-8">
             To grow from a department-level student community into one of the most impactful AI communities, empowering students to continuously learn, build, innovate, collaborate, and lead.
           </p>
           <h3 className="text-2xl font-bold text-white mb-6">Core Values</h3>
           <div className="flex flex-wrap gap-3">
             {["Curiosity", "Collaboration", "Innovation", "Integrity", "Excellence", "Leadership"].map((val, idx) => (
               <span key={idx} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300">
                 {val}
               </span>
             ))}
           </div>
        </GlowCard>
      </div>

      {/* Journey Timeline */}
      <div className="mb-32">
        <h2 className="text-4xl font-bold text-white tracking-tight mb-12 text-center">Our Journey</h2>
        <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-8 ml-4 md:ml-auto space-y-12">
          {[
            { year: "2022 — The Beginning", desc: "SuperAI was established to create a platform for AI/ML students to learn beyond the academic curriculum and build a strong AI community." },
            { year: "Growing the Community", desc: "Expanded activities through peer learning, coding competitions, expert interactions, and technical sessions." },
            { year: "Expanding Exposure", desc: "Introduced students to emerging areas such as Deep Learning, Generative AI, MLOps, Explainable AI, alongside career guidance." },
            { year: "Today", desc: "Evolves as a student-led ecosystem connecting students, faculty, alumni, and industry, with a vision to create an impactful AI community." }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-black border-4 border-cyber-blue"></div>
              <h3 className="text-2xl font-bold text-cyber-blue mb-3">{item.year}</h3>
              <p className="text-gray-400 font-light text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Highlight */}
      <GlowCard className="bg-white/[0.02] border border-cyber-blue/30 rounded-[2rem] overflow-hidden p-0">
        <div className="grid md:grid-cols-2">
           <div className="p-10 md:p-14 flex flex-col justify-center">
             <div className="inline-block px-3 py-1 rounded-full bg-cyber-blue/20 text-cyber-blue text-sm font-bold uppercase tracking-wider mb-6 w-max border border-cyber-blue/30">
               Recent Highlight
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prompters League</h2>
             <p className="text-gray-400 font-light text-lg mb-6">
               A highly competitive 3-round prompting based challenge testing students' ability to generate the most accurate and creative outputs using LLMs.
             </p>
             <div className="flex flex-wrap gap-6 mb-8">
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Attendees</p>
                 <p className="text-2xl font-bold text-white">80+</p>
               </div>
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Winners</p>
                 <p className="text-xl font-bold text-cyber-blue">Krish J & Tushar H</p>
               </div>
               <div>
                 <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Sponsor</p>
                 <p className="text-lg font-bold text-white mt-1">Alps Technosystems</p>
               </div>
             </div>
           </div>
           <div className="h-64 md:h-auto bg-[url('/events/prompters_league.jpg')] bg-cover bg-center border-l border-white/5"></div>
        </div>
      </GlowCard>
    </div>
  );
}
