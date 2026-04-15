"use client";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-ocean-900/90 backdrop-blur-md border-b border-ocean-600/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Your Logo */}
        <a href="#" className="text-3xl font-bold text-ocean-400 tracking-tighter">
          DLN<span className="text-ocean-100">.</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-ocean-100">
          <a href="#about" className="hover:text-ocean-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-ocean-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-ocean-400 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-ocean-400 transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}