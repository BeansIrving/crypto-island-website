import React from "react";

// Images

import cross from "../images/cryptobridge/cross.webp";

// Imports

import { motion } from "framer-motion";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="flex justify-center items-center
               bg-slate-900/50 
                 h-[112vh] w-[100%] z-[5] absolute"
    >
      <div className="nft-content">
        <div className="floating">
          <div className="select-non max-w-[1240px] flex justify-end">
            <div className="absolute top-[3.5rem] mr-[3.5rem]">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img
                  className="w-[65px] cursor-pointer drop-shadow-2xl"
                  src={cross}
                  alt="/"
                  onClick={onClose}
                />
              </motion.div>
            </div>
            <div
              className=" bg-[#cfba89] m-5 sm:m-12 
              overflow-y-scroll lg:overflow-y-hidden h-[400px] 
              lg:w-[800px] lg:h-[auto] rounded-lg"
            >
              <p className="text-[#563a20] text-justify font-[roboto] p-7 sm:p-[4rem] text-xl sm:text-2xl">
                Team co-op getting help from another player carrying big and
                heavy artifact while dodging the cannon balls in the brige. Get
                hit, Die and take the cannon position (first person shooter) in
                an afterlife Angel form. Mission is, shooting the opposite team
                players that are crossing the bridge. Bridge players getting to
                the other side at redeem chaimber, redeeming artifacts and
                getting rewarded with GINA + MOKU Buying digital land with "OKU
                and lease it out to receive Gl-P•tA or BNB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
