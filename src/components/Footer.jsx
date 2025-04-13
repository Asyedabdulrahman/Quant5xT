import React from "react";
import quant1 from "../assets/marquee/quant5xSVG.svg";
import linkedIn2 from "../assets/marquee/linkedin2PNG.png";
import instagram from "../assets/marquee/instagramPNG.png";
import x from "../assets/marquee/xPNG.png";

const Footer = ({ bgColor, textColor }) => {
  return (
    <div
      className={`px-4 py-8 overflow-hidden  ${bgColor ? bgColor : "bg-white"}`}
    >
      <div
        className={`max-w-4xl mx-auto font-giga  ${
          textColor ? textColor : "text-[#1A1A1A]"
        }`}
      >
        {/* Logo Section */}
        <div className="flex sm:justify-start justify-center mb-8">
          <h1 className="my-6 sm:my-10">
            <img src={quant1} alt="Quant5X Logo" />
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row sm:justify-between text-lg gap-6 sm:gap-0 mb-8">
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <a href="#" className="hover:text-gray-800">
              Home
            </a>
            <a href="#" className="hover:text-gray-800">
              Services
            </a>
            <a href="#" className="hover:text-gray-800">
              About Us
            </a>
            <a href="#" className="hover:text-gray-800">
              Contact Us
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-2">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms & Conditions
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <span className="font-semibold">Follow Us On</span>
            <div className="flex space-x-4">
              <a
                href="https://x.com/quant5x"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={x} alt="X (Twitter)" className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/quant5x/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/quant5x/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn2} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <hr className="border-t border-[#1A1A1A] my-10 sm:my-16" /> */}

        <div className="border-b-2 border-black/10 mx-auto flex my-24" />

        {/* Footer Information */}
        <div className="flex flex-col sm:flex-row sm:justify-between text-center sm:text-left gap-6">
          <div className="flex flex-col space-y-2">
            <a href="mailto:info@quant5x.com" className="hover:text-gray-800">
              Info@Quant5x.Com
            </a>
            <p>U.A.E | Europe | India</p>
          </div>
          <div>© 2025 Quant5X. All Rights Reserved.</div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center sm:justify-end mt-10">
          <button
            className="w-12 h-12 text-xl text-white rounded-full bg-neutral-800 flex items-center justify-center"
            aria-label="Scroll to Top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
