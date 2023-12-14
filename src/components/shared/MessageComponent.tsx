import Image from "next/image";
import Link from "next/link";

interface NotificationMessage {
  topic: string;
  message: string;
  comment: string;
}

const MessageComponent = ({ topic, message, comment }: NotificationMessage) => {
  return (
    <>
      <div className="bg-white">
        <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="flex-shrink-0 pt-16">
            <Image
              className="mx-auto h-24 w-auto"
              src="https://raw.githubusercontent.com/imsoft/BlogPosts/main/images/imsoft/logotipo-imsoft-transparente-azul-rectangular.png"
              alt="imSoft"
              height={650}
              width={650}
            />
          </div>
          <div className="mx-auto max-w-xl py-16 sm:pb-24">
            <div className="text-center">
              <p className="text-base font-semibold text-primary-600">
                {topic}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {message}
              </h1>
              <p className="mt-2 text-lg text-gray-500">{comment}</p>
            </div>
            <div className="mt-12">
              <div className="mt-8">
                <Link
                  href="/"
                  className="text-base font-medium text-primary-600 hover:text-primary-500"
                >
                  Regresar al inicio
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MessageComponent;
