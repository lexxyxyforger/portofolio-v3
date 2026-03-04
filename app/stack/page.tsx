'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TechStack from '@/components/TechStack';

const floatingTags = [
  { label: "Next.js", x: "10%", y: "15%", delay: 0 },
  { label: "React", x: "75%", y: "10%", delay: 0.3 },
  { label: "TypeScript", x: "85%", y: "35%", delay: 0.6 },
  { label: "Python", x: "5%", y: "55%", delay: 0.9 },
  { label: "Node.js", x: "90%", y: "60%", delay: 1.2 },
  { label: "Docker", x: "15%", y: "80%", delay: 1.5 },
  { label: "TensorFlow", x: "70%", y: "78%", delay: 0.4 },
  { label: "PostgreSQL", x: "50%", y: "5%", delay: 0.8 },
];

const quickStats = [
  { value: "60+", label: "Technologies", color: "from-cyan-500 to-blue-500" },
  { value: "6", label: "Categories", color: "from-violet-500 to-purple-500" },
  { value: "99%", label: "Lighthouse", color: "from-emerald-500 to-teal-500" },
  { value: "∞", label: "Passion", color: "from-amber-500 to-orange-500" },
];

export default function StackPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[130px]"
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating tech tags */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingTags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: tag.delay + 0.5, duration: 0.6, ease: "backOut" }}
              style={{ left: tag.x, top: tag.y }}
              className="absolute"
            >
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 5 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
                className="px-3 py-1.5 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm rounded-full"
              >
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">{tag.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 text-center px-6">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/[0.08] bg-white/[0.02] backdrop-blur-md rounded-full mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">
              System Online — v4.2.1
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-[clamp(3rem,12vw,11rem)] font-black tracking-tighter italic uppercase leading-[0.85] mb-6">
              <span className="block bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                The
              </span>
              <span className="block text-transparent stroke-text relative">
                Arsenal
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-[15%] left-0 h-[3px] bg-gradient-to-r from-cyan-500 to-transparent"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto text-zinc-500 text-sm md:text-lg font-medium leading-relaxed mb-16"
          >
            Kumpulan teknologi yang gue gunakan untuk membangun arsitektur digital yang scalable, estetis & powerful.
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {quickStats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="group relative px-8 py-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl backdrop-blur-sm hover:border-white/[0.12] transition-colors cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-black italic tracking-tighter text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.3em]">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em]">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <div className="relative z-10">
        <TechStack />
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.15); }
      `}</style>
    </main>
  );
}