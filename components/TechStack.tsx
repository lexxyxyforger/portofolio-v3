'use client';

import { motion, Variants } from 'framer-motion';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

const stack = [
  {
    category: "Frontend",
    tools: [
      { name: "Next.js 16", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind v4", level: "Expert" },
      { name: "HTML", level: "Expert" },
      { name: "CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" }
    ]
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", level: "Advanced" },
      { name: "PHP", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "Redis", level: "Intermediate" }
    ]
  },
  {
    category: "Infrastructure & Tools",
    tools: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel / AWS", level: "Advanced" },
      { name: "Figma", level: "Advanced" },
      { name: "Python / AI", level: "Intermediate" }
    ]
  }
];

const highlights = [
  { label: "Deployment Ready", value: "30+", sub: "Production Projects" },
  { label: "Design System", value: "Pixel", sub: "Perfect Obsession" },
  { label: "Avg. Performance", value: "99%", sub: "Lighthouse Score" },
  { label: "Uptime Focus", value: "24/7", sub: "Scalable Logic" }
];

export default function TechStack() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-350 mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase block mb-4">
              My Arsenal
            </span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase leading-none">
              The Tech <span className="text-transparent stroke-text">Behind</span> The Magic
            </h2>
          </motion.div>
          <p className="text-zinc-500 text-xs font-black uppercase tracking-widest max-w-50 text-right opacity-50">
            Selalu bereksperimen dengan teknologi terbaru untuk performa maksimal.
          </p>
        </div>

        {/* Stats Section Baru */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/20 border border-white/5 p-8 rounded-4xl hover:bg-zinc-900/40 transition-colors"
            >
              <span className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.3em] block mb-4">
                {item.label}
              </span>
              <div className="text-4xl font-black italic uppercase tracking-tighter text-white mb-1">
                {item.value}
              </div>
              <div className="text-[10px] font-bold text-cyan-500/60 uppercase tracking-widest">
                {item.sub}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
          {stack.map((group, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#050505] p-10 md:p-14 relative group"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <h3 className="text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em] mb-12 flex items-center gap-4 relative z-10">
                <span className="w-8 h-px bg-cyan-500/30" />
                {group.category}
              </h3>
              
              <div className="space-y-6 relative z-10">
                {group.tools.map((tool) => (
                  <motion.div 
                    key={tool.name}
                    whileHover={{ x: 10 }}
                    className="group flex justify-between items-center border-b border-white/5 pb-4 hover:border-cyan-500/30 transition-colors"
                  >
                    <div>
                      <h4 className="text-xl font-bold tracking-tight text-zinc-300 group-hover:text-white transition-colors">
                        {tool.name}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-cyan-500 transition-colors">
                        {tool.level}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-cyan-500 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
            <div className="px-6 py-3 bg-zinc-900/30 border border-white/5 rounded-full backdrop-blur-md">
                <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.5em]">
                    Continuous Learning — Innovation — Speed
                </p>
            </div>
        </div>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 1.5px rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
} 