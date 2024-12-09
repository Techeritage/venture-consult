import { myContact } from "@/lib/constants";
import { Sparkle } from "lucide-react";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section className="sectionStyle text-white bg-primaryBg !pb-0 !px-0">
      <div className="px-[3%] md:px-[5%]">
        <div className="flex items-center gap-3">
          <Sparkle fill="#fbcb2b" color="#fbcb2b" size={18} />
          <h2>CONTACT</h2>
        </div>
        <h1 className="max-w-[80%] mt-4">Get in touch</h1>
        <p className="mt-4 max-w-[80%] md:max-w-[50%] text-opacity-90">
          Reach out to us through the following channels. We&apos;re here to
          assist you with any inquiries:
        </p>
        <div className="pl-3 mt-8 grid gap-5 pb-20">
          {myContact.map((cont) => (
            <a
              href={cont.link}
              key={cont.title}
              className="flex items-center gap-4 font-semibold w-fit"
            >
              <span>{cont.icon}</span>
              <span>{cont.title}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="py-5 text-xs px-[3%] md:px-[5%] md:text-sm border-t font-light flex items-center justify-end">
        Venture Consult &copy; {year} | Created by{" "}
        <a href="tel:+2349136860915" className="text-lightBg pl-1">
          Techeritage
        </a>
      </div>
    </section>
  );
};

export default Contact;
