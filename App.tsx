import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, Code, Terminal, Layers, GraduationCap, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ResearchCard from './components/ResearchCard';
import ProjectCard from './components/ProjectCard';
import { 
  ACHIEVEMENTS, 
  EDUCATION, 
  EXPERIENCE, 
  ML_PROJECTS, 
  PERSONAL_INFO, 
  RESEARCH_PAPERS, 
  SE_PROJECTS, 
  SKILLS 
} from './data';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      
      <main>
        <Hero />

        {/* About & Education Split Section */}
        <Section id="about" title="About & Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Briefcase className="text-cyan-400" /> Professional Summary
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                {PERSONAL_INFO.bio}
              </p>
              <div className="relative pl-6 border-l-2 border-cyan-500/50 py-2">
                <p className="text-slate-300 italic text-lg leading-relaxed">
                  "Driven by the potential of Artificial Intelligence to solve complex, real-world problems through rigorous research and engineering."
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="text-cyan-400" /> Education
              </h3>
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l border-slate-800">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
                    <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                    <p className="text-cyan-400">{edu.degree}</p>
                    <p className="text-slate-500 text-sm mt-1">{edu.year}</p>
                    {edu.details && <p className="text-slate-400 text-sm mt-2">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" title="Honors & Achievements" subtitle="Recognition in National and International Competitions">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-amber-500/30 transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Trophy size={64} />
                </div>
                <div className="relative z-10">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-bold mb-3 ${ach.rank.includes('Champion') || ach.rank.includes('1st') ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-300'}`}>
                    {ach.rank}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-1">{ach.title}</h4>
                  <p className="text-slate-400 text-sm mb-2">{ach.event}</p>
                  <p className="text-slate-600 text-xs font-mono">{ach.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Research Section */}
        <Section id="research" title="Research & Publications" subtitle="Novel contributions to Computer Vision and NLP">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_PAPERS.map((paper, idx) => (
              <ResearchCard key={idx} paper={paper} index={idx} />
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Experience" className="bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
             {EXPERIENCE.map((exp, idx) => (
               <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-4 md:gap-8 mb-12 last:mb-0"
               >
                 <div className="hidden md:flex flex-col items-center">
                   <div className="w-px h-full bg-slate-800 relative">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-950"></div>
                   </div>
                 </div>
                 <div className="flex-1 glass-card p-6 rounded-xl">
                   <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                        <p className="text-blue-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-slate-400 block">{exp.period}</span>
                        <span className="text-xs text-slate-500 flex items-center justify-end gap-1"><MapPin size={12}/> {exp.location}</span>
                      </div>
                   </div>
                   <p className="text-slate-300">{exp.description}</p>
                 </div>
               </motion.div>
             ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Technical Projects">
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Terminal className="text-purple-400" /> Machine Learning Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ML_PROJECTS.map((proj, idx) => (
                <ProjectCard key={idx} project={proj} index={idx} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="text-indigo-400" /> Software Engineering Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SE_PROJECTS.map((proj, idx) => (
                <ProjectCard key={idx} project={proj} index={idx} />
              ))}
            </div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="Skills & Expertise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-slate-200 mb-4 border-b border-slate-800 pb-2">{cat.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact/Footer */}
        <footer id="contact" className="border-t border-slate-800 bg-slate-900 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Let's Collaborate</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-12">
              I am always open to discussing research collaborations, PhD opportunities, or AI engineering roles.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Mail size={20} /> {PERSONAL_INFO.email}
              </a>
              <span className="hidden md:block text-slate-700">|</span>
              <a href={PERSONAL_INFO.linkedin} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
              <span className="hidden md:block text-slate-700">|</span>
              <a href={PERSONAL_INFO.github} className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors">
                <Github size={20} /> GitHub
              </a>
            </div>

            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Rafi Hassan Chowdhury. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;