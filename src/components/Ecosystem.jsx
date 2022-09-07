import React, { useRef } from "react";
import title from "../images/ecosystem/ecosystem.webp";
import guma from "../images/ecosystem/Guma.png";
import { useIntersection } from "react-use";
import { gsap } from "gsap";

const Ecosystem = () => {
  const textData = [
    "Playing isn't the only thing that turns you profits in CryptoIslands, you can also stake and lease lands!",
  ];

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  const fadeIn = (element) => {
    gsap.from(element, {
      scale: 0.2,
    });
    gsap.to(element, {
      scale: 1,
      duration: 2,
      ease: "elastic",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    // gsap.to(element, {
    //   opacity: 0,
    //   duration: 1,
    //   y: 0,
    //   ease: "power4.out",
    // });
  };

  intersection && intersection.intersectionRatio < 0.5
  ? // Not reached
    fadeOut("")
  : 
  fadeIn(".guma")
  

  return (
    <div className="flex justify-center items-center pb-[30vh] lg:pb-0 bg-[url('images/backgrounds/Ecosystem.png')] h-[120vh] lg:h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat"
    ref={sectionRef}>
      <div className="w-full max-w-[1140px] h-[100%] flex flex-col justify-center items-center">
        <div className="w-[300px]">
          <img src={title} alt="/"/>
        </div>

        <div className="w-full flex flex-wrap justify-center lg:flex-nowrap lg:justify-start lg:py-[20px]">
          {textData.map((text) => {
            return (
              <>
                <div className="bg-[url('images/ecosystem/placeholder-ecosystem.png')] select-none bg-center bg-contain bg-no-repeat flex justify-center items-center text-center w-[650px] md:w-[800px] h-[100%] lg:w-[800px]">
                  <h1 className="font-[geliofasolada] text-xl lg:text-xl uppercase text-[#633922] tracking-wider mx-10">
                    {text}
                  </h1>
                </div>
                <div className="guma">
                  <img
                    className="h-[100%] w-[250px] lg:relative lg:top-[10vh] lg:left-[-10vh] lg:w-[450px]"
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