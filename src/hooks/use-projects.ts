import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
    demo?: string;
  };
  featured: boolean;
  leadership?: boolean;
}

type ProjectRow = Database["public"]["Tables"]["projects"]["Row"] & {
  // optional future column
  is_featured?: boolean;
};

function mapProject(row: ProjectRow, index: number): Project {
  const isFeatured = row.is_featured ?? index < 3;

  return {
    id: row.id,
    title: row.title,
    description: row.subtitle ?? "",
    problem: row.problem ?? "",
    approach: row.approach ?? "",
    outcome: row.outcome ?? "",
    techStack: row.tech_stack ?? [],
    links: (row.links as Record<string, string> | null) ?? {},
    featured: isFeatured,
    leadership: row.is_lead ?? false,
  };
}

export function useProjects() {
  const { data } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select(
          "id, title, subtitle, problem, approach, outcome, tech_stack, links, is_lead, sort_order"
        )
        .eq("is_published", true)
        .order("sort_order", { ascending: false });

      if (error) throw error;
      return (data ?? []).map(mapProject);
    },
  });

  return data;
}

