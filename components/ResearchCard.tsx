import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, Cpu } from 'lucide-react';
import { Research } from '../types';

interface ResearchCardProps {
  paper: Research;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ paper, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
          <FileText size={24} />
        </div>
        {paper.link && (
          <a href={paper.link} className="text-xs font-medium text-slate-400 hover:text-white border border-slate-700 px-3 py-1 rounded-full hover:bg-slate-700 transition-colors">
            Read Paper
          </a>
        )}
      </div>

      <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors">
        {paper.title}
      </h3>
      
      <p className="text-slate-400 mb-4 text-sm leading-relaxed">
        {paper.description}
      </p>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2">
          <Cpu className="text-cyan-500 mt-1 shrink-0" size={16} />
          <p className="text-sm text-slate-300"><span className="text-slate-500 font-semibold">Method:</span> {paper.method}</p>
        </div>
        <div className="flex items-start gap-2">
          <Award className="text-amber-500 mt-1 shrink-0" size={16} />
          <p className="text-sm text-slate-300"><span className="text-slate-500 font-semibold">Results:</span> {paper.results}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
        {paper.tech.map((tech) => (
          <span key={tech} className="text-xs font-medium text-slate-400 bg-slate-800/50 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ResearchCard;