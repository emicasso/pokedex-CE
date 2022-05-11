import React from "react";
import LogoHero from "./Logo.png";

export default function LandingHero() {
  return (
    <div className="relative sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-end justify-end overflow-hidden bg-no-repeat bg-cover ">
      <div className="absolute opacity-25 inset-0 z-0" />
      <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-end  ">
        <div className=" font-bold  mb-6 mx-auto w-full content-center items-end ">
          <img src={LogoHero} alt="pikachu" />
        </div>
      </div>
    </div>
  );
}
