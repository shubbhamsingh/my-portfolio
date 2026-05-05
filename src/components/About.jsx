import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative mx-auto px-4 md:px-8">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <User className="h-4 w-4" />
            About Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            Who I <span className="gradient-text">Am</span>
          </motion.h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-10"
          >
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I am currently pursuing my <span className="font-semibold text-foreground">B.Tech in Computer Science</span> from Jagannath University, Jaipur (Expected 2027). 
              </p>
              <p>
                I specialize in <span className="font-semibold text-foreground">backend technologies</span> with a strong proficiency in Python and Django REST Framework, alongside modern frontend tools like React.js and Tailwind CSS.
              </p>
              <p>
                My key strengths are problem-solving, teamwork, and I am a quick learner who adapts easily to new technologies. I recently worked as a <span className="font-semibold text-foreground">Full Stack Web Development Intern</span> at Yhills, where I developed core web applications.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;