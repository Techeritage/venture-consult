import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Carousel />
      <About />
      <Services />
    </main>
  );
};

export default HomePage;
