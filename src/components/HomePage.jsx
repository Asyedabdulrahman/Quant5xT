import { useState, useEffect } from "react";
import EmpoweredByIntelligence from "./EmpoweredByIntelligence";
import AboutUs from "./AboutUs";
import ServiceSection from "./ServiceSection";
import Cta from "./Cta";
import Footer from "./Footer";
import Header from "./Header";
import ShimmerButtonDemo from "./ShimmerButtonDemo";
import grain2 from "../assets/marquee/grain3.jpg";
import quant5xheadersvg from "../assets/marquee/quant5xSingleLogoHeadersvg.svg";
// import oneTry from "../assets/marquee/oneTry.webm";
// import lottie from "../assets/marquee/lottieFileAi.webm";
// import lottie2 from "../assets/marquee/animationAI.webm";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import arrow from "./assets/marquee/arrow-up-right.svg";
// import quant5xjpeg from "./assets/marquee/quant5XPJEG.jpg";
// import quant5xpng from "./assets/marquee/quant5xpng.png";
// import grain2 from "./assets/marquee/grainImage.jpg";
// import "../src/index.css";

function HomePage() {
  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ["Insights", "Information", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 flex justify-end md:justify-end w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`absolute right-8 bottom-20 md:right-20 md:top-[20vh] object-cover z-[10] w-[80vw] md:w-[30vw] h-[30vh] md:h-[50vh] ${
              menuOpen ? "hidden" : ""
            } `}
            style={{ transform: "rotate(18.5deg" }}
          >
            {/* <source src={heronew} type="video/webm" /> */}
            {/* <source src={lottie} type="video/webm" /> */}
          </video>
        </div>

        {/* 🔥 Grain Image Overlay */}
        <div className="absolute inset-0 z-[11] pointer-events-none opacity-25 mix-blend-soft-light">
          <img
            src={grain2} // 👈 use your path here
            alt="grain"
            className="w-full h-full object-fill"
          />
        </div>

        {/* Floating Elements */}
        <div className="floating-circle"></div>
        {/* <div className="purple-radial"></div> */}
        <div className="noise"></div>

        {/* Content */}
        <div className="relative z-0 min-h-screen px-4 md:px-20 overflow-auto text-white bg-gradient-to-tr from-purpleDark to-roseWarm">
          {/* Header Navbar */}
          <Header headersvg={quant5xheadersvg} />

          {/* Hero Section */}
          <div
            className={`absolute top-[20vh] md:top-1/4 mt-4 w-[90vw] md:w-[70vw] mx-auto left-0 right-0 md:text-left z-20 ${
              menuOpen ? "hidden" : ""
            }`}
          >
            <h1 className="text-2xl md:text-[4.2vw] md:leading-[90px] leading-tight font-anybody bg-gradient-to-r from-[#BD8CB4] to-[#B08083] bg-clip-text">
              Ignite your{" "}
              <span className="relative inline-block">
                <span
                  key={words[index]}
                  className={`animate-simpleFade ${menuOpen ? "hidden" : ""}`}
                  style={{
                    animationDuration: "2s",
                    animationTimingFunction: "ease-in-out",
                  }}
                >
                  {words[index]}
                </span>
              </span>
              <br /> into Decisions with{" "}
            </h1>

            <p
              className={`font-bold text-3xl md:text-7xl font-anybody  bg-gradient-to-r from-[#A500A5] to-[#FE4451] bg-clip-text mt-2 text-transparent ${
                menuOpen ? "hidden" : ""
              }`}
            >
              Quant5X
            </p>
            <p
              className={`mt-4 md:mt-6 text-[min(4vw,20px)] md:text-[min(1.7vw,28px)] text-[#939393] font-giga leading-tight  ${
                menuOpen ? "hidden" : ""
              }`}
            >
              <span className="whitespace-nowrap">
                Empower Your Business. Predict The Future.
              </span>
              <br className="pt-2" />
              Act With Confidence.
            </p>

            {/* button */}
            <ShimmerButtonDemo Text={"Explore Solutions"} />
          </div>
        </div>
      </div>

      {/* Sections */}
      <EmpoweredByIntelligence />
      <AboutUs />
      <ServiceSection />
      <Cta />
      <Footer />
    </>
  );
}

export default HomePage;
