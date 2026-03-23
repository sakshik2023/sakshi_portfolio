'use client';

import { useRef, useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/resume';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 4.9 4.9 0 0 0-.12-3.51s-1.13-.36-3.7 1.38a12.8 12.8 0 0 0-6.8 0C6.13 1.25 5 1.61 5 1.61A4.9 4.9 0 0 0 4.88 5.12 5.2 5.2 0 0 0 3.5 8.74c0 5.22 3 6.42 6 6.76-.8.2-1.2.77-1.39 2.1-1.25.56-4.5.56-5.83-1.66-1-1.67-2.73-1.89-2.73-1.89-1.25-.11-.22.56-.22.56 1 .56 1.66 2.34 1.66 2.341.67 3 4.5 2.1 5.33 1.56v3" />
  </svg>
);

function ProjectCard({ project, index }: { project: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full flex flex-col justify-between group"
      >
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary transform group-hover:-translate-y-1 transition-transform">
              <span className="font-heading font-bold text-xl">{project.title.charAt(0)}</span>
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </a>
              )}
              {project.deployLink && (
                <a href={project.deployLink} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
          
          <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-heading font-bold mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-primary mb-6 font-semibold">{project.duration}</p>
          
          <ul className="space-y-3 mb-8">
            {project.points.map((point: string, i: number) => (
              <li key={i} className="text-gray-300 text-sm leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ transform: "translateZ(20px)" }} className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-black/50 border border-white/5 text-gray-300 text-xs rounded-md font-mono">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
