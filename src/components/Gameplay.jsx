import React, { useRef } from "react";
import { motion } from "framer-motion";

import gameplay from "../images/gameplay/Gameplay.png";
import mobile from "../images/gameplay/Gameplay_mobile.png";

const Gameplay = () => {
  const constraintsRef = useRef(null);
  return (
    <div
      className="flex justify-center items-center bg-[#885018] h-[145vh] sm:h-[160vh] lg:h-[75vh] 2xl:h-[114.3vh] -z-50"
      id="gameplay-section"
    >
      <div className="nft-content h-[145vh] sm:h-[160vh] lg:h-[75vh] 2xl:h-[114.3vh]"  ref={constraintsRef} >

        <motion.div
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
        </motion.div>

        

      </div>

    </div>
  );
};

export default Gameplay;
