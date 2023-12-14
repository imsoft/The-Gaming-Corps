import SocialMediaBar from "./SocialMediaBar";

export const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-6 lg:px-8">
        <div className="mt-5 flex justify-center space-x-10">
          <SocialMediaBar iconStyle={"text-white hover:text-blue-500"} />
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-white">
          &copy; 2023 The Gaming Corps. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
