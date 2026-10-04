import { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare,
  Sparkles,
  Info
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function Contact() {
  const { profile } = PORTFOLIO_DATA;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (field: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 1800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccess(false);

    // Form validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Message should be at least 10 characters long.');
      return;
    }

    setLoading(true);

    // Simulate network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setLoading(false);
    setSuccess(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>COMMUNICATION PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-display">
            Let's Connect · <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">LET'S BUILD SOMETHING.</span>
          </h2>
          <p className="text-base text-slate-400">
            Have an engineering inquiry, hackathon collaboration, or internship opportunity? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Verified Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-[#0b0e16] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Active developer communication channels for Vikas Sharma. Feel free to connect on GitHub, LinkedIn, or via email.
              </p>

              <div className="space-y-3">
                
                {/* Email */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase">Direct Email</span>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('email', profile.email)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* GitHub */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase">GitHub Profile</span>
                      <a 
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        github.com/Vikas-Sharma2026
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('github', profile.github)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy GitHub URL"
                  >
                    {copiedField === 'github' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-[10px] font-mono text-slate-500 uppercase">LinkedIn Profile</span>
                      <a 
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        linkedin.com/in/vikas-sharma-0b548b344
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('linkedin', profile.linkedin)}
                    className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer shrink-0"
                    title="Copy LinkedIn URL"
                  >
                    {copiedField === 'linkedin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </div>

            {/* Institution Badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>{profile.college}</strong><br />
                {profile.course} · {profile.currentYear} Student
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0c1017] border border-cyan-500/30 shadow-2xl relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <span className="text-xs font-mono text-cyan-400 tracking-wider">
                  SEND INQUIRY OR COLLABORATION PING
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              {/* Success Message Banner */}
              {success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-sm mb-1">Message captured successfully!</span>
                    <span>
                      Thank you for reaching out! Since this portfolio is currently running in demonstration mode, your submission passed validation cleanly. You can also contact Vikas directly at <strong className="text-white">{profile.email}</strong>.
                    </span>
                  </div>
                </div>
              )}

              {/* Error Message Banner */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Mercer"
                    disabled={loading}
                    className="w-full bg-[#07090e] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    disabled={loading}
                    className="w-full bg-[#07090e] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry, project collaboration, or hackathon idea..."
                    disabled={loading}
                    className="w-full bg-[#07090e] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2 font-mono text-xs">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      DISPATCHING PACKET...
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-cyan-200" />
                      <span>SEND MESSAGE</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
