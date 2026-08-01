import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, X } from 'lucide-react';

export default function TerminalModule({ 
  icon: Icon, 
  title, 
  description, 
  codeSnippet, 
  colSpan = 1,
  iconColor = "text-cyber-blue",
  iconBgIcon: BgIcon
}) {
  const [isTerminal, setIsTerminal] = useState(false);
  const [typedCode, setTypedCode] = useState("");

  useEffect(() => {
    if (isTerminal) {
      let i = 0;
      setTypedCode("");
      
      import('../utils/audio').then(m => m.playTypingSound());

      const interval = setInterval(() => {
        setTypedCode(codeSnippet.substring(0, i));
        i++;
        if (i > codeSnippet.length) {
          clearInterval(interval);
          import('../utils/audio').then(m => m.stopTypingSound());
        }
      }, 15);
      return () => {
        clearInterval(interval);
        import('../utils/audio').then(m => m.stopTypingSound());
      };
    }
  }, [isTerminal, codeSnippet]);

  return (
    <div 
      className={`glass-card p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500 group relative overflow-hidden cursor-pointer flex flex-col justify-center min-h-[250px] ${colSpan === 2 ? 'md:col-span-2' : ''}`}
      onClick={() => !isTerminal && setIsTerminal(true)}
    >
      {isTerminal ? (
        <div className="absolute inset-0 bg-black/90 z-20 flex flex-col font-mono text-left">
          <div className="flex justify-between items-center bg-[#1a1a1a] p-3 border-b border-gray-800">
            <div className="flex gap-2 items-center">
              <TerminalIcon size={16} className="text-gray-400" />
              <span className="text-xs text-gray-400">~/superai/{title.toLowerCase().replace(/ /g, '_')}.py</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsTerminal(false);
              }} 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-6 text-sm text-[#00ff41] overflow-auto whitespace-pre">
            {typedCode}
            <span className="animate-pulse">_</span>
          </div>
        </div>
      ) : (
        <>
          {BgIcon && (
            <div className={`absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity ${colSpan === 2 ? 'top-10 right-10 opacity-10 group-hover:opacity-30 duration-700' : ''}`}>
              <BgIcon size={colSpan === 2 ? 120 : 100} />
            </div>
          )}
          <div className="relative z-10 flex flex-col h-full justify-end">
            <Icon size={32} className={`${iconColor} mb-6 group-hover:scale-110 transition-transform`} />
            <h3 data-text={title} className={`glitch-hover w-fit font-semibold tracking-wide mb-4 ${colSpan === 2 ? 'text-3xl' : 'text-2xl'}`}>{title}</h3>
            <p className={`text-gray-400 font-light leading-relaxed ${colSpan === 2 ? 'max-w-md' : 'text-sm'}`}>
              {description}
            </p>
            <div className="mt-6 text-xs font-mono text-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity">
              &gt; CLICK TO INITIALIZE MODULE
            </div>
          </div>
        </>
      )}
    </div>
  );
}
