import { ShieldCheck } from "lucide-react";
import { SideNav } from "./SideNav";

const Header1 = () => {
  return (
    <nav className="fixed text-white top-0 right-0 left-0 py-4 px-[3%] md:px-[5%] flex items-center justify-between">
      <div className="flex items-center gap-1">
        <ShieldCheck size={40} color="#fbcb2b" />
        <h6 className="text-xl font-semibold leading-6">
          Venture <br /> Consult
        </h6>
      </div>
      <SideNav />
    </nav>
  );
};

export default Header1;
