import React, { useEffect, useState, useRef } from "react";
import { useIntersection } from "react-use";

// for images
import title from "../images/hero/cryptoisland.webp";
import grass from "../images/hero/Grassfield.webp";
import vineone from "../images/hero/Vine1.png";
import vinetwo from "../images/hero/Vine2.png";
import grassright from "../images/hero/Grass.png";

// gsap imports
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion } from "framer-motion";

const Hero = () => {
  const fadeIn = (element) => {
    gsap.from(element, {
      scale: 0.2,
    });
    gsap.to(element, {
      scale: 1,
      duration: 2,
      ease: "elastic",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeInVines = (element) => {
    gsap.from(element, {
      y: -500,
    });
    gsap.to(element, {
      y: 0,
      duration: 2,
      delay: 0.2,
      ease: "bounce",
    });
  };

  gsap.registerPlugin(ScrollTrigger);

  function parallax() {
    gsap.set(".rock", {
      x: -10,
    });
    gsap.to(".rock", {
      scrollTrigger: {
        trigger: ".rock",
        start: "-40% 40%",
        toggleActions: "restart pause reverse pause",
        markers: true,
        scrub: 1,
      },
      x: 150,
    });
  }

  useEffect(() => {
    const id = "section-hero";
    const element = document.getElementById(id);

    if (element) {
      parallax();
    }

    fadeIn(".fadeIn");
    fadeInVines("#fadeInVines");
  }, []);

  return (
    <>
      <motion.div
        className="flex justify-center items-center py-12 bg-[url('images/backgrounds/Sky.png')] h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat md:pb-24"
        id="section-hero"
        // ref={sectionRef}
      >
        <div className="fadeIn select-none z-[3]">
          <img
            className="w-[800px] floating select-none"
            id="crypto-island"
            src={title}
            alt="/"
          />
        </div>

        <div className="absolute top-0 left-0 z-[2]" id="fadeInVines">
          <img className="h-[500px]" src={vineone} alt="/" />
        </div>

        <div className="absolute top-0 right-0 z-[2]" id="fadeInVines">
          <img className=" rock" src={vinetwo} alt="/" />
        </div>
        
        {/* 
        <div className="absolute bottom-0 z-1">
          <img
            className="w-[auto] h-[130px] sm:h-[330px]"
            id="crypto-island"
            src={grass}
            alt="/"
          />
        </div> */}

        <div className="absolute bottom-0 right-0 z-1">
          <img
            className="w-[auto] h-[130px] sm:h-[330px]"
            id="crypto-island"
            src={grassright}
            alt="/"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
