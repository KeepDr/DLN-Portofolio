"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, BrainCircuit, Layout, 
  Users, MessageSquare, Globe, Lightbulb 
} from 'lucide-react';

export default function Skills() {
  const hardSkills = [
    {
      category: "Languages",
      icon: <Code2 className="text-ocean-400" />,
      items: ["JavaScript", "TypeScript", "Python", "Java", "PHP", "C++"]
    },
    {
      category: "Frontend & Design",
      icon: <Layout className="text-ocean-400" />,
      items: ["Next.js", "React", "Tailwind CSS", "Figma", "Gradio"]
    },
    {
      category: "Backend & Systems",
      icon: <Database className="text-ocean-400" />,
      items: ["Laravel", "Node.js", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      category: "AI & Data Science",
      icon: <BrainCircuit className="text-ocean-400" />,
      items: ["GNNs", "SBERT", "ProtBERT", "TensorFlow", "PyTorch", "PCA"]
    }
  ];

  const softSkills = [
    {
      category: "Leadership & Management",
      icon: <Users className="text-ocean-400" />,
      skills: ["Strategic Team Coordination", "Committee Supervision", "Conflict Resolution"]
    },
    {
      category: "Strategic Communication",
      icon: <MessageSquare className="text-ocean-400" />,
      skills: ["Technical Presentation", "Professional Documentation", "Stakeholder Management"]
    },
    {
      category: "Adaptability & Growth",
      icon: <Globe className="text-ocean-400" />,
      skills: ["Intercultural Competence", "Rapid Self-Directed Learning", "Global Perspective"]
    },
    {
      category: "Analytical Thinking",
      icon: <Lightbulb className="text-ocean-400" />,
      skills: ["Complex Problem Deconstruction", "Data-Driven Decision Making", "Innovative Troubleshooting"]
    }
  ];

  return (
    <section id="skills" className="py-52 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        
        <div className="mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-ocean-400 font-mono text-sm mb-4 block tracking-[0.3em] uppercase">02a. Tech Stack</span>
            <h2 className="text-5xl md:text-7xl font-bold text-ocean-100 tracking-tighter">
              The <span className="text-ocean-400">Hard Skill.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardSkills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-ocean-700/20 hover:border-ocean-400/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  {group.icon}
                  <h3 className="text-lg font-bold text-ocean-100">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, index) => (
                    <span key={index} className="text-xs font-mono px-3 py-1.5 bg-ocean-900/50 rounded-lg border border-ocean-700/50 text-ocean-100/60">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-ocean-400 font-mono text-sm mb-4 block tracking-[0.3em] uppercase">02b. Interpersonal</span>
            <h2 className="text-5xl md:text-7xl font-bold text-ocean-100 tracking-tighter">
              The <span className="text-ocean-400">Soft Skill.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border border-ocean-700/20 hover:border-ocean-400/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-ocean-400/10 rounded-xl">
                    {group.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-ocean-100">{group.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {group.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-ocean-400 mt-1 text-sm">▹</span>
                      <p className="text-ocean-100/70 text-base">{skill}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}