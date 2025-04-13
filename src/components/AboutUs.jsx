import star2 from "../assets/marquee/Star 2.png";
import aboutUs1 from "../assets/marquee/aboutUs1.jpg";
import aboutUs2 from "../assets/marquee/aboutUs2.jpg";
import aboutUs3 from "../assets/marquee/aboutUs3.jpg";

const AboutUs = () => {
  return (
    <section className="bg-[#252525] text-white py-16 px-6 md:py-20 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl w-[90vw] md:w-[70vw] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 my-8 font-giga">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 object-center relative top-[1px]"
            />
            <span className="font-giga pt-[6px] leading-none">About Us</span>
          </p>

          {/* your vision and paragraph */}
          <h1 className="text-3xl md:text-[2.7rem] font-light leading-tight space-y-8 text-[#FFFFFF] pt-4 md:pt-[40px]">
            Your Vision.
            <br />
            <span>Our Intelligence.</span>
            <br />
            Boundless Possibilities.
          </h1>
          <p className=" md:text-lg font-thin text-[#FFFFFF]/80 mt-4 md:mt-6 leading-relaxed font-giga">
            At *Quant5X*, we turn complexity into clarity. Our AI-driven
            platform analyzes vast data sets, uncovering actionable insights
            that fuel smarter decisions. Whether it’s predicting trends,
            optimizing operations, or discovering new opportunities — we empower
            businesses to stay ahead of the curve
          </p>
          <button className="mt-6 md:mt-10 text-lg md:text-xl px-6 py-2 md:py-3 border border-white rounded-full flex items-center  hover:bg-white hover:text-black transition text-[#E4E4E4]">
            Know More About Us ↗
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-[110px] md:grid md:gap-4 hidden">
          {/* Large Image spanning two columns */}
          <div className="relative rounded-xl h-32 md:h-44 lg:h-[220px] col-span-2 overflow-hidden">
            <img
              src={aboutUs1}
              alt="bento-main"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Smaller Images */}
          <div className="relative rounded-xl md:h-[237px] overflow-hidden">
            <img
              src={aboutUs2}
              alt="bento-small-1"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="relative rounded-xl md:h-[237px] overflow-hidden">
            <img
              src={aboutUs3}
              alt="bento-small-2"
              className="absolute inset-0 w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
