import React from "react";
import gumanucleos from "../images/guma/GumaNucleos.webp";
import leftrock from "../images/guma/leftrock.webp";
import rightrock from "../images/guma/rightrock.webp";
import sea from "../images/guma/sea.webp";
const Guma = () => {
  return (
    <div
      className="flex justify-center items-center
                py-12 h-[120vh] w-[100%]
                bg-[url('images/backgrounds/sky.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="hero-content h-[120vh] w-[100%]">
        <div
          className="absolute left-0 bottom-[0%] z-[5] h-[140px] w-[100%]
                        bg-[url('images/character/Lower_border.webp')] bg-cover bg-center bg-no-repeat"
        />

        <div
          className="absolute left-0 bottom-[0%] z-[3] h-[20vh] w-[100%]
                        bg-[url('images/guma/Ground.webp')] bg-cover bg-center bg-no-repeat"
        />

        <div className="absolute left-0 bottom-[6%] sm:bottom-[5%] z-[3]">
          <img className="w-[150px] sm:w-[250px] lg:w-[400px] xl:w-[500px]" src={leftrock} alt="/" />
        </div>

        <div className="absolute right-0 bottom-[6%] sm:bottom-[5%] z-[3]">
          <img className="w-[150px] sm:w-[250px] lg:w-[400px] xl:w-[500px]" src={rightrock} alt="/" />
        </div>

        <div className="absolute right-0 bottom-[11%] sm:bottom-[8%] lg:bottom-[5%] z-[2]">
          <img src={sea} alt="/" />
        </div>

        {/* <div className="absolute bottom-[8%] left-[12%] z-[3]">
          <img className="w-[150px] sm:w-[100px]" src={gumanucleos} alt="/" />
        </div> */}
        <div></div>
      </div>
    </div>
  );
};

export default Guma;
