import { describe, it, expect } from "bun:test";
import { createMockClient } from "../test-utils";
import { Server } from "lucide-react";
import type { SkillCategory } from "./use-skills";
import type { Database } from "@/integrations/supabase/types";

const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
(globalThis as unknown as { localStorage: typeof localStorage }).localStorage =
  localStorageMock as unknown as typeof localStorage;

const { fetchSkills } = await import("./use-skills");

const sampleRow: Partial<
  Database["public"]["Tables"]["skill_categories"]["Row"] & {
    skill_category_skills: Array<
      Database["public"]["Tables"]["skill_category_skills"]["Row"] & {
        skills: Database["public"]["Tables"]["skills"]["Row"];
      }
    >;
  }
> = {
  slug: "backend",
  name: "Backend",
  sort_order: 1,
  is_published: true,
  skill_category_skills: [
    {
      sort_order: 1,
      skills: { name: "Node", level: "Expert" } as Database["public"]["Tables"]["skills"]["Row"],
    },
  ],
};

describe("fetchSkills", () => {
  it("returns mapped skills when supabase responds", async () => {
    const client = createMockClient({ data: [sampleRow], error: null }, 2);
    const result = await fetchSkills(client);
    expect(result).toEqual<SkillCategory[]>([
      {
        name: "Backend",
        icon: Server,
        skills: [{ name: "Node", level: "Expert" }],
      },
    ]);
  });

  it("returns empty array when supabase fails", async () => {
    const client = createMockClient({ data: null, error: new Error("down") }, 2);
    const result = await fetchSkills(client);
    expect(result).toEqual([]);
  });
});
