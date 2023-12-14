import Image from "next/image";
import Link from "next/link";
import { RequiredMetatags } from "@/interfaces";

interface Props {
  blog: RequiredMetatags;
}

const BlogCard = ({ blog }: Props) => {
  const {
    _id,
    title,
    description,
    keywords,
    author,
    subject,
    date,
    type,
    source,
    image,
    url,
    robots,
    tags,
  } = blog;

  return (
    <>
      <article className="relative isolate flex flex-col justify-end overflow-hidden bg-white px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
        <Image
          src={image}
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
          <Link href={`/blog/${_id}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-lg leading-6 text-gray-100 line-clamp-3">
          {description}
        </p>

        <div className="absolute inset-0 -z-10 w-80 mx-auto border-b-8 border-blue-500" />
      </article>
    </>
  );
};

export default BlogCard;
