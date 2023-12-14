interface NotificationMessage {
  topic: string;
  message: string;
  comment: string;
}

const MessageComponent = ({ topic, message, comment }: NotificationMessage) => {
  return (
    <>
      <div className="">
        <main className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl py-16 sm:pb-24">
            <div className="text-center">
              <p className="text-base font-semibold text-gray-400">
                {topic}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
                {message}
              </h1>
              <p className="mt-2 text-lg text-gray-500">{comment}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MessageComponent;
