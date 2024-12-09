import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Services from "@/components/Services";

const HomePage = () => {
  return (
    <main>
      <Carousel />
      <About />
      <Services />
      <FAQs />
      <Contact />
    </main>
  );
};

export default HomePage;
