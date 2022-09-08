import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import characterone from "../images/character/P2.jpeg";
import charactertwo from "../images/character/P1.jpeg";
import characterthree from "../images/character/P3.png";

const Character = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const character = [
    {
      name: "Satoshi Nakamoto",
      description: "Bitcoin Founder and the one who started it all",
      avatar: characterone,
    },
    {
      name: "Satoshi Nakamoto",
      description: "Bitcoin Founder and the one who started it all",
      avatar: charactertwo,
    },
    {
      name: "Satoshi Nakamoto",
      description: "Bitcoin Founder and the one who started it all",
      avatar: characterthree,
    },
    {
      name: "Satoshi Nakamoto",
      description: "Bitcoin Founder and the one who started it all",
      avatar: "",
    },
  ];

  return (
    <div
      className="flex justify-center items-center 
    bg-[url('images/backgrounds/bg-character.png')] bg-cover bg-center
    h-[100vh]"
    >
      <div className="nft-content h-[100vh] max-w-[1240px]">
        <div className="flex-col justify-center items-center">
          <div className="my-0 sm:my-10">
            <h1 className="text-center font-[bluenight] text-[#652706] text-2xl uppercase">
              Play as your favorite crypto personalities in different game
              modes!
            </h1>
          </div>

          <div className="text-center">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiperTeam"
            >
              {character.map((item) => {
                return (
                  <SwiperSlide className="mySwiperTeam-slide">
                    <div key={item.name}>
                      <div
                        className="flex justify-center 
                        h-[40%] w-[100%] py-5"
                      >
                        <img
                          className="h-[200px] sm:h-[350px]"
                          src={item.avatar}
                          alt="/"
                        ></img>
                      </div>

                      <div>
                        <h1>{item.name}</h1>
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
