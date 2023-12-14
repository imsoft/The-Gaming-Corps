import { BlogGrid, HeroSection } from "@/components";

const fetchBlogs = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(
      `http://127.0.0.1:1337/api/blogs?populate=*`,
      options
    );
    const response = await res.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};

const HomePage = async () => {
  const blogs = await fetchBlogs();

  if (!blogs) {
    console.log("No hay blogs");
  }

  return (
    <>
      <HeroSection />
      <BlogGrid blogs={blogs} />
    </>
  );
};

export default HomePage;
