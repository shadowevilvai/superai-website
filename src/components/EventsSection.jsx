import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Monitor, Users, Award, Code, Lightbulb, MapPin, Target } from 'lucide-react';
import GlowCard from './GlowCard';

gsap.registerPlugin(ScrollTrigger);

const eventsData = [
  {
    id: 1,
    date: "19/07/26",
    day: "Sunday",
    mode: "Online",
    title: "Aptitude Test 1",
    desc: "Quantitative Aptitude & Logical Reasoning",
    icon: Target
  },
  {
    id: 2,
    date: "09/08/26",
    day: "Sunday",
    mode: "Online",
    title: "Aptitude Test 2 & Peer Learning 1",
    desc: "(Python, DBMS, OOP) + Vibe Coding",
    icon: Code
  },
  {
    id: 3,
    date: "16/08/26",
    day: "Sunday",
    mode: "Online",
    title: "Alumni Connect",
    desc: "Internship & Higher Studies Guidance",
    icon: Users
  },
  {
    id: 4,
    date: "21/08/26",
    day: "Friday",
    mode: "Offline",
    title: "Prompt Engineering Challenge",
    desc: "Test your AI interaction skills.",
    icon: Lightbulb
  },
  {
    id: 5,
    date: "30/08/26",
    day: "Sunday",
    mode: "Online",
    title: "Competitive Coding Session",
    desc: "Round 1 of the ultimate coding face-off.",
    icon: Monitor
  },
  {
    id: 6,
    date: "07/09/26",
    day: "Monday",
    mode: "Offline",
    title: "Expert Talk",
    desc: "DataScience To Industry: Bridging the Academic Gap.",
    icon: Award
  },
  {
    id: 7,
    date: "13/09/26",
    day: "Sunday",
    mode: "Online",
    title: "Peer Learning 2 & Coding Round 2",
    desc: "Agritech & IOT integration with AI.",
    icon: Users
  },
  {
    id: 8,
    date: "16/10/26",
    day: "Friday",
    mode: "Offline",
    title: "AI Innovation Challenge",
    desc: "Project Showcase & Grand Finale.",
    icon: Award
  }
];

export default function EventsSection() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const eventCards = gsap.utils.toArray('.event-card');
      
      eventCards.forEach((card, i) => {
        gsap.fromTo(card, 
          { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      gsap.fromTo('.timeline-line', 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          transformOrigin: "top", 
          ease: "none",
          scrollTrigger: {
            trigger: '.events-container',
            start: "top 70%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="events" ref={containerRef} className="w-full min-h-screen py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Stakeholder Connect <span className="text-cyber-blue">Activity Calendar</span>
        </h2>
        <p className="text-gray-400 text-lg font-light tracking-widest uppercase">
          Odd Semester 26-27
        </p>
      </div>

      <div className="events-container relative w-full">
        {/* Timeline Line */}
        <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyber-blue via-purple-500 to-transparent -translate-x-1/2 hidden md:block"></div>

        <div className="flex flex-col gap-12 relative z-10">
          {eventsData.map((evt, idx) => (
            <div key={evt.id} className={`event-card flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0015] border-2 border-cyber-blue items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)] z-20">
                <Calendar size={16} className="text-white" />
              </div>

              {/* Empty Space for opposing side */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Event Content Card */}
              <div className="w-full md:w-[45%]">
                <GlowCard className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl hover:border-cyber-blue/40 transition-all duration-300 group shadow-lg">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-cyber-blue font-mono text-sm tracking-widest mb-1">{evt.date} • {evt.day}</div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">{evt.title}</h3>
                      </div>
                      <div className="p-3 bg-black/40 rounded-xl group-hover:scale-110 transition-transform">
                        <evt.icon size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </div>
                    <p className="text-gray-400 font-light mb-4">{evt.desc}</p>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs rounded-full border ${evt.mode === 'Online' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'border-orange-500/30 text-orange-400 bg-orange-500/10'} flex items-center gap-1`}>
                        {evt.mode === 'Online' ? <Monitor size={12} /> : <MapPin size={12} />}
                        {evt.mode}
                      </span>
                    </div>
                  </div>
                </GlowCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
