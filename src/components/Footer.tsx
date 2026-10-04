import { Github, Linkedin, ArrowUp, Sparkles, LogOut } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenEasterEgg: () => void;
  onExitWorld?: () => void;
}

export function Footer({ onOpenEasterEgg, onExitWorld }: FooterProps) {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-[#06080d] py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-white font-display tracking-tight">
              VIKAS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-xs font-mono text-slate-500">· ENTER MY WORLD</span>
          </div>
          <p className="text-xs text-slate-400">
            Built with curiosity, code and a lot of learning.
          </p>
          <p className="text-[11px] font-mono text-slate-500 mt-1">
            © 2026 Vikas. All rights reserved.
          </p>
        </div>

        {/* Center: Interactive Easter Egg Trigger & Exit World */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEasterEgg}
            className="text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer Console (E)</span>
          </button>

          {onExitWorld && (
            <button
              onClick={onExitWorld}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1.5 bg-slate-900/60 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/40"
            >
              <span className="text-cyan-400 font-bold">↩</span>
              <span>EXIT WORLD</span>
            </button>
          )}
        </div>

        {/* Right: Social Icons & Scroll to Top */}
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 border border-slate-800 transition-all cursor-pointer"
            aria-label="Back to top"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
