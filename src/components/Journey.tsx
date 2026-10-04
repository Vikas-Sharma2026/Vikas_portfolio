import { useState } from 'react';
import { 
  GraduationCap, 
  Terminal, 
  Database, 
  Globe, 
  Cpu, 
  Rocket, 
  Trophy, 
  Target, 
  Milestone,
  CheckCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, JourneyMilestone } from '../data/portfolioData';

export function Journey() {
  const { journey } = PORTFOLIO_DATA;
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(journey[5].id); // Default to Built Projects

  const getMilestoneIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Target': return <Target className="w-5 h-5" />;
      default: return <Milestone className="w-5 h-5" />;
    }
  };

  const selectedMilestone = journey.find((j) => j.id === selectedMilestoneId) || journey[0];

  return (
    <section id="journey" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <Milestone className="w-4 h-4" />
            <span>TRAJECTORY & GROWTH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            My Journey · <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Step by Step</span>
          </h2>
          <p className="text-base text-slate-400">
            A continuous progression from first lines of code to building full applications and testing skills under pressure.
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center Column: Timeline Nodes */}
          <div className="lg:col-span-7 relative">
            
            {/* Vertical Spine Line */}
            <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800 hidden sm:block" />

            <div className="space-y-4">
              {journey.map((item: JourneyMilestone) => {
                const isSelected = item.id === selectedMilestoneId;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMilestoneId(item.id)}
                    className={`relative sm:pl-16 transition-all duration-200 cursor-pointer ${
                      isSelected ? 'scale-[1.01]' : 'hover:translate-x-1'
                    }`}
                  >
                    {/* Circle Node on Spine */}
                    <div
                      className={`absolute left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950 shadow-md shadow-cyan-400/50'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-cyan-300' : 'bg-slate-500'}`} />
                    </div>

                    {/* Milestone Card */}
                    <div
                      className={`p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                          : 'bg-[#0b0e16]/80 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-xl transition-colors ${
                              isSelected
                                ? 'bg-cyan-500/20 text-cyan-300'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {getMilestoneIcon(item.icon)}
                          </div>
                          <div>
                            <span className="text-[11px] font-mono text-cyan-400 uppercase">
                              STAGE 0{item.stepNumber}
                            </span>
                            <h3 className="text-base font-semibold text-white font-display">
                              {item.title}
                            </h3>
                          </div>
                        </div>

                        {/* Status Label */}
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 shrink-0">
                          {item.dateLabel}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Dive Milestone Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-[#0c1017] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 tracking-wider">
                  MILESTONE INSPECTION · 0{selectedMilestone.stepNumber}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                  {selectedMilestone.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {getMilestoneIcon(selectedMilestone.icon)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {selectedMilestone.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Timeline Marker: {selectedMilestone.dateLabel}
                  </p>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div>
                  <span className="block text-xs font-mono uppercase text-slate-500 mb-1.5">
                    Milestone Overview
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedMilestone.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Key Takeaway</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{selectedMilestone.keyTakeaway}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>PATHWAY CONTINUES</span>
                <span className="text-cyan-400">NEXT: DEPLOY & EXPAND</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
