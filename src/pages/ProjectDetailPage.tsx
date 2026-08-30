import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ExternalLink, ArrowLeft, ArrowRight, CheckCircle2, Globe, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { WebsiteHeroMockup } from '../components/WebsiteHeroMockup';

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  // Find project by id
  const projectIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[projectIndex];

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Next project for footer navigation
  const nextProjectIndex = (projectIndex + 1) % PROJECTS.length;
  const nextProject = PROJECTS[nextProjectIndex];

  return (
    <div className="min-h-screen pt-28 pb-24 text-white bg-[#06080d]">
      
      {/* TOP NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between"
        >
          <Link
            to="/work"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <span className="font-mono text-xs text-slate-500">
            {project.number} / 06
          </span>
        </motion.div>
      </div>

      {/* HERO HEADER */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Left Title & Category */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">
                  {project.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="text-xs font-mono text-slate-400">{project.year}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
                {project.title}
              </h1>

              <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                "{project.tagline}"
              </p>
            </motion.div>
          </div>

          {/* Right Live Website CTA */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <motion.a
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-white text-black hover:bg-slate-200 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xl group hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]"
            >
              <Globe className="w-4 h-4" />
              <span>PREVIEW LIVE WEBSITE</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

        </div>
      </div>

      {/* LARGE WEBSITE MOCKUP PREVIEW */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <WebsiteHeroMockup project={project} />
        </motion.div>
      </div>

      {/* PROJECT DETAILS GRID (Overview, Client, Role, Tech) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
          
          {/* Main Overview Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Project Overview
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              {project.overview}
            </p>

            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              {project.description}
            </p>

            {/* Stats Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0a0f18] border border-white/[0.06]"
                >
                  <div className="text-2xl font-bold text-[#38bdf8] font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#090e17] border border-white/[0.06] p-6 space-y-5">
              
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  CLIENT
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.client}
                </span>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  ROLE
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.role}
                </span>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-1">
                  LIVE URL
                </span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-[#38bdf8] hover:underline flex items-center space-x-1 truncate"
                >
                  <span className="truncate">{project.liveUrl}</span>
                  <ExternalLink className="w-3 h-3 shrink-0 ml-1" />
                </a>
              </div>

              <div className="border-t border-white/[0.04] pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block mb-2">
                  TECHNOLOGIES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* KEY FEATURES SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28">
        <div className="border-t border-white/[0.06] pt-16">
          <div className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#38bdf8] block mb-2">
              CAPABILITIES & ARCHITECTURE
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Key Features Implemented
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090e17]/80 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex items-start space-x-4"
              >
                <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white mb-1.5">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY / SCREENSHOTS SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-20 sm:mb-28">
        <div className="border-t border-white/[0.06] pt-16">
          <div className="mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#38bdf8] block mb-2">
              VISUAL ASSETS & DESIGN SYSTEM
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Interface Showcase
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.galleryImages.map((imgUrl, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#090e17] aspect-video group"
              >
                <img
                  src={imgUrl}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEXT PROJECT FOOTER NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="border-t border-white/[0.06] pt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/work"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            <Layers className="w-4 h-4" />
            <span>SEE ALL 6 PROJECTS</span>
          </Link>

          <Link
            to={nextProject.detailRoute}
            className="inline-flex items-center space-x-3 text-sm font-semibold text-white hover:text-[#38bdf8] transition-colors group"
          >
            <span className="text-slate-400 font-normal">Next Project:</span>
            <span>{nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
