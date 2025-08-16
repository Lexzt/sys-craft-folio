import { describe, it, expect } from "bun:test";
import { createMockClient } from "../test-utils";
import type { Project } from "./use-projects";
import type { Database } from "@/integrations/supabase/types";

const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
(globalThis as unknown as { localStorage: typeof localStorage }).localStorage =
  localStorageMock as unknown as typeof localStorage;

const { fetchProjects } = await import("./use-projects");

const sampleRow: Partial<Database["public"]["Tables"]["projects"]["Row"]> = {
  id: "1",
  title: "Test Project",
  subtitle: "A project",
  problem: "Problem",
  approach: "Approach",
  outcome: "Outcome",
  tech_stack: ["React"],
  links: { github: "https://github.com" } as unknown as Database["public"]["Tables"]["projects"]["Row"]["links"],
  is_lead: true,
  sort_order: 1,
  is_published: true,
};

describe("fetchProjects", () => {
  it("returns mapped projects when supabase responds", async () => {
    const client = createMockClient({ data: [sampleRow], error: null });
    const result = await fetchProjects(client);
    expect(result).toEqual<Project[]>([
      {
        id: "1",
        title: "Test Project",
        description: "A project",
        problem: "Problem",
        approach: "Approach",
        outcome: "Outcome",
        techStack: ["React"],
        links: { github: "https://github.com" },
        featured: true,
        leadership: true,
      },
    ]);
  });

  it("returns empty array when supabase fails", async () => {
    const client = createMockClient({ data: null, error: new Error("down") });
    const result = await fetchProjects(client);
    expect(result).toEqual([]);
  });
});
