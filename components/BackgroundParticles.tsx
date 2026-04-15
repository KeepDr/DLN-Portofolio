"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundParticles() {
  // Create an array of 20 random particles
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-ocean-400/20 rounded-full blur-sm"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: "110%", 
            scale: Math.random() * 0.5 + 0.5 
          }}
          animate={{ 
            y: "-10%",
            x: [null, (Math.random() * 100) + "%"]
          }}
          transition={{ 
            duration: Math.random() * 20 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          style={{
            width: Math.random() * 15 + 5 + "px",
            height: Math.random() * 15 + 5 + "px",
          }}
        />
      ))}
    </div>
  );
}