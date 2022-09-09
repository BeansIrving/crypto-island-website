import React, { useEffect, useRef, useState } from "react";

// images

import Light from "../images/roadmap/light2nd.webp";
import Vines from "../images/roadmap/vinesfront.webp";
import Stage1 from "../images/roadmap/Stage1_1.webp";
import Stage2 from "../images/roadmap/Stage2_1.webp";
import Stage3 from "../images/roadmap/Stage3_1.webp";
import Stage4 from "../images/roadmap/Stage4_1.webp";
import Plants from "../images/roadmap/Plants.webp";
import Banner from "../images/roadmap/roadmap.webp";

// Swiper Import

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, EffectCoverflow } from "swiper";
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
  }, []);

  const images = [Stage1, Stage2, Stage3, Stage4];
  const [imgIndex, setImgIndex] = useState(0);
  const [image, setImage] = useState(Stage1);

  const onLeftChangeHandler = () => {
    if (imgIndex > 0) {
      setImgIndex(imgIndex - 1);
    }
    console.log(imgIndex);
  };

  const onRightChangeHandler = () => {
    if (imgIndex < 3) {
      setImgIndex(imgIndex + 1);
    }
    console.log(imgIndex);
  };

  useEffect(() => {
    setImage(images[imgIndex]);
  }, [imgIndex]);

  return (
    <div
      className="flex justify-center items-center w-[100%] h-[100vh]  bg-[url(images/roadmap/bg1st.webp)] bg-no-repeat bg-cover z-[3]"
      id="roadmap-section"
    >
      <div className="nft-content h-[100vh] ">
        <div className="absolute top-0 mt-[200px]">
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
        <div>
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
            className="mySwiperTeamV2 mt-[300px] hidden 2xl:inline-grid"
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
            grabCursor={true}
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
            className="mySwiperTeamV2-tablet mt-[300px] z-[4] inline-grid 2xl:hidden"
          >
            <SwiperSlide className="mySwiperTeamV2-tablet-slide z-[]">
              <img src={Stage1} alt="/" ref={Stone1} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage2} alt="/" ref={Stone2} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage3} alt="/" ref={Stone3} />
            </SwiperSlide>

            <SwiperSlide className="mySwiperTeamV2-tablet-slide">
              <img src={Stage4} alt="/" ref={Stone4} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* 
      <div className="w-full max-w-[1240px] h-full justify-end flex-col p-[60px] z-[-2] lg:flex hidden items-center">
        <div className="flex justify-center gap-10">
          <img src={Stage1} className="w-[300px]" ref={Stone1} alt="/" />
          <img src={Stage2} className="w-[300px]" ref={Stone2} alt="/" />
          <img src={Stage3} className="w-[300px]" ref={Stone3} alt="/" />
          <img src={Stage4} className="w-[300px]" ref={Stone4} alt="/" />
        </div>
      </div> */}

        {/* <div className="w-full max-w-[1240px] h-full justify-end flex-col p-[60px] z-[100] lg:hidden flex">
        <div className="flex justify-center gap-2 items-center px-4">
          <h1
            className="font-bold text-3xl text-[#eb7a45] p-2 bg-[#ffffffe0] rounded-2xl text-center pb-4 shadow-xl select-none"
            onClick={onLeftChangeHandler}
          >
            &lt;
          </h1>
          <img src={image} className="w-[300px] select-none" alt="/" />
          <h1
            className="font-bold text-3xl text-[#eb7a45] p-2 bg-[#ffffffe0] rounded-2xl text-center pb-4 shadow-xl select-none"
            onClick={onRightChangeHandler}
          >
            &gt;
          </h1>
        </div>
      </div> */}
        <div className="absolute left-0 top-0 z-[3] hidden 2xl:inline-grid">
          <img src={Vines} className="h-[100vh] " alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
