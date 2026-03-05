'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } }
};

const chipVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
  }
};

const categoryConfig: Record<string, { gradient: string; glow: string; accent: string; icon: string }> = {
  "Languages": { 
    gradient: "from-cyan-500/20 to-blue-500/20", 
    glow: "bg-cyan-500", 
    accent: "text-cyan-400",
    icon: "⟨⟩"
  },
  "Frontend": { 
    gradient: "from-violet-500/20 to-purple-500/20", 
    glow: "bg-violet-500", 
    accent: "text-violet-400",
    icon: "◈"
  },
  "Backend & APIs": { 
    gradient: "from-emerald-500/20 to-teal-500/20", 
    glow: "bg-emerald-500", 
    accent: "text-emerald-400",
    icon: "⚡"
  },
  "Database & BaaS": { 
    gradient: "from-amber-500/20 to-orange-500/20", 
    glow: "bg-amber-500", 
    accent: "text-amber-400",
    icon: "◉"
  },
  "AI & Data Science": { 
    gradient: "from-rose-500/20 to-pink-500/20", 
    glow: "bg-rose-500", 
    accent: "text-rose-400",
    icon: "◇"
  },
  "DevOps & Tools": { 
    gradient: "from-sky-500/20 to-indigo-500/20", 
    glow: "bg-sky-500", 
    accent: "text-sky-400",
    icon: "⟐"
  }
};

const levelColors: Record<string, string> = {
  "Expert": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Advanced": "bg-violet-500/20 text-violet-400 border-violet-500/30",
  "Intermediate": "bg-zinc-500/15 text-zinc-400 border-zinc-500/20",
};

const stack = [
  {
    category: "Languages",
    tools: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "PHP", level: "Intermediate" },
      { name: "Java", level: "Intermediate" },
      { name: "C", level: "Intermediate" },
      { name: "C#", level: "Intermediate" },
      { name: "C++", level: "Intermediate" },
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" }
    ]
  },
  {
    category: "Frontend",
    tools: [
      { name: "Next.js", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "React Native", level: "Intermediate" },
      { name: "Nuxt JS", level: "Intermediate" },
      { name: "SolidJS", level: "Intermediate" },
      { name: "Tailwind v4", level: "Expert" },
      { name: "SASS", level: "Advanced" },
      { name: "Semantic UI React", level: "Intermediate" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "Three.js", level: "Intermediate" },
      { name: "Chart.js", level: "Intermediate" },
      { name: "React Router", level: "Advanced" },
      { name: "React Hook Form", level: "Advanced" },
      { name: "Webpack", level: "Intermediate" }
    ]
  },
  {
    category: "Backend & APIs",
    tools: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "Meteor JS", level: "Intermediate" },
      { name: "Socket.io", level: "Intermediate" },
      { name: "JWT", level: "Advanced" },
      { name: "Nodemon", level: "Advanced" },
      { name: "GraphQL", level: "Intermediate" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "NPM", level: "Expert" }
    ]
  },
  {
    category: "Database & BaaS",
    tools: [
      { name: "PostgreSQL", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" }
    ]
  },
  {
    category: "AI & Data Science",
    tools: [
      { name: "TensorFlow", level: "Intermediate" },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Keras", level: "Intermediate" },
      { name: "scikit-learn", level: "Intermediate" },
      { name: "Pandas", level: "Intermediate" },
      { name: "NumPy", level: "Intermediate" },
      { name: "Scipy", level: "Intermediate" },
      { name: "Plotly", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "mlflow", level: "Intermediate" }
    ]
  },
  {
    category: "DevOps & Tools",
    tools: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Docker", level: "Intermediate" },
      { name: "Vercel", level: "Advanced" },
      { name: "Heroku", level: "Intermediate" },
      { name: "Cisco", level: "Intermediate" },
      { name: "ESLint", level: "Advanced" },
      { name: "Prettier", level: "Advanced" },
      { name: "FFmpeg", level: "Intermediate" },
      { name: "Figma", level: "Advanced" },
      { name: "Adobe Photoshop", level: "Intermediate" },
      { name: "Canva", level: "Advanced" },
      { name: "Itch.io", level: "Intermediate" }
    ]
  }
];

const highlights = [
  { label: "Production Projects", value: "30+", icon: "🚀" },
  { label: "Pixel Perfect", value: "Design", icon: "✦" },
  { label: "Lighthouse Score", value: "99%", icon: "⚡" },
  { label: "Scalable Logic", value: "24/7", icon: "∞" }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const totalTools = stack.reduce((acc, g) => acc + g.tools.length, 0);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header  */}
        <div className="text-center mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.5em] font-black text-cyan-500 uppercase mb-6">
              <span className="w-8 h-px bg-cyan-500/50" />
              My Arsenal
              <span className="w-8 h-px bg-cyan-500/50" />
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic uppercase leading-[0.9] mb-6">
              The Tech{' '}
              <span className="text-transparent stroke-text">Behind</span>
              <br />
              The Magic
            </h2>
            <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Selalu bereksperimen dengan teknologi terbaru untuk performa maksimal dan user experience yang luar biasa.
            </p>
          </motion.div>
        </div>

        {/* Highlights - Horizontal scroll on mobile */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              variants={chipVariant}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative flex items-center gap-4 px-8 py-5 bg-white/2 border border-white/6 rounded-2xl backdrop-blur-sm hover:border-white/12 hover:bg-white/4 transition-all duration-500 cursor-default"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-2xl md:text-3xl font-black italic tracking-tighter text-white">
                  {item.value}
                </div>
                <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-16"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === null
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-zinc-500 border-white/8 hover:border-white/20 hover:text-zinc-300'
            }`}
          >
            All ({totalTools})
          </button>
          {stack.map((group) => {
            const config = categoryConfig[group.category];
            return (
              <button
                key={group.category}
                onClick={() => setActiveCategory(
                  activeCategory === group.category ? null : group.category
                )}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === group.category
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent text-zinc-500 border-white/8 hover:border-white/20 hover:text-zinc-300'
                }`}
              >
                <span className="mr-1.5">{config?.icon}</span>
                {group.category} ({group.tools.length})
              </button>
            );
          })}
        </motion.div>

        {/* Category Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {stack
            .filter(g => !activeCategory || g.category === activeCategory)
            .map((group, idx) => {
              const config = categoryConfig[group.category];
              const isLarge = group.tools.length > 8;

              return (
                <motion.div 
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative rounded-3xl border border-white/6 bg-white/1.5 backdrop-blur-sm overflow-hidden hover:border-white/12 transition-all duration-700 ${
                    isLarge ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Card glow on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Accent dot */}
                  <div className={`absolute top-6 right-6 w-2 h-2 rounded-full ${config.glow} opacity-40 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500`}
                    style={{ boxShadow: 'none' }}
                  />

                  <div className="relative z-10 p-8 md:p-10">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-8">
                      <span className={`text-xl ${config.accent}`}>{config.icon}</span>
                      <div>
                        <h3 className={`text-sm font-black uppercase tracking-wider ${config.accent}`}>
                          {group.category}
                        </h3>
                        <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
                          {group.tools.length} technologies
                        </span>
                      </div>
                    </div>
                    
                    {/* Tools as chips/pills */}
                    <motion.div 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-wrap gap-2"
                    >
                      {group.tools.map((tool) => (
                        <motion.div
                          key={tool.name}
                          variants={chipVariant}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-sm cursor-default transition-all duration-300 ${levelColors[tool.level]} hover:shadow-lg`}
                        >
                          <span className="text-sm font-bold tracking-tight">{tool.name}</span>
                          <span className="text-[8px] font-black uppercase tracking-wider opacity-60">
                            {tool.level === "Expert" ? "★" : tool.level === "Advanced" ? "◆" : "●"}
                          </span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Level Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-12 mb-8"
        >
          {[
            { label: "Expert", symbol: "★", color: "text-cyan-400" },
            { label: "Advanced", symbol: "◆", color: "text-violet-400" },
            { label: "Intermediate", symbol: "●", color: "text-zinc-400" },
          ].map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <span className={`text-xs ${level.color}`}>{level.symbol}</span>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{level.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative group cursor-default">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative px-8 py-4 bg-white/3 border border-white/8 rounded-full backdrop-blur-md group-hover:border-white/15 transition-all duration-500">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.4em] group-hover:text-zinc-300 transition-colors">
                Continuous Learning — Innovation — Speed
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.15); }
      `}</style>
    </section>
  );
} 