import { getPostsMeta } from "@/lib/posts";
import MessageComponent from "../shared/MessageComponent";
import ArticleCard from "./ArticleCard";

const ArticleGrid = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <MessageComponent
        topic={"Perdón por las molestias"}
        message={"No hay Posts 😔"}
        comment={"Te recomendamos volver más tarde o recargar el sitio"}
      />
    );
  }

  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Noticias
            </h2>

            <p className="mt-2 text-lg leading-8 text-gray-100">
              ¡Nos apasionan los videojuegos, el cine, las series y la cultura
              pop!
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <>
                <ArticleCard key={post._id} post={post} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleGrid;
