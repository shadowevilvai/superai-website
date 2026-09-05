import React, { useState } from 'react';
import eventsData from '../data/events.json';
import GlowCard from '../components/GlowCard';
import { Search, Calendar, ExternalLink } from 'lucide-react';
import EventsSection from '../components/EventsSection';

export default function Events({ theme }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const upcomingEvents = eventsData.filter(e => e.type === 'upcoming');
  const pastEvents = eventsData.filter(e => e.type === 'past');
  
  const filteredPast = pastEvents.filter(e => 
    e.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    e.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen pt-24 pb-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          SuperAI <span className="text-cyber-blue">Events</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
          Discover our upcoming workshops, seminars, and hackathons. Browse through our archive of past events to see the impact we've made.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">Upcoming</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map(event => (
            <a key={event.id} href={event.link} target="_blank" rel="noreferrer" className="block group">
              <GlowCard className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] hover:border-cyber-blue/30 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2 text-cyber-blue font-mono text-sm">
                    <Calendar size={16} />
                    {event.date}
                  </div>
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-cyber-blue group-hover:text-black transition-colors">
                    <ExternalLink size={16} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyber-blue transition-colors">{event.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{event.description}</p>
              </GlowCard>
            </a>
          ))}
          {upcomingEvents.length === 0 && (
            <p className="text-gray-500 font-light">No upcoming events scheduled right now. Stay tuned!</p>
          )}
        </div>
      </div>

      {/* Legacy Events Section */}
      <div className="mb-32 mt-12">
        <EventsSection />
      </div>

      {/* Past Events */}
      <div id="past-events">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4 flex-1">
            <h2 className="text-3xl font-bold text-white tracking-tight">Archive</h2>
            <div className="h-[1px] flex-1 bg-white/10 hidden md:block"></div>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Search past events..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-cyber-blue focus:bg-white/10 transition-colors"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPast.map(event => (
            <div key={event.id} className="glass-card flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden hover:bg-white/[0.03] transition-colors group">
              <div className="h-48 w-full bg-white/5 relative overflow-hidden flex items-center justify-center">
                {event.image && (event.image.startsWith("http") || event.image.startsWith("/") || event.image.startsWith("../")) ? (
                  <img src={event.image.replace("../", "/src/")} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-gray-600 font-mono text-xs">{event.image}</span>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-mono text-gray-300">
                  {event.date}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">{event.title}</h3>
                <p className="text-gray-400 text-sm font-light mb-6 mt-auto line-clamp-4 leading-relaxed">{event.description}</p>
                <div className="text-xs tracking-widest text-gray-500 uppercase font-semibold border-t border-white/5 pt-4 mt-auto">
                  Past Event
                </div>
              </div>
            </div>
          ))}
          {filteredPast.length === 0 && (
            <p className="text-gray-500 font-light col-span-full text-center py-12">No events found matching your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
