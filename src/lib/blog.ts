import {
  featuredPostsQuery,
  recentPostsQuery,
  relatedPostsQuery,
  postsByCategoryQuery,
  postQuery,
  heroPostQuery,
  categoriesQuery,
} from "@/sanity/lib/queries";
import type { Category, Post } from "./types";
import { sanityFetch } from "@/sanity/lib/fetch";

// Simulated database functions
// In a real application, these would connect to a database

// Obtener posts destacados
export async function getFeaturedPosts(): Promise<Post[]> {
  return await sanityFetch<Post[]>({ query: featuredPostsQuery });
}

// Obtener los 6 más recientes
export async function getRecentPosts(): Promise<Post[]> {
  return await sanityFetch<Post[]>({ query: recentPostsQuery });
}

// Obtener por categoría y/o subcategoría
export async function getPostsByCategory(
  category: string,
  subcategory?: string | null
): Promise<Post[]> {
  return await sanityFetch<Post[]>({
    query: postsByCategoryQuery,
    params: {
      category,
      subcategory: subcategory ?? null,
    },
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await sanityFetch<Post>({
      query: postQuery,
      params: { slug },
    });

    return post || null;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

// Obtener posts relacionados
export async function getRelatedPosts(
  postId: string,
  categoryNames: string[]
): Promise<Post[]> {
  return sanityFetch<Post[]>({
    query: relatedPostsQuery,
    params: {
      postId,
      categoryNames,
    },
  });
}

// Obtener posts destacados para la sección de héroe
export async function getHeroPost(): Promise<Post | null> {
  const post = await sanityFetch<Post>({
    query: heroPostQuery,
  });

  return post || null;
}

// Obtener todas las categorías
export async function getCategories(): Promise<Category[]> {
  return sanityFetch<Category[]>({
    query: categoriesQuery,
  });
}
