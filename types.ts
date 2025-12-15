
export type Page = 'home' | 'about' | 'projects' | 'contact';

export interface Project {
  title: string;
  description: string;
  tags: string[];
  type: string;
  highlight: boolean;
  link: string;
}

export interface Skill {
  name: string;
  level: string;
}
