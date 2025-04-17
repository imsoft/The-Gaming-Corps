import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getCategories, getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { Skeleton } from "@/components/ui/skeleton";
import CategoryCombobox from "@/components/blog/category/category-combobox";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const categories = await getCategories();

  const categorySlug = (await params).slug?.[0] || "";
  const subcategorySlug = (await params).slug?.[1] || null;

  const selectedCat = categories.find((c) => c.slug === categorySlug);
  if (!selectedCat) notFound();

  const selectedSub = subcategorySlug
    ? selectedCat.subcategories?.find((s) => s.slug === subcategorySlug)
    : null;

  const posts = await getPostsByCategory(selectedCat.slug, selectedSub?.slug);

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {selectedSub ? selectedSub.name : selectedCat.name}
        </h1>
        <p className="text-muted-foreground">
          Explora artículos sobre{" "}
          {(selectedSub?.name || selectedCat.name).toLowerCase()}.
        </p>
      </div>

      <div className="mb-8">
        <CategoryCombobox categories={categories} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<CategoryPostsSkeleton />}>
          {posts.length > 0 ? (
            posts.map((post) => <BlogCard key={post._id} post={post} />)
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">
                No hay artículos en esta categoría
              </h3>
              <p className="text-muted-foreground">
                Vuelve pronto, estamos trabajando en nuevo contenido.
              </p>
            </div>
          )}
        </Suspense>
      </div>
    </div>
  );
}

function CategoryPostsSkeleton() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <Skeleton className="h-48 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </>
  );
}
