import { ShimmerButton } from "../components/ShimmerButton";
import arrow from "../assets/marquee/arrow-up-right.svg";
import { useNavigate } from "react-router-dom";

export default function ShimmerButtonDemo({ Text }) {
  const navigate = useNavigate();

  return (
    <div className="md:mt-10 mt-7">
      <ShimmerButton
        className="shadow-md"
        shimmerDuration="3s"
        borderRadius="100px"
        background="#ffffff"
        onClick={() => navigate("/contactus")} //navigate on click
      >
        <span className="inline-flex items-center gap-2 text-center font-giga leading-none tracking-tight text-black lg:text-lg">
          {Text}
          <img
            src={arrow}
            alt="Right arrow icon"
            className="h-6 w-6 mb-1"
            loading="lazy"
          />
        </span>
      </ShimmerButton>
    </div>
  );
}
