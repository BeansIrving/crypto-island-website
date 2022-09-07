import React, { useEffect, useState, useRef } from "react";
import { useIntersection } from "react-use";


// for images
import title from "../images/hero/cryptoisland.webp";
import ground from "../images/hero/Ground.png";
import vineone from "../images/hero/Vine1.png";
import vinetwo from "../images/hero/Vine2.png";
import grassright from "../images/hero/Grass.png";
import sea from "../images/hero/Sea.png";
import cloudone from "../images/hero/Cloudone.png";
import cloudtwo from "../images/hero/Cloudtwo.png";

// gsap imports

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion } from "framer-motion";

const Hero = () => {
  const [visible, setVisible] = React.useState(false);
  const sectionRef = useRef(null);
  const ref = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

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

  const fadeInArtifact = (element) => {
    gsap.from(element, {
      scale: 0.2,
      opacity: 0,
    });
    gsap.to(element, {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "elastic",
    });
  };

  const fadeOut = (element) => {
    // gsap.to(element, {
    //   opacity: 0,
    //   duration: 1,
    //   y: 0,
    //   ease: "power4.out",
    // });
  };

  function parallax() {
    gsap.set(".grass-anim", {
      scale: 0.5,
    });
    gsap.to(".grass-anim", {
      scrollTrigger: {
        trigger: ".grass-anim",
        start: "-20% 20%",
        scrub: 1,
      },
      scale: 1.5,
    });
  }

  function parallaxCloud() {
    gsap.set("#cloud-anim", {
      x: -150,
    });
    gsap.to("#cloud-anim", {
      scrollTrigger: {
        trigger: "#cloud-anim",
        start: "top center",
        scrub: 1,
      },
      x: 200,
    });
  }

  function parallaxCloud2() {
    gsap.set("#cloud-anim-two", {
      x: 200,
    });
    gsap.to("#cloud-anim-two", {
      scrollTrigger: {
        trigger: "#cloud-anim-two",
        start: "top center",

        scrub: 1,
      },
      x: -150,
    });
  }

  //   gsap.registerPlugin(ScrollTrigger);


    if (element) {
      parallax();
      parallaxCloud();
      parallaxCloud2();
    }

    fadeIn(".fadeIn");
    fadeInVines(".fadeInVines");
  }, []);


  return (
    <>
      <motion.div

        className="flex justify-center items-center py-12 bg-[url('images/backgrounds/Sky.png')] bg-fixed h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat"
        id="section-hero"
        // ref={sectionRef}
      >
        <div className="fadeIn select-none z-[5]">

          <img
            className="w-[800px] floating select-none"
            id="img"
            src={title}
            alt="/"
          />
        </div>

        {/* vines */}

        <div className="absolute top-0 left-0 z-[3] grass-anim">
          <img className="h-[350px] fadeInVines" src={vineone} alt="/" />
        </div>

        <div className="absolute top-0 right-0 z-[3] grass-anim">
          <img className="fadeInVines" src={vinetwo} alt="/" />
        </div>

        {/* clouds */}

        <div className="absolute bottom-0 left-[-10%] z-[1] floating">
          <img className="w-auto" id="cloud-anim" src={cloudone} alt="/" />
        </div>

        <div className="absolute bottom-0 left-[-10%] z-[2] floating">
          <img className="w-auto" id="cloud-anim-two" src={cloudtwo} alt="/" />
        </div>

        {/* sea */}

        <div className="absolute bottom-0 z-[3]">
          <img className="w-auto" id="crypto-island" src={sea} alt="/" />
        </div>

        {/* ground */}

        <div className="absolute bottom-0 z-[4]">
          <img
            className="w-[auto] h-[100px] sm:h-[150px] lg:h-[330px]"
            id="crypto-island"
            src={ground}
            alt="/"
          />
        </div>

        {/* grass right */}

        <div className="absolute bottom-0 right-0 z-[2]">
          <img
            className="w-[auto] h-[50px] sm:h-[130px] lg:h-[330px]"
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
