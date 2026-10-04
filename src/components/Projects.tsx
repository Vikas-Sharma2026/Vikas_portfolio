import { useState, useEffect } from 'react';
import { 
  Rocket, 
  ExternalLink, 
  Github, 
  Layers, 
  ShieldCheck, 
  UserCheck, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle2,
  FileQuestion,
  Search,
  ShieldAlert,
  Key,
  PackageCheck,
  ChevronRight,
  Info,
  X
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem, WorkflowStep } from '../data/portfolioData';
import projectImg from '../assets/images/project_lost_and_found_1791005789657.jpg';

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const flagshipProject = projects[0];
  const otherProjects = projects.slice(1);

  // Workflow state
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPlayingWorkflow, setIsPlayingWorkflow] = useState<boolean>(true);

  // Detail Modal state
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const workflowSteps = flagshipProject.workflow || [];

  // Auto-play the workflow animation smoothly
  useEffect(() => {
    if (!isPlayingWorkflow || workflowSteps.length === 0) return;

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % workflowSteps.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlayingWorkflow, workflowSteps.length]);

  const getWorkflowIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileQuestion': return <FileQuestion className="w-4 h-4" />;
      case 'Search': return <Search className="w-4 h-4" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Key': return <Key className="w-4 h-4" />;
      case 'UserCheck': return <UserCheck className="w-4 h-4" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4" />;
      case 'PackageCheck': return <PackageCheck className="w-4 h-4" />;
      default: return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <Rocket className="w-4 h-4" />
            <span>MY MISSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Featured Projects · <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Built to Solve</span>
          </h2>
          <p className="text-base text-slate-400">
            Real systems addressing tangible campus problems. Engineered from scratch with clear architecture and data security.
          </p>
        </div>

        {/* FLAGSHIP MISSION #01: LOST & FOUND MANAGEMENT SYSTEM */}
        <div className="relative rounded-3xl bg-[#0b0e16] border border-cyan-500/40 overflow-hidden shadow-2xl mb-6 sm:mb-8 glow-cyan">
          
          {/* Top Banner Tag */}
          <div className="px-6 sm:px-8 py-4 bg-slate-900/90 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                {flagshipProject.missionNumber}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                FLAGSHIP CAMPUS UTILITY
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-emerald-400">PROTOTYPE VERIFIED</span>
            </div>
          </div>

          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Project Overview */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-display">
                  {flagshipProject.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400 mb-6">
                  {flagshipProject.tagline}
                </p>

                {/* Problem & Solution Compact */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xs font-mono uppercase text-rose-400 font-bold mb-1">
                      The Problem
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {flagshipProject.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="block text-xs font-mono uppercase text-cyan-400 font-bold mb-1">
                      The Engineered Solution
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {flagshipProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <span className="block text-xs font-mono uppercase text-slate-500 mb-2">
                    Technologies Applied
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {flagshipProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono bg-cyan-950/30 text-cyan-300 border border-cyan-800/40 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(flagshipProject)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-all shadow-md shadow-cyan-600/20 cursor-pointer flex items-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  <span>VIEW FULL ARCHITECTURE</span>
                </button>

                <a
                  href={flagshipProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={flagshipProject.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Project Demo</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Preview & Animated Workflow Engine */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* High-Resolution Project Interface Preview */}
              <div
                onClick={() => setSelectedProject(flagshipProject)}
                className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 cursor-pointer shadow-lg aspect-video"
              >
                <img
                  src={projectImg}
                  alt={flagshipProject.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-xs font-mono text-cyan-300">
                    <span>SYSTEM DASHBOARD OVERVIEW</span>
                    <span className="underline group-hover:text-white transition-colors">Click to expand</span>
                  </div>
                </div>
              </div>

              {/* ANIMATED WORKFLOW VISUALIZER */}
              <div className="rounded-2xl bg-[#07090e] border border-slate-800 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                      VERIFICATION WORKFLOW LIFECYCLE
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Step-by-step custody and claim validation logic
                    </span>
                  </div>

                  {/* Play / Pause / Reset Controls */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsPlayingWorkflow(!isPlayingWorkflow)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800 cursor-pointer"
                      title={isPlayingWorkflow ? 'Pause Animation' : 'Play Animation'}
                    >
                      {isPlayingWorkflow ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={() => setActiveStepIndex(0)}
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors border border-slate-800 cursor-pointer"
                      title="Reset Step"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Visual Step Timeline Buttons */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {workflowSteps.map((step, idx) => {
                    const isActive = idx === activeStepIndex;
                    const isPassed = idx < activeStepIndex;
                    return (
                      <button
                        key={step.step}
                        onClick={() => {
                          setActiveStepIndex(idx);
                          setIsPlayingWorkflow(false);
                        }}
                        className={`py-2 px-1 rounded text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                          isActive
                            ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                            : isPassed
                            ? 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/40'
                            : 'bg-slate-900/60 text-slate-500 border border-slate-800 hover:text-slate-300'
                        }`}
                        title={step.title}
                      >
                        <span className="text-[10px] font-mono leading-none mb-1">{step.label}</span>
                        {getWorkflowIcon(step.icon)}
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Highlight Card */}
                {workflowSteps[activeStepIndex] && (
                  <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-start gap-3 transition-all duration-300">
                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 shrink-0">
                      {getWorkflowIcon(workflowSteps[activeStepIndex].icon)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-xs font-bold text-white font-mono">
                          STEP {workflowSteps[activeStepIndex].step}: {workflowSteps[activeStepIndex].title}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-300">
                          Role: {workflowSteps[activeStepIndex].role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {workflowSteps[activeStepIndex].description}
                      </p>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        {/* SECONDARY PROJECTS GRID (IF ANY) */}
        {otherProjects.length > 0 && (
          <div>
            <h4 className="text-xl font-bold text-white mb-6 font-display flex items-center gap-2">
              <span>Additional Utility Implementations</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl bg-[#0b0e16] border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-xs">
                        {p.missionNumber}
                      </span>
                      <span className="text-xs font-mono text-cyan-400">UTILITY</span>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2 font-display">
                      {p.title}
                    </h4>
                    <p className="text-xs font-medium text-slate-400 mb-4">
                      {p.tagline}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-6">
                      {p.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs font-mono bg-slate-900 text-slate-400 border border-slate-800 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                    >
                      View Details
                    </button>
                    <span className="text-slate-600">·</span>
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* DETAILED PROJECT MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0c1017] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                {selectedProject.missionNumber} · DETAILED ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Problem & Solution Details */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-mono uppercase text-rose-400 font-bold block mb-1">
                  Problem Statement
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-1">
                  Engineered Solution
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            {/* Admin System Features if available */}
            {selectedProject.adminSystemFeatures && (
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold block mb-2">
                  Administrative System Capabilities
                </span>
                <ul className="space-y-2">
                  {selectedProject.adminSystemFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <UserCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Security Architecture */}
            {selectedProject.securityFeatures && (
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-indigo-400 font-bold block mb-2">
                  Security & Access Controls
                </span>
                <ul className="space-y-2">
                  {selectedProject.securityFeatures.map((sec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{sec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links and Placeholders */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-slate-500">
                REPO: <span className="text-slate-300">{selectedProject.links.github}</span>
              </div>
              <div className="flex gap-3">
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Open GitHub Repo
                </a>
                <a
                  href={selectedProject.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors cursor-pointer"
                >
                  View Code / Demo
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
