import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-cyan-500 rounded-full"></span>
          </h2>
          {subtitle && <p className="text-slate-400 max-w-2xl mt-4">{subtitle}</p>}
        </motion.div>
        
        {children}
      </div>
    </section>
  );
};

export default Section;