import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export interface BlogPost {
  id: string;
  title: string;
  content: string | null;
  createdAt: string;
  category: {
    slug: string;
    name: string;
  };
}

type BlogPostRow = Database["public"]["Tables"]["blog_posts"]["Row"] & {
  blog_categories: Database["public"]["Tables"]["blog_categories"]["Row"];
};

function mapPost(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    title: row.title,
    content: row.content ?? null,
    createdAt: row.created_at,
    category: {
      slug: row.blog_categories.slug,
      name: row.blog_categories.name,
    },
  };
}

export async function fetchBlogPosts(client = supabase): Promise<BlogPost[]> {
  const { data, error } = await client
    .from("blog_posts")
    .select("id, title, content, created_at, blog_categories(slug, name)")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return (
    data?.map((row) =>
      mapPost(row as BlogPostRow)
    ) ?? []
  );
}

export function useBlogPosts() {
  const { data } = useQuery<BlogPost[]>({
    queryKey: ["blog_posts"],
    queryFn: () => fetchBlogPosts(),
  });

  return data;
}
