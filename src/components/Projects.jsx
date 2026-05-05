import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Boxes, ArrowUpRight, FileSearch, X, AlertTriangle, CheckCircle2, Terminal } from 'lucide-react';
import { projects, GithubIcon } from '../data/portfolioData';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-emerald-500/5 blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Boxes className="h-4 w-4" />
            Selected Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Things I&apos;ve <span className="gradient-text">Built</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {projects.map((project, index) => (
             <motion.div
             key={project.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: index * 0.1 }}
             viewport={{ once: true }}
             className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1a1f2e]/80 backdrop-blur-sm flex flex-col transition-all hover:border-white/10 hover:bg-[#1a1f2e]"
           >
             <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
             
             <div className="p-6 flex-grow flex flex-col">
                <div className="relative h-48 w-full overflow-hidden rounded-xl mb-4 border border-white/5 bg-black/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  {project.featured && (
                     <div className="absolute right-3 top-3 bg-amber-500 text-black text-xs px-2.5 py-1 rounded-md font-bold shadow-lg">
                       ★ Featured
                     </div>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">{project.title}</h3>
                <p className="text-sm font-medium text-emerald-400 mb-3">{project.tagline}</p>
                <p className="mb-6 text-sm text-zinc-400 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-white/10 bg-white/[0.03] text-zinc-300 text-xs py-1 px-2.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Updated Button Row */}
                <div className="grid grid-cols-3 gap-3 mt-auto pt-4 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-white/5 text-zinc-300 hover:bg-white/10 transition-colors">
                    <GithubIcon className="h-4 w-4"/> Code
                  </a>
                  
                  <button onClick={() => setSelectedProject(project)} className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg border border-white/10 bg-transparent text-white hover:bg-white/5 transition-all">
                    <FileSearch className="h-4 w-4"/> Case Study
                  </button>

                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20">
                    Live <ArrowUpRight className="h-4 w-4"/>
                  </a>
                </div>
             </div>
           </motion.div>
          ))}
        </div>
      </div>

      {/* --- CASE STUDY MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#0f141e] shadow-2xl shadow-black"
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0f141e]/90 backdrop-blur-md px-6 py-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                    Deep Dive
                  </span>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <p className="text-zinc-400 mb-8">Technical breakdown and case study.</p>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
                  {selectedProject.caseStudy.metrics.map((metric, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center">
                      <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1 break-words">{metric.label}</div>
                      <div className="text-sm sm:text-base font-bold text-white break-words">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* The Problem */}
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-amber-400 mb-3">
                    <AlertTriangle className="h-5 w-5" /> The Problem
                  </h4>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.caseStudy.problem}
                  </p>
                </div>

                {/* The Solution */}
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-lg font-bold text-emerald-400 mb-3">
                    <CheckCircle2 className="h-5 w-5" /> The Solution
                  </h4>
                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {selectedProject.caseStudy.solution}
                  </p>
                </div>

                {/* Tech Stack Breakdown */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-cyan-400 mb-4">
                    <Terminal className="h-5 w-5" /> Tech Stack
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="text-xs font-bold uppercase text-zinc-500 mb-2">Frontend</div>
                      <div className="text-sm text-zinc-300">{selectedProject.caseStudy.techStack.frontend}</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="text-xs font-bold uppercase text-zinc-500 mb-2">Backend</div>
                      <div className="text-sm text-zinc-300">{selectedProject.caseStudy.techStack.backend}</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="text-xs font-bold uppercase text-zinc-500 mb-2">Infrastructure</div>
                      <div className="text-sm text-zinc-300">{selectedProject.caseStudy.techStack.infrastructure}</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;