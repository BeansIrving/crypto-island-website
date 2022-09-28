import React, { useState, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Light from "../images/playnow/Light2.png";
import Satoshi from "../images/playnow/satoshi.png";
import Play2D from "../images/playnow/play2d.png";
import Play3D from "../images/playnow/play3dbeta.png";

import Play from "../images/playnow/play.png";
import Play2 from "../images/playnow/play2.png";
import { motion } from "framer-motion";
import cross from "../images/cryptobridge/cross.webp";
import Video from "../images/playnow/CryptoVideo.mp4";

// Screen shots

import Sc1 from "../images/playnow/screenshots/sc1.PNG";
import Sc2 from "../images/playnow/screenshots/sc2.PNG";
import Sc3 from "../images/playnow/screenshots/sc3.PNG";
import Sc4 from "../images/playnow/screenshots/sc4.PNG";
import Sc5 from "../images/playnow/screenshots/sc5.PNG";
import Sc6 from "../images/playnow/screenshots/sc6.PNG";
import Sc7 from "../images/playnow/screenshots/sc7.PNG";
import Sc8 from "../images/playnow/screenshots/sc8.PNG";

import Right from "../images/playnow/beepleandmcfee.png";

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

  const [open, setOpen] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const springIn = (element) => {
    gsap.fromTo(
      element,
      { scale: 0 },
      {
        scrollTrigger: {
          trigger: play.current,
          start: "-500 center",
          end: "center center",
          markers: false,
        },
        scale: 1,
        duration:1.5,
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
        },
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
          start: "-50% center",
          end: "0% center",
          markers: false,
        },
        ease: "spring",
        duration: 0.5,
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
        },
        ease: "spring",
        duration: 0.5,
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
      play.current,
      { scale: 0 },
      {
        scrollTrigger: {
          trigger: play.current,
          start: "-500 center",
          end: "center center",
          markers: false,
        },
        scale: 1,
        ease: "bounce",
      }
    );

    springIn(".springIn");
  }, []);

  return (
    <div className="h-[180vh] mb:h-[140vh]  md:h-[125vh] relative mb-[-82px] 3xl:mb-[-157px] 4xl:mb-[-82px]">
      <div className="nft-content h-[180vh] mb:h-[140vh]  md:h-[125vh]">
        <div
          className="w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.png)] bg-cover bg-top bg-no-repeat z-[5]"
          ref={opacity}
        ></div>

        <div className=" blur-sm w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.png)] bg-cover 3xl:bg-cover bg-top bg-no-repeat z-[2]"></div>

        <div
          className="w-full h-[120px] lg:h-[160px] xl:h-[170px] z-[10] absolute bottom-[0px] bg-[url(images/playnow/Platform.png)] bg-cover bg-no-repeat"
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
          className="z-[10] md:flex absolute left-0 bottom-[0px] sm:bottom-[0px] md:bottom-[0px] lg:bottom-[0px]"
          ref={satoshi}
        >
          <img
            src={[Satoshi]}
            className="w-[300px] lg:w-[400px] xl:w-[700px]"
          />
        </div>

        <div
          className="z-[10] md:flex absolute right-0 bottom-[50px]"
          ref={right}
        >
          <img src={[Right]} className="w-[300px] lg:w-[400px] xl:w-[650px]" />
        </div>

        <VideoModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
        <div className="flex flex-row z-[100] absolute top-[10%] justify-center ">
          <div className="flex flex-col gap-10 justify-center items-center">
            <motion.div
              className="springIn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <img
                onClick={() => {
                  setOpen(true);
                }}
                alt="/"
                src={Play}
                className="w-[450px] cursor-pointer active:scale-[90%] duration-75"
              />
            </motion.div>

            {/* Input Swiper Here */}
            <motion.div
              className="springIn"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
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
                      <div key={item} className="px-7">
                        <div
                          className="flex justify-center 
                        py-0 sm:py-5"
                        >
                          <img
                            className="border-[6px]"
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
];

const VideoModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="flex justify-center items-center
              bg-slate-900/50 
              h-[180vh] mb:h-[140vh]  md:h-[125vh] w-[100%] z-[199] absolute faded-edgesv2"
      onClick={onClose}
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
                <video controls src={Video} autoPlay></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
