import { http } from "./http";
import type { Project } from "@/types/project";

export const fetchFeaturedProjects = async (): Promise<Project[]> => {
  const res = await http.get("/public/projects");
  return res.data;
};
