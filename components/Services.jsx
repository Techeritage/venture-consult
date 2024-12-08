import { Sparkle } from "lucide-react";

const Services = () => {
  return (
    <section className="sectionStyle border-t-2 border-black bg-secondaryBg !text-black space-y-4">
      <div className="flex items-center gap-3">
        <Sparkle fill="#000" size={18} />
        <h2>OUR SERVICES</h2>
      </div>
      <h1 className="max-w-[80%]">
        We help you meet your compliance goals with ease
      </h1>
    </section>
  );
};

export default Services;
