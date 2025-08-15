
import type { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'Trust Website',
    description: 'A comprehensive platform for a charitable trust, enhancing online presence and donor engagement.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'OTT Platform',
    description: 'A feature-rich Over-The-Top streaming service with user authentication and a dynamic content library.',
    tags: ['MERN Stack', 'Firebase', 'Stripe API'],
  },
  {
    title: 'Job Recommendation Platform',
    description: 'An intelligent system that matches job seekers with suitable opportunities using machine learning algorithms.',
    tags: ['Python', 'Flask', 'Scikit-learn', 'React'],
  },
  {
    title: '8 Bit Digital Lock',
    description: 'A hardware-based security project implementing a robust 8-bit digital locking mechanism.',
    tags: ['Verilog', 'FPGA', 'Digital Logic'],
  },
  {
    title: 'Hardware Task Scheduler',
    description: 'A low-level scheduler designed for embedded systems to manage and prioritize hardware tasks efficiently.',
    tags: ['C++', 'Embedded Systems', 'RTOS'],
  },
];

export const SKILLS: Skill[] = [
    { name: 'MERN Stack', level: 'Advanced' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Data Structures & Algorithms', level: 'Intermediate' },
    { name: 'React / Next.js', level: 'Advanced' },
    { name: 'Node.js / Express', level: 'Advanced' },
    { name: 'SQL / NoSQL (MongoDB)', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Advanced' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/example',
  linkedin: 'https://linkedin.com/in/example',
  x: 'https://x.com/example',
  email: 'tanmay.galav@example.com'
};
