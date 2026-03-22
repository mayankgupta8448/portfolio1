"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 flex items-center min-h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8 text-center md:text-left"
          >
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Hi, I&apos;m <br className="hidden sm:block md:hidden"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-sm">Mayank Gupta</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Full Stack Developer & AI Enthusiast.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a 
                href="https://github.com/mayankgupta8448" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border/50 bg-background/50 backdrop-blur-md hover:bg-muted font-bold hover:scale-[1.02] transition-all"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-blue-400 shadow-[0_0_40px_rgba(79,70,229,0.3)]">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden shadow-inner border border-transparent">
                <div className="text-7xl sm:text-8xl lg:text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-purple-500 opacity-90 drop-shadow-md select-none">MG</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
