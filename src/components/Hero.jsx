import React, { useEffect, useState, useRef } from "react";
import { useIntersection } from "react-use";
import title from "../images/hero/cryptoisland.png";
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

  // function grabCursor() {
  //   document.getElementById("artifacts").style.cursor = "grabbing";
  // }

  intersection && intersection.intersectionRatio < 0.9
    ? // Not reached
      fadeOut("")
    : fadeIn(".fadeIn");
  fadeInArtifact("#fadeInArtifact");

  //   gsap.registerPlugin(ScrollTrigger);

  //   function parallax() {
  //     gsap.set(".c", {
  //       scale: 0.2,
  //     });
  //     gsap.to(".c", {
  //       scrollTrigger: {
  //         trigger: ".c",
  //         start: "top top",
  //         end: "top center",
  //         toggleActions: "restart pause reverse pause",
  //         markers: true,
  //         scrub: 1,
  //       },
  //       scale: 1,
  //     });
  //   }

  //   useEffect(() => {
  //     const id = "section-roadmap";
  //     const element = document.getElementById(id);

  //     if (element) {
  //         parallax();
  //     }
  //   }, []);

  return (
    <>
      <motion.div
        className="flex justify-center items-center py-12 bg-[url('images/backgrounds/bg-intro.webp')] h-[100vh] w-[100%] bg-cover bg-center bg-no-repeat md:pb-24"
        ref={sectionRef}
      >
        <div className="fadeIn select-none">
          <img
            className="w-[800px] floating select-none"
            id="crypto-island"
            src={title}
            alt="/"
          />
        </div>
        {/* <div className="absolute lg:top-[30%] lg:left-[30%] floating z-100" id="artifacts">
          <motion.div
            className="bg-[url('images/hero/vitalik.webp')] bg-contain bg-center bg-no-repeat w-[10vw] h-[20vh] item"
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={sectionRef}
            id="fadeInArtifact"
          ></motion.div>
        </div>
        <div className="absolute  lg:bottom-[30%] lg:right-[30%] floating z-100
        ">
          <motion.div
            className="bg-[url('images/hero/satoshi.webp')] bg-contain bg-center bg-no-repeat w-[10vw] h-[20vh] item"
            drag
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
            dragConstraints={sectionRef}
            id="fadeInArtifact"
          ></motion.div>
        </div> */}
      </motion.div>
    </>
  );
};

export default Hero;
