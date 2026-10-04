import { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  X, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  HelpCircle,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { 
  ChatMessage, 
  SUGGESTED_QUESTIONS, 
  getPortfolioAIResponse 
} from '../utils/portfolioAI';

interface PortfolioAIProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export function PortfolioAI({ isOpen, onClose, onOpen }: PortfolioAIProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I am Vikas's Portfolio Assistant. I can answer any questions about Vikas's skills, his flagship Lost & Found project, his journey, and his current mission. What would you like to explore?",
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const responseText = await getPortfolioAIResponse(query);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: "I'm having trouble processing that right now. Please try asking about Vikas's skills or projects.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Chat reset. How can I help you learn about Vikas's work and projects?",
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <>
      {/* FLOATING ACTION BUTTON */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#0c1017] border border-cyan-500/50 hover:border-cyan-400 text-white shadow-[0_0_25px_-5px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_0px_rgba(6,182,212,0.6)] active:scale-95 transition-all duration-300 cursor-pointer"
          aria-label="Ask My Portfolio AI"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-normal text-slate-100">
            Ask My Portfolio
          </span>
        </button>
      )}

      {/* CHAT WINDOW MODAL / DRAWER */}
      {isOpen && (
        <>
          {/* Mobile Backdrop - strictly below top-16 so header stays fully interactive */}
          <div
            onClick={onClose}
            className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
            aria-hidden="true"
          />

          {/* Panel Container - Starts below header (top-20 on mobile, bottom-6 on desktop) */}
          <div className="fixed top-20 inset-x-3 bottom-3 sm:top-auto sm:inset-x-auto sm:bottom-6 sm:right-6 z-45 w-auto sm:w-[420px] max-h-[calc(100dvh-5.5rem)] sm:max-h-[calc(100vh-5.5rem)] h-[calc(100dvh-5.5rem)] sm:h-[580px] flex flex-col bg-[#0b0e16]/95 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="p-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white font-display">
                    Portfolio Assistant
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <p className="text-[10px] font-mono text-cyan-400">
                  Strictly grounded in Vikas's actual work
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reset conversation"
                className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                title="Close chat"
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Grounding Notice Badge */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Answers are verified against Vikas's documented portfolio.</span>
            </div>

            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                      isAssistant
                        ? 'bg-slate-900/90 text-slate-200 border border-slate-800 whitespace-pre-line'
                        : 'bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>

                  <div className="flex items-center gap-2 mt-1 px-1">
                    <span className="text-[10px] text-slate-500 font-mono">
                      {msg.timestamp}
                    </span>
                    {isAssistant && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="text-slate-500 hover:text-slate-300 transition-colors"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono p-3 bg-slate-900/80 rounded-2xl max-w-[120px] border border-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Chips */}
          <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-cyan-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Vikas's skills, projects..."
              className="flex-1 bg-[#07090e] border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="p-2 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          </div>
        </>
      )}
    </>
  );
}
