import Footer from "@/components/Footer";
import { Crosshair, Sparkle, Telescope } from "lucide-react";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <main>
      <section className="sectionStyle text-center space-y-4 bg-secondaryBg2 border-b-2 border-black">
        <h2 className="">About Us</h2>
        <h1 className="mx-auto md:max-w-[70%]">
          Your Trusted Partner in Compliance and Tax Solutions
        </h1>
        <p className="mx-auto md:max-w-[90%]">
          At Venture Consult, we are committed to helping businesses navigate
          the complexities of tax laws and regulatory compliance with precision
          and efficiency. With years of experience and a passion for excellence,
          we are your go-to consultants for compliance certifications and tax
          auditing.
        </p>
      </section>
      <section className="sectionStyle bg-secondaryBg border-b-2 border-black">
        <h1 className="max-w-[80%] text-center mx-auto mb-10 md:mb-16">
          Our Mission and Vision
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <Crosshair color="#000" size={18} />
              <h2> Our Mission</h2>
            </div>
            <p>
              To empower businesses to achieve regulatory compliance
              effortlessly, ensuring seamless operations and long-term success.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <Telescope color="#000" size={18} />
              <h2> Our Vission</h2>
            </div>
            <p>
              To become a leading name in tax consultancy and compliance
              services, fostering trust and delivering unparalleled value to
              businesses across industries.
            </p>
          </div>
        </div>
      </section>
      <section className="sectionStyle bg-secondaryBg">
        <h1 className="max-w-[80%] text-center mx-auto mb-10 md:mb-16">
          Our Expertise
        </h1>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <Sparkle fill="#000" size={14} className="min-w-8" />
            <p>Tax Auditing and Consulting</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkle fill="#000" size={14} className="min-w-8" />
            <p>
              Compliance Certification Services (CAC, FIRS, PENCOM, ITF, NSITF)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkle fill="#000" size={14} className="min-w-8" />
            <p>Regulatory Advisory Services</p>
          </div>
          <div className="flex items-center gap-3">
            <Sparkle fill="#000" size={14} className="min-w-8" />
            <p>Business Process Optimization</p>
          </div>
        </div>
      </section>
      <section className="sectionStyle !pb-0 !px-0 bg-primaryBg text-white text-center">
        <h2 className="text-opacity-90 mb-4">Ready to Work With Us?</h2>
        <h1 className="mx-auto md:max-w-[70%] px-[3%] md:px-[5%]">
          Get in touch today and let&apos;s streamline your compliance journey!
        </h1>
        <button className="my-10 mb-16 px-16 h-[56px] bg-lightBg font-semibold text-black text-content">
          <Link href="/contact">Contact Us</Link>
        </button>
        <Footer />
      </section>
    </main>
  );
};

export default AboutPage;
