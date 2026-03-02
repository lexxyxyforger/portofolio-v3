'use client';

import { motion } from 'framer-motion';
import TechStack from '@/components/TechStack';

export default function StackPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-40 pb-20 selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-cyan-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-125 h-125 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-10">
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            <div className="lg:col-span-8">
              <span className="text-[10px] tracking-[0.6em] font-black text-cyan-500 uppercase block mb-6">
                Technical Documentation
              </span>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] mb-8">
                The <br />
                <span className="text-transparent stroke-text">Arsenal</span>
              </h1>
              <p className="max-w-xl text-zinc-500 text-sm md:text-base font-medium leading-relaxed uppercase tracking-wider">
                Kumpulan teknologi yang gue gunakan untuk membangun arsitektur digital yang scalable dan estetis.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:block border-l border-white/5 pl-12 py-4">
              <div className="space-y-10">
                <div className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">System Status</span>
                    <span className="text-[10px] font-black text-cyan-500 uppercase animate-pulse">Online</span>
                  </div>
                  <div className="h-px w-full bg-zinc-900 overflow-hidden">
                    <motion.div 
                       initial={{ x: "-100%" }}
                       animate={{ x: "0%" }}
                       transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                       className="h-full w-1/3 bg-cyan-500" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-black text-zinc-700 uppercase tracking-tighter block mb-1">Architecture</span>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">Fullstack Next.js</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-zinc-700 uppercase tracking-tighter block mb-1">Performance</span>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest italic">99+ Lighthouse</p>
                  </div>
                </div>

                <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl backdrop-blur-sm">
                  <p className="text-[9px] font-mono text-zinc-500 leading-relaxed uppercase">
                    Last update: {new Date().toLocaleDateString()}<br/>
                    Focus: High-End UI & Logic<br/>
                    Mood: Continuous Innovation
                  </p>
                </div>

                <div className="flex gap-2">
                    {['V16', 'TS', 'T4'].map(tag => (
                        <div key={tag} className="px-2 py-1 border border-white/10 text-[8px] font-black text-zinc-600 rounded">
                            {tag}
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <TechStack />
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </main>
  );
}