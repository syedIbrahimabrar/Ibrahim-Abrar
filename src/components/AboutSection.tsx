import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SkillItem {
  id: string;
  name: string;
  angle: number; // in degrees
  logo: string;
}

const FRONTEND_SKILLS: SkillItem[] = [
  {
    id: 'react',
    name: 'React',
    angle: 0,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    angle: 60,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    angle: 120,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    id: 'html5',
    name: 'HTML5',
    angle: 180,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    id: 'css3',
    name: 'CSS3',
    angle: 240,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    id: 'vite',
    name: 'Vite',
    angle: 300,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
  },
];

const BACKEND_SKILLS: SkillItem[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    angle: 0,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    id: 'supabase',
    name: 'Supabase',
    angle: 90,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    angle: 180,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    id: 'restapi',
    name: 'REST API',
    angle: 270,
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
  },
];

export function AboutSection() {
  const [isOuterPaused, setIsOuterPaused] = useState(false);
  const [isInnerPaused, setIsInnerPaused] = useState(false);

  // CSS for pausing animations on hover directly with pure GPU animation-play-state
  useEffect(() => {
    const styleId = 'orbit-animation-styles';
    if (!document.getElementById(styleId)) {
      const styleEl = document.createElement('style');
      styleEl.id = styleId;
      styleEl.innerHTML = `
        @keyframes orbitClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitCounterClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .outer-orbit-track {
          animation: orbitClockwise 32s linear infinite;
        }
        .outer-orbit-counter {
          animation: orbitCounterClockwise 32s linear infinite;
        }
        .inner-orbit-track {
          animation: orbitCounterClockwise 26s linear infinite;
        }
        .inner-orbit-counter {
          animation: orbitClockwise 26s linear infinite;
        }
        .orbit-paused {
          animation-play-state: paused !important;
        }
      `;
      document.head.appendChild(styleEl);
    }
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 lg:py-32 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Subtle section divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-16 sm:mb-20" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Clean, High-Contrast About Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col justify-start"
        >
          {/* Section Tag */}
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.25em] text-[#38bdf8]">
              ABOUT ME
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.15]">
            I turn ideas into{' '}
            <span className="text-[#38bdf8] inline-block font-bold">
              digital experiences.
            </span>
          </h2>

          {/* Bio text */}
          <div className="space-y-4 text-slate-400 font-normal leading-relaxed text-sm sm:text-base">
            <p>
              I'm Ibrahim Abrar, a web developer and AI solutions specialist dedicated to building fast, high-converting digital products that solve real business problems.
            </p>
            <p>
              From custom modern web applications with silky smooth interactions to intelligent AI voice agents and smart conversational chatbots, I craft reliable end-to-end systems engineered for speed and scale.
            </p>
          </div>

          {/* Core Specialization Pills */}
          <div className="flex flex-wrap gap-2.5 pt-6 pb-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#080e1a] border border-white/[0.08] text-slate-300 text-xs font-medium">
              <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Full-Stack Web</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#080e1a] border border-white/[0.08] text-slate-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>AI Voice Agents</span>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-[#080e1a] border border-white/[0.08] text-slate-300 text-xs font-medium">
              <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Smart Chatbots</span>
            </div>
          </div>

          {/* Quick Action Link */}
          <div className="pt-2">
            <Link
              to="/contact"
              id="about-cta-get-in-touch"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-mono font-bold tracking-wider text-[#38bdf8] hover:text-white transition-colors group"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: PURE DUAL INDEPENDENT ORBITAL SYSTEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-center justify-center py-6 sm:py-10"
        >
          {/* Orbital Canvas Frame */}
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
            
            {/* Ambient Radial Background Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#38bdf8]/10 blur-3xl pointer-events-none" />

            {/* ========================================================================= */}
            {/* 1. OUTER RING TRACK (Minimal Luminous Circular Path)                      */}
            {/* ========================================================================= */}
            <div className="absolute inset-0 rounded-full border border-white/[0.12] shadow-[0_0_50px_rgba(56,189,248,0.12)] bg-[#070b13]/25 backdrop-blur-[2px]" />

            {/* ========================================================================= */}
            {/* 2. INNER RING TRACK (Minimal Dashed Circular Path)                        */}
            {/* ========================================================================= */}
            <div className="absolute inset-16 sm:inset-20 lg:inset-22 rounded-full border border-dashed border-white/[0.16] bg-[#070b13]/40" />

            {/* ========================================================================= */}
            {/* 3. CENTER HUB: SKILLS (Static & Upright Glowing Glass Center)             */}
            {/* ========================================================================= */}
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-b from-[#0e1728] to-[#060a12] border border-[#38bdf8]/40 flex items-center justify-center shadow-[0_0_35px_rgba(56,189,248,0.3)] z-30 px-2 text-center select-none">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.18em] text-[#38bdf8] uppercase drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]">
                SKILLS
              </span>
            </div>

            {/* ========================================================================= */}
            {/* 4. OUTER RING ORBIT: LOGOS ONLY MOVE CLOCKWISE (PAUSES ON HOVER)         */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-0 w-full h-full"
              onMouseEnter={() => setIsOuterPaused(true)}
              onMouseLeave={() => setIsOuterPaused(false)}
            >
              <div
                className={`w-full h-full relative outer-orbit-track ${
                  isOuterPaused ? 'orbit-paused' : ''
                }`}
              >
                {FRONTEND_SKILLS.map((skill) => {
                  const angleRad = (skill.angle * Math.PI) / 180;
                  const radiusPct = 50;
                  const topPct = 50 + radiusPct * Math.sin(angleRad);
                  const leftPct = 50 + radiusPct * Math.cos(angleRad);

                  return (
                    <div
                      key={skill.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      style={{
                        top: `${topPct}%`,
                        left: `${leftPct}%`,
                      }}
                    >
                      {/* Counter-rotate the logo container so the icon NEVER flips or spins */}
                      <div
                        className={`outer-orbit-counter ${
                          isOuterPaused ? 'orbit-paused' : ''
                        }`}
                      >
                        <div
                          className="group relative cursor-pointer"
                          onMouseEnter={() => setIsOuterPaused(true)}
                          onMouseLeave={() => setIsOuterPaused(false)}
                        >
                          {/* Circular Glass Capsule for Real Tech Logo */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-full bg-[#080d17] border border-white/[0.18] hover:border-[#38bdf8] p-2 sm:p-2.5 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_22px_rgba(56,189,248,0.45)] hover:scale-115 transition-all duration-300">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>

                          {/* Hover Tooltip showing Skill Name */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-md bg-black/90 border border-[#38bdf8]/50 text-white font-mono text-[11px] font-bold shadow-lg">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 5. INNER RING ORBIT: LOGOS ONLY MOVE COUNTER-CLOCKWISE (PAUSES ON HOVER) */}
            {/* ========================================================================= */}
            <div
              className="absolute inset-16 sm:inset-20 lg:inset-22"
              onMouseEnter={() => setIsInnerPaused(true)}
              onMouseLeave={() => setIsInnerPaused(false)}
            >
              <div
                className={`w-full h-full relative inner-orbit-track ${
                  isInnerPaused ? 'orbit-paused' : ''
                }`}
              >
                {BACKEND_SKILLS.map((skill) => {
                  const angleRad = (skill.angle * Math.PI) / 180;
                  const radiusPct = 50;
                  const topPct = 50 + radiusPct * Math.sin(angleRad);
                  const leftPct = 50 + radiusPct * Math.cos(angleRad);

                  return (
                    <div
                      key={skill.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                      style={{
                        top: `${topPct}%`,
                        left: `${leftPct}%`,
                      }}
                    >
                      {/* Counter-rotate clockwise (+360) so inner logo stays perfectly upright */}
                      <div
                        className={`inner-orbit-counter ${
                          isInnerPaused ? 'orbit-paused' : ''
                        }`}
                      >
                        <div
                          className="group relative cursor-pointer"
                          onMouseEnter={() => setIsInnerPaused(true)}
                          onMouseLeave={() => setIsInnerPaused(false)}
                        >
                          {/* Circular Glass Capsule for Real Tech Logo */}
                          <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-[#080d17] border border-white/[0.18] hover:border-[#38bdf8] p-2 sm:p-2.5 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_22px_rgba(56,189,248,0.45)] hover:scale-115 transition-all duration-300">
                            <img
                              src={skill.logo}
                              alt={skill.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-contain pointer-events-none filter drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>

                          {/* Hover Tooltip showing Skill Name */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-40 whitespace-nowrap">
                            <span className="px-2.5 py-1 rounded-md bg-black/90 border border-[#38bdf8]/50 text-white font-mono text-[11px] font-bold shadow-lg">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Interaction Helper Note */}
          <div className="mt-6 flex items-center space-x-2 text-xs font-mono text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>Hover on any logo to pause orbit & view skill</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
