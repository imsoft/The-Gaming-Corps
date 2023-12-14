import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ blog }: any) => {
  const imageUrl =
    "http://127.0.0.1:1337" + blog.attributes.img.data.attributes.url;

  return (
    <>
      <article className="relative isolate flex flex-col justify-end overflow-hidden bg-white px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <Image
          src={imageUrl}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={500}
          height={500}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-gray-950/70" />
        <div className="absolute inset-0 -z-10 ring-1 ring-inset ring-gray-950/10" />

        <Image
          src="/the-gamer-corps-isotipo.png"
          alt=""
          className="absolute top-5 right-9 -z-10 h-auto w-auto"
          width={50}
          height={50}
        />

        <h3 className="mt-3 text-3xl font-semibold leading-8 text-[#2bafd8]">
          <Link href={`/blog/${blog.id}`}>
            <span className="absolute inset-0" />
            {blog.attributes.Title}
          </Link>
        </h3>

        <p className="mt-3 text-lg leading-6 text-white line-clamp-3">
          {blog.attributes.Description}
        </p>

        <div className="absolute inset-0 -z-10 w-80 mx-auto border-b-8 border-blue-500" />
      </article>
    </>
  );
};
