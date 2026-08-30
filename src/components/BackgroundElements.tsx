import { motion } from 'motion/react';

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Deep Navy/Black Background Base */}
      <div className="absolute inset-0 bg-[#05070c]" />

      {/* Subtle deep-blue atmospheric lighting behind the portrait area */}
      <div 
        className="absolute -top-[10%] left-[5%] md:left-[10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 138, 0.45) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)'
        }}
      />

      {/* Secondary very faint ambient accent */}
      <div 
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)'
        }}
      />

      {/* Fine curved electric-blue light trail / arc across the hero */}
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="blueArcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.65" />
            <stop offset="65%" stopColor="#2563eb" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
          </linearGradient>
          <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Soft glowing line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          d="M 50,-100 Q 560,20 620,280 T 150,750"
          fill="none"
          stroke="url(#blueArcGradient)"
          strokeWidth="1.5"
          filter="url(#arcGlow)"
        />

        {/* Crisp core line */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeInOut" }}
          d="M 50,-100 Q 560,20 620,280 T 150,750"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="0.75"
          strokeOpacity="0.5"
        />
      </svg>

      {/* Subtle cinematic vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 55%, rgba(4, 5, 8, 0.75) 100%)'
        }}
      />
    </div>
  );
}
