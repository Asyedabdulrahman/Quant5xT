import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import servicesBackground from "../assets/marquee/servicesBackgroundPNG.Png";
import ShimmerButtonDemo from "./ShimmerButtonDemo";
import star2 from "../assets/marquee/Star 2.png";

const Services = () => {
  return (
    <div className=" w-full mx-auto relative  bg-black text-white font-giga">
      {/* header */}
      <Header />

      <div className="w-[90vw] md:w-[70vw] mx-auto">
        <div className="absolute -top-1/3 -left-56 w-[50%] h-[60%] bg-[radial-gradient(white_0%,transparent_70%)] opacity-30 pointer-events-none z-0" />
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[70vh] relative text-center">
          <h1 className="text-6xl font-light tracking-widest z-10">
            FUTURE PROOF
          </h1>
        </section>

        {/* straight break line */}
        <div className="w-full mx-auto h-px bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* Powering the Future */}
        <section className="text-center px-4 py-28 max-w-4xl mx-auto">
          <h2 className="text-6xl font-medium mb-6">Powering the Future</h2>
          <p className="text-2xl text-gray-300 leading-relaxed">
            Quant5X drives digital transformation. We offer{" "}
            <span className="text-white font-semibold">
              innovative solutions
            </span>
            .
            <br />
            Our intelligence creates{" "}
            <span className="text-white font-semibold">impactful results</span>.
            <br />
            We're excited to build the{" "}
            <span className="text-white font-semibold">future with you!</span>
          </p>
        </section>

        {/* single line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* SaaS Product Development */}
        <section className="px-8 py-24">
          <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-4 md:mb-6">
            <img
              src={star2}
              alt="star"
              className="w-6 h-6 object-center relative top-[1px]"
            />
            <span className="font-giga pt-[6px] leading-none">
              SAAS PRODUCT DEVELOPMENT
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 z-0"></div>

            {/* Card 1 */}
            <div className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md">
              <div className="h-32 bg-gray-600 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold">Agile Approach</h3>
              <p className="text-gray-400 text-sm mt-1">
                Rapid iteration,
                <br />
                Quick delivery
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md">
              <div className="h-32 bg-gray-600 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold">Scalable Architecture</h3>
              <p className="text-gray-400 text-sm mt-1">
                Handles growing demands.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md">
              <div className="h-32 bg-gray-600 mb-4 rounded-md"></div>
              <h3 className="text-xl font-semibold">Custom Solutions</h3>
              <p className="text-gray-400 text-sm mt-1">
                Designed for your needs.
              </p>
            </div>
          </div>
        </section>

        <div className="w-full mx-auto h-[0.2px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* AI Solutions Placeholder */}
        <section className="relative px-8 py-36">
          <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-4 md:mb-6">
            <img
              src={star2}
              alt="star"
              className="w-6 h-6 object-center relative top-[1px]"
            />
            <span className="font-giga pt-[6px] leading-none">
              AI Solutions
            </span>
          </p>

          {/* Add AI Solutions content below here */}
          {/* AI Solutions */}
          <section className="relative px-8">
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 z-0" />

              {[
                {
                  title: "AI Solutions",
                  desc: "Intelligent systems. Smarter every second.",
                },
                {
                  title: "Data-Driven Insights",
                  desc: "Factual first. Smarter business moves.",
                },
                {
                  title: "Smart Algorithms",
                  desc: "Clever code. Real-time decisions.",
                },
                {
                  title: "Faster Processing",
                  desc: "Speed meets performance. No delays.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md"
                >
                  <div className="h-32 bg-gray-600 mb-4 rounded-md" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </section>

        <div className="w-full mx-auto h-[0.2px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* Conversational AI */}
        <section className="relative px-8 py-24">
          <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-4 md:mb-6">
            <img
              src={star2}
              alt="star"
              className="w-6 h-6 object-center relative top-[1px]"
            />
            <span className="font-giga pt-[6px] leading-none">
              Conversational AI
            </span>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 z-0" />

            {[
              {
                title: "Multilingual",
                desc: "Global reach with native support.",
              },
              {
                title: "Retail Focused",
                desc: "Enhance customer experience.",
              },
              {
                title: "Enterprise Ready",
                desc: "Scalable for large organizations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md"
              >
                <div className="h-32 bg-gray-600 mb-4 rounded-md" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full mx-auto h-[0.2px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* AI Agent Automation */}
        <section className="relative px-8 py-24">
          <p className="inline-flex items-center gap-2 bg-[#3D3D3D] text-white rounded-full px-6 py-2 w-fit mb-4 md:mb-6">
            <img
              src={star2}
              alt="star"
              className="w-6 h-6 object-center relative top-[1px]"
            />
            <span className="font-giga pt-[6px] leading-none">
              AI Agent Automation
            </span>
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-700 z-0" />

            {[
              {
                title: "Task Automation",
                desc: "Automate repetitive tasks with ease.",
              },
              {
                title: "Reduced Costs",
                desc: "Streamline operations.",
              },
              {
                title: "Improved Efficiency",
                desc: "Smarter, leaner workflows.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#1E1E1E] z-10 p-6 rounded-lg w-64 text-center shadow-md"
              >
                <div className="h-32 bg-gray-600 mb-4 rounded-md" />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full mx-auto h-[0.2px] bg-gradient-to-r from-white/5 via-white to-white/5"></div>

        {/* last image section */}
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <img
            src={servicesBackground}
            alt="servicesBackground"
            className="w-full object-cover h-[60vh]" // Adjust height as needed
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto z-10">
            <h1 className="text-4xl sm:text-6xl font-light mb-6">
              Build for <span className="font-bold">Startups</span>
            </h1>
            <p className="text-lg sm:text-2xl text-gray-300 leading-relaxed">
              Experience faster outcomes through{" "}
              <span className="font-semibold text-white">
                efficient, adaptive, <br />
              </span>
              and <span className="font-semibold text-white">data-driven</span>{" "}
              smart solutions.{" "}
            </p>

            <ShimmerButtonDemo Text={"Contact Us"} />
          </div>
        </div>
      </div>
      <Footer bgColor={"black"} textColor={"white"} />
    </div>
  );
};

export default Services;
