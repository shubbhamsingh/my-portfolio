import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, RESUME_LINK } from '../data/portfolioData';

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "liquid-glass border-b border-white/5 py-3 shadow-2xl shadow-black/30"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="#" className="text-xl font-bold tracking-tighter text-foreground">
          Shubham<span className="gradient-text"> Raj</span>
        </a>

        {/* Desktop Nav - With Liquid Gliding Capsule */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-1 p-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setActiveSection(sectionId)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-muted-foreground hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCapsule"
                      className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              )
            })}
          </nav>
          
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all bg-[length:200%] hover:bg-[length:100%]"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>

        {/* Simple Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Dropdown - SOLID BACKDROP FIX */}
        {isMobileMenuOpen && (
          <div 
            className="absolute top-0 left-0 w-full min-h-screen pt-24 px-8 flex flex-col gap-6 md:hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-40"
            style={{ backgroundColor: '#050914' }} // Pure solid background to block any scroll overlap
          >
             {navLinks.map((link) => {
               const sectionId = link.href.substring(1);
               const isActive = activeSection === sectionId;
               
               return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => {
                    setActiveSection(sectionId);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-semibold tracking-tight transition-colors py-2 border-b border-white/[0.03] ${
                    isActive ? 'text-[#14d9a0] font-bold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
             )})}
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 px-5 py-3.5 text-base font-bold text-white transition-all mt-4 shadow-lg shadow-emerald-500/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="h-5 w-5" /> View Resume
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;