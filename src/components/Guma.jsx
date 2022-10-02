import React from "react";

// Images

import gumanucleos from "../images/guma/GumaNucleos.webp";
import leftrock from "../images/guma/leftrock.webp";
import rightrock from "../images/guma/rightrock.webp";
import sea from "../images/guma/sea.webp";
import cloudone from "../images/guma/cloud1.webp";
import landscape from "../images/guma/landscape.webp";
import portrait from "../images/guma/Portrait.webp";
import markcuban from "../images/guma/markcubanpower.webp";

const Guma = () => {
  return (
    <div
      className="flex justify-center items-center
                h-[1200px] w-[100%]
                bg-[url('images/backgrounds/sky.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="hero-content h-[1200px] w-[100%]">
        {/* <div
          className="absolute left-0 bottom-[0%] z-[5] h-[140px] w-[100%]
                        bg-[url('images/character/Lower_border.webp')] bg-cover bg-center bg-no-repeat"
        /> */}
        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div
          className="absolute left-0 bottom-[0%] z-[3] h-[230px] w-[100%]
                        bg-[url('images/guma/Ground.webp')] bg-cover bg-center bg-no-repeat"
        />

        <div className="absolute left-0 bottom-[0%] z-[4]">
          <img
            className="w-[150px] sm:w-[250px] lg:w-[400px] xl:w-[500px]"
            src={leftrock}
            alt="/"
          />
        </div>

        <div className="absolute right-0 bottom-[0] z-[3]">
          <img
            className="w-[150px] sm:w-[250px] lg:w-[400px] xl:w-[500px]"
            src={rightrock}
            alt="/"
          />
        </div>

        <div className="absolute right-0 bottom-[11%] sm:bottom-[8%] lg:bottom-[5%] z-[2]">
          <img src={sea} alt="/" />
        </div>

        <div className="absolute left-[20%] bottom-[0%] z-[10]">
          <img
            src={markcuban}
            className="h-[auto] sm:h-[auto] md:h-[900px]"
            alt="/"
          />
        </div>

        <div className="absolute  top-[11%] sm:top-[8%] lg:top-[5%] z-[2] floating">
          <img src={cloudone} className="w-[1550px]" alt="/" />
        </div>

        {/* <div className="absolute bottom-[8%] left-[12%] z-[3]">
              </div> */}
        <div className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-10 z-[5] pb-[20rem]">
          <div className="order-2 lg:order-1">
            <img
              className="w-[350px] lg:w-[450px] floating"
              src={gumanucleos}
              alt="/"
            />
          </div>

          <img
            className="hidden md:inline-block order-1 lg:order-2 md:w-[500px] xl:w-[700px]"
            src={landscape}
            alt="/"
          />
          <img
            className="inline-block md:hidden order-1 lg:order-2 w-[400px]"
            src={portrait}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Guma;
