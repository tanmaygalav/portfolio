
import type { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: 'Trust Website',
    description: 'A comprehensive platform for a charitable trust, enhancing online presence and donor engagement.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: "https://github.com/Vitiantanmay/hanumant-dham",
  },
  {
    title: 'TerraPulse',
    description: 'TerraPulse is a real-time tracking platform that visualizes live data streams such as earthquakes, ISS position, ships, flights, and more on an interactive map.',
    tags: ['MERN Stack', 'Firebase', 'Stripe API'],
    link: "https://github.com/Vitiantanmay/TerraPulse",
  },
  {
    title: 'FootPrints',
    description: 'A modern Shoes Shop',
    tags: ['Python', 'Flask', 'React','TypeScript'],
    link: "https://github.com/Vitiantanmay/footprints",
  },
  {
    title: '8 Bit Digital Lock',
    description: 'A hardware-based security project implementing a robust 8-bit digital locking mechanism.',
    tags: ['Verilog', 'FPGA', 'Digital Logic'],
    link: "https://github.com/Vitiantanmay/8-Bit-Digital-Lock",
  },
  {
    title: 'Hardware Task Scheduler',
    description: 'A low-level scheduler designed for embedded systems to manage and prioritize hardware tasks efficiently.',
    tags: ['C++', 'Embedded Systems', 'RTOS'],
    link: "https://github.com/Vitiantanmay/"
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
  github: 'https://github.com/Vitiantanmay',
  linkedin: 'https://linkedin.com/in/vitiantanmay/',
  // x: 'https://x.com/example',
  email: 'tanmaygalav@gmail.com'
};
