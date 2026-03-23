'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/resume';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';

export default function EducationCertificates() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <GraduationCap className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-heading font-bold">Education</h2>
              </div>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{edu.degree}</h3>
                  <h4 className="text-lg text-primary font-medium mb-4">{edu.institution} - {edu.location}</h4>
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span className="bg-black/40 px-3 py-1 rounded-full border border-white/5">{edu.score}</span>
                    <span>{edu.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-10 h-10 text-primary" />
                <h2 className="text-4xl font-heading font-bold">Certificates</h2>
              </div>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </motion.div>

            <div className="grid gap-4">
              {PORTFOLIO_DATA.certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                  </div>
                  
                  {cert.link && cert.link !== '#' && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {(!cert.link || cert.link === '#') && (
                     <button disabled className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-500 rounded-lg text-sm font-semibold cursor-not-allowed whitespace-nowrap">
                       Unavailable
                     </button>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Achievements under Certificates */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="mt-16 mb-8"
             >
               <h2 className="text-3xl font-heading font-bold mb-4">Achievements</h2>
               <div className="w-12 h-1 bg-primary rounded-full" />
            </motion.div>
            
            <div className="space-y-4">
              {PORTFOLIO_DATA.achievements.map((achieve, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-gray-200 leading-relaxed">{achieve.title}</p>
                    <p className="text-xs text-primary mt-1 font-semibold">{achieve.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
