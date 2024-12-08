import { ShieldCheck, Text } from "lucide-react";
import React from "react";

const Header1 = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 py-4 px-[3%] md:px-[5%] flex items-center justify-between">
      <div className="flex items-center gap-1">
        <ShieldCheck size={40} color="#fbcb2b" />
        <h6 className="text-xl font-semibold leading-6">
          Venture <br /> Consult
        </h6>
      </div>
      <Text className={``} strokeWidth={1.3} size={32} />
    </nav>
  );
};

export default Header1;
