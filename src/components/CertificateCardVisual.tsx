import { Award, ShieldCheck, Sparkles, Trophy, Cpu, Code2 } from 'lucide-react';
import { CertificateItem } from '../data/portfolioData';

interface CertificateCardVisualProps {
  cert: CertificateItem;
  isDetailedModal?: boolean;
}

export function CertificateCardVisual({ cert, isDetailedModal = false }: CertificateCardVisualProps) {
  // 1. Google for Developers & AICTE EduSkills
  if (cert.id === 'cert-google-aiml') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#0e1626] to-[#070b14] border border-cyan-500/30 rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner ${isDetailedModal ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
        {/* Subtle background seal */}
        <div className="absolute right-[-20px] top-[-20px] w-48 h-48 rounded-full border border-cyan-500/10 pointer-events-none" />
        
        {/* Top Header Logos Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-cyan-300 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>AICTE · EDUSKILLS · GOOGLE</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700/40 font-bold">
            GRADE: O (OUTSTANDING)
          </span>
        </div>

        {/* Certificate Center Content */}
        <div className="my-auto py-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
            Certificate of Virtual Internship
          </span>
          <h4 className={`font-bold text-white font-display ${isDetailedModal ? 'text-2xl sm:text-3xl mb-1' : 'text-lg mb-1'}`}>
            AI-ML Virtual Internship
          </h4>
          <p className="text-xs text-slate-300 font-medium">
            Awarded to <span className="text-cyan-300 font-bold">Vikas Sharma</span>
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">
            School of Management Sciences, Lucknow
          </p>
          <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300">
            <span>Supported By: <strong>Google for Developers</strong> (India Edu Program)</span>
          </div>
        </div>

        {/* Footer Meta & Signatories */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>April – June 2026</span>
          <span className="text-cyan-400 font-bold">VERIFIED CREDENTIAL</span>
        </div>
      </div>
    );
  }

  // 2. SMS Lucknow Hackathon-2025 (Team CODE STORM)
  if (cert.id === 'cert-sms-hackathon') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#181308] to-[#0c0a06] border border-amber-500/30 rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner ${isDetailedModal ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-amber-900/40 text-[10px] font-mono text-amber-300/80">
          <div className="flex items-center gap-1.5 font-bold">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>SMS LUCKNOW (NAAC A+) · IIC</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/40 font-bold">
            Ref: SMS/CSE/HCK/2025/45
          </span>
        </div>

        {/* Certificate Center Content */}
        <div className="my-auto py-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
            CERTIFICATE OF PARTICIPATION
          </span>
          <h4 className={`font-bold text-white font-display ${isDetailedModal ? 'text-2xl sm:text-3xl mb-1' : 'text-lg mb-1'}`}>
            Hackathon-2025
          </h4>
          <p className="text-xs text-slate-200">
            Awarded to <span className="text-amber-300 font-bold">Vikas Sharma</span> (B.Tech CSE)
          </p>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-600/40 text-xs font-mono text-amber-300 font-bold">
            <span>TEAM: CODE STORM</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">
            Dept of CSE & Team Parivartan · 3-Day Technical Hackathon
          </p>
        </div>

        {/* Footer Meta & Signatories */}
        <div className="pt-3 border-t border-amber-900/40 flex items-center justify-between text-[10px] font-mono text-amber-400/80">
          <span>9th – 11th Oct 2025</span>
          <span className="text-amber-300">CODE STORM · PARTICIPANT</span>
        </div>
      </div>
    );
  }

  // 3. Google Cloud - Introduction to Generative AI Studio
  if (cert.id === 'cert-google-genai') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#0a1424] to-[#060c17] border border-sky-500/30 rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner ${isDetailedModal ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-sky-400 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Google Cloud · simplilearn SkillUP</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-800/40 font-bold">
            Code: 9222227
          </span>
        </div>

        {/* Certificate Center Content */}
        <div className="my-auto py-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
            DECLARATION OF COMPLETION
          </span>
          <h4 className={`font-bold text-white font-display ${isDetailedModal ? 'text-2xl sm:text-3xl mb-1' : 'text-lg mb-1'}`}>
            Introduction to Generative AI Studio
          </h4>
          <p className="text-xs text-slate-300">
            Conferred upon <span className="text-sky-300 font-bold">Vikas Sharma</span>
          </p>
          <p className="text-[11px] text-slate-400 mt-1 max-w-sm mx-auto">
            Deepening skills in prompt design, foundation models, and Google Cloud GenAI Studio workflows.
          </p>
        </div>

        {/* Footer Meta & Signatories */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>23rd October 2025</span>
          <span className="text-sky-400 font-bold">Krishna Kumar, CEO</span>
        </div>
      </div>
    );
  }

  // 4. Python Basic To Advance Course
  if (cert.id === 'cert-python-saumya') {
    return (
      <div className={`relative w-full h-full bg-gradient-to-b from-[#101924] to-[#070d14] border border-cyan-500/30 rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner ${isDetailedModal ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[10px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
            <Code2 className="w-3.5 h-3.5" />
            <span>PYTHON PROGRAMMING</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
            BASIC TO ADVANCE
          </span>
        </div>

        {/* Certificate Center Content */}
        <div className="my-auto py-2 text-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1">
            Certificate of Appreciation
          </span>
          <h4 className={`font-bold text-white font-display ${isDetailedModal ? 'text-2xl sm:text-3xl mb-1' : 'text-lg mb-1'}`}>
            Python Basic To Advance Course
          </h4>
          <p className="text-xs text-slate-300">
            Awarded to <span className="text-cyan-300 font-bold">Vikas Sharma</span>
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            In recognition of hard work and dedication in mastering Python programming from basics to advanced OOP.
          </p>
        </div>

        {/* Footer Meta & Signatories */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>8th December 2025</span>
          <span className="text-cyan-400 font-bold">Instructor: Saumya Singh</span>
        </div>
      </div>
    );
  }

  // 5. Outskill - Generative AI Mastermind
  return (
    <div className={`relative w-full h-full bg-gradient-to-b from-[#091a13] to-[#040e0a] border border-emerald-500/30 rounded-xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-inner ${isDetailedModal ? 'min-h-[380px]' : 'min-h-[220px]'}`}>
      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40 text-[10px] font-mono text-emerald-300/80">
        <div className="flex items-center gap-1.5 font-bold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUTSKILL MASTERMIND</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/40">
          CERTIFICATE OF COMPLETION
        </span>
      </div>

      {/* Certificate Center Content */}
      <div className="my-auto py-2 text-center">
        <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
          GENERATIVE AI MASTERMIND
        </span>
        <h4 className={`font-bold text-white font-display ${isDetailedModal ? 'text-2xl sm:text-3xl mb-1' : 'text-lg mb-1'}`}>
          Generative AI Mastermind
        </h4>
        <p className="text-xs text-slate-200">
          Proudly presented to <span className="text-emerald-300 font-bold">Vikas Sharma</span>
        </p>
        <p className="text-[11px] text-slate-400 mt-1 max-w-sm mx-auto">
          Successfully completed the hands-on Generative AI Mastermind exploring AI developer utilities and prompt systems.
        </p>
      </div>

      {/* Footer Meta & Signatories */}
      <div className="pt-3 border-t border-emerald-900/40 flex items-center justify-between text-[10px] font-mono text-emerald-400/80">
        <span>Completed 2025</span>
        <span className="text-emerald-300 font-bold">Vaibhav Sisinty, Founder</span>
      </div>
    </div>
  );
}
