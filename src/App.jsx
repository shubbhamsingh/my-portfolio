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
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-[#14d9a0]/30 relative overflow-hidden">
      
      {/* 🌊 THE REAL APPLE iOS LIQUID TRICK 🌊 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#020617]">
        
        {/* STEP 1: Bright, Colorful, Moving Blobs (Underneath) */}
        <div className="absolute glow-orb animate-blob bg-[#14d9a0] w-[70vw] h-[70vw] top-[-20%] left-[-10%] opacity-60" />
        <div className="absolute glow-orb animate-blob-delayed bg-[#14b8d9] w-[80vw] h-[80vw] bottom-[-20%] right-[-20%] opacity-50" />
        <div className="absolute glow-orb animate-blob-slow bg-[#a855f7] w-[60vw] h-[60vw] top-[10%] left-[20%] opacity-50" />
        
        {/* STEP 2: The Magic Layer (Heavy Blur + Dark Tint) 
            Ye layer blobs ko liquid ki tarah mix kar degi aur unhe dark kar degi taaki aapka TEXT ekdum saaf dikhe! */}
        <div className="absolute inset-0 bg-[#020617]/75 backdrop-blur-[120px]"></div>
        
        {/* STEP 3: Subtle Mesh Pattern for texture */}
        <div className="absolute inset-0 bg-mesh-pattern opacity-40"></div>
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