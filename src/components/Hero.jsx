import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { stats } from '../data/portfolioData';

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-20 overflow-hidden bg-mesh-pattern">
      {/* Background glow specific to your colors */}
      <div className="absolute top-1/4 left-0 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Area */}
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6"
          >
            <Terminal className="h-4 w-4" /> B.Tech CS Student
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <br />
            <span className="gradient-text mt-2 block">Shubham Raj</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed"
          >
            A passionate <strong className="text-white">Full Stack Developer</strong> specializing in <strong className="text-white">Python & React</strong>. I build scalable web applications and robust backend systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all flex items-center gap-2">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="px-8 py-3.5 rounded-lg glass text-white font-medium hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </motion.div>

          {/* Mini Stats under button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex gap-8 border-t border-white/10 pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Abstract Glass Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:flex justify-center relative"
        >
          {/* Main Floating Glass Card */}
          <div className="relative w-full max-w-md aspect-square rounded-2xl glass border border-white/10 p-8 flex flex-col justify-between animate-float overflow-hidden">
             {/* Decorative code mockup inside the glass */}
             <div className="absolute top-0 left-0 w-full h-8 bg-black/40 flex items-center px-4 gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
             </div>
             
             <div className="mt-8 font-mono text-sm text-emerald-400">
                <p><span className="text-cyan-400">class</span> Developer:</p>
                <p className="ml-4"><span className="text-cyan-400">def</span> __init__(self):</p>
                <p className="ml-8">self.name = <span className="text-yellow-300">"Shubham Raj"</span></p>
                <p className="ml-8">self.role = <span className="text-yellow-300">"Full Stack"</span></p>
                <p className="ml-8">self.weapons = [<span className="text-yellow-300">"Python"</span>, <span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Django"</span>]</p>
                <br/>
                <p className="ml-4"><span className="text-cyan-400">def</span> build(self):</p>
                <p className="ml-8 text-zinc-400"># Keep coding until it works</p>
                <p className="ml-8 text-purple-400">return <span className="text-white">Success()</span></p>
             </div>

             <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;