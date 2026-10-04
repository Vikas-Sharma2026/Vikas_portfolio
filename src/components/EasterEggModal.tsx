import { useState, useEffect, useRef } from 'react';
import { Terminal, X, Sparkles, Send, ShieldAlert, Rocket } from 'lucide-react';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function EasterEggModal({ isOpen, onClose, onOpen }: EasterEggModalProps) {
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "INITIALIZING DEVELOPER_CONSOLE_v1.0...",
    "ACCESS GRANTED.",
    "--------------------------------------------------",
    "🎉 You found something hidden. Curiosity is a developer's superpower. 🚀",
    "--------------------------------------------------",
    "Type 'help' for available developer commands or 'clear' to reset.",
  ]);
  const [commandInput, setCommandInput] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const logContainerRef = useRef<HTMLDivElement | null>(null);

  // Keyboard shortcut listener for key 'e' or 'E'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if typing in an input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return;
      }

      if (e.key === 'e' || e.key === 'E') {
        if (!isOpen) {
          onOpen();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        logContainerRef.current?.scrollTo({ top: logContainerRef.current.scrollHeight, behavior: 'smooth' });
      }, 150);
    }
  }, [isOpen, terminalLogs]);

  const handleRunCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, `$ ${commandInput}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          "Available Commands:",
          "  whoami      - Display developer identity and mindset",
          "  curiosity   - The secret behind this portal",
          "  skills      - Quick tech summary",
          "  mission     - Inspect active developmental target",
          "  clear       - Reset terminal screen",
          "  exit        - Close developer console"
        );
        break;
      case 'whoami':
        newLogs.push("VIKAS SHARMA — 3rd Year BTech [CSE] Student at School of Management Sciences, Lucknow. Builder & Problem Solver.");
        break;
      case 'curiosity':
        newLogs.push("✨ 'Curiosity is the engine of achievement.' Keep experimenting.");
        break;
      case 'skills':
        newLogs.push("Python, SQL, HTML, CSS, JavaScript, Git, GitHub.");
        break;
      case 'mission':
        newLogs.push("CURRENT MISSION: 'Keep learning, build better projects and become a skilled developer.'");
        break;
      case 'clear':
        setTerminalLogs(["Console reset."]);
        setCommandInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for options.`);
    }

    setTerminalLogs(newLogs);
    setCommandInput('');
  };

  return (
    <>
      {/* Subtle Discreet Hint Indicator in lower left/center */}
      <div className="fixed bottom-4 left-4 z-30 hidden md:block">
        <button
          onClick={onOpen}
          className="text-[11px] font-mono text-slate-500 hover:text-cyan-400 bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1.5"
          title="Press 'E' on your keyboard to reveal developer console"
        >
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Curious enough? <kbd className="px-1 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">E</kbd></span>
        </button>
      </div>

      {/* Terminal Modal Window */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-2xl bg-[#07090e] border border-cyan-500/50 shadow-2xl overflow-hidden font-mono text-xs">
            
            {/* Window Bar */}
            <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-300 font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>vikas@secret-easter-egg:~</span>
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div
              ref={logContainerRef}
              className="p-5 h-72 overflow-y-auto space-y-1.5 text-slate-300 bg-[#06080d]"
            >
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={
                    log.includes('🎉')
                      ? 'text-cyan-300 font-bold py-1'
                      : log.startsWith('$')
                      ? 'text-amber-400'
                      : 'text-slate-400'
                  }
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Quick Command Suggestions */}
            <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/80 flex gap-2">
              <span className="text-[10px] text-slate-500">TRY:</span>
              {['help', 'whoami', 'curiosity', 'skills', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setCommandInput(cmd);
                    inputRef.current?.focus();
                  }}
                  className="text-[10px] text-cyan-400 hover:underline cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleRunCommand}
              className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
            >
              <span className="text-cyan-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Type 'help' or command..."
                className="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-600 focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded border border-cyan-500/40 transition-colors cursor-pointer text-[11px]"
              >
                Run
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
