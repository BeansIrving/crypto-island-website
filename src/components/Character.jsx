import React, { useState, useEffect } from "react";

// Swiper Import

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Gsap Imports

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Character Images

import characterone from "../images/character/characterframe1.webp";
import charactertwo from "../images/character/characterframe2.webp";
import characterthree from "../images/character/characterframe3.webp";
import characterframe from "../images/character/characterframe.webp";

const Character = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const character = [
    {
      name: "Satoshi Nakamoto",
      description: "Bitcoin Founder and the one who started it all",
      avatar: characterthree,
    },

    {
      name: "Beeple",
      description:
        "The prolific digital artist of our era, he made grounds on the internet after selling his artworks in the cryptospace as NFTs!",
      avatar: characterone,
    },

    {
      name: "Vitalik",
      description:
        "WarCraft enthusiast turned Ethereum Founder, he made everything possible for the cryptocurrency space!",
      avatar: characterframe,
    },

    {
      name: "Elo Musk",
      description:
        "DOGE lover, memer, philantropist, and the wealthiest person on the planet as we speak!",
      avatar: characterframe,
    },

    {
      name: "Bitboy",
      description:
        "Crypto Youtuber, the ol' reliable for everything crypto on youtube!",
      avatar: charactertwo,
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  const fadeInDown = (element) => {
    gsap.from(element, {
      y: -300,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "23% center",
        markers: false,
      },
      y: 0,
      duration: 1,
      ease: "bounce",
    });
  };

  const fadeInUp = (element) => {
    gsap.from(element, {
      y: 250,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-790% center",
        markers: false,
      },
      y: 0,
      duration: 1,
      ease: "bounce",
    });
  };

  useEffect(() => {
    fadeInDown(".frame-anim");
    fadeInUp(".text-anim")
  }, []);

  return (
    <div
      className="flex justify-center items-center 
    bg-[url('images/backgrounds/bg-character.webp')] bg-cover bg-center
    h-[100vh]"
    >
      <div className="nft-content h-[100vh] max-w-[1240px]">
        <div className="flex-col justify-center items-center">
          <div className="my-0 sm:my-10">
            <h1
              className="text-center font-[bluenight] text-[#652706] text-2xl uppercase
            px-[25rem] sm:px-[25rem]"
            >
              Play as your favorite crypto personalities in different game
              modes!
            </h1>
          </div>

          <div className="text-center">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
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
              {character.map((item) => {
                return (
                  <SwiperSlide className="mySwiperTeam-slide">
                    <div key={item.name} className="px-7">
                      <div
                        className="flex justify-center 
                        py-0 sm:py-5 frame-anim"
                      >
                        <img
                          className="h-[100px] w-[100px] sm:h-[350px]"
                          src={item.avatar}
                          alt="/"
                        ></img>
                      </div>

                      <div className="text-anim">
                        <h1 className="font-[bluenight] uppercase tracking-widest text-[#652706]">{item.name}</h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
