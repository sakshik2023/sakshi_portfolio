'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/resume';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 4.9 4.9 0 0 0-.12-3.51s-1.13-.36-3.7 1.38a12.8 12.8 0 0 0-6.8 0C6.13 1.25 5 1.61 5 1.61A4.9 4.9 0 0 0 4.88 5.12 5.2 5.2 0 0 0 3.5 8.74c0 5.22 3 6.42 6 6.76-.8.2-1.2.77-1.39 2.1-1.25.56-4.5.56-5.83-1.66-1-1.67-2.73-1.89-2.73-1.89-1.25-.11-.22.56-.22.56 1 .56 1.66 2.34 1.66 2.341.67 3 4.5 2.1 5.33 1.56v3" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-16 md:mb-24 text-center"
         >
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
             Get In <span className="text-primary">Touch</span>
           </h2>
           <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6">Let's build something extraordinary</h3>
            <p className="text-gray-400 mb-12 leading-relaxed">
              I'm always open to discussing full-stack development work, innovative projects, or partnership opportunities. Reach out and let's turn your ideas into reality.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex justify-center items-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {PORTFOLIO_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex justify-center items-center text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">Mobile</p>
                  <a href={`tel:${PORTFOLIO_DATA.contact.mobile}`} className="text-lg font-medium text-white hover:text-primary transition-colors">
                    {PORTFOLIO_DATA.contact.mobile}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:text-white hover:bg-primary transition-all hover:-translate-y-1">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:text-white hover:bg-primary transition-all hover:-translate-y-1">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-all flex justify-center items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
