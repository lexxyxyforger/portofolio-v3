'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '@/data/projects';
import { notFound, useParams } from 'next/navigation';

export default function ProjectDetail() {
  const params = useParams();
  const project = projects.find((p) => p.id === params.id);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-400 selection:text-black pb-32">
      <div className="fixed inset-0 pointer-events-none z-99 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <header ref={ref} className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-b border-white/5">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image 
            src={project.screenshots[0] || "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=2000"} 
            alt={`${project.title} Hero Header`}
            fill
            priority
            className="object-cover scale-105 filter blur-xs"
          />
        </motion.div>
        
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/50 via-[#050505]/80 to-[#050505]" />
        
        <div className="absolute top-32 left-0 right-0 z-20 max-w-350 mx-auto px-6 lg:px-12">
          <motion.nav 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link href="/" className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-[11px] font-black tracking-widest">
              <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO ARCHIVE
            </Link>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-start gap-4"
          >
            <span className="px-3 py-1 bg-zinc-900 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              {project.category}
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic leading-[0.85] mb-4 uppercase">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 mt-20 relative z-30">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <h3 className="text-zinc-600 font-black text-xs uppercase tracking-widest mb-6">Project Brief</h3>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium max-w-4xl tracking-tight">
              {project.fullDesc}
            </p>
          </motion.div>
        </section>

        <section>
          <div className="grid grid-cols-1 gap-12">
            {project.screenshots.map((src, index) => (
              <motion.div 
                key={index}
                className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl shadow-black/30 aspect-video"
              >
                <Image 
                  src={src} 
                  alt={`${project.title} documentation ${index + 1}`} 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </section>

        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/5 text-center"
        >
          <Link href="/" className="inline-block px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-cyan-400 transition-colors rounded-full shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Archive Explorer / Exit
          </Link>
        </motion.footer>
      </div>
    </main>
  );
}