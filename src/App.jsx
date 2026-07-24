// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

function App() {
  useEffect(() => {
    if (!sessionStorage.getItem('visit_tracked')) {
      const trackVisit = async () => {
        const referrer = document.referrer.toLowerCase();
        const url = window.location.href;

        let platform = "Direct / Unknown";
        if (referrer.includes('linkedin.com')) platform = "LinkedIn";
        else if (referrer.includes('github.com')) platform = "GitHub";
        else if (referrer.includes('t.co') || referrer.includes('twitter')) platform = "X (Twitter)";
        else if (referrer.includes('instagram.com')) platform = "Instagram";
        else if (referrer.includes('google')) platform = "Google Search";
        else if (referrer) platform = "Other Website";

        try {
          await fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ referrer, url, platform })
          });
          sessionStorage.setItem('visit_tracked', 'true');
        } catch (error) {
          console.error("Tracking error");
        }
      };

      trackVisit();
    }
  }, []);

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