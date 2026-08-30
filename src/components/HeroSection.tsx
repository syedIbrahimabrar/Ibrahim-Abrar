import { motion } from 'motion/react';
import { Globe, PhoneCall, MessageSquare } from 'lucide-react';
import portraitImg from '../assets/images/ibrahim_portrait_1787997878785.jpg';

interface HeroSectionProps {
  onScrollToAbout?: () => void;
}

export function HeroSection({ onScrollToAbout }: HeroSectionProps) {
  const services = [
    {
      number: '01',
      title: 'Websites',
      subtitle: 'Modern & Responsive',
      highlight: 'Web Development',
      icon: Globe,
    },
    {
      number: '02',
      title: 'Voice Agents',
      subtitle: 'AI Voice Agents for',
      highlight: 'Calls & Appointments',
      icon: PhoneCall,
    },
    {
      number: '03',
      title: 'Chatbots',
      subtitle: 'Smart AI Chatbots',
      highlight: 'that Convert',
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-28 lg:pb-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      {/* Main 2-Column Grid for Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto">
        
        {/* LEFT COLUMN: Photographic Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-start order-1"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] group">
            
            {/* Atmospheric Blue Halo behind silhouette */}
            <div 
              className="absolute -inset-4 rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-transparent blur-3xl opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-700" 
              aria-hidden="true"
            />

            {/* Portrait Image seamlessly blended into background */}
            <div className="relative pointer-events-none select-none">
              <img
                src={portraitImg}
                alt="Ibrahim Abrar — Web Developer"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover object-center brightness-105 contrast-[1.02]"
                style={{
                  maskImage: 'radial-gradient(ellipse 75% 72% at 50% 45%, black 45%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0.2) 80%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 72% at 50% 45%, black 45%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0.2) 80%, transparent 95%)',
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Typography, Highlights & Services */}
        <div className="lg:col-span-7 flex flex-col justify-center order-2 text-left">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mb-2.5"
          >
            <span className="text-sm sm:text-base font-bold uppercase tracking-[0.25em] text-[#38bdf8]">
              HI, I'M
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.08]"
          >
            IBRAHIM
            <span className="text-[#38bdf8] ml-0.5 inline-block">.</span>
            <span className="sr-only"> Abrar — Web Developer &amp; AI Specialist</span>
          </motion.h1>

          {/* Statement with Electric Blue Highlights */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-100 mb-4 sm:mb-6 leading-snug tracking-tight"
          >
            I build{' '}
            <span className="text-[#38bdf8] font-medium transition-colors hover:text-[#60a5fa]">
              websites
            </span>
            ,{' '}
            <span className="text-[#38bdf8] font-medium transition-colors hover:text-[#60a5fa]">
              voice agents
            </span>{' '}
            and{' '}
            <span className="text-[#38bdf8] font-medium transition-colors hover:text-[#60a5fa]">
              AI chatbots
            </span>
            .
          </motion.p>

          {/* Understated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-xs sm:text-sm text-slate-400 font-normal max-w-lg mb-8 sm:mb-10 leading-relaxed"
          >
            I help businesses grow with fast, modern and high-converting digital experiences.
          </motion.p>

          {/* Services Experience Nodes (Bespoke Circular Orbital Layout) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="relative pt-6 sm:pt-8 mt-2"
          >
            {/* Luminous Connecting Track Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute -top-[3px] left-1/4 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-pulse" />
            <div className="absolute -top-[3px] left-3/4 w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-pulse" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.number}
                    id={`hero-service-${item.number}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group relative flex flex-col items-start transition-all duration-300 cursor-default"
                  >
                    {/* Ambient Circular Glow on Hover */}
                    <div className="absolute -top-3 -left-3 w-28 h-28 rounded-full bg-sky-500/0 group-hover:bg-sky-500/10 blur-2xl transition-all duration-500 pointer-events-none" />

                    {/* Circular Interactive Node Header */}
                    <div className="flex items-center space-x-3.5 mb-3 relative z-10">
                      {/* Concentric Circular Orb Icon */}
                      <div className="relative flex items-center justify-center">
                        {/* Outer Atmospheric Pulse Ring */}
                        <div className="absolute -inset-1.5 rounded-full border border-sky-400/0 group-hover:border-sky-400/30 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
                        
                        {/* Secondary Delicate Dashed Ring */}
                        <div className="absolute -inset-0.5 rounded-full border border-white/[0.08] group-hover:border-sky-400/40 transition-colors duration-300" />
                        
                        {/* Central Circular Glass Hub */}
                        <div className="relative w-10 h-10 rounded-full bg-gradient-to-b from-[#0e1728] to-[#060a12] border border-sky-400/25 flex items-center justify-center text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.12)] group-hover:text-white group-hover:border-sky-400 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.35)] transition-all duration-300">
                          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                        </div>
                      </div>

                      {/* Pill Badge with Satellite Pulse */}
                      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] group-hover:border-sky-400/30 group-hover:bg-sky-950/30 transition-all duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8] animate-pulse" />
                        <span className="text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-sky-300 font-medium transition-colors">
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Content Section with High-Contrast Typography */}
                    <div className="relative z-10 pl-0.5">
                      <h3 className="font-heading text-base font-bold text-white tracking-wide group-hover:text-[#38bdf8] transition-colors flex items-center space-x-1.5">
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {item.subtitle}{' '}
                        <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                          {item.highlight}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
