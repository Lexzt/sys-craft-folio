import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useBlogPosts } from "@/hooks/use-blog-posts";

const Blog = () => {
  const posts = useBlogPosts() ?? [];
  const categories = Array.from(
    new Map(posts.map((p) => [p.category.slug, p.category.name])).entries()
  ).map(([slug, name]) => ({ slug, name }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container py-10 space-y-10">
        {categories.length === 0 && <p>No posts yet.</p>}
        {categories.map((cat) => (
          <section key={cat.slug} className="space-y-4">
            <h2 className="text-2xl font-bold">{cat.name}</h2>
            {posts
              .filter((p) => p.category.slug === cat.slug)
              .map((post) => (
                <article key={post.id} className="p-4 border rounded-lg space-y-2">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  {post.content && (
                    <p className="text-sm text-muted-foreground">{post.content}</p>
                  )}
                </article>
              ))}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
