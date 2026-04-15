"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Custom GitHub Icon fix
const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path></svg>
);

export default function Projects() {
  // This is the variable the error was looking for!
  const projects = [
    {
      title: "GNNs for Cloud Security",
      description: "Published research at AiDAS 2025. Leveraging Graph Neural Networks for real-time cloud data breach detection, effectively capturing complex structural relationships.",
      tech: ["Python", "TensorFlow", "GNNs"],
      link: "https://ieeexplore.ieee.org/document/11213846",
      img: "/image/Cloud.png",
      isGithub: false
    },
    {
      title: "CozyCircle Community",
      description: "A full-stack hobby forum platform featuring deep-threaded conversations and full CRUD functionality. Built for focused, long-form discussions.",
      tech: ["Laravel", "Tailwind CSS", "MySQL"],
      link: "https://github.com/Wes695/CozyCircle",
      img: "/image/CozyCircle.png",
      isGithub: true
    },
    {
      title: "SBERT vs TF-IDF Sentiment",
      description: "A comparative NLP project evaluating traditional statistical models against modern transformers, featuring a live Gradio interface.",
      tech: ["Python", "SBERT", "Gradio"],
      link: "https://github.com/KeepDr/SemanticAnalyzer",
      img: "/image/NLP.png",
      isGithub: true
    },
    {
      title: "Protein Sequence PCA",
      description: "Comparative study using PCA to visualize how ProtBERT embeddings capture richer biological information than One-Hot encoding.",
      tech: ["Python", "ProtBERT", "PCA"],
      link: "https://github.com/KeepDr/ComparativeAnalysis", 
      img: "/image/Compbio.png",
      isGithub: true
    },
    {
      title: "Ecosystem Checker",
      description: "A manual hardware prototype (FeatherUp) designed to stack badminton shuttlecocks efficiently to optimize coaching time.",
      tech: ["Product Design", "Prototyping"],
      link: "https://github.com/KeepDr/EcosystemChecker",
      img: "/image/EcoCheck.png",
      isGithub: true
    },
    {
      title: "Modern DLN Portfolio",
      description: "This immersive, responsive single-page portfolio built with Next.js, Framer Motion, and Glassmorphism design.",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      link: "https://github.com/Benedictus-Delon/DLN-Portfolio",
      img: "/image/Cloud.png", // Replace with a screenshot of this site later!
      isGithub: true
    }
  ];

  return (
    <section id="projects" className="py-52 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-ocean-400 font-mono text-lg mb-4 block tracking-widest uppercase">04. Selected Works</span>
            <h2 className="text-5xl md:text-7xl font-bold text-ocean-100 tracking-tighter">
              Featured <br /> <span className="text-ocean-400">Projects.</span>
            </h2>
          </motion.div>
          <p className="text-ocean-100/30 font-mono text-sm hidden md:block pb-4 italic">
            // crafting digital experiences
          </p>
        </div>

        {/* Airy Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
                  {p.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono border border-ocean-400/30 px-2 py-1 rounded text-ocean-400 uppercase tracking-tighter whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-ocean-100 mb-3 group-hover:text-ocean-400 transition-colors">
                  {p.title}
                </h3>
                
                <p className="text-ocean-100/50 text-sm leading-relaxed mb-8 line-clamp-3">
                  {p.description}
                </p>
                
                {/* Icons at bottom */}
                <div className="flex gap-5 mt-auto pt-4">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-ocean-100/30 hover:text-ocean-400 transition-all hover:scale-110">
                      {p.isGithub ? <GitHubIcon size={22} /> : <ExternalLink size={22} />}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}