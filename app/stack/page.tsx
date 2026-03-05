'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import TechStack from '@/components/TechStack';

const floatingTags = [
  { label: "Next.js", x: "10%", y: "15%", delay: "0s" },
  { label: "React", x: "75%", y: "10%", delay: "0.8s" },
  { label: "TypeScript", x: "85%", y: "35%", delay: "1.6s" },
  { label: "Python", x: "5%", y: "55%", delay: "2.4s" },
  { label: "Node.js", x: "90%", y: "60%", delay: "0.5s" },
  { label: "Docker", x: "15%", y: "80%", delay: "1.2s" },
  { label: "TensorFlow", x: "70%", y: "78%", delay: "1.8s" },
  { label: "PostgreSQL", x: "50%", y: "5%", delay: "2s" },
];

const quickStats = [
  { value: "60+", label: "Technologies", color: "from-cyan-500 to-blue-500" },
  { value: "6", label: "Categories", color: "from-violet-500 to-purple-500" },
  { value: "99%", label: "Lighthouse", color: "from-emerald-500 to-teal-500" },
  { value: "∞", label: "Passion", color: "from-amber-500 to-orange-500" },
];

export default function StackPage() {
  const heroRef = useRef(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Ambient Background — pure CSS animations, GPU-composited */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[-5%] w-[36rem] h-[36rem] md:w-[48rem] md:h-[48rem] bg-cyan-500/[0.04] rounded-full blur-[100px] md:blur-[150px] animate-ambient-1" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-purple-500/[0.04] rounded-full blur-[100px] md:blur-[150px] animate-ambient-2" />
        <div className="hidden md:block absolute top-[40%] left-[30%] w-[28rem] h-[28rem] bg-violet-500/[0.03] rounded-full blur-[130px] animate-ambient-3" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Floating tech tags — CSS animation, hidden on small mobile */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          {floatingTags.map((tag, i) => (
            <div
              key={i}
              style={{ left: tag.x, top: tag.y, animationDelay: tag.delay }}
              className="absolute animate-float-tag opacity-0"
            >
              <div className="px-3 py-1.5 border border-white/[0.06] bg-white/[0.02] rounded-full">
                <span className="text-[10px] font-bold text-zinc-600 tracking-wider">{tag.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 border border-white/[0.08] bg-white/[0.02] rounded-full mb-8 md:mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] sm:tracking-[0.5em]">
              System Online — v4.2.1
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-[clamp(2.5rem,11vw,11rem)] font-black tracking-tighter italic uppercase leading-[0.85] mb-4 md:mb-6">
              <span className="block bg-linear-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
                The
              </span>
              <span className="block text-transparent stroke-text relative">
                Arsenal
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute bottom-[15%] left-0 h-0.5 md:h-0.75 bg-linear-to-r from-cyan-500 to-transparent"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="max-w-lg sm:max-w-2xl mx-auto text-zinc-500 text-xs sm:text-sm md:text-lg font-medium leading-relaxed mb-10 md:mb-16 px-2"
          >
            Kumpulan teknologi yang gue gunakan untuk membangun arsitektur digital yang scalable, estetis & powerful.
          </motion.p>

          {/* Quick Stats — CSS grid, CSS hover only  */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: 'easeOut' }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto"
          >
            {quickStats.map((stat, i) => (
              <div
                key={i}
                className="group relative px-4 sm:px-6 md:px-8 py-4 md:py-5 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:border-white/[0.12] transition-all duration-300 cursor-default md:hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black italic tracking-tighter text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[8px] sm:text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator — CSS animation */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-delayed">
          <div className="flex flex-col items-center gap-3 animate-scroll-hint">
            <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.4em]">Scroll</span>
            <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <div className="relative z-10">
        <TechStack />
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.15); }
        @media (max-width: 640px) {
          .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.15); }
        }

        /* GPU-composited CSS animations — no JS overhead */
        @keyframes ambient-1 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(20px, -15px, 0) scale(1.08); }
        }
        @keyframes ambient-2 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1.05); }
          50% { transform: translate3d(-20px, 12px, 0) scale(1); }
        }
        @keyframes ambient-3 {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, 18px, 0) scale(1.06); }
        }
        .animate-ambient-1 {
          animation: ambient-1 20s ease-in-out infinite;
          will-change: transform;
        }
        .animate-ambient-2 {
          animation: ambient-2 25s ease-in-out infinite;
          will-change: transform;
        }
        .animate-ambient-3 {
          animation: ambient-3 18s ease-in-out infinite;
          will-change: transform;
        }

        /* Float tag animation */
        @keyframes float-tag {
          0% { opacity: 0; transform: translate3d(0, 10px, 0) scale(0.8); }
          15% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -8px, 0) scale(1); }
          85% { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
          100% { opacity: 1; transform: translate3d(0, -8px, 0) scale(1); }
        }
        .animate-float-tag {
          animation: float-tag 6s ease-in-out infinite;
          animation-fill-mode: forwards;
          will-change: transform, opacity;
        }

        /* Scroll hint */
        @keyframes scroll-hint {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        .animate-scroll-hint {
          animation: scroll-hint 2.5s ease-in-out infinite;
        }

        /* Fade in delayed */
        @keyframes fade-in-delayed {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.6s ease-out 1.2s forwards;
          opacity: 0;
        }

        /* Reduce motion for accessibility & low-power */
        @media (prefers-reduced-motion: reduce) {
          .animate-ambient-1, .animate-ambient-2, .animate-ambient-3,
          .animate-float-tag, .animate-scroll-hint {
            animation: none !important;
          }
          .animate-float-tag { opacity: 1 !important; }
          .animate-fade-in-delayed { opacity: 1 !important; animation: none !important; }
        }
      `}</style>
    </main>
  );
}
