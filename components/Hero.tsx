"use client";
import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CUSTOM SOCIAL ICONS ---
const Linkedin = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);

const Instagram = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export default function Hero() {
  const firstName = "Benedictus (Delon)";
  const lastName = "Alonso Harland Sutojo.";

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-20 relative overflow-hidden bg-ocean-950">
      
      {/* 1. LAYERED DEEP BLUE GRADIENTS */}
      <div className="absolute inset-0 z-0">
        {/* The "Deep Sea" Radial Highlight behind you */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(28,37,65,1)_0%,rgba(5,10,24,1)_70%)]"></div>
        
        {/* Subtle GIF background at low opacity */}
        <img src="/image/we.gif" alt="" className="w-full h-full object-cover opacity-10" />
        
        {/* BOTTOM GRADIENT: This creates the transition for the next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ocean-900 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 w-full">
        <div className="flex-1 space-y-6">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-ocean-400 font-mono text-xs tracking-widest uppercase">
            Computer Science & AI Researcher
          </motion.p>
          
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-ocean-100 tracking-tight leading-tight">
            Benedictus <span className="text-ocean-400/90 font-medium">(Delon)</span> <br /> Alonso Harland Sutojo.
          </motion.h1>
          
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-lg md:text-xl text-ocean-300/80 font-light max-w-lg">
            Building secure systems and analyzing complex data structures.
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center gap-6 pt-4">
            <a href="/image/ResumeCV.pdf" className="px-6 py-3 bg-ocean-400 text-ocean-950 font-bold rounded-lg hover:shadow-[0_0_30px_rgba(0,221,235,0.4)] transition-all">
                CV
            </a>

            <div className="flex items-center gap-5 text-ocean-100/30">
              <a href="https://www.linkedin.com/in/benedictus-alonso-harland-sutojo-059506390/" className="hover:text-ocean-400 transition-colors"><Linkedin /></a>
              <a href="https://github.com/KeepDr" className="hover:text-ocean-400 transition-colors"><GitHubIcon /></a>
              <a href="https://www.instagram.com/benedictusdelon?igsh=NXpvNHY2aWg3Mmpp&utm_source=qr" className="hover:text-ocean-400 transition-colors"><Instagram /></a>
            </div>
          </motion.div>
        </div>

        {/* PORTRAIT with Blue Glow */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-ocean-400 to-ocean-800 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-ocean-400/20 overflow-hidden shadow-[0_0_50px_rgba(0,221,235,0.1)]">
            <img src="/image/Pfp.png" alt="Delon" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}