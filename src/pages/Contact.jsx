import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';

export default function Contact({ theme }) {
  return (
    <div className="w-full min-h-[80vh] pt-32 pb-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
      <div className="flex flex-col justify-center">
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
      <div className="w-full h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group">
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
  );
}
