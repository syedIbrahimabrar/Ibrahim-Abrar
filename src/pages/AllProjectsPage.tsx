import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PROJECTS } from '../data/projects';
import { WebsiteHeroMockup } from '../components/WebsiteHeroMockup';

export function AllProjectsPage() {
  const projects = ALL_PROJECTS; // All 6 projects

  return (
    <div className="min-h-screen pt-28 pb-24 text-white bg-[#06080d]">
      
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16 sm:mb-20">
        
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-xs font-mono text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO HOME</span>
          </Link>
        </motion.div>

        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#38bdf8] block mb-3">
            ALL PROJECTS
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Everything I've built.
          </h1>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            A collection of websites and digital experiences I've designed and developed. Each project is crafted with custom aesthetics, robust architecture, and high conversion in mind.
          </p>
        </motion.div>

        {/* Subtle decorative divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mt-12" />
      </div>

      {/* RESPONSIVE 2-COLUMN GRID (All 6 Projects) */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-2xl bg-[#090e17]/80 border border-white/[0.06] hover:border-white/[0.14] p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(0,0,0,0.7)]"
            >
              <div>
                {/* Project Header Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#38bdf8] bg-[#38bdf8]/10 px-2.5 py-0.5 rounded border border-[#38bdf8]/20">
                    {project.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Large Visual Website Preview */}
                <Link to={project.detailRoute} className="block mb-6">
                  <WebsiteHeroMockup project={project} />
                </Link>

                {/* Project Title & Tagline */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-[#38bdf8] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Card Footer with Buttons: PREVIEW ↗ and LOOK MORE → */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <Link
                  to={project.detailRoute}
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-white hover:text-[#38bdf8] transition-colors group/btn"
                >
                  <span>LOOK MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-[#0e1422] hover:bg-[#141d30] border border-white/10 px-3.5 py-2 rounded-lg transition-colors"
                >
                  <span>PREVIEW</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
