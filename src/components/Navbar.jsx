import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, RESUME_LINK } from '../data/portfolioData';

function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <a href="#" className="text-xl font-bold tracking-tighter text-foreground">
          Shubham Raj<span className="gradient-text">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-medium text-white shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </nav>

        {/* Simple Mobile Nav Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background/95 border-b border-white/5 backdrop-blur-xl p-6 flex flex-col gap-6 md:hidden shadow-xl">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-medium text-white transition-all"
            >
              <Download className="h-4 w-4" /> View Resume
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
}

export default Navbar;