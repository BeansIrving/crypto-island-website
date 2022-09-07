import React, { useEffect, useRef } from "react";

import Guma from "../images/roadmap/Guma.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Roadmap = () => {
//   const imgRef = useRef(null);
//   useEffect(() => {
//     gsap.fromTo(
//       imgRef.current,
//       { x: 0, rotation: 0, scale: 0 },
//       {
//         scrollTrigger: {
//           trigger: imgRef.current,
//           start: "top center",
//           end: "top 100px",
//           scrub: 1,
//           markers: true,
//         },
//         x: 600,
//         rotation: 360,
//         duration: 3,
//         scale: 3,
//       }
//     );
//   }, []);

  return (
    <div>
      {/* <div className="bg-yellow-400 w-full h-[120vh]"></div>
      <img src={Guma} ref={imgRef} className="w-[250px]" />
      <div className="bg-yellow-400 w-full h-[120vh]"></div> */}
    </div>
  );
};

export default Roadmap;
