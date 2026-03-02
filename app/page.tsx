'use client';

import { motion, Variants } from 'framer-motion';
import { projects } from '@/data/projects';
import CardProject from '@/components/CardProject';

// Memberikan tipe Variants secara eksplisit
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  visible: { 
    transition: { staggerChildren: 0.1 } 
  }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pb-32 selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Background static - Jauh lebih ringan */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-100 h-100 bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-100 h-100 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center px-6"
        >
          <motion.span 
            variants={heroTextVariants}
            className="inline-block text-[10px] tracking-[0.4em] font-black text-cyan-500 uppercase mb-6"
          >
            Digital Craftsman © 2026
          </motion.span>
          
          <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tight leading-[0.85] uppercase italic mb-8">
            <motion.span variants={heroTextVariants} className="block">Creative</motion.span>
            <motion.span variants={heroTextVariants} className="block text-transparent stroke-text">Solutions</motion.span>
          </h1>

          <motion.div variants={heroTextVariants} className="flex flex-col items-center">
            <p className="text-zinc-500 text-sm md:text-base max-w-lg font-medium leading-relaxed tracking-wide mb-12">
              Membangun masa depan lewat baris kode dan estetika visual. 
              30 arsip project Next.js tanpa kompromi.
            </p>
            
            <div className="w-px h-12 bg-linear-to-b from-cyan-500 to-transparent opacity-50" />
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
        >
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); 
        }
        main {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </main>
  );
}