import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Code, Cpu, ChevronDown, Network, Eye, Layers, Terminal, Database, Users, TrendingUp, Shield, BookOpen, Lightbulb, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SolarSystemHero from '../components/SolarSystemHero';
import ScrambleText from '../components/ScrambleText';
import MagneticButton from '../components/MagneticButton';
import TerminalModule from '../components/TerminalModule';
import eventsData from '../data/events.json';
import projectsData from '../data/projects.json';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);

export default function Home({ theme }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);

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

      // Reveal animations for all sections
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

      // Staggered card reveals
      const cardGrids = gsap.utils.toArray('.card-grid');
      cardGrids.forEach((grid) => {
        const cards = grid.querySelectorAll('.glass-card, .terminal-module, .stat-card');
        if (cards.length) {
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
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const upcomingEvents = eventsData.filter(e => e.type === 'upcoming');
  const pastEvents = eventsData.filter(e => e.type === 'past');

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      
      {/* ---------------- 1. Cinematic Hero Section ---------------- */}
      <section ref={heroRef} className="w-full h-screen flex flex-col md:flex-row justify-center items-center px-6 text-center md:text-left relative">
        <div className="hero-content flex flex-col items-center md:items-start mt-20 md:mt-0 md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 min-h-[140px]">
            <ScrambleText text="Build the" /><br />
            <ScrambleText text="Future." />
          </h1>
          <p className="max-w-xl text-gray-400 text-lg md:text-xl font-light tracking-wide leading-relaxed mb-12">
            The premier Artificial Intelligence club at Thakur College of Engineering & Technology (TCET), pioneering research and innovation.
          </p>
          <a href="#about">
            <MagneticButton className="group relative px-8 py-4 bg-white text-black font-semibold tracking-widest rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform duration-500 cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                DISCOVER SUPERAI <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </MagneticButton>
          </a>
        </div>

        <div className="hidden md:block md:w-1/2 h-full z-0"></div>

        <div className="hero-content absolute inset-0 w-full h-full opacity-30 md:opacity-100 z-0 flex items-center justify-center pointer-events-none">
          <SolarSystemHero />
        </div>
        
        <div className="absolute bottom-10 animate-bounce text-gray-600">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ---------------- 2. Impact at a Glance (Stats) ---------------- */}
      <section className="reveal-section w-full border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm tracking-[0.2em] text-cyber-blue uppercase font-semibold">Impact at a Glance</h2>
          </div>
          <div className="card-grid flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="stat-card text-center">
              <p className="text-4xl md:text-6xl font-bold text-white mb-2">86</p>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase max-w-[150px]">Agentic AI Workflows</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-4xl md:text-6xl font-bold text-cyber-blue mb-2">76</p>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase max-w-[150px]">MLOps & Deployments</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-4xl md:text-6xl font-bold text-purple-400 mb-2">121+</p>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase max-w-[150px]">Aptitude Assessments</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-4xl md:text-6xl font-bold text-white mb-2">100</p>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase max-w-[150px]">Coding Challenges</p>
            </div>
            <div className="stat-card text-center">
              <p className="text-4xl md:text-6xl font-bold text-gray-400 mb-2">12</p>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase max-w-[150px]">AI Prototypes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. About Us Snapshot ---------------- */}
      <section id="about" className="reveal-section w-full min-h-[70vh] flex items-center justify-center px-6 py-24 max-w-5xl mx-auto">
        <Link to="/about" className="group block w-full">
          <div className="glass-card w-full p-12 md:p-20 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowRight size={20} className="group-hover:-rotate-45 transition-transform duration-300" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              What is <span className="text-gray-500 group-hover:text-cyber-blue transition-colors duration-300">SuperAI?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-6 max-w-3xl">
              SuperAI Community - Stakeholder Connect bridges the gap between academic learning and industry-ready execution through hands-on technical exposure, peer-led learning, career development, and real-world problem solving.
            </p>
            <div className="flex gap-4 mt-8">
              <span className="px-4 py-2 border border-white/10 rounded-full text-xs tracking-widest text-gray-300 group-hover:border-cyber-blue/30 transition-colors">RESEARCH</span>
              <span className="px-4 py-2 border border-white/10 rounded-full text-xs tracking-widest text-gray-300 group-hover:border-cyber-blue/30 transition-colors">LEARN</span>
              <span className="px-4 py-2 border border-white/10 rounded-full text-xs tracking-widest text-gray-300 group-hover:border-cyber-blue/30 transition-colors">BUILD</span>
            </div>
          </div>
        </Link>
      </section>

      {/* ---------------- 4. Meet the Team Teaser ---------------- */}
      <section className="reveal-section w-full px-6 pb-24 max-w-7xl mx-auto">
        <Link to="/team" className="group block w-full relative h-[60vh] rounded-[3rem] overflow-hidden border border-white/10" aria-label="Meet the Team">
          <div className="absolute inset-0 bg-gray-900">
            {/* Placeholder for actual committee photo */}
            <div className="w-full h-full bg-[url('/team-img.jpeg')] bg-cover bg-[50%_20%] opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl shadow-black">
              Meet the <span className="text-cyber-blue">Minds</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl font-light drop-shadow-md max-w-2xl mb-8">
              The driving force behind SuperAI TCET.
            </p>
            <div className="px-6 py-3 bg-white text-black font-semibold tracking-widest text-sm rounded-full flex items-center gap-2 group-hover:bg-cyber-blue transition-colors">
              VIEW COMMITTEE <ArrowRight size={16} />
            </div>
          </div>
        </Link>
      </section>

      {/* ---------------- 5. Events Hub ---------------- */}
      <section className="reveal-section w-full pt-32 pb-16 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Events <span className="text-gray-500">Hub</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg font-light">
              Register for upcoming workshops or browse our past technical seminars.
            </p>
          </div>
          <Link to="/events" className="text-sm tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">VIEW ALL EVENTS</Link>
        </div>
        
        {/* Upcoming Events - Centered/Full Width */}
        <div className="mb-20 max-w-4xl mx-auto">
          <h3 className="text-xs font-semibold tracking-[0.2em] text-cyber-blue mb-8 uppercase flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></span> Upcoming
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map(event => (
              <a key={event.id} href={event.link} target="_blank" rel="noreferrer" className="glass-card flex items-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-cyber-blue/30 transition-all group">
                <div className="flex-1">
                  <p className="text-gray-500 font-mono text-sm mb-2">{event.date}</p>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">{event.title}</h4>
                  <p className="text-gray-400 text-sm font-light">{event.description}</p>
                </div>
                <div className="ml-4 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyber-blue group-hover:text-black group-hover:border-cyber-blue transition-all shrink-0">
                  <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Events Showcase (Coverflow Carousel) */}
      <section className="w-full pt-10 pb-24 overflow-hidden bg-[#020205] relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
           <h3 className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase text-center md:text-left">Past Archive: Offline Highlights</h3>
           <Link to="/events#past-events" className="inline-flex items-center gap-2 text-cyber-blue hover:text-white transition-colors text-sm font-mono border border-cyber-blue/30 px-5 py-2.5 rounded-lg hover:bg-cyber-blue/10 mx-auto md:mx-0 shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]">
               View All Past Events <ArrowRight size={16} />
           </Link>
        </div>
        
        {/* Glow behind the carousel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-48 bg-cyber-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative w-full overflow-visible max-w-[1400px] mx-auto px-4 z-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            loopedSlides={10}
            speed={600}
            autoplay={{
              delay: 1200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 250,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full py-8"
          >
            {[
              { title: "Prompters League", date: "Recent", image: "/events/prompters_league.jpg", description: "A highly competitive 3-round prompting based challenge. Congratulations to our winners Krish J and Tushar H!", attendees: "80+", winners: "Krish J & Tushar H" },
              { title: "Career Roadmap Talk", date: "4th April 2026", image: "/events/event_89.jpeg", description: "An exclusive talk discussing AI/ML industry trends, giving students a clear roadmap to kickstart their data science careers.", attendees: "200+", winners: "N/A" },
              { title: "Peer Learning Session", date: "22nd February 2026", image: "/events/event_85.jpeg", description: "Interactive hands-on session focusing on data analytics workflows, pandas, and data visualization best practices.", attendees: "120+", winners: "Group A" },
              { title: "Roles of Data Scientists", date: "30th August 2025", image: "/events/event_3.jpg", description: "A deep dive into the evolving roles of data professionals, exploring the differences between analysts, engineers, and scientists.", attendees: "150+", winners: "N/A" },
              { title: "Visit to AR/VR Lab", date: "2 August 2024", image: "/events/event_54.jpg", description: "Lab visit focusing on AR/VR in gaming, exploring real-time rendering and hands-on demonstrations with VR devices.", attendees: "80+", winners: "N/A" },
              { title: "Offline Coding Competition", date: "13th October 2023", image: "/events/event_36.jpg", description: "A challenging platform to enhance coding and problem-solving skills spanning various difficulty levels on HackerRank.", attendees: "250+", winners: "Priya S." },
              { title: "Major Project Session", date: "14th March 2024", image: "/events/event_38.jpg", description: "Offline workshop guiding final-year students through drafting a Black Book for their Major Projects.", attendees: "100+", winners: "N/A" },
              { title: "Workshop on Blockchain", date: "22nd March 2025", image: "/events/event_40.jpg", description: "Immersive workshop on the evolving landscape of decentralized technologies, smart contracts, and Web3.", attendees: "130+", winners: "N/A" },
              { title: "IoT-based AI Systems", date: "16th March 2025", image: "/events/event_50.jpg", description: "An overview of how IoT devices work in conjunction with Artificial Intelligence to create intelligent environments.", attendees: "160+", winners: "N/A" },
              { title: "Ideathon 2023", date: "23rd March 2023", image: "/events/event_97.jpeg", description: "A competitive brainstorming event where teams pitched innovative AI-driven solutions for real-world healthcare problems.", attendees: "300+", winners: "Team NeuralNet" },
              { title: "Chatgpt Competition", date: "16th February 2023", image: "/events/event_1.jpg", description: "A prompt-engineering battle testing students' ability to generate the most accurate and creative outputs using LLMs.", attendees: "180+", winners: "Alex D." },
              { title: "DSA & Programming", date: "11th October 2022", image: "/events/event_36.jpg", description: "A foundational seminar on Data Structures and Algorithms with a focus on competitive programming strategies.", attendees: "250+", winners: "N/A" },
              // Duplicate the array to ensure seamless looping without gaps
              { title: "Prompters League", date: "Recent", image: "/events/prompters_league.jpg", description: "A highly competitive 3-round prompting based challenge. Congratulations to our winners Krish J and Tushar H!", attendees: "80+", winners: "Krish J & Tushar H" },
              { title: "Career Roadmap Talk", date: "4th April 2026", image: "/events/event_89.jpeg", description: "An exclusive talk discussing AI/ML industry trends, giving students a clear roadmap to kickstart their data science careers.", attendees: "200+", winners: "N/A" },
              { title: "Peer Learning Session", date: "22nd February 2026", image: "/events/event_85.jpeg", description: "Interactive hands-on session focusing on data analytics workflows, pandas, and data visualization best practices.", attendees: "120+", winners: "Group A" },
              { title: "Roles of Data Scientists", date: "30th August 2025", image: "/events/event_3.jpg", description: "A deep dive into the evolving roles of data professionals, exploring the differences between analysts, engineers, and scientists.", attendees: "150+", winners: "N/A" },
              { title: "Visit to AR/VR Lab", date: "2 August 2024", image: "/events/event_54.jpg", description: "Lab visit focusing on AR/VR in gaming, exploring real-time rendering and hands-on demonstrations with VR devices.", attendees: "80+", winners: "N/A" },
              { title: "Offline Coding Competition", date: "13th October 2023", image: "/events/event_36.jpg", description: "A challenging platform to enhance coding and problem-solving skills spanning various difficulty levels on HackerRank.", attendees: "250+", winners: "Priya S." },
              { title: "Major Project Session", date: "14th March 2024", image: "/events/event_38.jpg", description: "Offline workshop guiding final-year students through drafting a Black Book for their Major Projects.", attendees: "100+", winners: "N/A" },
              { title: "Workshop on Blockchain", date: "22nd March 2025", image: "/events/event_40.jpg", description: "Immersive workshop on the evolving landscape of decentralized technologies, smart contracts, and Web3.", attendees: "130+", winners: "N/A" },
              { title: "IoT-based AI Systems", date: "16th March 2025", image: "/events/event_50.jpg", description: "An overview of how IoT devices work in conjunction with Artificial Intelligence to create intelligent environments.", attendees: "160+", winners: "N/A" },
              { title: "Ideathon 2023", date: "23rd March 2023", image: "/events/event_97.jpeg", description: "A competitive brainstorming event where teams pitched innovative AI-driven solutions for real-world healthcare problems.", attendees: "300+", winners: "Team NeuralNet" },
              { title: "Chatgpt Competition", date: "16th February 2023", image: "/events/event_1.jpg", description: "A prompt-engineering battle testing students' ability to generate the most accurate and creative outputs using LLMs.", attendees: "180+", winners: "Alex D." },
              { title: "DSA & Programming", date: "11th October 2022", image: "/events/event_36.jpg", description: "A foundational seminar on Data Structures and Algorithms with a focus on competitive programming strategies.", attendees: "250+", winners: "N/A" },
            ].map((evt, i) => (
              <SwiperSlide key={i} className="!w-[260px] md:!w-[380px] !h-[200px] md:!h-[260px] !overflow-visible group hover:!z-[100]">
                {/* Expanding Overlay Card */}
                <div className="absolute top-0 left-0 h-full w-[260px] md:w-[380px] md:group-hover:w-[760px] md:group-hover:-translate-x-[190px] bg-[#05050a] rounded-2xl shadow-2xl transition-all duration-500 flex overflow-hidden group-hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group-hover:border group-hover:border-cyber-blue/30 z-[100]">
                  
                  {/* Left: Image Container (Always visible) */}
                  <div className="w-[260px] md:w-[380px] h-full shrink-0 relative rounded-2xl overflow-hidden md:group-hover:rounded-r-none md:group-hover:rounded-l-2xl border border-white/10 md:group-hover:border-transparent transition-all duration-500">
                    <img src={evt.image.replace("../", "/src/")} alt={evt.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 md:group-hover:opacity-10 transition-opacity duration-500"></div>
                    
                    {/* Info on unhovered card */}
                    <div className="absolute bottom-6 left-6 right-6 md:group-hover:opacity-0 transition-opacity duration-300">
                      <p className="text-cyber-blue font-mono text-[10px] md:text-xs mb-1 tracking-widest uppercase shadow-black drop-shadow-md">{evt.date}</p>
                      <h4 className="text-white font-bold text-lg md:text-xl leading-tight drop-shadow-lg">{evt.title}</h4>
                    </div>
                  </div>

                  {/* Right: Details Container (Expands on hover) */}
                  <div className="w-0 md:group-hover:w-[380px] h-full overflow-hidden shrink-0 opacity-0 md:group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-0 md:group-hover:p-6 bg-gradient-to-br from-[#0a0a10] to-[#020205]">
                    <p className="text-cyber-blue font-mono text-[10px] mb-1 tracking-widest uppercase">{evt.date}</p>
                    <h4 className="text-white font-bold text-xl leading-tight mb-2">{evt.title}</h4>
                    <p className="text-gray-400 text-xs font-light mb-4 leading-relaxed line-clamp-4">{evt.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="block text-gray-500 text-[9px] uppercase tracking-widest mb-1 font-semibold">Attendees</span>
                        <span className="text-white font-mono text-xs">{evt.attendees}</span>
                      </div>
                      <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                        <span className="block text-gray-500 text-[9px] uppercase tracking-widest mb-1 font-semibold">Winners</span>
                        <span className="text-cyber-blue font-mono text-xs">{evt.winners}</span>
                      </div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ---------------- 6. Innovation & Projects ---------------- */}
      <section className="reveal-section w-full py-32 px-6 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Innovation & <span className="text-gray-500">Projects</span>
              </h2>
              <p className="text-gray-400 max-w-xl text-lg font-light">
                Showcase of active technical builds and research from the community.
              </p>
            </div>
            <Link to="/projects" className="text-sm tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors">VIEW ALL PROJECTS</Link>
          </div>

          <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(0, 3).map((item, index) => (
              <div key={item.id} className="glass-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-left group hover:bg-white/[0.05] transition-colors">
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded-full font-mono">{tech}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyber-blue transition-colors">{item.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  {item.description}
                </p>
                <a href={item.link} className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white group-hover:text-cyber-blue transition-colors">
                  CASE STUDY <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7. Student Resources ---------------- */}
      <section className="reveal-section w-full py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Student Resources</h2>
        <p className="text-gray-400 text-lg font-light mb-12 max-w-2xl mx-auto">
          Access our repository of workshop slides, code snippets, and algorithm study guides to accelerate your learning.
        </p>
        <div className="card-grid flex flex-wrap justify-center gap-6">
          <a href="#" className="glass-card flex items-center gap-4 p-4 pr-6 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 transition-all group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Download size={16} />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white">ML Bootcamp Slides</span>
          </a>
          <a href="#" className="glass-card flex items-center gap-4 p-4 pr-6 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 transition-all group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <Download size={16} />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white">Web3 Starter Kit</span>
          </a>
          <a href="#" className="glass-card flex items-center gap-4 p-4 pr-6 rounded-full bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 transition-all group">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
              <ExternalLink size={16} />
            </div>
            <span className="text-sm font-semibold tracking-wide text-gray-300 group-hover:text-white">GitHub Snippets Hub</span>
          </a>
        </div>
      </section>

      {/* ---------------- 8. Community Impact (Kshitij's Detailed Content) ---------------- */}
      <section className="reveal-section w-full py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            From Learning to <span className="text-cyber-blue">Real-World Impact</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed font-light">
            SuperAI Community is building more than technical skills. It is developing a generation of students who are industry-aware, problem-solving oriented, collaborative, confident, and committed to continuous learning.
          </p>
        </div>

        <div className="card-grid grid md:grid-cols-2 gap-12">
          
          {/* Technical Development */}
          <div className="glass-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-14 h-14 bg-cyber-blue/10 rounded-2xl flex items-center justify-center mb-6">
              <Code className="text-cyber-blue" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Technical Development</h3>
            <p className="text-gray-400 font-light mb-6">Students move beyond theory and gain practical exposure to emerging technologies.</p>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3"><span className="text-cyber-blue font-bold">86</span> students designed multi-agent automation workflows using CrewAI, LangGraph, and LangFuse.</li>
              <li className="flex items-start gap-3"><span className="text-cyber-blue font-bold">76</span> students gained hands-on experience with Docker, Kubernetes, and production MLOps.</li>
              <li className="flex items-start gap-3"><span className="text-cyber-blue font-bold">55</span> students explored R programming and Generative AI for data-driven applications.</li>
              <li className="flex items-start gap-3"><span className="text-cyber-blue font-bold">45</span> students worked with deep learning for medical image analysis.</li>
              <li className="flex items-start gap-3"><span className="text-cyber-blue font-bold">35</span> students connected AI/ML concepts with IoT hardware and protocols.</li>
            </ul>
          </div>

          {/* Career & Professional */}
          <div className="glass-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-14 h-14 bg-purple-400/10 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="text-purple-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Career & Professional Development</h3>
            <p className="text-gray-400 font-light mb-6">SuperAI Connect helps students understand what the industry expects and how to prepare for it.</p>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">67</span> students participated in Capgemini-focused placement preparation and evaluation activities.</li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">54</span> students strengthened their LinkedIn presence and professional branding.</li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">42</span> students gained insights into emerging technology roles, MLOps, and portfolio development.</li>
              <li className="flex items-start gap-3"><span className="text-purple-400 font-bold">23</span> final-year students learned structured technical documentation and project lifecycle reporting.</li>
            </ul>
          </div>

          {/* Problem Solving & Analytical */}
          <div className="glass-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-14 h-14 bg-green-400/10 rounded-2xl flex items-center justify-center mb-6">
              <Terminal className="text-green-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Problem Solving & Analytical Skills</h3>
            <p className="text-gray-400 font-light mb-6">Students regularly practice solving problems under realistic time and evaluation constraints.</p>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3"><span className="text-green-400 font-bold">121+</span> participants engaged in timed aptitude assessments across quantitative, logical, and verbal reasoning.</li>
              <li className="flex items-start gap-3"><span className="text-green-400 font-bold">Mock</span> GATE examinations provided students with 3-hour simulated testing environments.</li>
              <li className="flex items-start gap-3"><span className="text-green-400 font-bold">100</span> students participated in competitive coding and problem-solving challenges.</li>
            </ul>
          </div>

          {/* Leadership & Teamwork */}
          <div className="glass-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
            <div className="w-14 h-14 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Leadership, Teamwork & Innovation</h3>
            <p className="text-gray-400 font-light mb-6">Creating opportunities for students to take ownership, collaborate, and turn ideas into working solutions.</p>
            <ul className="space-y-4 text-sm text-gray-300 font-light">
              <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">100</span> (60 online + 40 offline) participants engaged in CodeHathon 3.0.</li>
              <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">12</span> student teams developed and presented working AI prototypes.</li>
              <li className="flex items-start gap-3"><span className="text-yellow-400 font-bold">53</span> students participated in alumni-led hackathon preparation focused on rapid problem solving and team coordination.</li>
            </ul>
          </div>

          {/* Industry Exposure & Lifelong Learning */}
          <div className="glass-card p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors md:col-span-2 grid md:grid-cols-2 gap-10">
            <div>
              <div className="w-14 h-14 bg-red-400/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="text-red-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Industry & Peer Learning</h3>
              <p className="text-gray-400 font-light mb-6 text-sm">Direct interaction with professionals and senior students leading knowledge transfer.</p>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">75</span> students gained enterprise insights from Workday Principal Data Scientists.</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">86</span> students explored market validation and AI business models.</li>
                <li className="flex items-start gap-3"><span className="text-red-400 font-bold">83.75%</span> of surveyed participants reported confidence after senior-led Blockchain sessions.</li>
              </ul>
            </div>
            <div>
              <div className="w-14 h-14 bg-orange-400/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="text-orange-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Responsible AI & Lifelong Learning</h3>
              <p className="text-gray-400 font-light mb-6 text-sm">Promoting continuous learning while encouraging critical thought about AI's impact.</p>
              <ul className="space-y-4 text-sm text-gray-300 font-light">
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">68</span> participants explored AI ethics, algorithmic bias, privacy, and AI for Good.</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">67</span> students explored applications of AI in Agriculture.</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">49</span> students explored AI applications in Smart Spaces.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center flex flex-wrap justify-center gap-4">
          <span className="text-sm font-semibold tracking-[0.2em] text-white">LEARN</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-600">•</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-white">BUILD</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-600">•</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-white">COLLABORATE</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-600">•</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-white">INNOVATE</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-600">•</span>
          <span className="text-sm font-semibold tracking-[0.2em] text-cyber-blue">LEAD</span>
        </div>
      </section>

      {/* ---------------- 9. Global Footer ---------------- */}
      <footer className="w-full border-t border-white/5 bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 md:gap-8">
          {/* Brand & Location */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
              Super<span className="text-cyber-blue">AI</span>
            </h2>
            <div className="flex items-start gap-3 text-gray-400 font-light mb-6">
              <MapPin className="text-gray-500 mt-1 flex-shrink-0" size={18} />
              <p className="text-sm">
                Thakur College of Engineering & Technology (TCET),<br />
                Kandivali East, Mumbai, Maharashtra 400101
              </p>
            </div>
            <a href="mailto:contact@superai.tcet.edu" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              <Mail size={16} /> contact@superai.tcet.edu
            </a>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col md:items-center">
            <div>
              <h3 className="text-sm font-bold tracking-[0.15em] text-white uppercase mb-6">Sitemap</h3>
              <ul className="space-y-4 text-sm font-light text-gray-400">
                <li><Link to="/" className="hover:text-cyber-blue transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-cyber-blue transition-colors">About Us</Link></li>
                <li><Link to="/team" className="hover:text-cyber-blue transition-colors">Meet the Team</Link></li>
                <li><Link to="/events" className="hover:text-cyber-blue transition-colors">Events Hub</Link></li>
                <li><Link to="/projects" className="hover:text-cyber-blue transition-colors">Projects & Innovations</Link></li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm font-bold tracking-[0.15em] text-white uppercase mb-6 md:text-right w-full">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/superai_tcet?igsi=MWVqMXRuNHZ0YWxsOQ==" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-cyber-blue/20 hover:text-cyber-blue transition-all duration-300 border border-white/10 hover:border-cyber-blue/50 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-cyber-blue transition-colors">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/superaiconnect-tcet/" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-all duration-300 border border-white/10 hover:border-blue-500/50 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-blue-500 transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600 font-mono tracking-widest">
          © 2026 SUPERAI TCET. ALL RIGHTS RESERVED.
        </div>
      </footer>
      
    </div>
  );
}


