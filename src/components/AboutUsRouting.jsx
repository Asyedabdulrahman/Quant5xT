// import React from "react";
// import Header from "./Header";
// import quant5xheadersvg from "../assets/marquee/quant5xSingleLogoHeadersvg.svg";
// import colleagues from "../assets/marquee/AboutUs1College.png";
// import contact1 from "../assets/marquee/ContactFire.png";
// import contact2 from "../assets/marquee/ContactSpiral.png";
// import contact3 from "../assets/marquee/ContactWave.png";
// import star2 from "../assets/marquee/Star 2.png";
// import background from "../assets/marquee/ContactBackgroundBlack.png";

// function AboutUsRouting() {
//   return (
//     <div className="bg-black text-white min-h-screen px-4 py-8 font-giga">
//       <div className="w-[70vw] mx-auto">
//         <Header headersvg={quant5xheadersvg} />

//         {/* Top Section */}
//         <section className="text-center mt-52">
//           <h2 className="text-6xl font-medium mb-4">About Us</h2>
//           <p className="max-w-3xl mx-auto text-xl text-gray-300">
//             We believe innovation isn’t optional—it’s essential. Born from the
//             idea that businesses deserve more than just digital support, we're
//             here to deliver quantum leaps in performance, growth, and
//             transformation.
//           </p>
//           <img
//             src={colleagues}
//             alt="Team"
//             className="mx-auto mt-8 rounded-xl w-full max-w-6xl shadow-xl"
//           />
//         </section>

//         {/* Info Sections */}
//         <section className="relative mt-32 space-y-28">
//           {/* Vertical Connector Line */}
//           <div className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 h-[90%] w-[2px] bg-gray-700 z-0"></div>

//           {/* 1: What We Do */}
//           <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
//             <div className="text-left space-y-4">
//               <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
//                 <img
//                   src={star2}
//                   alt="star"
//                   className="w-4 h-4 object-center relative top-[1px]"
//                 />
//                 <span className="font-giga pt-[6px] leading-none">
//                   What We Do
//                 </span>
//               </p>
//               <p className="text-3xl text-gray-200 leading-relaxed">
//                 We craft smart, scalable, and future-ready solutions that drive
//                 real change. From SaaS product development and conversational AI
//                 to IoT ecosystems and AI automation agents, our work empowers
//                 companies to move faster, smarter, and stronger.
//               </p>
//             </div>
//             <img
//               src={contact1}
//               alt="Abstract 1"
//               className="rounded-xl w-full shadow-lg"
//             />
//           </div>

//           {/* 2: Why We Exist */}
//           <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
//             <img
//               src={contact2}
//               alt="Abstract 2"
//               className="rounded-xl w-full shadow-lg"
//             />
//             <div className="text-left space-y-4">
//               <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
//                 <img
//                   src={star2}
//                   alt="star"
//                   className="w-4 h-4 object-center relative top-[1px]"
//                 />
//                 <span className="font-giga pt-[6px] leading-none">
//                   Why we Exist
//                 </span>
//               </p>
//               <p className="text-3xl text-gray-200 leading-relaxed">
//                 Because the world is moving fast—and we believe our clients
//                 should lead the race, not just keep up. Whether you're a startup
//                 chasing disruption or an enterprise evolving at scale, we’re
//                 here to engineer your leap forward.
//               </p>
//             </div>
//           </div>

//           {/* 3: Our Approach */}
//           <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
//             <div className="text-left space-y-4">
//               <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
//                 <img
//                   src={star2}
//                   alt="star"
//                   className="w-4 h-4 object-center relative top-[1px]"
//                 />
//                 <span className="font-giga pt-[6px] leading-none">
//                   Our Approach
//                 </span>
//               </p>
//               <p className="text-3xl text-gray-200 leading-relaxed">
//                 We combine deep technical expertise with creative thinking.
//                 Every solution we build is tailored, data-driven, and designed
//                 to elevate your business to its next frontier.
//               </p>
//             </div>
//             <img
//               src={contact3}
//               alt="Abstract 3"
//               className="rounded-xl w-full shadow-lg"
//             />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default AboutUsRouting;
import React from "react";
import Header from "./Header";
import quant5xheadersvg from "../assets/marquee/quant5xSingleLogoHeadersvg.svg";
import colleagues from "../assets/marquee/AboutUs1College.png";
import contact1 from "../assets/marquee/ContactFire.png";
import contact2 from "../assets/marquee/ContactSpiral.png";
import contact3 from "../assets/marquee/ContactWave.png";
import star2 from "../assets/marquee/Star 2.png";
import background from "../assets/marquee/contactBlackBackground.png";
import Cta from "./Cta";
import Footer from "./Footer";

function AboutUsRouting() {
  return (
    <div className="bg-black text-white min-h-screen font-giga">
      <div className="w-[70vw] mx-auto">
        <Header headersvg={quant5xheadersvg} logoSize={"h-8"} />

        {/* Top Section */}
        <section className="text-center mt-52">
          <h2 className="text-6xl font-medium mb-4">About Us</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            We believe innovation isn’t optional—it’s essential. Born from the
            idea that businesses deserve more than just digital support, we're
            here to deliver quantum leaps in performance, growth, and
            transformation.
          </p>
          <img
            src={colleagues}
            alt="Team"
            className="mx-auto mt-8 rounded-xl w-full max-w-6xl shadow-xl"
          />
        </section>

        {/* Info Sections */}
        <section className="relative mt-32 space-y-28">
          {/* Vertical Connector Line */}
          <div className="absolute top-[6rem] left-1/2 transform -translate-x-1/2 h-[90%] w-[2px] bg-gray-700 z-0"></div>

          {/* 1: What We Do */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-4">
              <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
                <img
                  src={star2}
                  alt="star"
                  className="w-4 h-4 object-center relative top-[1px]"
                />
                <span className="font-giga pt-[6px] leading-none">
                  What We Do
                </span>
              </p>
              <p className="text-3xl text-gray-200 leading-relaxed">
                We craft smart, scalable, and future-ready solutions that drive
                real change. From SaaS product development and conversational AI
                to IoT ecosystems and AI automation agents, our work empowers
                companies to move faster, smarter, and stronger.
              </p>
            </div>
            <img
              src={contact1}
              alt="Abstract 1"
              className="rounded-xl w-full shadow-lg"
            />
          </div>

          {/* 2: Why We Exist */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <img
              src={contact2}
              alt="Abstract 2"
              className="rounded-xl w-full shadow-lg"
            />
            <div className="text-left space-y-4">
              <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
                <img
                  src={star2}
                  alt="star"
                  className="w-4 h-4 object-center relative top-[1px]"
                />
                <span className="font-giga pt-[6px] leading-none">
                  Why we Exist
                </span>
              </p>
              <p className="text-3xl text-gray-200 leading-relaxed">
                Because the world is moving fast—and we believe our clients
                should lead the race, not just keep up. Whether you're a startup
                chasing disruption or an enterprise evolving at scale, we’re
                here to engineer your leap forward.
              </p>
            </div>
          </div>

          {/* 3: Our Approach */}
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-4">
              <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-6 md:mb-10">
                <img
                  src={star2}
                  alt="star"
                  className="w-4 h-4 object-center relative top-[1px]"
                />
                <span className="font-giga pt-[6px] leading-none">
                  Our Approach
                </span>
              </p>
              <p className="text-3xl text-gray-200 leading-relaxed">
                We combine deep technical expertise with creative thinking.
                Every solution we build is tailored, data-driven, and designed
                to elevate your business to its next frontier.
              </p>
            </div>
            <img
              src={contact3}
              alt="Abstract 3"
              className="rounded-xl w-full shadow-lg"
            />
          </div>
        </section>

        {/* Who We Work With Section */}

        <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen h-screen flex items-center justify-center overflow-hidden mt-40">
          {/* Starfield background effect */}
          <img
            src={background}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover  z-0"
          />

          {/* Main content */}
          <div className="z-10 text-center px-4 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-light mb-6">
              Who We Work With
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              <span className="font-semibold text-white">
                Startups, enterprises
              </span>
              , and everything in between. From{" "}
              <span className="font-semibold text-white">
                retail and healthcare
              </span>{" "}
              to{" "}
              <span className="font-semibold text-white">
                logistics, education, and manufacturing
              </span>{" "}
              — we design solutions for impact.
            </p>
          </div>
        </section>
        <Cta />
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <Footer bgColor={"bg-black"} textColor={"text-white"} />
        </div>
      </div>
    </div>
  );
}

export default AboutUsRouting;
