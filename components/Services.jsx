import { services } from "@/lib/constants";
import { Sparkle } from "lucide-react";
import Image from "next/image";

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

      {/* Services Grid */}
      <div className="grid pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg p-6 flex border border-black flex-col items-center text-center space-y-4"
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
