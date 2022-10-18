import React, { useRef } from "react";
import { motion } from "framer-motion";

import gameplay from "../images/gameplay/Game_mechanics_landscape.webp";
import mobile from "../images/gameplay/Game_mechanics_portrait.webp";

const Gameplay = () => {
  return (
    <div
      className="flex justify-center items-center mt-[5rem]
      bg-[url('images/backgrounds/BG_portrait.webp')] md:bg-[url('images/backgrounds/BG_landscape.webp')] bg-cover bg-no-repeat bg-top
      h-[1375px]  2xl:h-[1375px] px-[2rem] lg:px-[2rem]"
      id="section-gameplay"
    >
      <div className="flex-col justify-center items-center">
        <div>
          <h1
            className="text-left font-[roboto] font-bold uppercase 
          text-5xl text-[#513318] py-10"
          >
            Gameplay
          </h1>
          <p
            className="text-left font-[roboto] 
            text-xl 2xl:text-3xl text-[#5a3b1d]"
          >
            Cryptolslands is an Adventure/Fantasy P2E game set on a special
            cluster of islands, each with their own quirks and charm. Players
            are expected to cooperate, compete, and collaborate with each other
            in the various mini-games present in each island for $GUMA. Prizes
            are given in the form of precious $GUMA tokens which can then be
            converted to crypto.
          </p>
        </div>

        <div>
          <h1
            className="text-left font-[geliofasolada] font-bold uppercase 
          text-5xl text-[#513318] py-10"
          >
            <span className="text-[#7d642f]">&#124;</span>
            <span className="pl-5 tracking-widest">
              Game Mechanics and Perks
            </span>
          </h1>
        </div>

        <div className="flex justify-center items-center floating">
          <img
            src={gameplay}
            alt="/"
            className="h-[auto] 2xl:h-[700px] hidden lg:inline-grid"
          ></img>
          <img
            src={mobile}
            alt="/"
            className="h-[auto] 2xl:h-[400px] inline-grid lg:hidden"
          ></img>
        </div>
      </div>

      {/* <motion.div
          className="absolute top-50% hidden lg:inline-block"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[auto] lg:w-[auto]"
            id="artifact"
            src={gameplay}
            alt="/"
          />
        </motion.div>

        <motion.div
          className="absolute top-0% left-[50%] inline-block lg:hidden"
          drag
          dragConstraints={constraintsRef}
        >
          <img
            className="w-[auto] lg:w-[auto]"
            id="artifact"
            src={mobile}
            alt="/"
          />
        </motion.div> */}
    </div>
  );
};

export default Gameplay;
