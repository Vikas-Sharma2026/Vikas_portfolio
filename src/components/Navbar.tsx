import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Terminal, LogOut } from 'lucide-react';

interface NavbarProps {
  onOpenAI: () => void;
  onOpenEasterEgg: () => void;
  onExitWorld: () => void;
}

export function Navbar({ onOpenAI, onOpenEasterEgg, onExitWorld }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'JOURNEY', href: '#journey' },
    { label: 'CERTIFICATES', href: '#certificates' },
    { label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'certificates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-xl font-bold tracking-tight text-white font-display">
              VIKAS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium tracking-wide transition-colors duration-200 uppercase relative py-1 ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenEasterEgg}
              title="Terminal Easter Egg (or press E)"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-slate-800/50 cursor-pointer"
              aria-label="Open Easter Egg Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAI}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 rounded-lg hover:bg-cyan-900/40 hover:border-cyan-700 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ask AI</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Let's Connect
            </a>

            <button
              onClick={onExitWorld}
              title="Return to Intro Landing"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-lg transition-all cursor-pointer group shadow-sm hover:-translate-y-0.5"
            >
              <span className="text-cyan-400 font-bold group-hover:-translate-x-0.5 transition-transform">↩</span>
              <span>EXIT WORLD</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAI}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Ask AI"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all duration-300 shadow-2xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold tracking-wider py-2 uppercase transition-colors ${
                    isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAI();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 rounded-lg cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask Portfolio AI</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEasterEgg();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-800 rounded-lg cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Secret Dev Console</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExitWorld();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-rose-300 hover:text-rose-200 bg-rose-950/20 hover:bg-rose-950/40 border border-rose-800/40 rounded-lg cursor-pointer transition-colors"
              >
                <span className="font-bold text-sm">↩</span>
                <span>EXIT WORLD</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
