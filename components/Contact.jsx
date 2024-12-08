import { Sparkle } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <section className="sectionStyle text-white bg-primaryBg2">
      <div className="flex items-center gap-3">
        <Sparkle fill="#fbcb2b" color="#fbcb2b" size={18} />
        <h2>CONTACT</h2>
      </div>
      <h1 className="max-w-[80%] mt-4">Get in touch</h1>
    </section>
  );
};

export default Contact;
