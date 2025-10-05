export interface Blog {
  id: number;
  title: string;
  content: string;
  thumbnail?: string;
  tags: string[];
  isFeatured: boolean;
  views: number;
  authorId: number;
  author?: User;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail?: string;
  liveUrl: string;
  frontendRepo?: string;
  backendRepo?: string;
  features: string[];
  techStack: string[];
  published: boolean;
  authorId: number;
  author?: User;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: string; // ISO date
  updatedAt: string; // ISO date
  blogs?: Blog[];
  projects?: Project[];
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface AboutMe {
  id: number;
  name: string;
  title: string[];
  bio: string;
  profileImage?: string;
  email: string;
  phone?: string;
  location?: string;
  resumeUrl?: string;
  experience: Experience[];
  skills: Skill[];
  createdAt: string;
  updatedAt: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  startDate: string; // ISO string
  endDate: string;   // ISO string or empty string
  description: string;
  aboutMeId: number;
  aboutMe?: AboutMe;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: number;
  name: string;
  iconUrl?: string;
  aboutMeId: number;
  categoryId: number;
  category?: SkillCategory;
  aboutMe?: AboutMe;
  createdAt: string;
  updatedAt: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills?: Skill[];
  createdAt: string;
  updatedAt: string;
}