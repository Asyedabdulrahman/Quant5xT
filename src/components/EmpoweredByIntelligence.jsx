import React from "react";
import image1 from "../assets/marquee/image1.svg";
import image2 from "../assets/marquee/image2.png";
import image3 from "../assets/marquee/image3.png";
import image4 from "../assets/marquee/image4.png";
import image5 from "../assets/marquee/image5.png";
import image6 from "../assets/marquee/image6.png";
import image7 from "../assets/marquee/image7.png";
import DhirajAgro from "../assets/marquee/DhirqajAgro.png";
import DyPoultry from "../assets/marquee/DyPoultry.jpg";
import Poultry2 from "../assets/marquee/Poultry2.png";
import iSpeedMotor from "../assets/marquee/iSpeedMotor.png";
import Rasaa from "../assets/marquee/testimonialMarquee.jpg";
import ssrPower from "../assets/marquee/ssrPower.png";
import ssrPowerRounded from "../assets/marquee/ssrRounded.png";
import star from "../assets/marquee/star.png";
import dnaImage from "../assets/marquee/dnaImage.png";
import rassa2 from "../assets/marquee/rassa2.png";

const EmpoweredByIntelligence = () => {
  return (
    <div className="bg-white py-20 overflow-hidden px-4">
      {/* main context */}
      <div className="w-full flex flex-col justify-start items-center gap-6 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <span className="text-[#454545] text-[32px] md:text-[74px] font-anybody font-normal tracking-[1.5px] whitespace-nowrap">
            Empowered by
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A00B67] via-[#C32944] via-[#C6533A] to-[#C99728] text-[32px] md:text-[72px] font-anybody font-normal tracking-[1.5px] whitespace-nowrap">
            Intelligence
          </span>
        </div>
        <p className="w-full md:w-[55vw] text-black text-[18px] md:text-[28px] font-light leading-[28px] md:leading-[38px] font-giga">
          At Quant5X, we partner with visionaries to transform data into
          innovation, unlocking new frontiers of growth.
        </p>
      </div>
      {/* Logos */}
      {/* <div className="flex flex-wrap justify-center items-center gap-6 w-full pt-12">
        {[
          rassa2,
          DhirajAgro,
          Poultry2,
          iSpeedMotor,
          ssrPower,
          image6,
          image7,
        ].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Logo ${index + 1}`}
            className="w-28 h-16 object-contain grayscale "
          />
        ))}
      </div> */}
      <div className="flex flex-wrap justify-center items-center gap-6 w-full pt-12">
        {/* Configuration array for your logos */}
        {[
          {
            src: rassa2,
            targetWidth: "w-20 md:w-28 ",
            targetHeight: "h-20 md:h-28",
          },
          {
            src: DhirajAgro,
            targetWidth: "w-20 w-28",
            targetHeight: "h-12 md:h-16",
          },
          {
            src: Poultry2,
            targetWidth: "w-20  w-28",
            targetHeight: "h-12 h-16",
          },
          {
            src: iSpeedMotor,
            targetWidth: "w-20  w-28",
            targetHeight: "h-12 h-16",
          },
          {
            src: ssrPowerRounded,
            targetWidth: "w-20  w-28",
            targetHeight: "h-12 h-16",
          },
        ].map((logo, index) => (
          <div
            key={index}
            className={`${logo.targetWidth} ${logo.targetHeight}`}
          >
            <img
              src={logo.src}
              alt={`Logo ${index + 1}`}
              className="object-contain grayscale"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
      <div className="border-b-2 border-black/10 w-3/4 mx-auto flex my-24" />

      {/* Our DNA */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6 w-full md:w-[70vw] mx-auto">
        <div className="flex justify-center w-full md:w-[50%]">
          <img
            src={dnaImage}
            alt="dna image"
            className="object-contain max-w-[300px] md:max-w-[500px]"
          />
        </div>
        <div className="flex flex-col max-w-[813px] items-center md:items-start gap-6 text-center md:text-left">
          <h2 className=" text-[#191919] text-[28px] md:text-6xl font-giga">
            Our DNA
          </h2>
          <p className="text-[#191919] font-giga text-[16px] md:text-[23px] leading-[24px] md:leading-[32px]">
            At Quant5X, we go beyond algorithms. Every insight we deliver has a
            purpose turning data into impact, innovation into progress.
          </p>

          <div className="flex flex-col gap-6 mx-auto md:mx-0">
            {[
              "Rooted in Integrity",
              "Driven by Innovation",
              "Empowered by Intelligence",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 md:justify-start"
              >
                <img className="w-6 h-6" alt="Star" src={star} />
                <p className="text-black text-[20px] md:text-[37px] font-light leading-[28px] md:leading-[37px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpoweredByIntelligence;
