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

// borders

import borderright from "../images/character/right-border-full.webp";
import borderleft from "../images/character/left-border-full.webp";
import vinesright from "../images/character/vines2.webp";
import vinesleft from "../images/character/vines1.webp";

import Signage from "../images/roadmap/Signage.webp";
import swipeleft from "../images/character/swipe-left.webp";
import swiperight from "../images/character/swipe-right.webp";

// Character Images

import characterone from "../images/character/characterframe1.webp";
import charactertwo from "../images/character/characterframe2.webp";
import characterthree from "../images/character/characterframe3.webp";

import CZ from "../images/character/CZ.webp";
import Elon from "../images/character/Elon.webp";
import Vitalik from "../images/character/Vitalik.webp";
import Charles from "../images/character/Charles.webp";
import Mark from "../images/character/Mark.webp";
import Ross from "../images/character/Ross.webp";
import Wendy from "../images/character/Wendy.webp";
import johnmcafee from "../images/character/johnmcafee.webp";

const Character = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults(false);

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
      avatar: Vitalik,
    },

    {
      name: "Elon Musk",
      description:
        "DOGE lover, memer, philantropist, and the wealthiest person on the planet as we speak!",
      avatar: Elon,
    },

    {
      name: "Bitboy",
      description:
        "Crypto Youtuber, the ol' reliable for everything crypto on youtube!",
      avatar: charactertwo,
    },

    {
      name: "Charles Hoskinson",
      description:
        "Techpreneur and a Blockchain visionary, he co-founded multiple groundbreaking cryptocurrency platforms like Cardano, Ethereum, and Input Output",
      avatar: Charles,
    },

    {
      name: "Mark Cuban",
      description:
        "The sale of MicroSolutions, release of his videobroadcasting website Broadcast.com, appearances in SharkTank, and multiple other ventures cemented his fame and success!",
      avatar: Mark,
    },

    {
      name: "CZ",
      description:
        "Founder of the most catering and biggest cryptocurrency exchange in the world as we speak, Funds and GUMA are Safu when it comes to this guy!",
      avatar: CZ,
    },

    {
      name: "Ross Ulbricht",
      description:
        "aka Dread Pirate Roberts. The founder of the infamous goods exchange Silk Road, he spearheaded the use of cryptocurrencies for purchase of goods and services, albeit not in the best of ways.",
      avatar: Ross,
    },

    {
      name: "Wendy",
      description:
        "Host of the O show, a cryptocurrency media outlet, and a successful cryptocurrency analyst, she became the biggest female crypto YouTuber as we speak!",
      avatar: Wendy,
    },

    {
      name: "John McAfee",
      description:
        "a prolific Programmer, Businessman, and a Presidential Candidate who also founded one of the biggest anti-virus software on the market, John Mcafee's lead a dangerous, complicated, and an eventful life ahead of him.",
      avatar: johnmcafee,
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  const fadeInDown = (element) => {
    gsap.from(element, {
      y: -400,
      opacity: 0,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "1640% center",
        end: "1640% center",
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "bounce",
    });
  };

  const fadeInUp = (element) => {
    gsap.from(element, {
      y: 250,
      opacity: 0,
    });
    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "-350% center",
        end: "-350% center",
        markers: false,
        scrub: false,
      },
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "bounce",
    });
  };

  useEffect(() => {
    fadeInDown(".frame-anim");
    fadeInUp(".text-anim");
  }, []);

  return (
    <div
      className="flex justify-center items-center 
      bg-[url('images/backgrounds/bg-character.webp')] bg-cover bg-center
      h-[1000px] z-40"
    >
      <div className="nft-content h-[1000px] ">
        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/character/Upper.webp')] h-[100px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div className="absolute left-0 bottom-[0%] z-[5] bg-[url('images/character/Lower_border.webp')] h-[165px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div className="absolute right-0 top-[0%] z-[4] border-lr">
          <img className="w-[100%]" src={borderright} alt="/" />
        </div>

        <div className="absolute left-0 top-[0%] z-[4] border-lr">
          <img className="w-[100%]" src={borderleft} alt="/" />
        </div>

        <div className="absolute right-0 top-[5%] z-[4] border-lr">
          <img className="w-[100%]" src={vinesright} alt="/" />
        </div>

        <div className="absolute left-0 top-[5%] z-[4] border-lr">
          <img className="w-[100%]" src={vinesleft} alt="/" />
        </div>

        <div className="flex-col justify-center items-center">
          <div className="my-0 sm:my-10">
            <h1
              className="text-center font-[bluenight] text-[#652706] text-2xl uppercase
            px-[25rem] sm:px-[20rem] md:px-[15rem] text-anim opacity-0"
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
              navigation={true}
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
                    <div key={item} className="px-7">
                      <div
                        className="flex justify-center 
                        py-5 text-anim opacity-0"
                      >
                        <img
                          className="h-[100px] w-[100px] sm:h-[500px]"
                          src={item.avatar}
                          alt="/"
                        ></img>
                      </div>

                      <div className="text-anim opacity-0">
                        <h1 className="font-[bluenight] uppercase tracking-widest text-[#652706]">
                          {item.name}
                        </h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="absolute left-[12%] bottom-[50%] ml-2 inline-grid z-[4] floating-x">
          <img src={swipeleft} className="w-[150px] hidden 4xl:inline-block text-anim opacity-0" alt="/" />
        </div>

        <div className="absolute right-[12%] bottom-[50%] ml-2 inline-grid z-[4] floating-x">
          <img src={swiperight} className="w-[150px] hidden 4xl:inline-block text-anim opacity-0" alt="/" />
        </div>

        <div className="absolute left-[10%] lg:left-[20%] bottom-[5%] ml-2 inline-grid z-[4] floating">
          <img src={Signage} className="w-[110px] md:w-[150px] inline-block 4xl:hidden text-anim opacity-0" alt="/" />
        </div>
        
      </div>
    </div>
  );
};

export default Character;
