import { useState } from 'react';
import { ArrowDown, Rocket, Send, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import portraitImg from '../assets/Profile_photo.jpg';

export function Hero() {
  const { profile } = PORTFOLIO_DATA;
  const [imgError, setImgError] = useState(false);

  const techBadges = [
    'Python',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Git',
    'GitHub'
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
        
        {/* Left Column: Strong Visual Hierarchy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* 1. Small Technical / Status Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono text-cyan-400 mb-4 tracking-normal">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Aspiring Developer · 3rd Year BTech CSE</span>
          </div>

          {/* 2. Main Display Heading: HELLO, I'M VIKAS */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-3 font-display">
            HELLO, I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">VIKAS</span>.
          </h1>

          {/* 3. Role & Short Introduction */}
          <h2 className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-tight mb-4 font-display">
            {profile.course} Student at {profile.college}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-8">
            {profile.bioShort} Dedicated to writing clean code, mastering databases, and turning ideas into impactful campus solutions.
          </p>

          {/* 4. Primary Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-8 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 active:scale-[0.98] hover:-translate-y-0.5 transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 cursor-pointer"
            >
              <Rocket className="w-4 h-4 text-cyan-200" />
              <span>EXPLORE PROJECTS</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98] hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-400" />
              <span>LET'S CONNECT</span>
            </button>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="w-full pt-5 border-t border-slate-800/70">
            <span className="block text-xs font-mono text-slate-500 mb-2.5">
              Toolkit:
            </span>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Visual Persona & Glassmorphic Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            {/* Soft Ambient Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 rounded-3xl blur-2xl opacity-70" />

            {/* Glassmorphic Presentation Card */}
            <div className="relative rounded-2xl bg-[#0c1017]/95 border border-slate-800/90 shadow-2xl p-5 sm:p-6 overflow-hidden">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                  <span className="ml-2 text-xs font-mono text-slate-400">vikas.dev</span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              {/* Developer Avatar + Info */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-cyan-500/40 ring-1 ring-cyan-500/20 bg-slate-900 shrink-0 shadow-lg">
                  {!imgError ? (
                    <img
                      src={portraitImg}
                      alt="Vikas Sharma - Profile Photo"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-cyan-400 font-display font-bold text-2xl">
                      V
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">Vikas Sharma</h3>
                  <p className="text-xs text-cyan-400 font-mono">BTech CSE · 3rd Year</p>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">School of Management Sciences, Lucknow</p>
                </div>
              </div>

              {/* Terminal Code Snippet */}
              <div className="bg-[#06080d] rounded-xl p-3 border border-slate-800/80 font-mono text-xs leading-relaxed text-slate-300">
                <div className="text-slate-500 mb-1 flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>vikas.init()</span>
                </div>
                <div className="text-slate-400">
                  <span className="text-cyan-400">const</span> engineer = &#123;
                </div>
                <div className="pl-4 text-slate-300">
                  mindset: <span className="text-emerald-400">"Learn & Build"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  focus: <span className="text-cyan-300">"Full-Stack & Databases"</span>,
                </div>
                <div className="pl-4 text-slate-300">
                  project: <span className="text-sky-300">"Lost & Found System"</span>
                </div>
                <div className="text-slate-400">&#125;;</div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3.5 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/50">
                <span>IDENTITY: VERIFIED</span>
                <span className="text-cyan-400 font-medium">STATUS: READY</span>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Down Scroll Indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => scrollTo('about')}
          aria-label="Scroll to About section"
          className="p-2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce cursor-pointer"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
