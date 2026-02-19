import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedProjects } from "@/shared/api/public.api";
import type { Project } from "@/types/project";

export function useFeaturedProjects() {
  return useQuery<Project[]>({
    queryKey: ["featured-projects"],
    queryFn: fetchFeaturedProjects,
  });
}
