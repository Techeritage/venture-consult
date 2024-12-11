const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-5 text-xs px-[3%] md:px-[5%] md:text-sm border-t font-light flex items-center justify-center md:justify-end">
      Venture Consult &copy; {year} | Created by{" "}
      <a href="tel:+2349136860915" className="text-lightBg pl-1">
        Techeritage
      </a>
    </div>
  );
};

export default Footer;
