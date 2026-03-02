'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] pt-32 pb-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative z-10">
          
          <div className="max-w-sm">
            <h2 className="text-[40px] font-black tracking-tighter leading-none mb-6 italic uppercase">
              Keep <span className="text-cyan-500">Creating.</span>
            </h2>
            <p className="text-zinc-500 text-xs font-black tracking-widest leading-relaxed uppercase opacity-60">
              Sebuah arsip digital untuk eksplorasi tanpa batas. 
              Didesain dengan presisi untuk masa depan web yang lebih interaktif.
            </p>
          </div>

          <div className="flex flex-col items-end gap-8">
            <div className="flex flex-wrap justify-end gap-x-8 gap-y-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Github'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="group relative text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-cyan-400 transition-colors"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            
            <div className="text-right space-y-2">
              <p className="text-[9px] font-bold text-zinc-600 tracking-[0.2em] uppercase italic">
                Handcrafted by you in Jakarta, ID
              </p>
              <div className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">
                &copy; {new Date().getFullYear()} DEVPORTO — ALL RIGHTS RESERVED
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 select-none pointer-events-none relative"
        >
          <h3 className="text-[18vw] font-black leading-none text-white/2 tracking-tighter italic uppercase text-center translate-y-12">
            Next Level
          </h3>
          <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent h-full w-full" />
        </motion.div>
      </div>
    </footer>
  );
}