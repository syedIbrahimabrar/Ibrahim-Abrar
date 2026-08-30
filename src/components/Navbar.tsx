import { useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  const navLinks = [
    { label: 'ABOUT', path: '/#about', onClick: handleAboutClick, isActive: location.pathname === '/' && location.hash === '#about' },
    { label: 'WORK', path: '/work', isActive: location.pathname.startsWith('/work') },
    { label: 'CONTACT', path: '/contact', isActive: location.pathname === '/contact' },
  ];

  return (
    <motion.header
      id="main-navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-[#06080d]/85 backdrop-blur-md border-b border-white/[0.04]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Name Logo */}
        <Link
          to="/"
          id="nav-logo-btn"
          className="group flex items-center space-x-0.5 text-left focus:outline-none"
          aria-label="Ibrahim Portfolio Home"
        >
          <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
            IBRAHIM
          </span>
          <span className="text-[#38bdf8] font-bold text-lg sm:text-xl group-hover:scale-125 transition-transform duration-200">
            .
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-7 sm:space-x-12" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.isActive;

            if (link.onClick) {
              return (
                <button
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  onClick={link.onClick}
                  className={`relative text-[11px] sm:text-xs font-semibold tracking-[0.2em] transition-all duration-200 py-1.5 focus:outline-none ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]"
                    />
                  )}
                </button>
              );
            }

            return (
              <Link
                key={link.label}
                to={link.path}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`relative text-[11px] sm:text-xs font-semibold tracking-[0.2em] transition-all duration-200 py-1.5 focus:outline-none ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#38bdf8] rounded-full shadow-[0_0_8px_#38bdf8]"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
