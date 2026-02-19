export interface ProjectTech {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  imageUrl: string;
  isFeatured: boolean;
  createdAt: string;
  techStack: ProjectTech[];
}