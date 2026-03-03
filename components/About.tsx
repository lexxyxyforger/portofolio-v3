'use client';

import { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "circOut" } 
  }
};

const techTools = [
  { name: 'Next.js', icon: <path d="M13 10L8 15M10.5 12.5L16 7M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/> },
  { name: 'TypeScript', icon: <><path d="M2 20V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20Z" stroke="currentColor" strokeWidth="2"/><path d="M7 7H11M9 7V17M14 10C14 8.5 15 7 17 7C19 7 20 8.5 20 10V14C20 15.5 19 17 17 17C15 17 14 15.5 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
  { name: 'React', icon: <><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z" stroke="currentColor" strokeWidth="1.5"/></> },
  { name: 'Tailwind', icon: <><path d="M12 6L4 10L12 14L20 10L12 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M4 14L12 18L20 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
  { name: 'Framer', icon: <><path d="M12 2L19 9H5L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M5 16L12 23V16H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></> },
  { name: 'Node.js', icon: <><path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 11V17M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
  { name: 'PHP', icon: <><ellipse cx="12" cy="12" rx="10" ry="7" stroke="currentColor" strokeWidth="2"/><path d="M7 12V10C7 8.89543 7.89543 8 9 8H10C11.1046 8 12 8.89543 12 10V10C12 11.1046 11.1046 12 10 12H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 14V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
  { name: 'HTML', icon: <><path d="M4 3L5.77778 19.3556L12 21L18.2222 19.3556L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M16 7H8L8.5 11H15.5L15 16L12 17L9 16L8.8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
  { name: 'CSS', icon: <><path d="M4 3L5.77778 19.3556L12 21L18.2222 19.3556L20 3H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M15.5 7H8L8.3 10H15.2L14.8 15L12 16.5L9.2 15L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> },
  { name: 'Python', icon: <><path d="M12 2C9 2 8 3.5 8 5V8H13V9H6C4 9 2 10.5 2 13C2 15.5 4 17 6 17H8V14C8 12 9.5 10 12 10H16C18 10 19 8.5 19 7V5C19 3 17 2 14 2H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 22C15 22 16 20.5 16 19V16H11V15H18C20 15 22 13.5 22 11C22 8.5 20 7 18 7H16V10C16 12 14.5 14 12 14H8C6 14 5 15.5 5 17V19C5 21 7 22 10 22H12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><circle cx="10" cy="5" r="1" fill="currentColor"/><circle cx="14" cy="19" r="1" fill="currentColor"/></> },
  { name: 'MySQL', icon: <><path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6Z" stroke="currentColor" strokeWidth="2"/><path d="M8 9V15M8 12H12V9M12 15V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="16" cy="12" r="2" stroke="currentColor" strokeWidth="2"/></> },
  { name: 'Supabase', icon: <><path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> }
];

const certificates = [
  { title: "Teens Web Developer", issuer: "Timedoor Academy", date: "2024", category: "WEB", id: "TDA-WEB-2024" },
  { title: "Ai Engineer - Ai Computer Vision", issuer: "Timedoor Academy", date: "2026", category: "AI", id: "TDA-ACV-2026" },
  { title: "Software Developer - Android Apps Developer", issuer: "Timedoor Academy", date: "2023", category: "WEB", id: "TDA-AND-2023" },
  { title: "Ai Engineer - Ai Machine Learning", issuer: "Timedoor Academy", date: "2025", category: "AI", id: "TDA-AML-2025" },
  { title: "Ai Engineer - Python For Data Science", issuer: "Timedoor Academy", date: "2025", category: "AI", id: "TDA-PDS-2025" },
  { title: "Teens Programmer", issuer: "Timedoor Academy", date: "2023", category: "PROG", id: "TDA-PRG-2023" },
];

const categoryColors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
  WEB: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', text: 'text-cyan-400', glow: 'shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)]' },
  AI: { border: 'border-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', glow: 'shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)]' },
  PROG: { border: 'border-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', glow: 'shadow-[0_0_30px_-5px_rgba(245,158,11,0.15)]' },
};

const categoryIcons: Record<string, React.ReactNode> = {
  WEB: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"/>
      <path d="M9 22V12H15V22"/>
    </svg>
  ),
  AI: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
      <path d="M2 17L12 22L22 17"/>
      <path d="M2 12L12 17L22 12"/>
    </svg>
  ),
  PROG: (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
      <line x1="14" y1="4" x2="10" y2="20"/>
    </svg>
  ),
};

const filterCategories = ["ALL", "WEB", "AI", "PROG"];

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCerts = certificates.filter(cert => 
    activeFilter === "ALL" ? true : cert.category === activeFilter
  );

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 selection:bg-cyan-500/30">
      <div className="fixed inset-0 pointer-events-none z-99 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <section className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase block mb-4"
          >
            Behind the Code
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-none"
          >
            Digital <span className="text-transparent stroke-text">Architect</span>
          </motion.h1>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-8 bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-14 backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[80px] group-hover:bg-cyan-500/10 transition-colors" />
            <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8">The Persona</h3>
            <p className="text-2xl md:text-4xl font-medium leading-[1.1] tracking-tighter text-zinc-300">
             Saya adalah seorang <span className="text-white font-bold italic">Fullstack Craftsman</span> yang berdedikasi dalam mengubah kompleksitas menjadi kesederhanaan. Fokus utama saya adalah membangun <span className="text-white">scalable product</span> dengan sentuhan <span className="text-cyan-400 font-black">identitas digital</span> yang mampu memberikan kesan mendalam dan tak terlupakan.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-4 bg-cyan-500 rounded-3xl p-8 flex flex-col justify-between text-[#050505] shadow-[0_0_50px_-10px_rgba(6,182,212,0.3)]"
          >
            <div className="text-5xl font-black italic tracking-tighter leading-[0.8]">VOL.<br/>2026</div>
            <div className="pt-10 border-t border-[#050505]/10">
              <p className="text-[11px] font-black uppercase tracking-widest leading-relaxed">
                Currently based in north Jakarta, ID.<br/>Available for high-end digital crafts.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section: Journey & Education */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Foundation</h3>
                <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute top-0 -left-1 w-2 h-2 rounded-full bg-cyan-500" />
                    <h4 className="text-xl font-bold italic uppercase tracking-tighter">Information Systems Degree</h4>
                    <p className="text-zinc-500 text-sm mt-1 font-mono uppercase tracking-widest">Media Nusantara University — 2023 - 2027</p>
                    <p className="text-zinc-400 mt-4 text-sm leading-relaxed max-w-sm">
                        Berfokus pada pengembangan sistem informasi, manajemen data, serta perancangan dan implementasi solusi teknologi berskala besar.
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Current Status</h3>
                <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                    <p className="text-zinc-400 text-sm italic font-medium">
                        &quot;Saat ini saya berdomisili di kawasan Jakarta Utara. Saya kerap mengunjungi coworking space untuk mencari inspirasi maupun mengerjakan proyek-proyek terbaru dengan memanfaatkan teknologi mutakhir.&quot;
                    </p>
                </div>
            </motion.div>
        </section>

        {/* Tech Arsenal */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-12 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xs">
              <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Tech Arsenal</h3>
              <p className="text-sm text-zinc-400 font-medium">Perangkat dan teknologi yang saya gunakan untuk mendorong batas kemampuan di setiap baris kode.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {techTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ y: -5, borderColor: 'rgba(34, 211, 238, 0.4)', backgroundColor: 'rgba(34, 211, 238, 0.05)' }}
                  className="flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/5 rounded-2xl transition-colors group/tool"
                >
                  <svg className="w-6 h-6 text-zinc-500 group-hover/tool:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none">
                    {tool.icon}
                  </svg>
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-500 group-hover/tool:text-white transition-colors">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section: Milestones with Filter */}
        <section className="mb-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-left">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Milestones</h3>
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">Validated <span className="text-transparent stroke-text">Certificates</span></h2>
                <p className="text-zinc-500 text-xs font-medium mt-4 max-w-md">Kumpulan sertifikasi profesional yang telah diperoleh sepanjang perjalanan pengembangan karir di bidang teknologi.</p>
              </motion.div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest border transition-all duration-300 rounded-full ${
                      activeFilter === cat 
                      ? 'bg-cyan-500 border-cyan-500 text-black scale-105' 
                      : 'border-white/10 text-zinc-500 hover:border-white/30 hover:text-zinc-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode='popLayout'>
                {filteredCerts.map((cert, i) => {
                    const colors = categoryColors[cert.category] || categoryColors.WEB;
                    return (
                    <motion.div 
                        key={cert.title}
                        layout
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`group relative bg-zinc-900/40 border ${colors.border} rounded-2xl p-7 backdrop-blur-md overflow-hidden hover:scale-[1.02] transition-all duration-500 ${colors.glow}`}
                    >
                        {/* Decorative corner accents */}
                        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${colors.border} rounded-tl-2xl opacity-60`} />
                        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${colors.border} rounded-br-2xl opacity-60`} />
                        
                        {/* Background glow effect */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.bg} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        
                        {/* Top row: category badge + date */}
                        <div className="flex items-center justify-between mb-6 relative z-10">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.bg} ${colors.text} text-[9px] font-black uppercase tracking-widest rounded-full border ${colors.border}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {cert.category}
                          </span>
                          <span className="text-zinc-600 font-mono text-[10px] tracking-wider">{cert.date}</span>
                        </div>

                        {/* Icon */}
                        <div className={`${colors.text} opacity-30 group-hover:opacity-70 transition-opacity duration-500 mb-5 relative z-10`}>
                          {categoryIcons[cert.category]}
                        </div>

                        {/* Title */}
                        <h4 className="text-lg font-bold uppercase italic tracking-tighter leading-tight text-zinc-200 group-hover:text-white transition-colors duration-300 mb-4 relative z-10">
                          {cert.title}
                        </h4>

                        {/* Divider */}
                        <div className="relative z-10 mb-4">
                          <div className="h-px bg-white/5 w-full" />
                          <div className={`h-px ${colors.bg} w-0 group-hover:w-full transition-all duration-700 -mt-px`} />
                        </div>

                        {/* Footer: issuer + cert ID */}
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-2">
                            <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center`}>
                              <svg className={`w-3 h-3 ${colors.text}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                            </div>
                            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{cert.issuer}</span>
                          </div>
                          <span className="text-[8px] text-zinc-700 font-mono tracking-wider">{cert.id}</span>
                        </div>
                    </motion.div>
                    );
                })}
              </AnimatePresence>
            </div>
        </section>

        <motion.div 
          variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="md:col-span-12 bg-zinc-900/50 border border-white/5 rounded-3xl p-10 flex items-center justify-center group relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h4 className="text-xl md:text-3xl font-black italic uppercase tracking-tighter text-center group-hover:scale-105 transition-transform duration-500">
            &quot;Simple is the ultimate sophistication.&quot;
          </h4>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-24 text-center">
          <p className="text-zinc-600 font-mono text-[10px] mb-10 tracking-[0.4em] uppercase">READY TO COLLABORATE?</p>
          <a 
            href="https://github.com/username-lo" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-6 px-16 py-8 bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-cyan-400 transition-all rounded-full shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            <span className="relative z-10 italic">Explore GitHub Archive</span>
            <div className="absolute inset-0 bg-cyan-400 rounded-full translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </main>
  );
}