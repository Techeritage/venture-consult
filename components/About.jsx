import { Sparkle } from "lucide-react";

const About = () => {
  return (
    <section className="sectionStyle bg-secondaryBg !text-black space-y-4">
      <div className="flex items-center gap-3">
        <Sparkle fill="#000" size={18} />
        <h2>ABOUT</h2>
      </div>
      <h1 className="max-w-[80%]">
        Your Trusted Partner in Compliance & Tax Solutions
      </h1>
      <p>
        Welcome to Venture Consult, a leading agency specializing in tax
        consultancy and compliance certification services. We are dedicated to
        helping businesses stay compliant, meet their regulatory obligations,
        and ensure their operations run smoothly in today's dynamic economic
        landscape. At Venture Consult, we provide tailored support to help
        businesses across industries navigate the complexities of tax laws and
        compliance requirements. From obtaining essential compliance
        certificates to ensuring seamless tax auditing processes, we are here to
        streamline your journey and deliver expert guidance. Our experienced
        professionals combine deep industry knowledge with a commitment to
        excellence, ensuring that your business's financial operations are in
        trusted hands.
      </p>
    </section>
  );
};

export default About;
