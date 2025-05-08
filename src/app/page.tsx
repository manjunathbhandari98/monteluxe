import WatchCategories from "@/components/home/Categories";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import NewsLetter from "@/components/home/NewsLetter";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <WatchCategories />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};

export default Home;
