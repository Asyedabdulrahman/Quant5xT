import { useEffect, useState } from "react";
// import quant5xheadersvg from "./assets/marquee/quant5xSingleLogoHeadersvg.svg";
import quant5xheadersvg from "../assets/marquee/quant5xSingleLogoHeadersvg.svg";

const Header = ({ headersvg, textColor, logoSize }) => {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ["Insights", "Information", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div className="flex w-[90vw] md:w-[70vw] mx-auto relative z-200000">
      <header className="absolute top-6 md:top-[33px]">
        <img
          src={headersvg ? headersvg : quant5xheadersvg}
          alt="quantSingleHeaderLogo"
          className={`w-32 md:w-auto ${logoSize ? logoSize : ""} `}
        />
      </header>

      {/* Menu Button (Mobile) */}
      <button
        className="absolute text-white top-5 right-4 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <nav
        className={`fixed top-0 left-0 w-full h-full md:top-8 md:right-8 md:w-auto md:h-auto md:absolute md:flex md:items-center md:space-x-8 text-lg text-[#BBBBBB] font-giga flex-col md:flex-row ${
          menuOpen
            ? "flex bg-black bg-opacity-50 backdrop-blur-md"
            : "hidden md:flex"
        }`}
        style={{ zIndex: 50 }}
      >
        {menuOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-0">
            {/* Close button added here, zIndex is important here */}
            <button
              className="absolute text-white text-3xl top-5 right-5 z-50"
              onClick={() => setMenuOpen(false)}
            >
              &times; {/* HTML entity for 'X' */}
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <div className="relative z-10 w-full h-full md:top-[5px] flex flex-col md:flex-row md:items-center md:justify-end md:space-x-8 mt-1 justify-center items-center">
          {[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "Services",
              link: "/",
            },
            {
              name: "About Us",
              link: "/aboutus",
            },
            {
              name: "Contact Us",
              link: "/contactus",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className={`block md:inline-flex hover:text-black my-4 md:my-0 ${textColor}`}
              onClick={handleLinkClick}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;
