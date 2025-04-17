import Link from "next/link";
import Image from "next/image";
import { CalendarIcon, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Post } from "@/lib/types";

interface BlogCardProps {
  post: Post;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block p-1">
      <article className={`blog-card ${featured ? "border-blue-500/50" : ""}`}>
        <div className="overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={600}
            height={340}
            className="blog-card-image"
            priority
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {post.categories?.filter(Boolean).map((cat, index) => (
              <span
                key={`cat-${cat._id || index}`}
                className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
              >
                {cat.name}
              </span>
            ))}

            {post.subcategories?.filter(Boolean).map((sub, index) => (
              <span
                key={`sub-${sub._id || index}`}
                className="border border-blue-400 text-blue-500 text-xs px-2 py-1 rounded-full"
              >
                {sub.name}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-blue-500 transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>

          <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <CalendarIcon className="h-3 w-3" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
