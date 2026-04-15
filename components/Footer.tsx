"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Mail } from 'lucide-react';

// --- CUSTOM SOCIAL ICONS (Lucide 1.0 fix) ---
const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);

const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-ocean-950 pt-20 pb-10 border-t border-ocean-800/50">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-ocean-400/50 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Top Section: CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-ocean-100 mb-4">Let's build something <span className="text-ocean-400">extraordinary.</span></h3>
          <p className="text-ocean-100/50 max-w-md mx-auto">
            Currently searching for internship and open to research collaborations.
            Feel free to reach out for a virtual coffee!
          </p>
        </motion.div>

        {/* Middle Section: Social Icons */}
        <div className="flex items-center gap-8 mb-16">
          <motion.a 
            whileHover={{ y: -5, color: "#00DDEB" }}
            href="https://www.linkedin.com/in/benedictus-alonso-harland-sutojo-059506390/" 
            target="_blank"
            className="text-ocean-100/40 transition-colors"
          >
            <Linkedin />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: "#00DDEB" }}
            href="https://github.com/KeepDr" 
            target="_blank"
            className="text-ocean-100/40 transition-colors"
          >
            <GitHubIcon />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: "#00DDEB" }}
            href="https://www.instagram.com/benedictusdelon" 
            target="_blank"
            className="text-ocean-100/40 transition-colors"
          >
            <Instagram />
          </motion.a>
          <motion.a 
            whileHover={{ y: -5, color: "#00DDEB" }}
            href="mailto:benedictusdelon11@gmail.com" 
            className="text-ocean-100/40 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </div>

        {/* Bottom Section: Perfectly Balanced Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-8 pt-8 border-t border-ocean-800/30">
          
          {/* 1. Left Column: Copyright */}
          <div className="text-sm text-ocean-100/30 font-mono text-center md:text-left">
            © 2026 Benedictus Alonso.
          </div>
          
          {/* 2. Center Column: Back to Top */}
          <div className="flex justify-center">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-ocean-100/30 hover:text-ocean-400 transition-all duration-300 text-xs font-mono uppercase tracking-[0.2em]"
            >
              Back to Top
              <ChevronUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* 3. Right Column: Location */}
          <div className="text-[10px] md:text-xs text-ocean-100/20 font-mono italic text-center md:text-right uppercase tracking-wider">
            Made with 💙
          </div>
        </div>
      </div>
    </footer>
  );
}