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
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="border-t border-white/5 bg-black/30 py-8 text-center text-sm text-muted-foreground">
         <p>© {new Date().getFullYear()} Shubham Raj. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;