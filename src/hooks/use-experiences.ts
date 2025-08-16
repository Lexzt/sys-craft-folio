import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: Database["public"]["Enums"]["role_type"];
  duration: string;
  location: string | null;
  description: string;
  achievements: string[];
  skills: string[];
}

type ExperienceRow = Database["public"]["Tables"]["experiences"]["Row"];

function formatDuration(start: string, end: string | null) {
  const startStr = format(new Date(start), "MMM yyyy");
  const endStr = end ? format(new Date(end), "MMM yyyy") : "Present";
  return `${startStr} - ${endStr}`;
}

function mapExperience(row: ExperienceRow): Experience {
  return {
    id: row.id,
    company: row.company,
    role: row.title,
    type: row.role,
    duration: formatDuration(row.start_date, row.end_date),
    location: row.location,
    description: row.summary ?? "",
    achievements: row.highlights ?? [],
    skills: row.tags ?? [],
  };
}

export function useExperiences() {
  const { data } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("experiences")
        .select(
          "id, company, title, role, summary, highlights, tags, start_date, end_date, location"
        )
        .eq("is_published", true)
        .order("sort_order", { ascending: false })
        .order("start_date", { ascending: false });

      if (error) throw error;
      return data?.map(mapExperience) ?? [];
    },
  });

  return data;
}
