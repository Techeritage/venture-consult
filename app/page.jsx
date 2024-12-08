import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Carousel />
      <About />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
