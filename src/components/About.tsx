import { useState } from 'react';
import { 
  GraduationCap, 
  Code2, 
  Database, 
  Sparkles, 
  Rocket, 
  Trophy, 
  Target,
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function About() {
  const { aboutPoints, profile } = PORTFOLIO_DATA;
  const [selectedPointId, setSelectedPointId] = useState<string>(aboutPoints[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const selectedPoint = aboutPoints.find((p) => p.id === selectedPointId) || aboutPoints[0];

  return (
    <section id="about" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-6 sm:mb-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <Compass className="w-4 h-4" />
            <span>DISCOVER THE DRIVER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            About Me · <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Who Am I?</span>
          </h2>
          <p className="text-base text-slate-400">
            More than just syntax and lines of code: an engineer in training driven by building software that actually works.
          </p>
        </div>

        {/* Main Grid: Interactive Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutPoints.map((point) => {
              const isSelected = point.id === selectedPointId;
              return (
                <button
                  key={point.id}
                  onClick={() => setSelectedPointId(point.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-200 border cursor-pointer group ${
                    isSelected
                      ? 'bg-slate-800/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/50 hover:bg-slate-800/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`p-2.5 rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-slate-800 text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {getIcon(point.iconName)}
                    </div>
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isSelected ? 'text-cyan-400' : 'text-slate-500'
                      }`}
                    >
                      {isSelected ? 'INSPECTING' : 'TAP TO VIEW'}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-1.5 font-display">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {point.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Deep Dive Inspection Panel & CURRENT MISSION */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Active Point Spotlight Card */}
            <div className="rounded-2xl bg-[#0c1017] border border-cyan-500/30 p-6 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {getIcon(selectedPoint.iconName)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Selected Pillar
                  </span>
                  <h4 className="text-lg font-bold text-white font-display">
                    {selectedPoint.title}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {selectedPoint.description}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IDENTITY FACET</span>
                <span className="text-cyan-400">VERIFIED</span>
              </div>
            </div>

            {/* CURRENT MISSION Card */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 p-6 relative overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-2">
                <Target className="w-4 h-4 text-indigo-400" />
                <span>CURRENT MISSION</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                "{profile.currentMission}"
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                Every semester brings new technical frontiers. Currently focusing on building robust software architectures,
                deepening database mastery, and collaborating in hackathon sprints.
              </p>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors tracking-normal"
              >
                <span>Witness the execution in projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
