import React from 'react';
import projectsData from '../data/projects.json';

export default function Projects({ theme }) {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
        Innovation & <span className="text-gray-500">Projects</span>
      </h1>
      <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
        Showcase of active technical builds and research initiatives from the SuperAI community.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {projectsData.map((item, index) => (
          <div key={item.id || index} className="glass-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md text-left group hover:bg-white/[0.05] transition-colors duration-500">
            <div className="h-48 w-full bg-white/5 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
               <div className="w-16 h-16 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-sm">PROJ_{index + 1}</span>
               </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded-full font-mono">{tech}</span>
              ))}
            </div>
            <h3 className="text-xl font-semibold tracking-wide mb-3 text-white group-hover:text-cyber-blue transition-colors">{item.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-6">
              {item.description}
            </p>
            <a href={item.link} className="text-sm tracking-widest text-white border-b border-white/30 pb-1 hover:border-white transition-colors cursor-pointer">VIEW REPOSITORY</a>
          </div>
        ))}
      </div>
    </div>
  );
}
