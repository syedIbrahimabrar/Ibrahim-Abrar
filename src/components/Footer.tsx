import { type MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e: MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('about');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer id="main-footer" className="relative z-10 bg-[#06080d] border-t border-white/[0.05] pt-20 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Brand Column (Left) */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link
              to="/"
              id="footer-logo-btn"
              className="inline-flex items-center space-x-0.5 text-left group focus:outline-none"
              aria-label="Ibrahim Portfolio Home"
            >
              <span className="font-heading text-2xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                IBRAHIM
              </span>
              <span className="text-[#38bdf8] font-bold text-2xl group-hover:scale-125 transition-transform duration-200">
                .
              </span>
            </Link>

            <p className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide">
              Websites &middot; AI Voice Agents &middot; AI Chatbots
            </p>

            <p className="text-sm text-slate-500 font-normal leading-relaxed max-w-sm pt-1">
              Building digital experiences one project at a time.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-300 font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  id="footer-nav-home"
                  className="hover:text-white transition-colors duration-200 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  id="footer-nav-work"
                  className="hover:text-white transition-colors duration-200 inline-block"
                >
                  Work
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  id="footer-nav-about"
                  onClick={handleAboutClick}
                  className="hover:text-white transition-colors duration-200 inline-block text-left"
                >
                  About
                </button>
              </li>
              <li>
                <Link
                  to="/contact"
                  id="footer-nav-contact"
                  className="hover:text-white transition-colors duration-200 inline-block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-300 font-semibold">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a
                  href="mailto:iqadri6912@gmail.com"
                  id="footer-contact-email"
                  className="group flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <span className="text-slate-300 group-hover:text-[#38bdf8] transition-colors">
                    iqadri6912@gmail.com
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#38bdf8]" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923132165707"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-contact-whatsapp"
                  className="group flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <span className="text-slate-300 group-hover:text-[#38bdf8] transition-colors">
                    03132165707
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#38bdf8]" />
                </a>
              </li>
              <li>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/itz_ibrahim_abrar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-contact-instagram"
                  className="group inline-flex items-center space-x-1.5 hover:text-white transition-colors duration-200"
                >
                  <span className="text-slate-300 group-hover:text-[#38bdf8] transition-colors">
                    @itz_ibrahim_abrar
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#38bdf8]" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p id="footer-copyright">
            &copy; 2026 Ibrahim.
          </p>

          <div id="footer-availability" className="flex items-center space-x-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">Available for new projects.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
