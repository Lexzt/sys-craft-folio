import { useQuery } from "@tanstack/react-query";
import type { LucideIcon } from "lucide-react";
import { Server, Database as DataIcon, Cloud as CloudIcon, Cog, Activity, Crown, Code } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  name: string;
  level: SkillLevel | null;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

type SkillCategoryRow = Database["public"]["Tables"]["skill_categories"]["Row"];
type SkillCategorySkillRow = Database["public"]["Tables"]["skill_category_skills"]["Row"] & {
  skills: Database["public"]["Tables"]["skills"]["Row"];
};

const iconMap: Record<string, LucideIcon> = {
  backend: Server,
  data: DataIcon,
  cloud: CloudIcon,
  "platform-infra": Cog,
  dx: Activity,
  leadership: Crown,
};

function mapCategory(row: SkillCategoryRow & { skill_category_skills: SkillCategorySkillRow[] }): SkillCategory {
  return {
    name: row.name,
    icon: iconMap[row.slug] ?? Code,
    skills:
      row.skill_category_skills?.map((s) => ({
        name: s.skills.name,
        level: s.skills.level as SkillLevel | null,
      })) ?? [],
  };
}

export async function fetchSkills(client = supabase): Promise<SkillCategory[]> {
  const { data, error } = await client
    .from("skill_categories")
    .select(
      "slug, name, sort_order, skill_category_skills(sort_order, skills(name, level))"
    )
    .eq("is_published", true)
    .order("sort_order", { ascending: false })
    .order("sort_order", {
      foreignTable: "skill_category_skills",
      ascending: false,
    });

  if (error) {
    console.error(error);
    return [];
  }
  return (
    data?.map((row) =>
      mapCategory(row as SkillCategoryRow & { skill_category_skills: SkillCategorySkillRow[] })
    ) ?? []
  );
}

export function useSkills() {
  const { data } = useQuery<SkillCategory[]>({
    queryKey: ["skills"],
    queryFn: () => fetchSkills(),
  });

  return data;
}

