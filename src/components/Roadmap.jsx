import React, { useEffect, useRef, useState } from "react";

// images

import Light from "../images/roadmap/light2nd.webp";
import Vines from "../images/roadmap/vinesfront.webp";
import Stage1 from "../images/roadmap/Stage1.webp";
import Stage2 from "../images/roadmap/Stage2.webp";
import Stage3 from "../images/roadmap/Stage3.webp";
import Stage4 from "../images/roadmap/Stage4.webp";
import Plants from "../images/roadmap/Plants.webp";
import Banner from "../images/roadmap/roadmap.webp";
import Signage from "../images/roadmap/Signage.webp";

// Swiper Import

import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Navigation,
  Thumbs,
  EffectCoverflow,
  Pagination,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// imports

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Roadmap = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const light = useRef(null);

  const [showResults, setShowResults] = React.useState(true);
  const onClick = () => setShowResults(false);

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

  // const vines = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     vines.current,
  //     { scale: 1.5 },
  //     {
  //       scrollTrigger: {
  //         trigger: vines.current,
  //         start: "top center",
  //         end: "top 100px",
  //         scrub: 1,
  //         markers: false,
  //       },
  //       scale: 1,
  //     }
  //   );
  // }, []);

  const Stone1 = useRef(null);
  const Stone2 = useRef(null);
  const Stone3 = useRef(null);
  const Stone4 = useRef(null);
  const Stone5 = useRef(null);
  const Stone6 = useRef(null);
  const Stone7 = useRef(null);
  const Stone8 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      Stone1.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone1.current,
          start: "-200px bottom",
          end: "100px center",
          scrub: 1,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone2.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone2.current,
          start: "-200px bottom",
          end: "100px center",
          scrub: 2,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone3.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone3.current,
          start: "-200px bottom",
          end: "100px center",
          scrub: 3,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone4.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone4.current,
          start: "-200px bottom",
          end: "100px center",
          scrub: 4,
          markers: false,
        },
        y: 0,
      }
    );

    gsap.fromTo(
      Stone5.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone5.current,
          start: "-200px bottom",
          end: "0px center",
          scrub: 1,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone6.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone6.current,
          start: "-200px bottom",
          end: "0px center",
          scrub: 2,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone7.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone7.current,
          start: "-200px bottom",
          end: "0px center",
          scrub: 3,
          markers: false,
        },
        y: 0,
      }
    );
    gsap.fromTo(
      Stone8.current,
      { y: 200 },
      {
        scrollTrigger: {
          trigger: Stone8.current,
          start: "-200px bottom",
          end: "0px center",
          scrub: 4,
          markers: false,
        },
        y: 0,
      }
    );
  }, []);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[937px]   bg-[url(images/roadmap/bg1st.webp)] bg-no-repeat bg-cover z-[3]"
      id="roadmap-section"
    >
      <div className="nft-content h-[937px]  ">

        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute top-[15%] z-[5]">
          <img src={Banner} className="w-[200px]" alt="/" />
        </div>

        <div className="absolute top-0 right-0 z-[-1]">
          <img
            src={Light}
            ref={light}
            className="md:w-full md:h-full h-[70vh]"
            alt="/"
          />
        </div>

        <div className="absolute bottom-0 z-[2]">
          <img src={Plants} alt="/" />
        </div>

        {/* desktop version */}
        <div className="absolute bottom-[8%]">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[EffectCoverflow, FreeMode, Navigation, Thumbs]}
            className="mySwiperTeamV2 hidden 2xl:inline-grid "
          >
            <SwiperSlide className="mySwiperTeam-slide" ref={Stone1}>
              <img src={Stage1} className="w-[300px]" alt="/" />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeam-slide" ref={Stone2}>
              <img src={Stage2} className="w-[300px]" alt="/" />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeam-slide" ref={Stone3}>
              <img src={Stage3} className="w-[300px]" alt="/" />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeam-slide" ref={Stone4}>
              <img src={Stage4} className="w-[300px]" alt="/" />
            </SwiperSlide>
          </Swiper>

          {/* tablet version */}

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[EffectCoverflow, FreeMode, Thumbs, Pagination]}
            onClick={onClick}
            className="mySwiperTeamV2-tablet mt-[300px] z-[4] inline-grid 2xl:hidden"
          >
            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage1} alt="/" ref={Stone5} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage2} alt="/" ref={Stone6} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage3} alt="/" ref={Stone7} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage4} alt="/" ref={Stone8} />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div>
          <img
            src={Arrow}
            className="z-[100] absolute w-[60px] right-[20px] bottom-[35%] floating-x lg:hidden"
            alt="/"
          />
        </div> */}

        <div className="absolute left-0 top-0 z-[3] hidden 2xl:inline-grid">
          <img src={Vines} className="h-[100vh] " alt="/" />
        </div>
        {showResults ? (
          <div className="absolute bottom-5 left-0 ml-2 inline-grid 2xl:hidden z-[4] floating">
            <img src={Signage} className="w-[150px]" alt="/" />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Roadmap;
