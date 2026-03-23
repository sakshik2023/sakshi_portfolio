'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/resume';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                {/* Timeline dot and line */}
                <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
                <div className="absolute left-0 md:left-[20%] top-2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10" />

                <div className="md:col-span-1 mb-4 md:mb-0 md:text-right md:pr-8 pt-1">
                  <span className="text-sm font-semibold text-primary">{exp.duration}</span>
                </div>

                <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                  <h3 className="text-2xl font-heading font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-gray-400 font-medium mb-6">{exp.company}</h4>

                  <ul className="space-y-4 mb-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-gray-300 leading-relaxed flex gap-3">
                        <span className="text-primary mt-1.5 opacity-50">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    <span className="text-sm text-gray-500 mr-2 py-1">Tech Stack:</span>
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
