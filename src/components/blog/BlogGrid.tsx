import { BlogCard } from "./BlogCard";

export const BlogGrid = ({ blogs }: any) => {
  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Noticias
            </h2>

            <p className="mt-2 text-lg leading-8 text-white">
              ¡Nos apasionan los videojuegos, el cine, las series y la cultura
              pop!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blogs?.data?.map((blog: any) => (
              <div key={blog.id}>
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
