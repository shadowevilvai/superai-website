import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Zap } from 'lucide-react';

export default function Navbar({ isScrolledDown, theme, setTheme }) {
  return (
    <nav className={`fixed w-full z-50 top-0 backdrop-blur-xl border-b transition-all duration-300 ${
      isScrolledDown ? '-translate-y-full' : 'translate-y-0'
    } ${
      theme === 'hacker' ? 'bg-black/80 border-[#00ff41]/20' : 'bg-[#020205]/60 border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-24 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <span className={`font-bold text-lg tracking-[0.2em] ${theme === 'hacker' ? 'font-mono text-[#00ff41]' : 'font-orbitron'}`}>
            SUPER<span className={theme === 'hacker' ? 'text-[#008f11]' : 'text-gray-500'}>AI</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-[0.15em] text-gray-400">
          <Link to="/" data-text="HOME" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>HOME</Link>
          <Link to="/about" data-text="ABOUT US" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>ABOUT US</Link>
          <Link to="/team" data-text="TEAM" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>TEAM</Link>
          <Link to="/events" data-text="EVENTS" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>EVENTS</Link>
          <Link to="/projects" data-text="PROJECTS" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>PROJECTS</Link>
          <Link to="/contact" data-text="CONTACT" className={`glitch-hover transition-colors duration-300 ${theme === 'hacker' ? 'hover:text-[#00ff41]' : 'hover:text-white'}`}>CONTACT</Link>
          
          <a href="https://forms.gle/Eewu8oQ3kkMEt5ka7" target="_blank" rel="noreferrer" className="px-5 py-2 bg-cyber-blue text-black font-bold tracking-widest text-xs rounded-full hover:scale-105 transition-transform duration-300">
            JOIN US
          </a>
          
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
  );
}
