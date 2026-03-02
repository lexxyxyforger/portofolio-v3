'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-99 border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl supports-backdrop-filter:bg-[#050505]/40"
      >
        <div className="max-w-350 mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20">
            
            <div className="flex items-center gap-8">
              <div className="shrink-0">
                <Link href="/" onClick={closeMenu} className="group flex items-center gap-2">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#050505] -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
                  </div>
                  <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                    Dev<span className="text-cyan-500">Porto</span>
                  </span>
                </Link>
              </div>

              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
                </span>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">Available for hire</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="flex items-center gap-10">
                {[
                  { name: 'Projects', path: '/' },
                  { name: 'Stack', path: '/stack' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' }
                ].map((link) => (
                  <Link 
                    key={link.name}
                    href={link.path} 
                    className={`relative py-1 text-[10px] font-black uppercase tracking-[0.2em] transition-colors group ${
                      pathname === link.path ? 'text-white' : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <motion.span layoutId="nav-active" className="absolute -bottom-1 left-0 w-full h-px bg-cyan-500" />
                    )}
                    {pathname !== link.path && (
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full" />
                    )}
                  </Link>
                ))}

                <Link 
                  href="/contact" 
                  className="group relative px-6 py-2.5 ml-4 overflow-hidden rounded-full bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 italic">Get in Touch</span>
                </Link>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-100 p-2 text-zinc-400 hover:text-white transition-colors"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
                <motion.span 
                  animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  className="h-px bg-current"
                />
                <motion.span 
                  animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                  className="w-4 h-px bg-current"
                />
                <motion.span 
                  animate={isOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "70%" }}
                  className="h-px bg-current"
                />
              </div>
            </button>

          </div>
        </div>
        
        <motion.div className="h-px bg-linear-to-r from-transparent via-cyan-500 to-transparent origin-left" style={{ scaleX }} />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-98 bg-[#050505] flex flex-col justify-center px-8 md:hidden"
          >
            <div className="space-y-6">
              {[
                { name: "Projects", path: "/" },
                { name: "Stack", path: "/stack" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link 
                    href={item.path}
                    onClick={closeMenu}
                    className={`text-5xl font-black italic tracking-tighter uppercase transition-colors ${
                      pathname === item.path ? 'text-cyan-500' : 'text-zinc-800 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div variants={itemVariants} className="mt-16 border-t border-white/5 pt-8 flex flex-col gap-4">
              <Link href="https://github.com/lexxyxyforger" target="_blank" onClick={closeMenu} className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500">GitHub Archive</Link>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-800">Digital Craftsman © 2026</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}