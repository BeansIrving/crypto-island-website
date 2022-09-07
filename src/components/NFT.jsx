import React, { useRef, useEffect } from "react";
import title from "../images/nft/NFTs.webp";
import bitboy from "../images/nft/Bitboy_Website.png";
import { useIntersection } from "react-use";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const NFT = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textData = [
    "NFTs (Non-Fungible Tokens) can exist in many forms in Crypto Islands; from the artifacts players will hunt down, to the characters and accessories used to customize them, Crypto islands is not just a game, but essentially an NFT use-case.",
  ];

  const sectionRef = useRef(null);

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
      className="flex justify-center items-center  lg:pb-0 bg-[url('images/backgrounds/bg-nft.png')] h-[170vh] sm:h-[120vh] lg:h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat"
      ref={sectionRef}
    >
      <div className="w-full max-w-[1140px] h-[100%] flex flex-col items-center py-[8rem]">
        <div className="w-[300px]">
          <img src={title} alt="/" />
        </div>

        <div className="w-full flex flex-wrap justify-center ml-[5rem] py-[30px] sm:py-[15px] lg:flex-nowrap lg:justify-end lg:py-[20px]">
          {textData.map((text) => {
            return (
              <>
                <div
                  key={text}
                  className="bg-gradient-to-r from-[#efd5a2] to-[#dcbe83] border-[15px] border-[#a56631] py-12 px-12 sm:px-[5rem] md:px-[12rem] lg:px-[10rem] h-[auto] sm:border-0 sm:bg-[url('images/ecosystem/placeholder-ecosystem.png')] lg:bg-[url('images/nft/Placeholder.png')] select-none bg-center bg-contain bg-no-repeat flex justify-center items-center text-center  sm:h-[400px] w-[100%] z-[3]"
                >
                  <h1 className="font-[geliofasolada] text-xl lg:text-xl uppercase text-[#633922] tracking-wider">
                    {text}
                  </h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default NFT;
