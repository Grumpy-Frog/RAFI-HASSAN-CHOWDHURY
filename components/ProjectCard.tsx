import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
    >
      {project.videoPreview && (
        <a 
          href={project.videoUrl || '#'} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block relative h-48 overflow-hidden group cursor-pointer"
        >
          <img 
            src={project.videoPreview} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Play size={24} className="text-white fill-white ml-1" />
            </div>
          </div>
        </a>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
             {!project.videoPreview && (
               <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                  <Code size={20} />
               </div>
             )}
             <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repo">
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a href={project.live} className="text-slate-400 hover:text-white transition-colors" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {project.role && (
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Role: {project.role}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;