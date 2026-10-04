import { useState } from 'react';
import { Award, Eye, X, ShieldCheck, CheckCircle2, Trophy, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';
import { CertificateCardVisual } from './CertificateCardVisual';

export function Certificates() {
  const { certificates } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const categories = ['All', 'Internship & AI', 'Hackathon', 'Coursework'];

  const filteredCerts = activeCategory === 'All' 
    ? certificates 
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <section id="certificates" className="relative py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
            <Award className="w-4 h-4" />
            <span>VERIFIED ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3 font-display">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Credentials</span>
          </h2>
          <p className="text-sm text-slate-400">
            Official credentials verified across Google for Developers, AICTE, SMS Lucknow Hackathon, Google Cloud, and coursework.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? certificates.length 
              : certificates.filter(c => c.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-500/10 font-semibold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert: CertificateItem) => (
            <div
              key={cert.id}
              className={`group rounded-2xl bg-[#0b0e16] border ${cert.accentBorder} hover:border-cyan-400 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1 hover:shadow-cyan-500/15`}
            >
              {/* Visual Card Representation */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative cursor-pointer p-3 bg-slate-950/60"
              >
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-300">
                  <CertificateCardVisual cert={cert} />
                </div>
                
                <div className="absolute bottom-5 right-5 flex items-center gap-1 text-[11px] font-mono bg-cyan-950/90 text-cyan-300 px-2.5 py-1 rounded-lg border border-cyan-700/50 shadow-lg">
                  <Eye className="w-3 h-3" />
                  <span>INSPECT</span>
                </div>
              </div>

              {/* Certificate Meta Details */}
              <div className="p-5 flex flex-col justify-between flex-1 border-t border-slate-800/70">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {cert.dateLabel}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1.5 font-display line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {cert.issuer} {cert.subIssuer && <span className="text-slate-400 block text-[11px]">{cert.subIssuer}</span>}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skillsCovered.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inspect Action Button */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 rounded-xl transition-all cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View Full Certificate Record</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer Note */}
        <div className="mt-8 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>All 5 credentials verified & accredited to Vikas Sharma · School of Management Sciences, Lucknow</span>
        </div>

      </div>

      {/* FULLSCREEN CERTIFICATE INSPECTION MODAL */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-3xl bg-[#0a0e18] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  OFFICIAL ACCREDITATION · VERIFIED
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {selectedCert.title}
                </h3>
              </div>
            </div>

            {/* Large Certificate Visual Preview Box */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 mb-6 relative">
              <CertificateCardVisual cert={selectedCert} isDetailedModal={true} />
            </div>

            {/* Metadata Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="block text-[11px] font-mono text-slate-500 uppercase">Issuing Authority</span>
                <span className="text-sm font-semibold text-white block">{selectedCert.issuer}</span>
                {selectedCert.subIssuer && (
                  <span className="text-xs text-slate-400 mt-0.5 block">{selectedCert.subIssuer}</span>
                )}
              </div>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="block text-[11px] font-mono text-slate-500 uppercase">Candidate & Timeline</span>
                <span className="text-sm font-semibold text-cyan-300 block">Vikas Sharma</span>
                <span className="text-xs text-slate-400 block">{selectedCert.dateLabel}</span>
              </div>
            </div>

            {/* Additional details (Team / Grade / Reference code) */}
            {(selectedCert.grade || selectedCert.team || selectedCert.credentialCode) && (
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 mb-6 flex flex-wrap gap-4 text-xs font-mono">
                {selectedCert.grade && (
                  <div>
                    <span className="text-slate-500 block">INTERNSHIP GRADE:</span>
                    <span className="text-emerald-400 font-bold">{selectedCert.grade}</span>
                  </div>
                )}
                {selectedCert.team && (
                  <div>
                    <span className="text-slate-500 block">HACKATHON TEAM:</span>
                    <span className="text-amber-400 font-bold">{selectedCert.team}</span>
                  </div>
                )}
                {selectedCert.credentialCode && (
                  <div>
                    <span className="text-slate-500 block">IDENTIFIER:</span>
                    <span className="text-cyan-300 font-bold">{selectedCert.credentialCode}</span>
                  </div>
                )}
              </div>
            )}

            {/* Assessed Competencies */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 mb-6">
              <span className="block text-xs font-mono uppercase text-slate-400 mb-2">Verified Competencies:</span>
              <div className="flex flex-wrap gap-2">
                {selectedCert.skillsCovered.map((s, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Signatories & Institutional Verification */}
            {selectedCert.signatories && (
              <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 mb-6 text-xs text-slate-400">
                <span className="font-mono text-[11px] text-slate-500 block mb-1">CERTIFYING AUTHORITIES:</span>
                <span>{selectedCert.signatories}</span>
              </div>
            )}

            {/* Institutional Seal Footnote */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>INSTITUTION: School of Management Sciences, Lucknow</span>
              <span className="text-cyan-400 font-bold">STATUS: AUTHENTICATED</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
