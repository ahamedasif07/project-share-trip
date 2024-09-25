import React from "react";
import Wellcome from "../Wellcome/Wellcome";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div className="relative">
          <div>
            <video
              src="/video/home-baner-video.mp4"
              autoPlay
              className="h-[500px] w-full object-cover" // Set height to 400px, width to full, and maintain aspect ratio
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="max-w-screen-xl absolute bottom-[230px] left-10">
            <h2 className=" mx-auto md:text-5xl text-4xl  font-bold text-white">
              Welcome to ShareTrip!
            </h2>
            <p className="text-white font-semibold text-[16px] md:text-[22px] mt-3">
              Find Flights, Hotels, Visa & Holidays
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
