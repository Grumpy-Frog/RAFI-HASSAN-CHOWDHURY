import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
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
      className="glass-card rounded-xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                <Code size={20} />
             </div>
             <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
          </div>
          <div className="flex gap-2">
            {project.github && (
              <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
            )}
            {project.live && (
              <a href={project.live} className="text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {project.role && (
            <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Role: {project.role}</p>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
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