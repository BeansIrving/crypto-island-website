import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../images/socials/copy.png";
import copyplaceholder from "../images/socials/copyplaceholder.webp";
import copiedplaceholder from "../images/socials/copied.webp";
import { motion } from "framer-motion";

const Copyclipboard = () => {
  const [isHover, toggleHover] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const copied = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div
      className="flex flex-col justify-start items-center 
                div-center w-[100%] h-[10vh] mt-2"
    >
      <motion.div
        className="menu-item"
        onHoverStart={toggleHoverMenu}
        onHoverEnd={toggleHoverMenu}
      >
        <div
          className="bg-stone-900/50 text-white py-2 px-5 rounded-xl 
                    flex justify-center items-center"
        >
          <span className="mr-2">0x2dd82aF67...</span>
          <CopyToClipboard text="0x2dd82aF67548F7a5085B77109f929a287337a814" className="z-[9999999999999]">
            <button className="cursor-pointer" onClick={copied}>
              <img src={copy} alt="/" />
            </button>
          </CopyToClipboard>
        </div>
      </motion.div>
      <motion.div
        className="sub-menu"
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div className="w-[170px] m-1">
          {visible ? (
            <img src={copiedplaceholder} alt="/" />
          ) : (
            <img src={copyplaceholder} alt="/" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Copyclipboard;
