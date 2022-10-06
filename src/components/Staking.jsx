import React, { useEffect, useRef } from "react";
import StakingImg from "../images/staking/Staking and Yield.webp";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import OwnLandText from "../images/staking/OwnLandText.webp";
import mokutext from "../images/staking/mokutext.webp";

import digitalland from "../images/staking/DigitalLand.webp"
import moku from "../images/staking/Moku.webp"


gsap.registerPlugin(ScrollTrigger);

const Staking = () => {
  // const textData = [
  //   "Playing isn't the only thing that turns you profits in CryptoIslands, you can also stake and lease lands!",
  //   "Stake your hard-earned $GUMA to yield profits!",
  //   "Own lands and earn passive income for leasing them to other players!",
  // ];

  const item1 = useRef();
  const item2 = useRef();

  useEffect(() => {
    // for (let i = 0; i < 3; i++) {
    //   gsap.fromTo(
    //     itemEls.current[i],
    //     { y: -200, opacity: 0 },
    //     {
    //       scrollTrigger: {
    //         trigger: itemEls.current[i],
    //         start: "top center",
    //         // scrub: 1,
    //         markers: false,
    //       },
    //       y: 0,
    //       ease: "power4",
    //       duration: 0.3,
    //       opacity: 1,
    //       delay: (i + 1) / 5,
    //     }
    //   );
    // }

    gsap.fromTo(
      item1.current,
      { y: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item1.current,
          start: "top center",
          // scrub: 1,
          markers: false,
        },
        y: 0,
        ease: "power4",
        duration: 0.3,
        opacity: 1,
        delay: (0 + 1) / 5,
      }
    );

    gsap.fromTo(
      item2.current,
      { y: -200, opacity: 0 },
      {
        scrollTrigger: {
          trigger: item2.current,
          start: "top center",
          // scrub: 1,
          markers: false,
        },
        y: 0,
        ease: "power4",
        duration: 0.3,
        opacity: 1,
        delay: (1 + 1) / 5,
      }
    );
  }, []);

  return (
    <div
      className="flex justify-center items-center bg-[url('images/backgrounds/bg-staking.webp')] 
      bg-no-repeat bg-cover bg-top  h-[1200px] w-full  lg:h-[90vh]"
      id="staking-section"
    >
      <div className="nft-content h-[1200px] w-full  lg:h-[90vh]">

        <div className="absolute bottom-0 left-0 sm:left-20 z-[5]">
          <img src={digitalland} className="h-[320px]" alt="/" />
        </div>

        <div className="absolute bottom-0 right-0 sm:right-20 z-[5]">
          <img src={moku} className="h-[320px]" alt="/" />
        </div>

        <div className="max-w-[1240px] flex flex-col justify-center items-center gap-10 p-5 sm:p-5">
          {/* <div className="w-[300px]">
          <img src={StakingImg} alt="/" />
        </div> */}

          <div className="flex gap-14 flex-wrap flex-row justify-center">
            <motion.div
              ref={item1}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img src={OwnLandText} className="md:w-[450px] w-[350px]" />
            </motion.div>
            <motion.div
              ref={item1}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                src={mokutext}
                className="md:w-[450px] w-[350px]"
                ref={item2}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;
