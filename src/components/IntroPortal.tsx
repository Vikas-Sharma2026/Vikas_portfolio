import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Terminal, Compass, Activity } from 'lucide-react';

interface IntroPortalProps {
  onEnter: () => void;
}

export function IntroPortal({ onEnter }: IntroPortalProps) {
  const [step, setStep] = useState<number>(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Elegant staged reveals
    const timer1 = setTimeout(() => setStep(1), 250);
    const timer2 = setTimeout(() => setStep(2), 850);
    const timer3 = setTimeout(() => setStep(3), 1500);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#05070d] transition-all duration-700 select-none overflow-hidden ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Deep Atmospheric Gradient Lights */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-500/12 blur-[140px] pointer-events-none animate-pulse-subtle" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[150px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none" 
      />

      {/* 2. Futuristic Circular Radar & Coordinate Geometry */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {/* Radar concentric rings */}
        <div className="relative w-[780px] h-[780px] rounded-full border border-cyan-500/10 flex items-center justify-center">
          
          {/* Animated 360-degree radar scanner sweep */}
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg_at_50%_50%,rgba(6,182,212,0.12)_0deg,transparent_70deg,transparent_360deg)] animate-[spin_10s_linear_infinite]" />

          {/* Secondary rotating ring with orbital marks */}
          <div className="w-[580px] h-[580px] rounded-full border border-dashed border-indigo-400/20 animate-[spin_35s_linear_infinite_reverse] flex items-center justify-center">
            {/* Orbital node */}
            <div className="absolute -top-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)]" />
            <div className="absolute -bottom-1.5 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          </div>

          {/* Tertiary ring with coordinate ticks */}
          <div className="w-[420px] h-[420px] rounded-full border border-cyan-400/15 animate-[spin_25s_linear_infinite] flex items-center justify-center">
            <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
            <div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
            <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
            <div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-sky-300" />
          </div>

          {/* Central radar core ring */}
          <div className="w-[260px] h-[260px] rounded-full border border-cyan-500/25 bg-cyan-950/10" />

          {/* Crosshair grid lines */}
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
          <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent" />
        </div>
      </div>

      {/* 3. Floating Ambient Particles & Grid Dots */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:32px_32px]" 
      />

      {/* Top quiet header */}
      <div className="absolute top-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs font-mono text-slate-500 z-10 pointer-events-none">
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>Vikas Sharma · Portfolio</span>
        </div>
        <div className="text-slate-400">
          <span>School of Management Sciences, Lucknow</span>
        </div>
      </div>

      {/* 4. Main Glassmorphic Portal Card */}
      <div className="relative max-w-xl w-full mx-4 sm:mx-auto px-6 sm:px-10 py-10 sm:py-12 text-center z-10 rounded-3xl bg-[#090d18]/90 backdrop-blur-2xl border border-cyan-500/25 shadow-[0_0_50px_-15px_rgba(6,182,212,0.2)]">
        
        {/* Subtle Corner Accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400/60 rounded-tl" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-400/60 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-400/60 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/60 rounded-br" />

        {/* Status Label */}
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-cyan-500/20 bg-cyan-950/30 text-cyan-300 text-xs font-mono tracking-wide transition-all duration-700 ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Personal Developer Portfolio</span>
        </div>

        {/* 1. HELLO, I'M VIKAS */}
        <h1
          className={`text-4xl sm:text-6xl font-bold tracking-tight text-white mb-3 transition-all duration-700 font-display ${
            step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          HELLO, I'M{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-indigo-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            VIKAS
          </span>
        </h1>

        {/* 2. Welcome to my digital world. */}
        <p
          className={`text-base sm:text-lg text-slate-300 font-normal mb-3 transition-all duration-700 delay-100 ${
            step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Welcome to my digital world.
        </p>

        {/* 3. Learn. Build. Experiment. Create. */}
        <div
          className={`transition-all duration-700 delay-200 mb-8 ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-slate-900/60 border border-slate-800 text-cyan-300/90 font-display text-sm font-medium">
            <span>Learn</span>
            <span className="text-slate-600">·</span>
            <span>Build</span>
            <span className="text-slate-600">·</span>
            <span>Experiment</span>
            <span className="text-slate-600">·</span>
            <span>Create</span>
          </div>
        </div>

        {/* 4. ENTER MY WORLD BUTTON */}
        <div
          className={`transition-all duration-700 delay-300 ${
            step >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <button
            onClick={handleEnter}
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wider text-white uppercase bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:via-sky-400 hover:to-indigo-500 active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_-5px_rgba(6,182,212,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#07090e]"
          >
            <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-semibold tracking-wider font-display">ENTER MY WORLD</span>
            <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1.5 transition-transform duration-200" />
          </button>

          <p className="mt-3.5 text-xs text-slate-500 font-mono">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-cyan-300 shadow-sm">Enter ↵</kbd> or click to explore
          </p>
        </div>

      </div>

      {/* Bottom quiet status */}
      <div className="absolute bottom-6 left-6 right-6 hidden sm:flex items-center justify-between text-xs font-mono text-slate-500 z-10 pointer-events-none">
        <span>BTech [CSE] 3rd Year · Systems & Web Development</span>
        <span>Lucknow, Uttar Pradesh</span>
      </div>

    </div>
  );
}
