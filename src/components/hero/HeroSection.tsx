import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-16 lg:flex lg:px-8 lg:py-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            {/* <Image
              className="h-auto w-auto"
              src="/the-gamer-corps-isologo.png"
              alt="The Gaming Corps"
              width={264}
              height={64}
            /> */}
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
              Tu Fuente Diaria de Noticias
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Bienvenidos a The Gaming Corps, el epicentro de las últimas y más
              emocionantes noticias del mundo de la tecnología y los
              videojuegos. Aquí, cada día es una aventura en el vasto universo
              digital. Desde las innovaciones más rompedoras hasta los
              lanzamientos de videojuegos más esperados, ¡te mantenemos al día
              con todo!
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                ¡Informate de todo!
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="/cover.png"
                  alt="App screenshot"
                  width={1080}
                  height={1080}
                  className="w-[60rem] h-[47rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
