import React, { useEffect, useRef } from "react";
import StakingImg from "../images/staking/Staking and Yield.webp";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Staking = () => {
  const textData = [
    "Playing isn't the only thing that turns you profits in CryptoIslands, you can also stake and lease lands!",
    "Stake your hard-earned $GUMA to yield profits!",
    "Own lands and earn passive income for leasing them to other players!",
  ];

  const bounce = useRef(null);
  useEffect(() => {
    const bounceRef = bounce.current;
    gsap.fromTo(
      bounceRef,
      { y: 200 },
      {
        y: 0,
        duration: 3,
        ease: "elastic",
        scrollTrigger: {
          trigger: bounceRef.current,
          markers: false,
        },
      }
    );
  }, []);

  return (

    <div className="flex justify-center items-center bg-[url('images/backgrounds/StakingBg.png')] h-[160vh] w-full bg-no-repeat bg-cover bg-top pt-20  lg:h-[120vh]" id="section-staking">
      <div className="max-w-[1240px] flex flex-col justify-center items-center">
        <div className="w-[300px] ">
          <img src={StakingImg} alt="/"/>

        </div>

        <div className=" w-full h-full flex flex-wrap justify-center items-center md:gap-8 gap-4 md:py-10">
          {textData.map((text) => {
            return (
              <motion.div
                ref={bounce}
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
