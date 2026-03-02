'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null);
  
  // Logic for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-40 pb-20 selection:bg-cyan-500/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[-10%] w-125 h-125 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-10">
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.6em] font-black text-cyan-500 uppercase block mb-6">
              Establish Connection
            </span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] mb-8">
              Get In <br />
              <span className="text-transparent stroke-text">Touch</span>
            </h1>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Tilt Card */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] p-10 md:p-16 backdrop-blur-xl relative overflow-hidden group cursor-none"
          >
            <div style={{ transform: "translateZ(75px)" }} className="relative z-10">
                <h3 className="text-2xl font-bold italic uppercase tracking-tighter mb-12">Direct Channels</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Discord', value: 'lexxyxy#0000', color: 'bg-indigo-500' },
                    { label: 'Telegram', value: '@lexxyxy', color: 'bg-sky-500' },
                    { label: 'WhatsApp', value: '+62 8xx xxxx xxxx', color: 'bg-emerald-500' }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleCopy(item.value, item.label)}
                      className="w-full flex items-center justify-between p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-cyan-500/20 transition-all group/item"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-1 h-8 ${item.color} rounded-full`} />
                        <div className="text-left">
                          <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-1">{item.label}</p>
                          <p className="text-lg font-bold tracking-tight">{item.value}</p>
                        </div>
                      </div>
                      <div className="px-4 py-2 bg-white/5 rounded-lg text-[9px] font-black uppercase tracking-widest group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all">
                        {copied === item.label ? 'Copied!' : 'Copy'}
                      </div>
                    </button>
                  ))}
                </div>
            </div>
          </motion.div>

          {/* Right: Socials */}
          <motion.div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((social, i) => (
                <motion.a 
                  key={social}
                  href="#"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-zinc-900/20 border border-white/5 rounded-4xl hover:bg-cyan-500 hover:text-black transition-all group"
                >
                  <p className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-50 group-hover:opacity-100">Social</p>
                  <p className="text-xl font-bold italic uppercase tracking-tighter">{social}</p>
                </motion.a>
              ))}
            </div>

            <div className="p-10 bg-cyan-500 text-black rounded-4xl relative overflow-hidden group shadow-[0_20px_50px_rgba(6,182,212,0.2)]">
                <div className="relative z-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 border-b border-black/10 pb-4">Status</h4>
                    <p className="text-2xl font-black italic uppercase tracking-tighter leading-tight">
                        Open for <span className="text-white">Elite</span> Projects & Collabs.
                    </p>
                </div>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 z-100 px-8 py-4 bg-white text-black rounded-full shadow-2xl flex items-center gap-4"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">{copied} copied!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </main>
  );
}