import type { Project, Skill } from './types';

/* =======================
   Projects
======================= */

export const PROJECTS: Project[] = [
  {
    title: 'Resona',
    description:
      'Real-time circuit and waveform simulator focused on signal clarity and interactive exploration.',
    tags: ['React', 'TypeScript', 'Circuits'],
    type: 'System',
    highlight: true,
    link: 'https://resona1.netlify.app/',
  },
  {
    title: '8 Bit Digital Lock',
    description:
      'FPGA-based digital locking system implementing sequential logic and hardware-level security.',
    tags: ['Verilog', 'FPGA', 'Digital Logic'],
    type: 'Hardware',
    highlight: true,
    link: 'https://github.com/Vitiantanmay/8-Bit-Digital-Lock',
  },
  {
    title: 'GlossGen',
    description:
      'Analyzes public GitHub repositories to generate a searchable code glossary using LLMs.',
    tags: ['React', 'TypeScript', 'LLM'],
    type: 'Full-Stack',
    highlight: true,
    link: 'https://glossgen.netlify.app/',
  },
  {
    title: 'TerraPulse',
    description:
      'Live geospatial system visualizing earthquakes, ISS position, flights, and ships.',
    tags: ['MERN', 'Maps', 'Real-Time Data'],
    type: 'System',
    highlight: false,
    link: 'https://github.com/Vitiantanmay/TerraPulse',
  },
  {
    title: 'SubSleuth',
    description:
      'Detects subscriptions and recurring payments by parsing inbox data with AI.',
    tags: ['React', 'TypeScript', 'AI'],
    type: 'Full-Stack',
    highlight: false,
    link: 'https://subsleuth.vercel.app',
  },
  {
    title: 'CosmosChronicle',
    description:
      'Interactive 3D timeline of major space missions from ISRO, NASA, and SpaceX.',
    tags: ['React', '3D', 'Data Visualization'],
    type: 'Frontend',
    highlight: false,
    link: 'https://cosmoschronicle.netlify.app/',
  },
  {
    title: 'CipherLock',
    description:
      'Interactive lab for exploring cryptography, logic gates, and digital security concepts.',
    tags: ['React', 'TypeScript', 'Cryptography'],
    type: 'Experimental',
    highlight: false,
    link: 'https://cipherlock-lab.netlify.app/',
  },
];

/* =======================
   Skills
======================= */

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 'Advanced' },
  { name: 'Node.js / Express', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },

  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Data Structures & Algorithms', level: 'Intermediate' },

  { name: 'Machine Learning (Foundations)', level: 'Beginner' },
  { name: 'Python for ML (NumPy, Pandas)', level: 'Beginner' },

  { name: 'ESP32 / IoT Systems', level: 'Intermediate' },
  { name: 'Digital Electronics', level: 'Intermediate' },

  { name: 'Linux (Mint)', level: 'Intermediate' },
];

/* =======================
   Social Links
======================= */

export const SOCIAL_LINKS = {
  github: 'https://github.com/tanmaygalav',
  linkedin: 'https://linkedin.com/in/vitiantanmay/',
  email: 'tanmaygalav@gmail.com',
};
