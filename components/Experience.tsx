"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-Component for the Side Gallery ---
const ImageShuffler = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // Shuffles every 3.5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 md:h-full min-h-[300px] rounded-3xl overflow-hidden glass-card border border-ocean-700/30">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }} // 60% opacity so it feels like a "memory"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-transparent to-transparent opacity-80" />
    </div>
  );
};

export default function Experience() {
  const experiences = [
    {
      role: "Regional Secretary",
      org: "HIMTI BINUS University",
      period: "2025 - 2026",
      desc: "Directing the end-to-end flow of organizational documentation. I ensure administrative precision and operational efficiency across regional divisions.",
      photos: ["/image/himti.jpeg", "/image/himti2.jpeg"]
    },
    {
      role: "AiDAS Conference Presenter",
      org: "IEEE Xplore Publication",
      period: "Oct 2025",
      desc: "Presented research on 'Graph Neural Networks for Cloud Security' at an international forum, detailing AI-driven data breach detection.",
      photos: ["/image/ieee.png", "/image/sertif.jpg"]
    },
    {
      role: "Freshmen Leader & Partner",
      org: "BINUS University",
      period: "2024 - 2025",
      desc: "Mentoring first-year students through their transition to university life, providing academic guidance and organizational orientation.",
      photos: ["/image/fyp.jpg", "/image/fl.jpg", "/image/fp.jpg"]
    }
  ];

  return (
    <section id="experience" className="py-52 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            className="text-ocean-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            03. The Journey
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-ocean-100 tracking-tighter">
            The <span className="text-ocean-400">Experiences.</span>
          </h2>
        </div>

        <div className="space-y-40">
          {experiences.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col gap-12 items-stretch ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              <div className="flex-1">
                <div className="glass-card p-10 md:p-14 rounded-[2.5rem] h-full flex flex-col justify-center border border-ocean-700/20 hover:border-ocean-400/30 transition-all duration-500">
                  <span className="text-ocean-400 font-mono text-sm font-bold uppercase tracking-widest">{job.period}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-ocean-100 mt-4 leading-tight">{job.role}</h3>
                  <p className="text-ocean-300 text-lg font-medium mb-8 italic">{job.org}</p>
                  <p className="text-ocean-100/60 leading-relaxed text-lg italic">
                    "{job.desc}"
                  </p>
                </div>
              </div>

              
              <div className="flex-1">
                <ImageShuffler images={job.photos} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}