export interface Research {
  title: string;
  description: string;
  method: string;
  contribution: string;
  results: string;
  tech: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  role?: string;
  tech: string[];
  github?: string;
  live?: string;
  type: 'ML' | 'SE';
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Achievement {
  title: string;
  rank: string;
  event: string;
  year: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}