import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, GraduationCap, ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import ParticleBackground from './ParticleBackground';

const TypewriterText = ({ 
  text, 
  className = "",
  delay = 50,
  startDelay = 0,
  showCursor = true,
  hideCursorOnComplete = false
}: {
  text: string,
  className?: string,
  delay?: number,
  startDelay?: number,
  showCursor?: boolean,
  hideCursorOnComplete?: boolean
}) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, delay);
      
      return () => clearInterval(interval);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [text, delay, startDelay]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (!isComplete || !hideCursorOnComplete) && (
        <span className="animate-pulse font-light text-cyan-400">|</span>
      )}
    </span>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      {/* Particle Overlay */}
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center md:text-left"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-900/30 text-cyan-400 text-sm font-semibold mb-6 border border-cyan-800/50 backdrop-blur-sm">
                Welcome to my portfolio
              </span>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                Rafi Hassan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Chowdhury</span>
              </h1>

              <div className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto md:mx-0 min-h-[84px] md:min-h-[64px]">
                <TypewriterText 
                    text="AI Researcher | ML Engineer | Lecturer" 
                    hideCursorOnComplete={true}
                />
                <br />
                <TypewriterText 
                    text="Champion of National AI Competitions" 
                    className="text-slate-400 text-lg mt-2 inline-block" 
                    startDelay={2000}
                />
              </div>

              <p className="text-slate-400 mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Specializing in Vision Transformers, NLP, and Generative AI. 
                Bridging the gap between cutting-edge research and impactful software engineering.
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-12">
                <a href="#research" className="px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2">
                  View Research <ArrowRight size={18} />
                </a>
                <a href="#projects" className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-all flex items-center justify-center gap-2">
                  See Projects
                </a>
                <a href="#" className="px-8 py-3 rounded-lg bg-transparent hover:bg-slate-800/50 text-slate-300 font-medium border border-slate-700 transition-all flex items-center justify-center gap-2">
                  Download CV <Download size={18} />
                </a>
              </div>

              <div className="flex justify-center md:justify-start gap-6">
                <SocialLink href={PERSONAL_INFO.github} icon={<Github size={24} />} label="GitHub" />
                <SocialLink href={PERSONAL_INFO.linkedin} icon={<Linkedin size={24} />} label="LinkedIn" />
                <SocialLink href={PERSONAL_INFO.scholar} icon={<GraduationCap size={24} />} label="Scholar" />
                <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail size={24} />} label="Email" />
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center md:justify-end relative"
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[30rem] lg:h-[30rem]">
                    {/* Decorative glow/blob behind image */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
                    
                    {/* Border Ring - soft dashed */}
                    <div className="absolute -inset-4 rounded-full border border-slate-700/30 border-dashed animate-[spin_60s_linear_infinite]"></div>
                    
                    {/* The Image Itself */}
                    <div className="w-full h-full rounded-full relative z-10 group">
                         {/* Mask Container */}
                        <div className="w-full h-full rounded-full overflow-hidden relative"
                             style={{
                               maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                               WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                             }}
                        >
                            <img 
                                src="https://scontent.fdac189-1.fna.fbcdn.net/v/t39.30808-6/635567580_1991420695064989_7450258339709287815_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=VCNAVw-515MQ7kNvwEgfFXr&_nc_oc=AdkMkwhBLfD_hyKXFBL5HugsTmBmi_yx4l6YAVrvOPNcAtoLwO0XxRQv17FEw2a91jk&_nc_zt=23&_nc_ht=scontent.fdac189-1.fna&_nc_gid=dRWflHUwjUeP81UMDjvQJw&oh=00_Afseb0DGXq3-yUoLv5-Zg2_QswEtRGU8t6OwdYl1x4L-9Q&oe=6996408A" 
                                alt="Rafi Hassan Chowdhury" 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Inner Vignette for better blending */}
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_20px_rgba(2,6,23,0.9)]"></div>
                        </div>
                    </div>
                    
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-slate-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Hero;