import Footer from "./Footer";
import Header from "./Header";
import insta from "../assets/marquee/instaContact.svg";
import fb from "../assets/marquee/fbContact.svg";
import x from "../assets/marquee/xContact.svg";
import linkedin from "../assets/marquee/linkedContact.svg";
import medium from "../assets/marquee/mediumContact.svg";
import quantsvg from "../assets/marquee/quant5xSingleLogoHeadersvg.svg";

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen text-black pb-10">
      <Header headersvg={quantsvg} textColor="text-black" />
      <div className="w-full px-4 md:px-20 mt-36 font-giga">
        <div className="md:w-[65vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-36 items-start">
          {/* Left Section - Contact Info */}
          <div className="bg-black text-white rounded-3xl p-8 space-y-6 mt-10 justify-center items-center shadow-2xl">
            <h2 className="text-3xl ">Get in Touch</h2>
            <div className="gap-1 flex flex-col">
              <h3 className="font-bold">Visit us</h3>
              <p className="text-sm opacity-80">
                123 Innovation Drive, Tech City, India*
              </p>
            </div>

            <div className="gap-1 flex flex-col">
              <h3 className="font-semibold">Chat with us</h3>
              <p className="text-sm opacity-80">Contact@Quant5x.Com</p>
            </div>

            <div className="gap-1 flex flex-col">
              <h3 className="font-semibold">Call us</h3>
              <p className="text-sm opacity-80">+91 98765 43210</p>
              <p className="text-sm opacity-60">
                Monday to Friday, 9 AM – 7 PM
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Follow Us On</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/quant5x/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <img src={fb} alt="insta" />
                </a>
                <a
                  href="https://x.com/quant5x"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <img src={x} alt="insta" />
                </a>
                <a
                  href="https://www.instagram.com/quant5x/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <img src={insta} alt="insta" />
                </a>
                <a
                  href="https://www.linkedin.com/company/quant5x/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <img src={linkedin} alt="insta" />
                </a>{" "}
                <a
                  href="https://www.instagram.com/quant5x/"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <img src={medium} alt="insta" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <form className="space-y-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-700">First Name</label>
                <input
                  type="text"
                  className="border border-black/40 px-4 py-2 rounded-xl outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1 text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="border border-black/40 px-4 py-2 rounded-xl outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">
                Organisation Name
              </label>
              <input
                type="text"
                className="border border-black/40 px-4 py-2 rounded-xl outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Email Id</label>
              <input
                type="text"
                className="border border-black/40 px-4 py-2 rounded-xl outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Phone No</label>
              <input
                type="text"
                className="border border-black/40 px-4 py-2 rounded-xl outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 text-gray-700">Message</label>
              <textarea
                rows="4"
                className="inputStyle w-full border border-black/40 rounded-xl"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
