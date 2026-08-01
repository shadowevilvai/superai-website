export default function Logo({ className = '' }) {
  return (
    <div className={`flex flex-col items-center justify-center bg-white rounded-full p-4 aspect-square ${className}`}>
      {/* Network Ring Icon */}
      <div className="relative w-16 h-16 mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Connecting Lines */}
          <path d="M50 15 L80 35 L70 70 L30 70 L20 35 Z" fill="none" stroke="#6366f1" strokeWidth="3" />
          
          {/* Nodes */}
          <circle cx="50" cy="15" r="6" fill="#4f46e5" /> {/* Top Purple */}
          <circle cx="80" cy="35" r="6" fill="#0ea5e9" /> {/* Top Right Cyan */}
          <circle cx="70" cy="70" r="6" fill="#ec4899" /> {/* Bottom Right Pink */}
          <circle cx="30" cy="70" r="6" fill="#f97316" /> {/* Bottom Left Orange */}
          <circle cx="20" cy="35" r="6" fill="#2563eb" /> {/* Top Left Blue */}
          
          {/* Center AI Text */}
          <text x="50" y="58" fontSize="32" fontWeight="bold" fill="#1e1b4b" textAnchor="middle" fontFamily="sans-serif">
            AI
          </text>
        </svg>
      </div>

      {/* SUPER AI Text */}
      <div className="text-xl font-bold font-sans tracking-tight leading-none mb-1 text-[#1e1b4b]">
        SUPER <span className="text-[#8b5cf6]">AI</span>
      </div>
      
      {/* Community Connect */}
      <div className="text-[0.5rem] font-semibold tracking-widest text-[#1e1b4b] mb-1">
        - COMMUNITY CONNECT -
      </div>
      
      {/* TCET AIML */}
      <div className="text-[0.6rem] font-bold text-[#f97316] tracking-wider">
        — TCET AIML —
      </div>
    </div>
  );
}
