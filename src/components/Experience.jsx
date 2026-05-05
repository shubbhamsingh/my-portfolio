import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, ArrowUpRight, Award } from 'lucide-react';
import { experiences } from '../data/portfolioData';

function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />
      <div className="absolute top-1/4 -left-40 h-80 w-80 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Briefcase className="h-4 w-4" />
            Work Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </motion.h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative mb-12 last:mb-0 flex items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-8 top-6 z-10 md:left-1/2 md:-translate-x-1/2">
                <div className={`h-4 w-4 rounded-full bg-gradient-to-br ${exp.color} shadow-lg`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                </div>
              </div>

              <div className={`ml-16 w-full md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <div className="group glass rounded-xl p-6 transition-all duration-300 hover:border-white/10 hover:bg-[#1a1f2e]">
                  <div className="mb-4 flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${exp.color} text-lg font-bold text-white shadow-lg`}>
                      {exp.logo}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-white leading-tight">{exp.company}</h3>
                      <p className="mt-1 text-sm font-semibold text-emerald-400">{exp.role}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
                    <span className="inline-flex items-center gap-1.5">{exp.period}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{exp.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500/60" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Ye raha naya "View Credentials" Button */}
                  {exp.link && (
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <Award className="h-4 w-4" /> 
                        View Credentials 
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;