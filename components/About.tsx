"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-40 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Navigation / Sticky Labels */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <div className="sticky top-32">
              <span className="text-ocean-400 font-mono text-sm mb-4 block tracking-[0.3em] uppercase">01. Background</span>
              <h2 className="text-5xl md:text-6xl font-bold text-ocean-100 mb-12 tracking-tighter">
                About <span className="text-ocean-400">Me.</span>
              </h2>
              
              {/* Perspective / Desire Card */}
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-2xl border-l-4 border-ocean-400">
                  <div className="flex items-center gap-3 mb-2 text-ocean-400">
                    <Target size={20} />
                    <p className="font-bold uppercase tracking-widest text-sm">My Desire</p>
                  </div>
                  <p className="text-ocean-100/80 text-sm leading-relaxed">
                    I am driven by a relentless pursuit of growth, constantly seeking to refine both my technical edge and my leadership presence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Content Split */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <div className="space-y-10">
              
              {/* Block 1: About Me */}
              <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-ocean-400/5 blur-[80px] rounded-full group-hover:bg-ocean-400/10 transition-all duration-700"></div>
                
                <h3 className="text-ocean-400 font-mono text-xs uppercase tracking-[0.2em] mb-6"></h3>
                <div className="space-y-6 text-ocean-100/80 leading-relaxed text-lg">
                  <p>
                    I am a <span className="text-ocean-100 font-medium">Computer Science Global Class</span> student at BINUS University. My work centers on the intersection of scalable web architecture and artificial intelligence, with a specific emphasis on building systems that are as secure as they are efficient.
                  </p>
                </div>
              </div>

              {/* Block 2: My Desire */}
              <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden group border-t border-ocean-400/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-ocean-400/10 rounded-lg text-ocean-400">
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-100">Evolution & Ambition</h3>
                </div>
                
                <div className="space-y-6 text-ocean-100/80 leading-relaxed text-lg">
                  <p>
                    Beyond technical results, my true desire lies in <span className="text-ocean-400">holistic self-improvement</span>. I am currently dedicated to enhancing my hard skills in deep learning and full-stack architecture while simultaneously refining the soft skills—communication, leadership, and emotional intelligence—required to lead high-performing teams.
                  </p>
                  <p>
                    I view every project and organizational role is an opportunity to bridge the gap between technical mastery and human connection. I am constantly seeking challenges that force me to learn, adapt, and grow.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}