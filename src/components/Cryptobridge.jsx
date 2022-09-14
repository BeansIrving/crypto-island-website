import React, { useEffect, useState, useRef } from "react";

// for images

import title from "../images/cryptobridge/CRYPTOBRIDGEV3.png";
import fog from "../images/cryptobridge/fog.png";

// gsap imports
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion } from "framer-motion";

const Cryptobridge = () => {
  gsap.registerPlugin(ScrollTrigger);

  const [showResults, setShowResults] = React.useState(true);

  function parallaxCloudRight() {
    gsap.set("#cloud-anim-right", {
      x: 0,
      opacity: 1,
    });
    gsap.to("#cloud-anim-right", {
      scrollTrigger: {
        trigger: "#cloud-anim-right",
        start: "10% center",
        end: "50% 35%",
        markers: false,
        scrub: 3,
      },
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
        start: "10% center",
        end: "50% 35%",
        markers: false,
        scrub: 3,
      },
      opacity: 0,
      x: -750,
    });
    setShowResults(true);
  }

    function fadeInLogo(element) {
      gsap.set(element, {
        scale: 0.8,
        opacity: 0,
      });
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-10% center",
          end: "20%",
          markers: false,
          scrub: 1,
        },
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "elastic",
        stagger: {
          amount: 0.3,
        },
      });
    }

  useEffect(() => {
    const id = "section-bridge";
    const element = document.getElementById(id);

    if (element) {
      parallaxCloudRight();
      parallaxCloudLeft();
    }
  }, []);

    useEffect(() => {
      fadeInLogo("#crypto-bridge");
    }, []);

  return (
    <div
      className="flex justify-center items-center
            bg-[url('images/backgrounds/bg-bridge.png')] bg-cover bg-center bg-no-repeat
            h-[112vh] w-[100%]"
    >
      <div className="hero-content h-[112vh] w-[100%]" id="section-bridge">
        
        <motion.div
          className="select-none z-[2]"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="floating">
            <img
              className="w-[500px] select-none cursor-pointer"
              id="crypto-bridge"
              src={title}
              alt="/"
            />
          </div>
        </motion.div>

        <div className="absolute bottom-[30%] left-[20%] z-[1] floating">
          <img className="w-[1000px]" id="cloud-anim-left" src={fog} alt="/" />
        </div>

        <div className="absolute bottom-[30%] right-[10] z-[1]">
          <img className="w-[1000px]" id="cloud-anim-right" src={fog} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Cryptobridge;
