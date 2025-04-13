import { ArrowUpRight } from "lucide-react";
import starTopLeft from "../assets/marquee/ctaStarRightBottom.svg";
import starBottomRight from "../assets/marquee/ctaStarTopLeft.svg";
import ShimmerButtonDemo from "../components/ShimmerButtonDemo";
import { ShimmerButton } from "./ShimmerButton";

const Cta = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 lg:px-20 text-center font-anybody overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <img
          src={starBottomRight}
          alt="hlell"
          className="md:absolute md:-top-8 md:-left-4 z-10  text-red-500 text-4xl md:text-6xl"
        />

        {/* Gradient Text */}
        <h1 className="relative text-6xl md:text-8xl leading-tight">
          Your Future{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
            Starts
          </span>{" "}
          <br />
          <span className="bg-gradient-to-r from-[#65077B] via-[#A00B67] via-[#C32944] to-[#C6533A] text-transparent bg-clip-text">
            With QUANT5x.
          </span>
          <img
            src={starTopLeft}
            alt="starbottomRight"
            className="absolute -right-2 -bottom-16 md:right-28 md:-bottom-10 text-4xl md:text-6xl"
          />
        </h1>

        {/* Contact Button */}
        {/* <button className="mt-8 px-6 py-3 bg-[#E6E6E6] text-black text-lg rounded-full flex items-center gap-1 mx-auto shadow-md hover:shadow-xl transition-all duration-200 font-giga font-semibold hover:pb-[18px] md:hover:pb-[20px]">
          Contact Us <ArrowUpRight className="mb-1 size-6" />
        </button> */}
        <button className="px-6 py-3 text-lg rounded-full flex items-center gap-1 mx-auto shadow-md hover:shadow-xl transition-all duration-200 font-giga font-semibold ">
          <ShimmerButtonDemo Text={"Contact Us"} />
        </button>
      </div>
    </section>
  );
};

export default Cta;
