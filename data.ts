import { Achievement, Education, Experience, Project, Research, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Rafi Hassan Chowdhury",
  tagline: "AI Researcher | ML Engineer | Lecturer | Champion of National AI Competitions",
  bio: "I am an AI Researcher and Machine Learning Engineer passionate about Vision Transformers, NLP, and Generative AI. With a strong track record in national competitions and a research-driven mindset, I aim to bridge the gap between theoretical AI and real-world applications.",
  email: "rafihassan@iut-dhaka.edu",
  phone: "+88 01570263628",
  linkedin: "https://linkedin.com/in/rafi-hassan-b9b63a1a6/",
  github: "https://github.com/Grumpy-Frog",
  scholar: "https://scholar.google.com/citations?user=FL4ZY5IAAAAJhl=en",
  location: "Dhaka, Bangladesh"
};

export const EDUCATION: Education[] = [
  {
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    degree: "M.Sc in Artificial Intelligence and Machine Learning",
    year: "September 2024 – Present",
    details: "Focusing on Advanced Deep Learning and Computer Vision."
  },
  {
    institution: "Islamic University of Technology (IUT)",
    degree: "B.Sc in Computer Science and Engineering",
    year: "2020 – June 2024",
    details: "CGPA: 3.66 / 4.00. Thesis in Rice Leaf Disease Identification."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Lecturer",
    company: "Northern University of Bangladesh",
    location: "Banani, Dhaka",
    period: "June 2025 – Present", // Note: Based on OCR, future date or typo in source, keeping as is for fidelity
    description: "Teaching core Computer Science courses and guiding students in labs and academic projects."
  },
  {
    role: "Associate Software Engineer",
    company: "Therap BD Ltd.",
    location: "Banani, Dhaka",
    period: "Nov 2024 – June 2025",
    description: "Ensured software quality by identifying and resolving issues with development teams."
  },
  {
    role: "Junior Software Engineer",
    company: "Metafour Asia Limited",
    location: "Uttara, Dhaka",
    period: "August 2024 – October 2024",
    description: "Worked on courier services and tracking software using Java and Spring Boot."
  }
];

export const RESEARCH_PAPERS: Research[] = [
  {
    title: "SpectroFusion-ViT: Speech Emotion Recognition",
    description: "A lightweight ViT-based framework for Bangla speech emotion recognition using Harmonic Mel–Chroma Fusion.",
    method: "Harmonic Mel–Chroma Fusion + Lightweight Vision Transformer",
    contribution: "Developed a novel fusion technique for spectral features.",
    results: "State-of-the-art accuracy with low computational cost.",
    tech: ["Python", "PyTorch", "Librosa"]
  },
  {
    title: "BornoViT: Vision Transformer for Bangla Characters",
    description: "A novel efficient Vision Transformer for Bengali handwritten basic characters classification.",
    method: "Lightweight ViT Architecture designed for character recognition",
    contribution: "Proposed BornoViT specifically for Bangla script.",
    results: "95.77% accuracy on BanglaLekha, 91.51% on new dataset.",
    tech: ["PyTorch", "Vision Transformers", "OpenCV"]
  },
  {
    title: "MangoLeafViT: Mango Leaf Disease Classification",
    description: "Leveraging Lightweight Vision Transformer with Runtime Augmentation for Efficient Classification.",
    method: "Mobile-Device Efficient ViT + Advanced Self-Attention",
    contribution: "Enabled efficient classification on mobile devices.",
    results: "High efficiency in disease detection.",
    tech: ["TensorFlow", "Keras", "MobileNet"]
  },
  {
    title: "BOIGENRE: Large-Scale Bangla Genre Dataset",
    description: "A Large-Scale Bangla Dataset for Genre Classification from Book Summaries.",
    method: "Data collection and benchmarking NLP models",
    contribution: "Introduced the first large-scale dataset for Bangla book genre classification.",
    results: "Established baseline benchmarks for future research.",
    tech: ["NLP", "Transformers", "Pandas"]
  },
  {
    title: "Bi-cLSTM for Aero-Engine RUL Prediction",
    description: "Residual-Corrected Bidirectional LSTM for Aero-Engine Remaining Useful Life Estimation.",
    method: "Bi-cLSTM (Bidirectional corrected LSTM)",
    contribution: "Developed reliable RUL prediction under multi-condition operating environments.",
    results: "Superior performance in time-series forecasting.",
    tech: ["Deep Learning", "Time-Series", "LSTM"]
  },
  {
    title: "Rice Leaf Disease Identification (Thesis)",
    description: "Improving Rice Leaf Disease Identification with Object Detection and Image Enhancement.",
    method: "SRGAN + YOLO-s + EfficientViT",
    contribution: "Proposed a lightweight pipeline for image enhancement and detection.",
    results: "97.6% accuracy with low computational requirements.",
    tech: ["YOLO", "GANs", "EfficientViT"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "IUT ICT Fest 2024 Datathon", rank: "Champion", event: "ASR for Regional Dialects by Bengali AI", year: "2024" },
  { title: "IUT ICT Fest 2024 Datathon", rank: "Best Notebook Winner", event: "ASR for Regional Dialects", year: "2024" },
  { title: "ML Olympiad Bangladesh 2024", rank: "Champion", event: "Organized by TensorFlow", year: "2024" },
  { title: "WEB-OFF 2023", rank: "Champion", event: "Organized by IUT Computer Society", year: "2023" },
  { title: "Blockchain Olympiad", rank: "Bronze Winner", event: "UIU CSE Fest", year: "2023" },
  { title: "UIU Bhashamul Datathon", rank: "Finalist & Kaggle Public 1st", event: "Bengali Regional IPA Transcription", year: "2024" },
  { title: "National Blockchain Olympiad", rank: "Finalist", event: "Blockchain Olympiad Bangladesh", year: "2023" },
];

export const ML_PROJECTS: Project[] = [
  {
    title: "MiniMinds",
    description: "A lightweight AI-powered computer vision mobile app for Bangla-speaking children’s early literacy and pronunciation learning.",
    results: "Achieved T-value 6.03, p-value 0.00019 in learning outcomes.",
    type: "ML",
    tech: ["Computer Vision", "Deep Learning", "Mobile Dev"]
  } as any,
  {
    title: "Meeting Minutes",
    description: "Video Meeting Summarizer. Multilingual transcription and summarization web app.",
    role: "Lead Researcher & Backend",
    type: "ML",
    tech: ["Whisper", "Wav2Vec2", "GPT-3.5", "FastAPI", "Django"],
    github: "#"
  },
  {
    title: "DoodleIt",
    description: "Image to Doodle generator using Pix2Pix GAN.",
    role: "Team Leader",
    type: "ML",
    tech: ["Pix2Pix GAN", "Python", "PyTorch"],
    github: "#"
  },
  {
    title: "BongIPA",
    description: "Bangla Regional Text to IPA Converter.",
    role: "Project Initiator & Researcher",
    type: "ML",
    tech: ["NLP", "Python", "Transformers"]
  },
  {
    title: "Travel Mode Prediction",
    description: "Predicting long-distance travel mode preferences using ML algorithms vs Discrete Choice Models.",
    type: "ML",
    tech: ["Random Forest", "Binary Logit", "Data Analysis"]
  },
  {
    title: "Bengali Character Augmentation",
    description: "Study on Maximizing Generalization using different augmentation techniques (CLAHE, Affine, etc.).",
    results: "97.48% Accuracy on Ekush dataset.",
    type: "ML",
    tech: ["Image Processing", "Augmentation", "ViT"]
  } as any
];

export const SE_PROJECTS: Project[] = [
  {
    title: "Virtual Classroom",
    description: "Full-stack educational platform enabling classrooms, assignments, exams, and video meetings.",
    type: "SE",
    tech: ["Django", "Agora SDK", "PostgreSQL", "Google Auth"],
    github: "#"
  },
  {
    title: "IUTCS & IUTRS Websites",
    description: "Official websites for IUT Computer Society and Robotics Society for event management and blogs.",
    type: "SE",
    tech: ["Python", "Django", "MySQL", "Bootstrap"],
    github: "#"
  },
  {
    title: "Untitled Survival Game",
    description: "3D horror puzzle game with randomized mazes and A* pathfinding bots.",
    type: "SE",
    tech: ["C++", "OpenGL", "GLSL", "OpenAL"],
    github: "#"
  },
  {
    title: "Untitled Tank Game",
    description: "2D shooter game featuring PvP, co-op modes, and AI enemies.",
    type: "SE",
    tech: ["C++", "SFML"],
    github: "#"
  },
  {
    title: "Java Music Player",
    description: "Music player with MySQL storage, frequency visualizer, and streaming.",
    type: "SE",
    tech: ["Java", "MySQL", "JavaFX"],
    github: "#"
  }
];

export const SKILLS: SkillCategory[] = [
  { category: "Programming", skills: ["Python", "C++", "C", "C#", "Java", "R", "TypeScript"] },
  { category: "ML Frameworks", skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "OpenCV", "Keras"] },
  { category: "Development", skills: ["Django", "FastAPI", "React", "Next.js", "Spring Boot"] },
  { category: "Tools & Cloud", skills: ["GCP", "Vertex AI", "Docker", "Git", "Jira", "Linux"] },
  { category: "Databases", skills: ["PostgreSQL", "MySQL", "SQLite", "MongoDB"] },
  { category: "Research Interest", skills: ["Vision Transformers", "Generative AI", "NLP", "Time Series Analysis"] }
];