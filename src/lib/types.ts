import type { PortableTextBlock } from "@portabletext/types";

export interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: PortableTextBlock[];
  coverImage: string;
  date: string;
  categories: Category[];
  subcategories?: Subcategory[];
  author: Author;
  readingTime: number;
  featured?: boolean;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  subcategories?: Subcategory[];
}
