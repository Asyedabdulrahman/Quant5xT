// import star2 from "../assets/marquee/star 2.png";
import star2 from "../assets/marquee/star2svg.svg";
import bentoGrid from "../assets/marquee/bentoGrid1.jpg";
import bentoGrid2 from "../assets/marquee/bentoGrid2.jpg";
import bentoGrid3 from "../assets/marquee/bentoGrid3.jpg";
import bentoGrid4 from "../assets/marquee/bentoGrid4.jpg";
import bentoGrid5 from "../assets/marquee/bentoGrid5.jpg";
// hover bento image are below
import bentoGridhover1 from "../assets/marquee/bentoGridhover1.jpg";
import bentoGridhover2 from "../assets/marquee/bentoGridhover2.jpg";
import bentoGridhover3 from "../assets/marquee/bentoGridhover3.jpg";
import bentoGridhover4 from "../assets/marquee/bentoGridhover4.jpg";
import bentoGridhover5 from "../assets/marquee/bentoGridhover5.jpg";

const ServiceSection = () => {
  return (
    <div className="w-[90vw] md:w-[80vw] mx-auto p-6 md:p-10 font-giga my-16 md:my-20 overflow-hidden">
      {/* Section Header */}
      {/* <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-8 md:mb-10">
        <img src={star2} alt="star" className="w-4 h-4 object-contain" />
        <span>Our Services</span>
      </p> */}

      <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-8 md:mb-10">
        <img
          src={star2}
          alt="star"
          className="w-4 h-4 object-center relative top-[1px]"
        />
        <span className="font-giga pt-[6px] leading-none">Our Services</span>
      </p>

      {/* Top Row: Large & Small Cards */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Large Main Card */}
        <div className="relative w-full md:w-3/5 h-60 overflow-hidden rounded-2xl group">
          {/* Initial Image */}
          <img
            src={bentoGrid}
            alt="bentoGrid"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          {/* Hover Image */}
          <img
            src={bentoGridhover1}
            alt="hoverGrid"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />

          {/* Text Container */}
          <div className="absolute left-4 bottom-0 text-white transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:items-center group-hover:w-[80%] md:w-[60%]">
            {/* Title */}
            <p className="font-giga group-hover:text-2xl mt-8 md:mt-10 pb-4 group-hover:pb-0 ">
              AI-Powered Analytics
            </p>
            {/* Subtitle (Appears on Hover) */}
            <span className="absolute block opacity-0 text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-100 w-full">
              Uncover trends, predict outcomes, and drive growth with real-time
              data analysis.
            </span>
          </div>
        </div>

        {/* Small Card (Occupies Remaining Space) */}
        <div className="relative w-full md:w-2/5 h-60 overflow-hidden rounded-2xl group">
          {/* Initial Image */}
          <img
            src={bentoGrid2}
            alt="bentoGrid2"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
          />
          {/* Hover Image */}
          <img
            src={bentoGridhover2}
            alt="hoverGrid"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
          />

          {/* Text Container */}
          <div className="absolute left-4 bottom-0 text-white transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:items-center group-hover:w-[80%] md:w-[60%]">
            {/* Title */}
            <p className="font-giga group-hover:text-lg md:group-hover:text-2xl pb-4 group-hover:pb-0 mt-8 md:mt-10  ">
              Data Management & Integration
            </p>
            {/* Subtitle (Appears on Hover) */}
            <span className="absolute block opacity-0 text-sm transition-opacity duration-500 mb-10 md:mb-0 ease-in-out group-hover:opacity-100 w-full">
              Streamline and unify your data across platforms for seamless
              integration and insights.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Three Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 relative">
        {[
          {
            text: "Custom AI Solutions",
            img: bentoGrid3,
            hoverImg: bentoGridhover3,
          },
          {
            text: "Predictive Intelligence",
            img: bentoGrid4,
            hoverImg: bentoGridhover4,
          },
          {
            text: "AI Consulting & Strategy",
            img: bentoGrid5,
            hoverImg: bentoGridhover5,
          },
        ].map((service, index) => (
          <div
            key={index}
            className="relative w-full h-60 overflow-hidden rounded-2xl group"
          >
            {/* Initial Image */}
            <img
              src={service.img}
              alt={`service-${index}`}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
            />
            {/* Hover Image */}
            <img
              src={service.hoverImg}
              alt={`hover-service-${index}`}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
            />

            {/* Text Container */}
            <div className="absolute left-4 bottom-0 text-white transition-all duration-500 ease-in-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:items-center group-hover:w-[80%]">
              {/* Title */}
              <p className="font-giga group-hover:text-2xl pb-4 group-hover:pb-0 mt-8 md:mt-10 ">
                {service.text}
              </p>
              {/* Subtitle (Appears on Hover) */}
              <span className="absolute block opacity-0 text-sm transition-opacity duration-500 ease-in-out group-hover:opacity-100 w-full">
                Enhance your business with cutting-edge AI technology.
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
