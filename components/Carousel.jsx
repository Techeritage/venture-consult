"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination module
import "swiper/css";
import "swiper/css/pagination"; // Import Pagination styles
import gsap from "gsap";
import { slides } from "@/lib/constants";
import Image from "next/image";
import Header1 from "./Header1";

const Carousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]} // Add Pagination module
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000, // Auto-slide every 7 seconds
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true, // Enable clickable dots
        el: ".swiper-pagination", // Attach custom pagination container
      }}
      onSlideChange={(swiper) => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const textElements = currentSlide.querySelectorAll(".text-content");

        gsap.fromTo(
          textElements,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
        );
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-screen">
            <Image
              src={slide.image}
              alt="slide image"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute bg-black/60 top-0 bottom-0 left-0 right-0 content">
              <Header1 />
              <div className="relative w-full h-full flex items-center px-[3%] lg:px-[5%]">
                <div>
                  <h1 className="text-content max-w-[95%] md:max-w-[65%]">
                    {slide.headline}
                  </h1>
                  <p className="mt-2 text-content max-w-[75%] md:max-w-[50%] opacity-90">
                    {slide.description}
                  </p>
                  <button className="mt-8 px-6 py-3 bg-lightBg font-semibold text-black rounded-full text-content">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* Add Pagination Container */}
      <div className="swiper-pagination !bottom-20"></div>
    </Swiper>
  );
};

export default Carousel;
