// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30 relative overflow-hidden">
      {/* Liquid Glass Animated Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] animate-blob" style={{ background: 'radial-gradient(circle, rgba(20,217,160,0.15) 0%, transparent 70%)' }} />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] animate-blob-delayed" style={{ background: 'radial-gradient(circle, rgba(20,184,217,0.12) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] animate-blob-slow" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)' }} />
        <div className="absolute top-[50%] left-[40%] w-[400px] h-[400px] animate-blob" style={{ background: 'radial-gradient(circle, rgba(20,217,160,0.08) 0%, transparent 70%)' }} />
      </div>

      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="relative z-10 border-t border-white/5 liquid-glass py-8 text-center text-sm text-zinc-500">
         <p>© {new Date().getFullYear()} Shubham Raj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;