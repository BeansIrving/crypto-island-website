import React, { useState, useRef } from "react";

import gsap from "gsap";

import { useEffect } from "react";
import Light from "../images/playnow/Light2.webp";
import Satoshi from "../images/playnow/satoshi.webp";

import Play3D from "../images/playnow/play3dbeta.webp";

import Play from "../images/playnow/play.webp";

import { motion } from "framer-motion";
import cross from "../images/cryptobridge/cross.webp";
import Video from "../images/playnow/CryptoVideo.mp4";

// Screen shots

import Sc1 from "../images/playnow/screenshots/sc1.webp";
import Sc2 from "../images/playnow/screenshots/sc2.webp";
import Sc3 from "../images/playnow/screenshots/sc3.webp";
import Sc4 from "../images/playnow/screenshots/sc4.webp";
import Sc5 from "../images/playnow/screenshots/sc5.webp";
import Sc6 from "../images/playnow/screenshots/sc6.webp";
import Sc7 from "../images/playnow/screenshots/sc7.webp";
import Sc8 from "../images/playnow/screenshots/sc8.webp";
import Sc9 from "../images/playnow/screenshots/sc9.webp";
import Sc10 from "../images/playnow/screenshots/sc10.webp";
import Sc11 from "../images/playnow/screenshots/sc11.webp";
import Sc12 from "../images/playnow/screenshots/sc12.webp";
import Sc13 from "../images/playnow/screenshots/sc13.webp";
import Sc14 from "../images/playnow/screenshots/sc14.webp";

import Right from "../images/playnow/beepleandmcfeecannon.webp";

// Swiper Imports

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PlayNow = () => {
  const light = useRef(null);
  const opacity = useRef(null);
  const platform = useRef(null);
  const satoshi = useRef(null);
  const right = useRef(null);
  const play = useRef(null);

  const playVideo = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

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

  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const springIn = (element) => {
    gsap.fromTo(
      element,
      { scale: 0 },
      {
        scrollTrigger: {
          trigger: element,
          start: "-500% center",
          end: "center center",
          markers: false,
        },
        scale: 1,
        duration: 1,
        ease: "bounce",
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      light.current,
      { x: 2000 },
      {
        scrollTrigger: {
          trigger: light.current,
          start: "top center",
          end: "center 100px",
          scrub: 1,
          markers: false,
        },
        ease: "slow",
        x: 0,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      opacity.current,
      { opacity: 1 },
      {
        scrollTrigger: {
          trigger: opacity.current,
          start: "top center",
          end: "top 100px",
          scrub: 1,
          markers: false,
        },
        opacity: 0,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      platform.current,
      { y: 120 },
      {
        scrollTrigger: {
          trigger: platform.current,
          start: "-325% center",
          end: "-260% center",
          markers: false,
          scrub: 1,
        },
        ease: "slow",
        y: 0,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      satoshi.current,
      { x: -1200, scale: 0.5 },
      {
        scrollTrigger: {
          trigger: satoshi.current,
          start: "-84% center",
          end: "-20% center",
          markers: false,
          scrub: 1,
        },
        ease: "slow",
        duration: 1,
        x: 0,
        scale: 1,
        stagger: {
          amount: 3,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      right.current,
      { x: 1200, scale: 0.5 },
      {
        scrollTrigger: {
          trigger: right.current,
          start: "-63% center",
          end: "-5% center",
          markers: false,
          scrub: 1,
        },
        ease: "slow",
        duration: 1,
        x: 0,
        scale: 1,
        stagger: {
          amount: 3,
        },
      }
    );
  }, []);

  useEffect(() => {
    springIn(".springIn");
  }, []);

  return (
    <div
      className="h-[1300px] relative mb-[-82px] 3xl:mb-[-157px] 4xl:mb-[-82px]"

    >
      <div className="nft-content h-[1300px]">
        <div
          className="w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.webp)] bg-cover bg-top bg-no-repeat z-[4]"
          ref={opacity}
        ></div>

        <div className=" blur-sm w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.webp)] bg-cover 3xl:bg-cover bg-top bg-no-repeat z-[2]"></div>

        <div
          className="w-full h-[120px] lg:h-[160px] xl:h-[160px] z-[10] absolute bottom-[0px] bg-[url(images/playnow/Platform.webp)] bg-cover bg-no-repeat"
          ref={platform}
        ></div>

        <div className="absolute top-0 right-0 z-[2]">
          <img
            src={Light}
            ref={light}
            className="md:w-full md:h-full h-[70vh]"
            alt="/"
          />
        </div>

        <div
          className="z-[10] md:flex absolute bottom-11 left-0 m:left-10 m:bottom-[60px]"
          ref={satoshi}
        >
          <img
            src={[Satoshi]}
            className="hidden mv:inline-block mv:w-[100px] sm:w-[170px] lg:w-[275px] xl:w-[350px]"
          />
        </div>

        <div
          className="z-[10] md:flex absolute right-0 bottom-[50px]"
          ref={right}
        >
          <img
            src={[Right]}
            className="w-[300px] sm:w-[400px] lg:w-[700px] xl:w-[950px]"
          />
        </div>

        <motion.div
          initial={false}
          variants={menuVariants}
          animate={isOpen ? "opened" : "closed"}
          transition={{ type: "spring", stiffness: 100 }}
          className="modal z-[999999999]"
        >
          <div className="absolute top-[10%] right-[5%] lg:top-[5%] lg:right-[5%] z-[999]">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
              <img
                className="w-[40px] sm:w-[60px] lg:w-[60px] cursor-pointer drop-shadow-2xl"
                src={cross}
                alt="/"
                onClick={() =>
                  setIsOpen((state) => !state) || playVideo.current.pause()
                }
              />
            </motion.div>
          </div>
          <div
            className="flex justify-center items-center
              bg-slate-900/50 
              h-[180vh] mb:h-[140vh]  md:h-[125vh] w-[100%] z-[199] absolute"
            onClick={() =>
              setIsOpen((state) => !state) || playVideo.current.pause()
            }
          >
            <div className="nft-content">
              <div>
                <div className="select-non max-w-[1240px] flex justify-center h-[50vh] md:h-[auto] md:mt-[0] items-center">
                  <div
                    className=" bg-[#cfba89] m-5 sm:m-12 
                 sm:h-[250px] md:h-[350px]
                h:-[200px] lg:w-[900px] lg:h-[auto] rounded-lg"
                  >
                    <div className="custom-video-player flex justify-center items-center">
                      <video ref={playVideo} controls src={Video}></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* <VideoModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        /> */}
        <div className="flex flex-row z-[6] absolute top-[10%] lg:top-[5%] justify-center ">
          <div className="flex flex-col gap-5 justify-center items-center springIn">
            <motion.div
              className="springIn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                onClick={() =>
                  setIsOpen((state) => !state) || playVideo.current.play()
                }
                alt="/"
                src={Play}
                className="w-[400px] cursor-pointer active:scale-[90%] duration-75"
              />
            </motion.div>

            {/* Input Swiper Here */}
            <motion.div>
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                effect={"coverflow"}
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
                className="mySwiperTeam"
              >
                {/* insert image here */}
                {videoimages.map((item) => {
                  return (
                    <SwiperSlide className="mySwiperGame-slide">
                      <div key={item} className="px-10">
                        <div
                          className="flex justify-center 
                        py-0 sm:py-5"
                        >
                          <img
                            className="border-[8px]"
                            src={item.videoimage}
                            alt="/"
                          ></img>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </motion.div>

            <div className="flex flex-col gap-5">
              <motion.div
                className="springIn"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <a
                  href="https://drive.google.com/drive/folders/1vvubABAltwRvvPDRT9lGvDRNyljkX70r?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="/"
                    src={Play3D}
                    className="w-[250px] cursor-pointer active:scale-[90%] duration-75"
                  />
                </a>
              </motion.div>

              {/* <img alt="/" src={Play2D} className="w-[250px] cursor-no-drop" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayNow;

const videoimages = [
  {
    videoimage: Sc1,
  },
  {
    videoimage: Sc2,
  },
  {
    videoimage: Sc3,
  },
  {
    videoimage: Sc4,
  },
  {
    videoimage: Sc5,
  },
  {
    videoimage: Sc6,
  },
  {
    videoimage: Sc7,
  },
  {
    videoimage: Sc8,
  },
  {
    videoimage: Sc9,
  },
  {
    videoimage: Sc10,
  },
  {
    videoimage: Sc11,
  },
  {
    videoimage: Sc12,
  },
  {
    videoimage: Sc13,
  },
  {
    videoimage: Sc14,
  },

];

// const VideoModal = ({ open, onClose }) => {
//   if (!open) return null;
//   return (
//     <div
//       className="flex justify-center items-center
//               bg-slate-900/50
//               h-[180vh] mb:h-[140vh]  md:h-[125vh] w-[100%] z-[199] absolute faded-edgesv2"
//       onClick={onClose}
//     >
//       <div className="nft-content">
//         <div>
//           <div className="select-non max-w-[1240px] flex justify-center h-[50vh] md:h-[auto] md:mt-[0] items-center">
//             <div
//               className=" bg-[#cfba89] m-5 sm:m-12
//                  sm:h-[250px] md:h-[350px]
//                 h:-[200px] lg:w-[900px] lg:h-[auto] rounded-lg"
//             >
//               <div className="custom-video-player flex justify-center items-center">
//                 <video controls src={Video}></video>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
