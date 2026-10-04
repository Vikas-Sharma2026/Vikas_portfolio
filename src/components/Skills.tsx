import { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem, SkillProficiency } from '../data/portfolioData';

type FilterCategory = 'All' | 'Programming' | 'Web' | 'Database' | 'Tools';

export function Skills() {
  const { skills } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories: FilterCategory[] = ['All', 'Programming', 'Web', 'Database', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter((s) => s.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'Web': return <Globe className="w-4 h-4 text-sky-400" />;
      case 'Database': return <Database className="w-4 h-4 text-indigo-400" />;
      case 'Tools': return <Wrench className="w-4 h-4 text-violet-400" />;
      default: return <Layers className="w-4 h-4 text-cyan-400" />;
    }
  };

  const getLevelIndicator = (level: SkillProficiency) => {
    switch (level) {
      case 'Working Knowledge':
        return {
          color: 'text-emerald-400',
          bg: 'bg-emerald-950/40 border-emerald-800/40',
          dots: 3,
        };
      case 'Familiar':
        return {
          color: 'text-sky-400',
          bg: 'bg-sky-950/40 border-sky-800/40',
          dots: 2,
        };
      case 'Learning':
        return {
          color: 'text-amber-400',
          bg: 'bg-amber-950/40 border-amber-800/40',
          dots: 1,
        };
    }
  };

  return (
    <section id="skills" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <Layers className="w-4 h-4" />
            <span>MY ARSENAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Technical Competence · <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Honest Skills</span>
          </h2>
          <p className="text-base text-slate-400">
            No inflated buzzwords. These represent active tools, languages, and environments I use to build real software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-normal rounded-xl transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: SkillItem) => {
            const indicator = getLevelIndicator(skill.level);
            const isHovered = hoveredSkill === skill.name;

            return (
              <div
                key={`${skill.category}-${skill.name}`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`relative rounded-2xl p-6 transition-all duration-300 border bg-[#0b0e15] ${
                  isHovered
                    ? 'border-cyan-500/50 -translate-y-1 shadow-xl shadow-cyan-500/10'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Row: Category Icon & Proficiency Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      {skill.category}
                    </span>
                  </div>

                  {/* Level Pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono border ${indicator.bg} ${indicator.color}`}
                  >
                    <span className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-1 h-1 rounded-full ${
                            i < indicator.dots ? 'bg-current' : 'bg-slate-700'
                          }`}
                        />
                      ))}
                    </span>
                    <span>{skill.level}</span>
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Focus / Application Area */}
                <div className="pt-3 border-t border-slate-800/70 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span className="text-slate-500">Focus:</span>
                  <span className="text-cyan-400 truncate max-w-[200px]" title={skill.focus}>
                    {skill.focus}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparency Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Honest evaluation: Progress is continuous as an aspiring software engineer.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
