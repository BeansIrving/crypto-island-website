import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Light from "../images/playnow/Light2.png";
import Satoshi from "../images/playnow/satoshi.png";
import Play2D from "../images/playnow/play2d.png";
import Play3D from "../images/playnow/play3dbeta.png";
import Sc1 from "../images/playnow/screenshots/sc1.PNG";
import Play from "../images/playnow/play.png";
import Play2 from "../images/playnow/play2.png";
import { motion } from "framer-motion";
import cross from "../images/cryptobridge/cross.webp";
import { useState } from "react";
import Video from "../images/playnow/CryptoVideo.mp4";

const PlayNow = () => {
  const light = useRef(null);
  const opacity = useRef(null);
  const platform = useRef(null);
  const satoshi = useRef(null);
  const play = useRef(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      light.current,
      { x: 2000 },
      {
        scrollTrigger: {
          trigger: light.current,
          start: "top center",
          end: "top 100px",
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
          start: "-500 center",
          end: "center center",
          markers: false,
        },
        y: 0,
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      satoshi.current,
      { x: -500 },
      {
        scrollTrigger: {
          trigger: satoshi.current,
          start: "-500 center",
          end: "center center",
          scrub: 1,
          markers: false,
        },
        x: 0,
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
  }, []);

  return (
    <div className="w-full h-[125vh] relative mb-[-82px] 3xl:mb-[-157px] 4xl:mb-[-82px]">
      <div
        className="w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.png)] bg-cover bg-top bg-no-repeat z-[5]"
        ref={opacity}
      ></div>

      <div className=" blur-sm w-full h-full flex absolute top-[-65px] bg-[url(images/playnow/playnowbg.png)] bg-cover 3xl:bg-contain bg-top bg-no-repeat z-[2]"></div>

      <div
        className="w-full h-[120px] lg:h-[160px] xl:h-[170px] z-[10] absolute bottom-[80px] bg-[url(images/playnow/Platform.png)] bg-cover bg-no-repeat"
        ref={platform}
      ></div>

      <div className="absolute top-0 right-0 z-[5]">
        <img
          src={Light}
          ref={light}
          className="md:w-full md:h-full h-[70vh]"
          alt="/"
        />
      </div>

      <div
        className="z-[10] md:flex hidden absolute bottom-[80px] sm:bottom-[50px] md:bottom-[30px] lg:bottom-[10px]"
        ref={satoshi}
      >
        <img src={[Satoshi]} className="w-[900px]" />
      </div>

      <div className="flex flex-row md:flex-row-reverse w-full h-full z-[100] absolute justify-center md:justify-start ">
        <VideoModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        />
        <div className="flex flex-col md:p-[150px] md:w-[50%] gap-10 justify-center items-center">
          <motion.div
            ref={play}
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

          <img
            alt="/"
            src={Sc1}
            className="w-[350px] drop-shadow-xl outline outline-white cursor-pointer"
          />
          <div className="flex flex-col gap-5">
            <motion.div
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

            <img alt="/" src={Play2D} className="w-[250px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayNow;

// Images

// Imports

const VideoModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="flex justify-center items-center
                 bg-slate-900/50 
                   h-[118vh] w-[100%] z-[5] absolute"
      onClick={onClose}
    >
      <div className="nft-content">
        <div>
          <div className="select-non max-w-[1240px] flex justify-end">
            <div className="absolute top-[4rem] mr-[4rem]">
              {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img
                  className="w-[40px] cursor-pointer drop-shadow-2xl z-[100]"
                  src={cross}
                  alt="/"
                  onClick={onClose}
                />
              </motion.div> */}
            </div>
            <div
              className=" bg-[#cfba89] m-5 sm:m-12 
                overflow-y-scroll lg:overflow-y-hidden h-[400px] 
                lg:w-[900px] lg:h-[auto] rounded-lg"
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
