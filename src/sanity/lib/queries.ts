import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "excerpt": excerpt,
  "content": body,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
  "categories": categories[]->{ _id, name },
  "subcategories": subcategories[]->{ _id, name },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author->image.asset->url,
    "bio": author->bio
  },
  readingTime,
  featured
}
`;

// Get posts by category
export const relatedPostsQuery = groq`
*[
  _type == "post" &&
  _id != $postId &&
  count(categories[]->name match $categoryNames[]) > 0
][0...3] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
  "categories": categories[]->{ _id, name },
  "subcategories": subcategories[]->{ _id, name },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author->image.asset->url,
    "bio": author->bio
  },
  readingTime,
  featured
}
`;

// Posts destacados
export const featuredPostsQuery = groq`
*[_type == "post" && featured == true] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "content": body,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
  "categories": categories[]->{ _id, name },
  "subcategories": subcategories[]->{ _id, name },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author->image.asset->url,
    "bio": author->bio
  },
  readingTime,
  featured
}
`;

// Posts recientes
export const recentPostsQuery = groq`
*[_type == "post"] | order(publishedAt desc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "content": body,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
  "categories": categories[]->{ _id, name },
  "subcategories": subcategories[]->{ _id, name },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author.image.asset->url,
    "bio": author.bio
  },
  readingTime,
  featured
}
`;

// Por categoría (con o sin subcategoría)
export const postsByCategoryQuery = groq`
*[
  _type == "post" &&
  $category in categories[]->slug.current &&
  (
    !defined($subcategory) ||
    $subcategory in subcategories[]->slug.current
  )
] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
  "categories": categories[]->{ _id, name, "slug": slug.current },
  "subcategories": subcategories[]->{ _id, name, "slug": slug.current },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author->image.asset->url,
    "bio": author->bio
  },
  readingTime,
  featured
}

`;

// Get a single post by its slug
export const postQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  "content": body,
  "coverImage": mainImage.asset->url,
  "date": publishedAt,
 "categories": categories[]->{
    _id,
    name,
    "slug": slug.current
  },
  "subcategories": subcategories[]->{
    _id,
    name,
    "slug": slug.current
  },
  "author": {
    "id": author->_id,
    "name": author->name,
    "avatar": author->image.asset->url,
    "bio": author->bio
  },
  readingTime,
  featured
}
`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get the highlighted post for the hero section
export const heroPostQuery = groq`
  *[_type == "post" && highlightedInHero == true][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "coverImage": mainImage.asset->url
  }
`;

// Get all categories
export const categoriesQuery = groq`
  *[_type == "category"]{
    _id,
    name,
    "slug": slug.current,
    "subcategories": *[_type == "subcategory" && references(^._id)]{
      _id,
      name,
      "slug": slug.current
    }
  }
`;
