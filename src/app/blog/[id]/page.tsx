import Image from "next/image";

const fetchBlog = async (id: number) => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs/${id}?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

const BlogPage = async ({ params }: any) => {
  const blog = await fetchBlog(params.id);

  const imageUrl =
    "http://127.0.0.1:1337" + blog.data.attributes.img.data.attributes.url;

  return (
    <div className="mx-auto max-w-7xl items-center px-4 py-5 sm:px-6 sm:py-4 md:justify-start lg:px-8">
      <article className="prose prose-lg prose-indigo max-w-screen-lg mx-auto mt-6 text-gray-500">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
          {blog.data.attributes.Title}
        </h1>
        <div className="relative w-full h-[35rem] overflow-hidden rounded-xl mt-5">
          <Image
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt={""}
            sizes="(min-width: 1140px) 1024px, 92.2vw"
            className="rounded-xl"
            priority
          />
        </div>
        <div className="mt-5">
          <p className="text-white mt-2">{blog.data.attributes.Description}</p>
          <div className="mt-4 flex items-center text-gray-400">
            <span className="text-sm">
              Publised on{" "}
              {new Date(blog.data.attributes.publishedAt).toLocaleString()}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPage;
