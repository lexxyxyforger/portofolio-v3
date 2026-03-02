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
  { name: 'Node.js', icon: <><path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 11V17M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> }
];

const certificates = [
  { title: "Teens Web Developer", issuer: "Timedoor Academy", date: "2024", category: "WEB" },
  { title: "Ai Engineer - Ai Computer Vision", issuer: "Timedoor Academy", date: "2026", category: "AI" },
  { title: "Software Developer - Android Apps Developer", issuer: "Timedoor Academy", date: "2023", category: "WEB" },
  { title: "Ai Engineer - Ai Machine Learning", issuer: "Timedoor Academy", date: "2025", category: "AI" },
  { title: "Ai Engineer - Python For Data Science", issuer: "Timedoor Academy", date: "2025", category: "AI" },
  { title: "Teens Programmer", issuer: "Timedoor Academy", date: "2023", category: "PROG" },
];

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
             Yo! Gw <span className="text-white font-bold italic">Fullstack Craftsman</span> yang terobsesi mengubah kompleksitas menjadi kesederhanaan. Fokus gw adalah membangun <span className="text-white">scalable product</span> dengan sentuhan <span className="text-cyan-400 font-black">identitas digital</span> yang nggak akan pernah gagal mencuri perhatian.
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
                    <h4 className="text-xl font-bold italic uppercase tracking-tighter">Computer Science Degree</h4>
                    <p className="text-zinc-500 text-sm mt-1 font-mono uppercase tracking-widest">Bina Nusantara University — 2023 - 2027</p>
                    <p className="text-zinc-400 mt-4 text-sm leading-relaxed max-w-sm">
                        Fokus pada algoritma, struktur data, dan pengembangan sistem skala besar.
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em]">Current Status</h3>
                <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl">
                    <p className="text-zinc-400 text-sm italic font-medium">
                        &quot;Gw sekarang tinggal di area Jakarta utara, sering nongkrong di coworking space buat cari inspirasi atau sekedar ngerjain project baru pake tech stack terbaru.&quot;
                    </p>
                </div>
            </motion.div>
        </section>

        {/* Tech Arsenal */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="md:col-span-12 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 overflow-hidden mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xs">
              <h3 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Tech Arsenal</h3>
              <p className="text-sm text-zinc-400 font-medium">Tools yang gw pake buat nge-push limit di setiap baris kode.</p>
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
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
              <div className="text-left">
                <h3 className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Milestones</h3>
                <h2 className="text-4xl font-black italic uppercase tracking-tighter">Validated Certificates</h2>
              </div>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest border transition-all rounded-sm ${
                      activeFilter === cat 
                      ? 'bg-cyan-500 border-cyan-500 text-black' 
                      : 'border-white/10 text-zinc-500 hover:border-white/30'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 min-h-400px">
              <AnimatePresence mode='popLayout'>
                {filteredCerts.map((cert, i) => (
                    <motion.div 
                        key={cert.title}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-between p-6 border-b border-white/5 group hover:bg-white/2 transition-all"
                    >
                        <div className="flex items-center gap-6">
                            <span className="text-zinc-700 font-mono text-xs">{(i + 1).toString().padStart(2, '0')}</span>
                            <div>
                                <h4 className="text-lg font-bold uppercase italic tracking-tighter group-hover:text-cyan-400 transition-colors">{cert.title}</h4>
                                <div className="flex items-center gap-3 mt-1">
                                  <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">{cert.issuer}</p>
                                  <span className="w-1 h-1 bg-zinc-800 rounded-full" />
                                  <span className="text-[9px] text-cyan-500/50 font-black uppercase">{cert.category}</span>
                                </div>
                            </div>
                        </div>
                        <span className="text-zinc-700 font-mono text-xs hidden md:block">{cert.date}</span>
                    </motion.div>
                ))}
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