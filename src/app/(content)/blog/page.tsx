import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";
import type { Post } from "@/lib/types";
import { BlogCard } from "@/components/blog/blog-card";

export default async function BlogPage() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">
          Explora todos nuestros artículos sobre videojuegos y tecnología.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts
            .filter(
              (post) => post.date && !isNaN(new Date(post.date).getTime())
            )
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">
            No hay artículos disponibles por ahora
          </h3>
          <p className="text-muted-foreground">
            Cuando publiquemos nuevos contenidos, aparecerán aquí.
          </p>
        </div>
      )}
    </div>
  );
}
