import React, { useRef, useEffect } from "react";

// images 

import title from "../images/nft/NFTs.webp";
import bitboy from "../images/nft/Bitboy_Website.webp";

// borders
import borderright from "../images/nft/Rightborder.webp";
import borderleft from "../images/nft/Leftborder.webp";
// nft
import nftone from "../images/nft/NFT1.webp";
import nfttwo from "../images/nft/NFT2.webp";
import nftthree from "../images/nft/NFT3.webp";
import nftfour from "../images/nft/NFT4.webp";

// platform

import platform from "../images/nft/platform.webp";
import platformtwo from "../images/nft/platform-2.webp";
import platformthree from "../images/nft/platform-3.webp";
import platformfour from "../images/nft/platform-4.webp";

//grass
import grassleft from "../images/nft/grass-left.webp";
import grassright from "../images/nft/grass-right.webp";

// gsap imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const NFT = () => {
  gsap.registerPlugin(ScrollTrigger);
  const textData = [
    "NFTs (Non-Fungible Tokens) can exist in many forms in Crypto Islands; from the artifacts players will hunt down, to the characters and accessories used to customize them, Crypto islands is not just a game, but essentially an NFT use-case.",
  ];

  const constraintsRef = useRef(null);

  const fadeIn = (element) => {
    gsap.from(element, {
      scale: 0.5,
      x: -150,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-70% center",
        markers: false,
      },
      scale: 1,
      x: 0,
      duration: 2,
      ease: "elastic",
    });
  };

  useEffect(() => {
    fadeIn(".bitboy");
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center  lg:pb-0 bg-[url('images/backgrounds/bg-nft.webp')] h-[130vh] w-[100%] bg-cover bg-center bg-no-repeat"
      ref={constraintsRef}
      id="nft-section"
    >
      <div className="nft-content h-[130vh] w-[100%]">
        <div className="w-full max-w-[1140px] h-[100%] flex flex-col items-center py-[8rem]">
          <div className="w-[200px]">
            <img src={title} alt="/" />
          </div>

          <div
            className="w-full flex flex-wrap justify-center py-[30px] sm:py-[15px] lg:flex-nowrap lg:justify-end lg:py-[20px]"
            id="nft-card"
          >
            {textData.map((text) => {
              return (
                <>
                  <div
                    key={text}
                    className="bg-gradient-to-r from-[#efd5a2] to-[#dcbe83] 
                    border-[15px] border-[#a56631] py-12 px-12 sm:px-[5rem] 
                    md:px-[12rem] lg:px-[10rem] h-[auto] sm:border-0 
                    sm:bg-[url('images/ecosystem/placeholder-ecosystem.webp')] 
                    lg:bg-[url('images/nft/Placeholder.webp')] select-none bg-center
                    bg-contain bg-no-repeat flex justify-center items-center text-center  
                    sm:h-[400px] w-[100%] z-[5]"
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

        <div className="absolute bottom-[10%] left-[5%] lg:left-[2%] z-[4] bitboy">
          <img className="w-[150px] lg:w-[300px]" src={bitboy} alt="/" />
        </div>
        {/* border */}
        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div className="absolute right-0 top-[0%] z-[4] border-lr">
          <img className="w-[100%]" src={borderright} alt="/" />
        </div>

        <div className="absolute left-0 top-[0%] z-[4] border-lr">
          <img className="w-[100%]" src={borderleft} alt="/" />
        </div>

        {/* grass */}

        <div className="absolute left-0 bottom-[0%] z-[4]">
          <img
            className="w-[100%] h-[200px] sm:h-[300px] lg:h-[400px]"
            src={grassleft}
            alt="/"
          />
        </div>

        <div className="absolute right-0 bottom-[0%] z-[4]">
          <img
            className="w-[100%] h-[200px] sm:h-[300px] lg:h-[400px]"
            src={grassright}
            alt="/"
          />
        </div>

        {/* artifact 1 */}

        <motion.div
          className="absolute bottom-[10%] lg:bottom-[20%] left-[25%] z-[6]"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[100px] lg:w-[150px] floating"
            id="artifact"
            src={nftone}
            alt="/"
          />
        </motion.div>

        <motion.div className="absolute bottom-[0%] left-[25%] z-[5]">
          <img
            className="w-[100px] lg:w-[150px]"
            id="artifact"
            src={platform}
            alt="/"
          />
        </motion.div>

        {/* artifact 2 */}

        <motion.div
          className="absolute bottom-[20%] left-[40%] z-[6]"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[100px] lg:w-[150px] floating"
            id="artifact"
            src={nfttwo}
            alt="/"
          />
        </motion.div>

        <motion.div className="absolute bottom-[0%] left-[40%] z-[5]">
          <img
            className="w-[100px] lg:w-[150px]"
            id="artifact"
            src={platformtwo}
            alt="/"
          />
        </motion.div>

        {/* artifact 3 */}

        <motion.div
          className="absolute bottom-[20%] left-[55%] z-[6]"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[100px] lg:w-[150px] floating"
            id="artifact"
            src={nftthree}
            alt="/"
          />
        </motion.div>

        <motion.div className="absolute bottom-[0%] left-[55%] z-[5]">
          <img
            className="w-[100px] lg:w-[150px]"
            id="artifact"
            src={platformthree}
            alt="/"
          />
        </motion.div>

        {/* artifact 4 */}

        <motion.div
          className="absolute bottom-[20%] left-[70%] z-[6]"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[100px] lg:w-[150px] floating"
            id="artifact"
            src={nftfour}
            alt="/"
          />
        </motion.div>

        <motion.div className="absolute bottom-[0%] left-[70%] z-[5]">
          <img
            className="w-[100px] lg:w-[150px]"
            id="artifact"
            src={platformfour}
            alt="/"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NFT;
