import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Light from "../images/roadmap/light2nd.png";
import Vines from "../images/roadmap/vinesfront.png";
import Stage1 from "../images/roadmap/stage1.png";
import Stage2 from "../images/roadmap/stage2.png";
import Stage3 from "../images/roadmap/stage3.png";
import Stage4 from "../images/roadmap/stage4.png";
import Plants from "../images/roadmap/Plants.png";
import Banner from "../images/roadmap/roadmap.webp";

gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
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
          start: "-600px center",
          end: "top center",
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
          start: "-600px center",
          end: "top center",
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
          start: "-600px center",
          end: "top center",
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
          start: "-600px center",
          end: "top center",
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

  }, [imgIndex])


  return (
    <div className="w-full h-[100vh]  bg-[url(images/roadmap/bg1st.png)] bg-no-repeat bg-cover relative z-[3] flex justify-center">
      <div className="absolute right-0 z-[-1]">
        <img src={Light} ref={light} className="md:w-full md:h-full h-[70vh]" />
      </div>

      <div className="absolute left-0 top-0 z-[0] md:flex hidden">
        <img src={Vines} className="h-[100vh] " />
      </div>

      <div className="absolute bottom-0 z-[1]">
        <img src={Plants} />
      </div>

      <div className="absolute mt-20">
          <img src={Banner} className="w-[200px]"/>
        </div>

      <div className="w-full max-w-[1240px] h-full justify-end flex-col p-[60px] z-[-2] lg:flex hidden items-center">

        <div className="flex justify-center gap-10">
          <img src={Stage1} className="w-[300px]" ref={Stone1} />
          <img src={Stage2} className="w-[300px]" ref={Stone2} />
          <img src={Stage3} className="w-[300px]" ref={Stone3} />
          <img src={Stage4} className="w-[300px]" ref={Stone4} />
        </div>
      </div>

      <div className="w-full max-w-[1240px] h-full justify-end flex-col p-[60px] z-[100] lg:hidden flex">
        <div className="flex justify-center gap-2 items-center px-4">
          <h1
            className="font-bold text-3xl text-[#eb7a45] p-2 bg-[#ffffffe0] rounded-2xl text-center pb-4 shadow-xl select-none"
            onClick={onLeftChangeHandler}
          >
            &lt;
          </h1>
          <img src={image} className="w-[300px] select-none" />
          <h1
            className="font-bold text-3xl text-[#eb7a45] p-2 bg-[#ffffffe0] rounded-2xl text-center pb-4 shadow-xl select-none"
            onClick={onRightChangeHandler}
          >
            &gt;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;