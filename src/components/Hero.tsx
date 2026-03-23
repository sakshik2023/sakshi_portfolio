'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/resume';
import { ArrowDown, Mail, Download, ExternalLink } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {PORTFOLIO_DATA.name}
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-3xl text-gray-400 font-medium mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {PORTFOLIO_DATA.role}
        </motion.h2>

        <motion.p 
          className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {PORTFOLIO_DATA.shortIntro}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold transition-all hover:bg-primary-dark hover:scale-105 active:scale-95">
            View Work
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold transition-all hover:bg-white/10 hover:scale-105 active:scale-95 backdrop-blur-sm">
            Contact Me
            <Mail className="w-5 h-5" />
          </a>
          <a href="/resume.pdf" download className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-gray-300 hover:text-white rounded-full font-semibold transition-all hover:scale-105 active:scale-95">
            Download Resume
            <Download className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/20 flex justify-center p-2">
          <motion.div 
            animate={{ 
              y: [0, 15, 0],
              opacity: [1, 0, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
