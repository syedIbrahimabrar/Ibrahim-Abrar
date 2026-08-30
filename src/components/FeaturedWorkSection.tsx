import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMAGES = [
  {
    id: 'slide-1',
    num: '01',
    src: '/projects/1.png',
    title: 'Aurora Grand Hotel',
    link: 'https://demoo-hotel.netlify.app/',
  },
  {
    id: 'slide-2',
    num: '02',
    src: '/projects/2.png',
    title: 'Artistry by Marium',
    link: 'https://artistry-by-marium.netlify.app/',
  },
  {
    id: 'slide-3',
    num: '03',
    src: '/projects/3.png',
    title: 'Kashmir Escape',
    link: 'https://kashmir-website.netlify.app/',
  },
  {
    id: 'slide-4',
    num: '04',
    src: '/projects/4.png',
    title: 'Hussain Foods',
    link: 'https://hussain-food.netlify.app/',
  },
];

export function FeaturedWorkSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (idx: number) => {
    if (idx >= 0 && idx < IMAGES.length) {
      setActiveSlide(idx);
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev < IMAGES.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const currentProject = IMAGES[activeSlide];

  return (
    <section
      id="featured-work"
      className="relative w-full bg-black text-white select-none py-14 sm:py-20 lg:py-24 border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* COMPACT SECTION HEADER WITH QUICK VIEW MORE BUTTON */}
        <div className="w-full flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#38bdf8] block font-mono mb-1">
              FEATURED WORK
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Some of my best work.
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/work"
              id="btn-header-view-more-projects"
              className="inline-flex items-center space-x-2 bg-white/[0.08] hover:bg-white/[0.16] text-white text-xs font-bold px-4 py-2.5 rounded-xl border border-white/10 transition-all duration-200 hover:scale-105"
            >
              <span>VIEW MORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38bdf8]" />
            </Link>

            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-slate-400 bg-white/[0.04] px-3 py-1.5 rounded-full border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-ping" />
              <span>0{activeSlide + 1} / 04</span>
            </div>
          </div>
        </div>

        {/* FEATURED WORK DISPLAY CAROUSEL CONTAINER */}
        <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#070b13] shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          
          {/* VERTICAL TRACK WITH SILKY SMOOTH CUBIC-BEZIER EASING */}
          <div
            className="w-full h-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{ transform: `translateY(-${activeSlide * 100}%)` }}
          >
            {IMAGES.map((item, index) => {
              const isActive = activeSlide === index;

              return (
                <div
                  key={item.id}
                  className="w-full h-full min-h-full flex-shrink-0 relative overflow-hidden flex items-center justify-center bg-[#070b13]"
                >
                  <img
                    src={item.src}
                    alt={`${item.title} — Web Design and Development Project`}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className={`w-full h-full object-cover object-top transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-40'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* SIDE STEP CONTROLLERS (DESKTOP & TABLET QUICK SWITCH) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2 z-30">
            <button
              onClick={prevSlide}
              disabled={activeSlide === 0}
              title="Previous project"
              className="w-10 h-10 rounded-xl bg-black/85 hover:bg-black border border-white/20 disabled:opacity-20 disabled:pointer-events-none text-white hover:text-[#38bdf8] flex items-center justify-center backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronUp className="w-5 h-5 stroke-[2.5]" />
            </button>
            <button
              onClick={nextSlide}
              disabled={activeSlide === IMAGES.length - 1}
              title="Next project"
              className="w-10 h-10 rounded-xl bg-black/85 hover:bg-black border border-white/20 disabled:opacity-20 disabled:pointer-events-none text-white hover:text-[#38bdf8] flex items-center justify-center backdrop-blur-md transition-all shadow-xl cursor-pointer hover:scale-105 active:scale-95"
            >
              <ChevronDown className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

          {/* FLOATING PROJECT CONTROLS BAR */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-auto z-30">
            {/* Project Title Badge */}
            <div className="bg-black/85 backdrop-blur-xl px-4 sm:px-5 py-2.5 rounded-2xl border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center space-x-3">
              <span className="text-xs font-mono font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2 py-0.5 rounded-md border border-[#38bdf8]/20">
                {currentProject.num}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentProject.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="font-heading text-sm sm:text-base font-bold text-white tracking-wide"
                >
                  {currentProject.title}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex items-center space-x-2.5">
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                id={`btn-preview-clean-${currentProject.id}`}
                className="inline-flex items-center space-x-2 bg-[#38bdf8] hover:bg-[#7dd3fc] text-black font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-[0_0_25px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <span>PREVIEW WEBSITE</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>

              <Link
                to="/work"
                id={`btn-view-all-clean-${currentProject.id}`}
                className="inline-flex items-center space-x-2 bg-black/80 hover:bg-black text-white hover:text-[#38bdf8] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl border border-white/20 backdrop-blur-xl shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <span>VIEW MORE PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM STEP CONTROL & NAVIGATION INDICATOR */}
        <div className="w-full flex items-center justify-between pt-4">
          <div className="text-xs font-mono text-slate-400 flex items-center space-x-2">
            <span>Click arrows or dots to switch projects</span>
            <span>•</span>
            <span className="text-slate-300">
              {activeSlide < 3 ? `Next: 0${activeSlide + 2}` : 'Showcase 04 / 04'}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === i ? 'w-8 bg-[#38bdf8]' : 'w-2.5 bg-white/25 hover:bg-white/60'
                }`}
                title={`Jump to Project 0${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* CTA CONTAINER: EXPLORE ALL PROJECTS */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-b from-[#0b101b] to-black border border-white/[0.08] p-8 sm:p-12 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8] mb-3 font-mono">
            MORE WEBSITES & EXPERIENCES
          </span>

          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Want to explore all projects?
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mb-6 leading-relaxed">
            Explore the complete archive of live websites, bespoke animations, case studies, and modern web applications.
          </p>

          <Link
            to="/work"
            id="btn-view-all-projects-cta"
            className="inline-flex items-center space-x-3 bg-white text-black hover:bg-slate-200 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl group hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] cursor-pointer hover:scale-105"
          >
            <span>VIEW MORE PROJECTS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
