import React, { useEffect, useRef } from "react";

// Images

import title from "../images/ecosystem/ecosystem.webp";
import guma from "../images/ecosystem/Guma.webp";

//

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Ecosystem = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textData = [
    "The Guma is a mystical, magical fruit in the Crypto Islands that also acts as the game’s native token, $GUMA. It is a source of sustenance and magic as it helps power and heal players, along with unlocking special abilities and enhancing effectiveness.",
  ];

  const fadeIn = (element) => {
    gsap.from(element, {
      scale: 0.5,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-70% center",
        markers: false,
      },
      scale: 1,
      duration: 2,
      ease: "elastic",
    });
  };

  useEffect(() => {
    fadeIn(".guma");
  }, []);

  return (
    <div
      className="flex justify-center items-center pb-[30vh] lg:pb-0 bg-[url('images/backgrounds/bg-ecosystem.webp')] h-[170vh] 
      sm:h-[120vh] lg:h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat"
      id="ecosystem-section"
    >
      <div className="w-full max-w-[1140px] h-[100%] flex flex-col justify-center items-center">
        <div className="w-[200px]">
          <img src={title} alt="/" />
        </div>

        <div className="w-full flex flex-wrap justify-center py-[30px] lg:flex-nowrap lg:justify-start lg:py-[20px]">
          {textData.map((text) => {
            return (
              <>
                <div
                  key={text}
                  className="bg-[url('images/ecosystem/mv-ecosystem-placeholder.webp')] sm:bg-[url('images/ecosystem/placeholder-ecosystem.webp')] select-none bg-center bg-contain bg-no-repeat flex justify-center items-center text-center w-[500px] sm:w-[800px] h-[100%] lg:w-[800px]"
                >
                  <h1 className="font-[geliofasolada] text-xl lg:text-xl uppercase text-[#633922] tracking-wider mx-[50px] sm:mx-[60px] md:mx-[90px]">
                    {text}
                  </h1>
                </div>
                <div className="guma">
                  <img
                    className="h-[100%] w-[250px] pt:[20px] lg:relative lg:top-[10vh] lg:left-[-10vh] lg:w-[450px]"
                    src={guma}
                    alt="/"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
