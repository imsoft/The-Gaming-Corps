import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  GamepadIcon,
  MonitorIcon,
  TrendingUpIcon,
} from "lucide-react";
import { BlogCard } from "@/components/blog/blog-card";
import { Post } from "@/lib/types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { featuredPostsQuery, recentPostsQuery } from "@/sanity/lib/queries";
import { getHeroPost } from "@/lib/blog";

const Home = async () => {
  const heroPost = await getHeroPost();
  const featuredPosts: Post[] = await sanityFetch({
    query: featuredPostsQuery,
  });
  const recentPosts: Post[] = await sanityFetch({ query: recentPostsQuery });

  return (
    <div className="flex flex-col pb-8">
      {/* Hero Section */}
      <section className="relative hero-section overflow-hidden">
        {/* Fondo animado con gradiente */}
        <div className="absolute inset-0 hero-animated-bg z-0 will-change-[background-position]"></div>

        {/* Efecto de partículas/grid */}
        <div className="absolute inset-0 opacity-30 z-[1]">
          <div className="absolute inset-0 hero-grid-pattern will-change-transform"></div>
        </div>

        {/* Efectos de luz animados */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-60 animate-pulse-slow z-[1] will-change-transform"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-60 animate-pulse-slow-delayed z-[1] will-change-transform"></div>

        {/* Luces adicionales para mayor visibilidad */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-50 animate-pulse-slow z-[1] will-change-transform"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-50 animate-pulse-slow-delayed z-[1] will-change-transform"></div>

        <div className="w-full max-w-none px-4 md:px-8 relative z-10 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 hero-badge rounded-full font-medium text-sm">
                El portal gaming definitivo
              </div>
              <h1 className="text-4xl md:text-6xl font-bold hero-title leading-tight">
                Descubre el universo de los{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  videojuegos
                </span>{" "}
                y la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  tecnología
                </span>
              </h1>
              <p className="text-lg hero-text max-w-xl">
                Reviews, guías, noticias y análisis de hardware. Todo lo que
                necesitas saber sobre el mundo gaming en un solo lugar.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/blog"
                  className="custom-button primary-button inline-flex h-11 items-center justify-center rounded-md px-8 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
                >
                  Explorar artículos
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="custom-button secondary-button inline-flex h-11 items-center justify-center rounded-md px-8 py-2 text-sm font-medium border"
                >
                  Sobre nosotros
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <Link
                href={`/blog/${heroPost?.slug}`}
                className="relative hidden lg:block group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg filter blur-md"></div>
                <div className="relative hero-image-container p-1 rounded-lg">
                  <div className="relative w-[653px] h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={heroPost?.coverImage || "/placeholder.svg"}
                      alt={heroPost?.title || "Imagen destacada"}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 hero-badge-container max-w-[450px] p-3 rounded-lg shadow-lg flex flex-col">
                    <div className="text-sm font-bold">{heroPost?.title}</div>
                    <div className="text-xs opacity-80 line-clamp-1">
                      {heroPost?.excerpt}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24">
            <div className="hero-feature-card p-6 rounded-lg backdrop-blur-sm animated-card">
              <div className="hero-feature-icon p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GamepadIcon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold hero-feature-title mb-2">
                Reviews de Juegos
              </h3>
              <p className="hero-feature-text">
                Análisis detallados y honestos de los últimos lanzamientos en
                todas las plataformas.
              </p>
            </div>
            <div className="hero-feature-card p-6 rounded-lg backdrop-blur-sm animated-card">
              <div className="hero-feature-icon p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MonitorIcon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold hero-feature-title mb-2">
                Análisis de Hardware
              </h3>
              <p className="hero-feature-text">
                Comparativas y recomendaciones de los mejores componentes y
                periféricos gaming.
              </p>
            </div>
            <div className="hero-feature-card p-6 rounded-lg backdrop-blur-sm animated-card">
              <div className="hero-feature-icon p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold hero-feature-title mb-2">
                Tendencias Tech
              </h3>
              <p className="hero-feature-text">
                Las últimas novedades y avances en tecnología que están
                transformando la industria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Artículos destacados</h2>
              <p className="text-muted-foreground mt-2">
                Nuestras mejores publicaciones seleccionadas para ti
              </p>
            </div>
            <Link
              href="/blog"
              className="custom-button ghost-button inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium group"
            >
              Ver todos
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post._id} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-muted/30">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Artículos recientes</h2>
              <p className="text-muted-foreground mt-2">
                Las últimas novedades en videojuegos y tecnología
              </p>
            </div>
            <Link
              href="/blog"
              className="custom-button ghost-button inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium group"
            >
              Ver todos
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
