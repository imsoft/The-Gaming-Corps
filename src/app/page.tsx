import { HeroSection } from "@/components";
import BlogGrid from "@/components/blog/BlogGrid";

const HomePage = async () => {
  return (
    <>
      <HeroSection />
      <BlogGrid />
    </>
  );
};

export default HomePage;
