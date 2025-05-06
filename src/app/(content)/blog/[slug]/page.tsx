import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarIcon, Clock, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { getRelatedPosts } from "@/lib/blog";
import { formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { postQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { Post } from "@/lib/types";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { portableTextComponents } from "@/components/portable-text/components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const post = await sanityFetch<Post>({ query: postQuery, params });

  if (!post) return {};

  const siteUrl = "https://thegamingcorps.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      "videojuegos",
      "gaming",
      "tecnología",
      "reseñas",
      "humor",
      "The Gaming Corps",
    ],
    authors: [{ name: post.author?.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: postUrl,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    metadataBase: new URL(siteUrl),
  };
}

type CategoryItem = Post["categories"][number];

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await sanityFetch<Post>({ query: postQuery, params });

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-12">
      <article className="mx-auto max-w-4xl">
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {post.categories?.map((cat) => (
              <Link key={cat._id} href={`/categoria/${cat.slug}`}>
                <Badge
                  variant="default"
                  className="cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  {cat.name}
                </Badge>
              </Link>
            ))}

            {post.subcategories?.map((sub) => {
              const parentCategory =
                post.categories?.find(
                  (cat) => cat.slug && sub.slug && sub.slug.includes(cat.slug)
                ) ?? post.categories?.[0];

              return (
                <Link
                  key={sub._id}
                  href={`/categoria/${parentCategory?.slug}/${sub.slug}`}
                >
                  <Badge
                    variant="outline"
                    className="border-blue-400 text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors"
                  >
                    {sub.name}
                  </Badge>
                </Link>
              );
            })}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readingTime} min de lectura</span>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.coverImage || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={675}
            className="w-full object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={post.content} components={portableTextComponents} />
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border pt-8">
          <div className="flex items-center gap-4">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={50}
              height={50}
              className="rounded-full object-cover aspect-square"
            />
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-muted-foreground">Editor</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="text-sm font-semibold text-muted-foreground mb-1">
              Compartir este artículo
            </span>
            <div className="flex gap-2">
              <Link
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  `https://thegamingcorps.com/blog/${post.slug}`
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                <span className="sr-only">X</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.243 1H14.5l-4.244 4.846L15.5 15h-4.679l-3.643-4.572L3.9 15H1.5l4.64-5.296L.5 1h4.75l3.361 4.216L12.243 1zm-.734 12h1.29L4.526 2.945h-1.33L11.51 13z" />
                </svg>
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  `https://thegamingcorps.com/blog/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 text-sm"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-facebook"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <div className="mx-auto max-w-4xl mt-16">
        <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
        <Suspense fallback={<RelatedPostsSkeleton />}>
          <RelatedPosts
            postId={post._id}
            categoryNames={
              post.categories?.map((c: CategoryItem) => c.name) || []
            }
          />
        </Suspense>
      </div>
    </div>
  );
}

async function RelatedPosts({
  postId,
  categoryNames,
}: {
  postId: string;
  categoryNames: string[];
}) {
  const relatedPosts = await getRelatedPosts(postId, categoryNames);

  if (!relatedPosts || relatedPosts.length === 0) {
    return (
      <p className="text-muted-foreground text-center">
        No hay artículos relacionados por ahora.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedPosts.map((post: Post) => (
        <Link key={post._id} href={`/blog/${post.slug}`} className="group">
          <article className="blog-card h-full flex flex-col">
            <div className="overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={225}
                className="blog-card-image"
              />
            </div>
            <div className="p-4 space-y-2 flex-1 flex flex-col">
              {post.categories
                ?.filter(Boolean)
                .map((cat: { _id: string; name: string }, index: number) => (
                  <span
                    key={`cat-${cat._id || index}`}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}

              {post.subcategories
                ?.filter(Boolean)
                .map((sub: { _id: string; name: string }, index: number) => (
                  <span
                    key={`sub-${sub._id || index}`}
                    className="border border-blue-400 text-blue-500 text-xs px-2 py-1 rounded-full"
                  >
                    {sub.name}
                  </span>
                ))}

              <h3 className="text-lg font-bold line-clamp-2 group-hover:text-blue-500 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                <CalendarIcon className="h-3 w-3" />
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}

function RelatedPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
