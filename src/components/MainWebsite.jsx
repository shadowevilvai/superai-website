import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Cpu, ChevronDown, Database, Network, Eye, Layers, Mail, MapPin, Globe, Terminal, Zap } from 'lucide-react';
import TeamSection from './TeamSection';
import MeshGradient from './MeshGradient';
import SolarSystemHero from './SolarSystemHero';
import EventsSection from './EventsSection';
import ScrambleText from './ScrambleText';
import CursorTrail from './CursorTrail';
import ParallaxBackground from './ParallaxBackground';
import TerminalModule from './TerminalModule';
import FloatingOrbs from './FloatingOrbs';
import FloatingParticles from './FloatingParticles';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function MainWebsite() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [theme, setTheme] = useState('cyber'); // 'cyber' or 'hacker'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Section fade out on scroll
      gsap.to('.hero-content', {
        y: -100,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // 5. Reveal animations for all sections
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            },
          }
        );
      });

      // 6. Staggered card reveals
      const cardGrids = gsap.utils.toArray('.card-grid');
      cardGrids.forEach((grid) => {
        const cards = grid.querySelectorAll('.glass-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: grid,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        theme === 'hacker' 
          ? 'bg-black text-[#00ff41] font-mono selection:bg-[#00ff41]/30 selection:text-[#00ff41]' 
          : 'bg-[#020205] text-white font-sans selection:bg-white/20 selection:text-white'
      }`}
    >
      
      {/* ---------------- BACKGROUND ELEMENTS ---------------- */}
      <MeshGradient />
      <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${theme === 'hacker' ? 'opacity-30' : 'opacity-10'}`} 
           style={{
             backgroundImage: `linear-gradient(to right, ${theme === 'hacker' ? '#00ff41' : '#ffffff'} 1px, transparent 1px), linear-gradient(to bottom, ${theme === 'hacker' ? '#00ff41' : '#ffffff'} 1px, transparent 1px)`,
             backgroundSize: '40px 40px',
             maskImage: 'linear-gradient(to bottom, transparent 20%, black 80%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 80%, transparent 100%)',
             transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(100px)'
           }}>
      </div>
      <FloatingOrbs />
      <FloatingParticles />
      <ParallaxBackground />
      <CursorTrail />
      
      {/* Interactive 3D Robot - Tracks Cursor */}
      {/* ----------------------------------------------------- */}


      {/* Elegant Minimal Navbar */}
      <nav className={`fixed w-full z-50 top-0 backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolledDown ? '-translate-y-full' : 'translate-y-0'
      } ${
        theme === 'hacker' ? 'bg-black/80 border-[#00ff41]/20' : 'bg-[#020205]/60 border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
            <span className={`font-bold text-lg tracking-[0.2em] ${theme === 'hacker' ? 'font-mono text-[#00ff41]' : 'font-orbitron'}`}>
              SUPER<span className={theme === 'hacker' ? 'text-[#008f11]' : 'text-gray-500'}>AI</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-[0.15em] text-gray-400">
            <a href="#about" data-text="ABOUT" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>ABOUT</a>
            <a href="#modules" data-text="MODULES" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>MODULES</a>
            <a href="#team" data-text="TEAM" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>TEAM</a>
            <a href="#events" data-text="EVENTS" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>EVENTS</a>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => {
                setTheme(theme === 'cyber' ? 'hacker' : 'cyber');
                import('../utils/audio').then(m => m.playSwitchSound());
              }}
              className={`p-2 rounded-full border transition-all duration-300 flex items-center justify-center ${
                theme === 'hacker' 
                  ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41] shadow-[0_0_10px_#00ff41]' 
                  : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
              }`}
              title="Toggle Vibe"
            >
              {theme === 'cyber' ? <Terminal size={16} /> : <Zap size={16} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center">
        
        {/* Cinematic Hero Section */}
        <section ref={heroRef} className="w-full h-screen flex flex-col md:flex-row justify-center items-center px-6 text-center md:text-left relative">
          <div className="hero-content flex flex-col items-center md:items-start mt-20 md:mt-0 md:w-1/2 z-10">
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 min-h-[140px]">
              <ScrambleText text="Build the" /><br />
              <ScrambleText text="Future." />
            </h1>
            <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-12">
              The premier Artificial Intelligence club at Thakur College of Engineering & Technology (TCET), pioneering research and innovation.
            </p>
            <MagneticButton className="group relative px-8 py-4 bg-white text-black font-semibold tracking-widest rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                EXPLORE MODULES <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </MagneticButton>
          </div>

          <div className="hero-content absolute inset-0 w-full h-full opacity-30 md:opacity-100 z-0 flex items-center justify-center pointer-events-none">
            <SolarSystemHero />
          </div>
          
          
          <div className="absolute bottom-10 animate-bounce text-gray-600">
            <ChevronDown size={24} />
          </div>
        </section>

        {/* Bento Box Modules Section */}
        <section id="modules" className="reveal-section w-full min-h-screen flex items-center px-6 py-24 max-w-7xl mx-auto">
          <div className="w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              Core <span className="text-gray-500">Modules</span>
            </h2>
            
            <div className="card-grid w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <TerminalModule
                icon={Network}
                BgIcon={Network}
                title="Generative AI & LLMs"
                description="Deep dive into transformer architectures, prompt engineering, and building powerful conversational agents using state-of-the-art language models."
                colSpan={2}
                iconColor="text-cyber-blue"
                codeSnippet={`from transformers import pipeline

print("Initializing Generative AI Module...")
llm = pipeline('text-generation', model='gpt2')

prompt = "The future of AI in engineering is"
response = llm(prompt, max_length=50)

print("Generated Output:")
print(response[0]['generated_text'])
# SYSTEM_READY`}
              />

              <TerminalModule
                icon={Eye}
                title="Computer Vision"
                description="Image recognition, object detection, and visual generative models. Understanding how machines interpret the visual world."
                iconColor="text-purple-400"
                codeSnippet={`import cv2
import numpy as np

print("Initializing Computer Vision System...")
model = cv2.dnn.readNetFromDarknet(cfg, weights)
image = cv2.imread('input.jpg')

blob = cv2.dnn.blobFromImage(image, 1/255.0, (416, 416))
model.setInput(blob)
outputs = model.forward()

print("Objects Detected: [1] Person [1] Robot")
# VISION_ACTIVE`}
              />

              <TerminalModule
                icon={Database}
                title="Data Analytics"
                description="Data preprocessing, statistical modeling, and insights generation. The foundational bedrock of all intelligent systems."
                iconColor="text-gray-300"
                codeSnippet={`import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

print("Processing Data Analytics Pipeline...")
dataset = pd.read_csv('massive_data.csv')
features = dataset.dropna().select_dtypes(include=[np.number])

kmeans = KMeans(n_clusters=5)
clusters = kmeans.fit_predict(features)

print(f"Discovered {len(np.unique(clusters))} hidden patterns.")
# ANALYTICS_COMPLETE`}
              />

              <TerminalModule
                icon={Layers}
                BgIcon={Layers}
                title="Reinforcement Learning"
                description="Training autonomous agents through reward systems. From game-playing bots to robotic control systems."
                colSpan={2}
                iconColor="text-fuchsia-400"
                codeSnippet={`import gym
import numpy as np

print("Booting Reinforcement Agent...")
env = gym.make('CartPole-v1')
state = env.reset()

for step in range(100):
    env.render()
    # Random action for baseline
    action = env.action_space.sample() 
    next_state, reward, done, info = env.step(action)
    if done:
        break

print("Training cycle 1/1000 completed. Reward: +10")
# AGENT_LEARNING`}
              />
              
            </div>
          </div>
        </section>

        {/* Seamless Flow: About Section */}
        <section id="about" className="reveal-section w-full min-h-screen flex items-center px-6 py-32 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                TCET <span className="text-gray-500">SuperAI</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                We are a collective of driven engineers, researchers, and creators pushing the boundaries of what's possible with artificial intelligence at Thakur College of Engineering & Technology. 
              </p>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-6">
                Through hands-on projects, intensive workshops, and collaborative research, we transform theoretical knowledge into production-ready systems.
              </p>
              <p className="text-cyber-blue text-lg leading-relaxed font-medium">
                Our Mission: "To make graduates Globally Competent, Locally Relevant and Skill Oriented."
              </p>
            </div>
            
            <div className="card-grid grid gap-6">
              {[
                { title: "Applied Research", icon: Cpu, desc: "Dive deep into neural architectures and generative models." },
                { title: "Production Systems", icon: Code, desc: "Learn to deploy scalable AI infrastructure in the real world." }
              ].map((item, i) => (
                <div key={i} className="glass-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] transition-colors duration-500 hover:-translate-y-1">
                  <item.icon size={28} className="text-white mb-6" />
                  <h3 className="text-xl font-semibold tracking-wide mb-3">{item.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seamless Flow: Events Calendar Section */}
        <EventsSection />

        {/* Seamless Flow: Team Section */}
        <TeamSection />

        {/* Footer / Contact with Smooth Transition */}
        <footer id="contact" className="w-full pt-48 pb-16 px-6 relative overflow-hidden flex flex-col items-center">
          
          {/* Smooth Fade Transition from Team Section */}
          <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0a0015]/80 to-[#030303] z-0 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-[#030303] z-[-1]"></div>

          <div className="w-full max-w-7xl mx-auto z-10 grid md:grid-cols-2 gap-16 mb-24">
            {/* Contact Details */}
            <div className="reveal-section flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">Join the Community.</h2>
              <p className="text-gray-400 text-lg font-light mb-12">
                Ready to innovate and push the boundaries of AI with us? Visit us or drop an email to get started.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:superai@tcetmumbai.in" className="flex items-center gap-4 group cursor-pointer hover:text-cyber-blue transition-colors duration-300 w-fit">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-cyber-blue/10 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold tracking-widest uppercase mb-1">Email Us</p>
                    <p className="text-lg">superai@tcetmumbai.in</p>
                  </div>
                </a>

                <a href="https://www.tcetmumbai.in/" target="_blank" rel="noreferrer" className="flex items-center gap-4 group cursor-pointer hover:text-purple-400 transition-colors duration-300 w-fit">
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-purple-400/10 transition-colors">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold tracking-widest uppercase mb-1">Official Website</p>
                    <p className="text-lg">tcetmumbai.in</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 rounded-full bg-white/5">
                    <MapPin size={24} className="text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold tracking-widest uppercase mb-1">Visit Us</p>
                    <p className="text-gray-300 max-w-xs">
                      Thakur College of Engineering and Technology, Shyamnarayan Thakur Marg, Thakur Village, Kandivali East, Mumbai 400101.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="reveal-section w-full h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <div className="absolute inset-0 bg-cyber-blue/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000 pointer-events-none z-10"></div>
              <iframe
                src="https://maps.google.com/maps?q=Thakur%20College%20of%20Engineering%20and%20Technology&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(110%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

          <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm font-light z-10 border-t border-white/5 pt-12">
            <div className="flex items-center gap-3">
              <span>&copy; {new Date().getFullYear()} TCET SUPER AI. All rights reserved.</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
