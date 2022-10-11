import React from "react";

import twitter from "../images/socials/twitter.webp";
import youtube from "../images/socials/youtube.webp";
import telegram from "../images/socials/telegram.webp";

import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div
      className="fixed h-[auto] 
                right-0 bottom-0 z-[9999999999]"
    >
      <div className="flex flex-col justify-center items-center m-2 gap-2 lg:m-5 lg:gap-5">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
          <a href="https://twitter.com/crypto_islands_" target="_blank">
            <img src={twitter} className="w-[60px] lg:w-[70px]" alt />
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
          <a  href="https://www.youtube.com/channel/UCmDERDfVjmKeE_MVEMNRwKA" target="_blank">
            <img src={youtube} className="w-[60px] lg:w-[70px]" alt />
          </a>
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="cursor-pointer">
          <a  href="https://t.me/CryptoIslandsofficial" target="_blank">
            <img src={telegram} className="w-[60px] lg:w-[70px]" alt />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
