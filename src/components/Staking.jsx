import React, { useEffect, useRef } from "react";
import StakingImg from "../images/staking/Staking and Yield.webp";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OwnLandText from '../images/staking/OwnLandText.png';
import PlayingText from '../images/staking/PlayingText.png';

gsap.registerPlugin(ScrollTrigger);

const Staking = () => {
  const textData = [
    "Playing isn't the only thing that turns you profits in CryptoIslands, you can also stake and lease lands!",
    "Stake your hard-earned $GUMA to yield profits!",
    "Own lands and earn passive income for leasing them to other players!",
  ];

  const itemEls = useRef({});

  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      gsap.fromTo(
        itemEls.current[i],
        { y: -200, opacity: 0 },
        {
          scrollTrigger: {
            trigger: itemEls.current[i],
            start: "top center",
            // scrub: 1,
            markers: false,
          },
          y: 0,
          ease: "power4",
          duration: 0.3,
          opacity: 1,
          delay: (i + 1) / 5,
        }
      );
    }
  }, []);

  return (
    <div
      className="flex justify-center items-center bg-[url('images/backgrounds/bg-staking.webp')] h-[160vh] w-full bg-no-repeat bg-cover bg-top pt-20 lg:h-[120vh]"
      id="staking-section"
    >
      <div className="max-w-[1240px] flex flex-col justify-center items-center">
        <div className="w-[300px] ">
          <img src={StakingImg} alt="/" />
        </div>
        <div className=" w-full h-full flex flex-wrap justify-center md:gap-8 gap-4 md:py-10">
          {textData.map((text, index) => {
            return (
              <motion.div
                key={text}
                ref={(element) => (itemEls.current[index] = element)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-[url('images/staking/StakingPlaceholder.png')] select-none bg-center bg-contain bg-no-repeat flex justify-center items-center px-[50px] text-center w-[360px] h-[300px] "
              >
                <h1 className="font-[geliofasolada] text-xl lg:text-xl uppercase text-[#633922] tracking-wider mx-10">
                  {text}
                </h1>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Staking;
