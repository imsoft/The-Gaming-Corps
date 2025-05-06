import Image from "next/image";
import Script from "next/script";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageAssetDocument } from "@sanity/client";

export const portableTextComponents = {
  types: {
    youtube: ({ value }: { value: { url: string } }) => {
      const videoId = value.url?.split("v=")[1]?.split("&")[0];

      if (!videoId) return <p>Video no válido</p>;

      return (
        <div className="my-6 aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            className="w-full h-full rounded-lg"
            style={{ border: "0" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    },
    tweetEmbed: ({ value }: { value: { url: string } }) => {
      if (!value?.url) return null;

      const embedUrl = value.url.replace(
        /(x\.com|twitter\.com)/,
        "twitter.com"
      );

      return (
        <div className="my-6 flex justify-center">
          <blockquote className="twitter-tweet">
            <a href={embedUrl}></a>
          </blockquote>
          <Script
            src="https://platform.twitter.com/widgets.js"
            strategy="lazyOnload"
          />
        </div>
      );
    },
    image: ({ value }: { value: { asset: SanityImageAssetDocument; alt?: string } }) => {
      if (!value?.asset) return null;

      const imageUrl = urlFor(value).width(1200).url();

      return (
        <div className="my-6 flex justify-center">
          <Image
            src={imageUrl}
            alt={value.alt || "Imagen del artículo"}
            width={800}
            height={600}
            className="rounded-lg object-contain"
          />
        </div>
      );
    },
  },
};
