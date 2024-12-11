"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MoveRight, Sparkle } from "lucide-react";
import Link from "next/link";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Create refs for animation targets
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the heading
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current, // Trigger animation when section is in view
          start: "top 80%", // Start when the top of the section reaches 80% of viewport height
        },
      });

      // Animate the text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.3,
        delay: 0.2, // Delay to stagger animations
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
        },
      });
    }, sectionRef); // Context cleanup for React 18 strict mode

    return () => ctx.revert(); // Clean up animations
  }, []);

  return (
    <section
      ref={sectionRef}
      className="sectionStyle bg-secondaryBg !text-black space-y-4"
    >
      <div className="flex items-center gap-3">
        <Sparkle fill="#000" size={18} />
        <h2>ABOUT</h2>
      </div>
      <h1 ref={headingRef} className="max-w-[80%]">
        Your Trusted Partner in Compliance & Tax Solutions
      </h1>
      <p ref={textRef} className="md:max-w-[75%]">
        Welcome to Venture Consult, a leading agency specializing in tax
        consultancy and compliance certification services. We are dedicated to
        helping businesses stay compliant, meet their regulatory obligations,
        and ensure their operations run smoothly in today&apos;s dynamic
        economic landscape. At Venture Consult, we provide tailored support to
        help businesses across industries navigate the complexities of tax laws
        and compliance requirements. From obtaining essential compliance
        certificates to ensuring seamless tax auditing processes, we are here to
        streamline your journey and deliver expert guidance. Our experienced
        professionals combine deep industry knowledge with a commitment to
        excellence, ensuring that your business&apos;s financial operations are
        in trusted hand.
      </p>
      <Link
        href="/about"
        className="flex items-center gap-2 pt-7 font-semibold w-fit"
      >
        Learn More About Us <MoveRight />
      </Link>
    </section>
  );
};

export default About;
