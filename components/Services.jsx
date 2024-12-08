"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/constants";
import { Sparkle } from "lucide-react";
import Image from "next/image";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // Add delay between cards
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Trigger animation when section reaches 80% of viewport height
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sectionStyle border-t-2 border-black bg-secondaryBg2 !text-black space-y-4"
    >
      <div className="flex items-center gap-3">
        <Sparkle fill="#000" size={18} />
        <h2>OUR SERVICES</h2>
      </div>
      <h1 className="max-w-[80%]">
        We help you meet your compliance goals with ease
      </h1>

      {/* Services Grid */}
      <div className="grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)} // Assign each card to the array
            className="p-6 flex border-2 border-black flex-col items-center text-center space-y-4"
          >
            <Image
              src={service.logo}
              alt={service.heading}
              width={80}
              height={80}
              className="object-contain"
            />
            <h3 className="text-lg font-semibold">{service.heading}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
