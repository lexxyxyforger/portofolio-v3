'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface CardProjectProps {
  project: {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    tech: string[];
    screenshots: string[];
  };
}

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: 'spring', 
      stiffness: 60, 
      damping: 20 
    }
  }
};

export default function CardProject({ project }: CardProjectProps) {
  return (
    <motion.div variants={itemVariants} className="h-full">
      <Link href={`/project/${project.id}`} className="group block h-full perspective-1000">
        <div className="relative h-full bg-zinc-950 border border-white/5 rounded-4xl overflow-hidden transition-all duration-700 ease-[0.16, 1, 0.3, 1] group-hover:border-cyan-500/30 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] group-hover:-translate-y-2">
          
          {/* Top Visual Header */}
          <div className="relative h-72 overflow-hidden">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full w-full"
            >
              <Image 
                src={project.screenshots[0] || "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000"} 
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out opacity-40 group-hover:opacity-100"
              />
            </motion.div>
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
            
            {/* Floating Category Badge */}
            <div className="absolute top-6 left-6 z-20">
              <div className="px-4 py-1.5 bg-zinc-950/80 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.2em]">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-10 -mt-20 relative z-20">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-8 bg-cyan-500/50 group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest font-bold">
                  PROJECT_0{project.id.slice(-1)}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white group-hover:text-cyan-400 transition-colors italic uppercase leading-none">
                {project.title}
              </h2>
            </div>

            <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2 group-hover:text-zinc-300 transition-colors">
              {project.shortDesc}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="text-[9px] font-black text-zinc-600 uppercase tracking-widest px-3 py-1 bg-zinc-900/50 border border-white/5 rounded-lg group-hover:text-cyan-300 group-hover:border-cyan-500/20 transition-all duration-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Background Numbering Effect */}
          <div className="absolute -bottom-6 -right-4 text-[12rem] font-black text-white/2 italic pointer-events-none group-hover:text-cyan-500/4 transition-all duration-1000 leading-none select-none">
            {project.id.slice(-2)}
          </div>

          {/* Interactive Arrow Button */}
          <div className="absolute bottom-10 right-10 z-30 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black group-hover:bg-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}