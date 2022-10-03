import React, { useEffect, useState, useRef } from "react";

// for images

import title from "../images/cryptobridge/CRYPTOBRIDGEV3.webp";
import titleClick from "../images/cryptobridge/CRYPTOBRIDGECLICK.webp";
import fog from "../images/cryptobridge/fog.webp";

// gsap imports

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion } from "framer-motion";

//
import cross from "../images/cryptobridge/cross.webp";



const Cryptobridge = () => {


  const [isOpen, setIsOpen] = useState(false);

  const [visible, setVisible] = useState(false);

  const menuVariants = {
    opened: {
      top: 0,
      opacity: 1,
 
    },
    closed: {
      top: "-105vh",
      opacity: 0,
   
    },
  };

  gsap.registerPlugin(ScrollTrigger);

  function parallaxCloudRight() {
    gsap.set("#cloud-anim-right", {
      x: 0,
      opacity: 1,
    });
    gsap.to("#cloud-anim-right", {
      scrollTrigger: {
        trigger: "#cloud-anim-right",
        start: "20% center",
        end: "50% 35%",
        markers: false,
        scrub: 3,
      },
      ease: "slow",
      opacity: 0,
      x: 750,
    });
  }

  function parallaxCloudLeft() {
    gsap.set("#cloud-anim-left", {
      x: 0,
      opacity: 1,
    });
    gsap.to("#cloud-anim-left", {
      scrollTrigger: {
        trigger: "#cloud-anim-left",
        start: "20% center",
        end: "50% 35%",
        markers: false,
        scrub: 3,
      },
      ease: "slow",
      opacity: 0,
      x: -750,
    });
  }

  function fadeInLogo(element) {
    gsap.set(element, {
      scale: 0.8,
      opacity: 0,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "0% center",
        end: "0%",
        markers: false,
        scrub: 1,
      },
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "elastic",
    });
  }

  useEffect(() => {
    const id = "section-bridge";
    const element = document.getElementById(id);

    if (element) {
      parallaxCloudRight();
      parallaxCloudLeft();
    }

    fadeInLogo("#crypto-bridge");
  }, []);

  return (
    <div
      className="flex justify-center items-center
            bg-[url('images/backgrounds/bg-bridge.webp')] bg-cover bg-center bg-no-repeat
            h-[112vh] sm:h-[112vh] w-[100%] "
    >
      <motion.div
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
        transition={{ type: "spring", stiffness: 100 }}
        className="modal"
      >
        <div
          className="flex justify-center items-center
               bg-slate-900/60 
                 h-[112vh] w-[100%] z-[5] absolute faded-edges"
        >
          <div className="nft-content h-[112vh]">
            <div className="floating">
              <div className="select-non max-w-[1240px] flex justify-end">
                <div className="absolute top-[3.5rem] mr-[3.5rem]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      className="w-[40px] sm:w-[50px] cursor-pointer drop-shadow-2xl"
                      src={cross}
                      alt="/"
                      onClick={() => setIsOpen((state) => !state)}
                    />
                  </motion.div>
                </div>
                <div
                  className=" bg-[#cfba89] m-12 
              h-[400px] 
              overflow-y-scroll lg:overflow-y-hidden
              lg:w-[800px] lg:h-[auto] rounded-lg"
                >
                  <p className="text-[#563a20]  sm:text-justify font-[roboto] p-[3rem] text-xl sm:text-2xl">
                    Team co-op getting help from another player carrying big and
                    heavy artifact while dodging the cannon balls in the brige.
                    Get hit, Die and take the cannon position (first person
                    shooter) in an afterlife Angel form.
                    <br></br>
                    <br></br>
                    Mission is, shooting the opposite team players that are
                    crossing the bridge. Bridge players getting to the other
                    side at redeem chaimber, redeeming artifacts and getting
                    rewarded with GINA + MOKU Buying digital land with "OKU and
                    lease it out to receive Gl-P•tA or BNB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className="hero-content h-[112vh] sm:h-[112vh] w-[100%]"
        id="section-bridge"
      >
        <motion.button
          className="select-none z-[2] hidden lg:inline-block"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((state) => !state)}
          id="crypto-bridge"
        >
          <div className="floating">
            <img
              className="w-[700px] select-none cursor-pointer"
              src={title}
              alt="/"
            />
          </div>
        </motion.button>

        <motion.button
          className="select-none z-[2]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen((state) => !state) || setVisible(true) }
          id="crypto-bridge"
        >
          <div className="floating">
            {visible ? (
              <img
                className="w-[700px] select-none cursor-pointer inline-block lg:hidden"
                id="crypto-bridge"
                src={title}
                alt="/"
           
              />
            ) : (
              <img
                className="w-[700px] select-none cursor-pointer inline-block lg:hidden"
                id="crypto-bridge"
                src={titleClick}
                alt="/"
      
              />
            )}
          </div>
        </motion.button>

        <div className="absolute bottom-[25%] left-[0%] z-[1] floating">
          <img className="w-[1400px]" id="cloud-anim-left" src={fog} alt="/" />
        </div>

        <div className="absolute bottom-[25%] right-[0%] z-[1]">
          <img className="w-[1400px]" id="cloud-anim-right" src={fog} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Cryptobridge;
