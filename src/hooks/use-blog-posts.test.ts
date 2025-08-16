import { describe, it, expect } from "bun:test";
import { createMockClient } from "../test-utils";
import type { Database } from "@/integrations/supabase/types";
import type { BlogPost } from "./use-blog-posts";

const localStorageMock = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};
(globalThis as unknown as { localStorage: typeof localStorage }).localStorage =
  localStorageMock as unknown as typeof localStorage;

const { fetchBlogPosts } = await import("./use-blog-posts");

const sampleCategory: Database["public"]["Tables"]["blog_categories"]["Row"] = {
  id: "1",
  slug: "ranting",
  name: "Ranting",
  sort_order: 1,
  is_published: true,
  created_at: "2020-01-01",
  updated_at: "2020-01-01",
};

const sampleRow: Partial<Database["public"]["Tables"]["blog_posts"]["Row"]> & {
  blog_categories: Database["public"]["Tables"]["blog_categories"]["Row"];
} = {
  id: "1",
  category_id: "1",
  title: "Post",
  content: "Content",
  created_at: "2020-01-01",
  blog_categories: sampleCategory,
};

describe("fetchBlogPosts", () => {
  it("returns mapped posts when supabase responds", async () => {
    const client = createMockClient({ data: [sampleRow], error: null });
    const result = await fetchBlogPosts(client);
    expect(result).toEqual<BlogPost[]>([
      {
        id: "1",
        title: "Post",
        content: "Content",
        createdAt: "2020-01-01",
        category: { slug: "ranting", name: "Ranting" },
      },
    ]);
  });

  it("returns empty array when supabase fails", async () => {
    const client = createMockClient({ data: null, error: new Error("down") });
    const result = await fetchBlogPosts(client);
    expect(result).toEqual([]);
  });
});
