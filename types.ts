
export type Page = 'home' | 'about' | 'projects' | 'contact';

export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: string;
}
