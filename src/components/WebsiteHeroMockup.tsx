import { ExternalLink } from 'lucide-react';
import type { Project } from '../data/projects';

interface WebsiteHeroMockupProps {
  project: Project;
  className?: string;
  isHovered?: boolean;
}

export function WebsiteHeroMockup({ project, className = '' }: WebsiteHeroMockupProps) {
  // Domain display
  const cleanDomain = project.liveUrl.replace('https://', '').replace('/', '');

  return (
    <div className={`relative w-full rounded-xl overflow-hidden bg-[#0a0f18] border border-white/[0.08] shadow-2xl transition-all duration-500 group ${className}`}>
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#0e1422] border-b border-white/[0.06] select-none">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex items-center space-x-2 bg-[#06080d] px-3 py-1 rounded-md text-[10px] sm:text-xs font-mono text-slate-400 border border-white/[0.04] max-w-[200px] sm:max-w-[320px] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="truncate">{cleanDomain}</span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
          }}
          className="text-slate-400 hover:text-white transition-colors p-1"
          title="Open live website in new tab"
        >
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Website Viewport Content */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#070b12]">
        {/* Real Main Hero Image */}
        <img
          src={project.heroImage}
          alt={`${project.title} live website hero`}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Project Custom Brand Overlay Header / Badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-black/40 pointer-events-none" />

        {/* Bottom Banner with Tagline and Brand Identity */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#06080d] via-[#06080d]/80 to-transparent flex flex-col justify-end">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#38bdf8]">
                {project.category}
              </span>
              <h4 className="font-heading text-lg sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                {project.title}
              </h4>
            </div>

            <div className="hidden sm:flex items-center space-x-1.5 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-slate-200">
              <span>Live Website</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
