import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

// Official Logos fetch karne ke liye helper function
const getLogo = (skillName) => {
  const logos = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "HTML/CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Django REST": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "Git/GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  };
  // Agar koi logo match nahi hota, toh default icon dikhayega
  return logos[skillName] || "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg";
};

function Skills() {
  return (
    <section id="skills" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-[150px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-medium text-emerald-400"
          >
            <Sparkles className="h-4 w-4" />
            Tech Arsenal
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group glass rounded-xl p-6 transition-all duration-300 hover:border-white/10 hover:bg-[#1a1f2e]"
              >
                <div className="mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                
                {/* Yahan humne text pills ki jagah Logo Cards lagaye hain */}
                <div className="grid grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1"
                    >
                      {/* Logo image box (White background padding taaki dark logos bhi saaf dikhein) */}
                      <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-white/10 p-2 shadow-inner">
                        <img 
                          src={getLogo(skill)} 
                          alt={skill} 
                          className="w-full h-full object-contain" 
                        />
                      </div>
                      <span className="text-xs font-semibold text-zinc-300 text-center leading-tight">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;