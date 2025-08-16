import { describe, it, expect } from "bun:test";
import { createMockClient } from "../test-utils";
import type { Experience } from "./use-experiences";
import type { Database } from "@/integrations/supabase/types";

const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
(globalThis as unknown as { localStorage: typeof localStorage }).localStorage =
  localStorageMock as unknown as typeof localStorage;

const { fetchExperiences } = await import("./use-experiences");

const sampleRow: Partial<Database["public"]["Tables"]["experiences"]["Row"]> = {
  id: "1",
  company: "Acme",
  title: "Engineer",
  role: "IC",
  summary: "Did things",
  highlights: ["Shipped"],
  tags: ["React"],
  start_date: "2020-01-01",
  end_date: null,
  location: "Remote",
  sort_order: 1,
  is_published: true,
};

describe("fetchExperiences", () => {
  it("returns mapped experiences when supabase responds", async () => {
    const client = createMockClient({ data: [sampleRow], error: null }, 2);
    const result = await fetchExperiences(client);
    expect(result).toEqual<Experience[]>([
      {
        id: "1",
        company: "Acme",
        role: "Engineer",
        type: "IC",
        duration: "Jan 2020 - Present",
        location: "Remote",
        description: "Did things",
        achievements: ["Shipped"],
        skills: ["React"],
      },
    ]);
  });

  it("returns empty array when supabase fails", async () => {
    const client = createMockClient({ data: null, error: new Error("down") }, 2);
    const result = await fetchExperiences(client);
    expect(result).toEqual([]);
  });
});
