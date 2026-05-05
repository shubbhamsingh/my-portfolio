import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowUpRight, Phone } from 'lucide-react'; // Phone icon added
import { socialLinks } from '../data/portfolioData';

function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden py-24 mb-10">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Send className="h-4 w-4" />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-strong rounded-2xl p-8 md:p-10 text-center"
          >
             <p className="mx-auto max-w-xl text-lg text-zinc-400 mb-8 leading-relaxed">
              I'm currently open for new opportunities, internships, and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            {/* Added Phone Button Here */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-8">
               <a href="mailto:shubhamsingh161203@gmail.com" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-emerald-500/30 hover:bg-white/[0.05]">
                  <Mail className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-semibold text-white">shubhamsingh161203@gmail.com</span>
               </a>
               
               {/* Naya Clickable Phone Button */}
               <a href="tel:+918409858830" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-cyan-500/30 hover:bg-white/[0.05]">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <span className="text-sm font-semibold text-white">+91 84098 58830</span>
               </a>
               
               <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-sm font-semibold text-white">Jaipur, Rajasthan</span>
               </div>
            </div>

            <div className="flex justify-center flex-wrap gap-4 mb-8">
               {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] px-6 py-3.5 transition-all hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1 shadow-lg shadow-black/20">
                      <Icon className="h-5 w-5 text-zinc-400" />
                      <span className="text-sm font-semibold text-white">{link.name}</span>
                    </a>
                  )
               })}
            </div>

            <a
              href="mailto:shubhamsingh161203@gmail.com"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/40 hover:brightness-110"
            >
              Say Hello <ArrowUpRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;