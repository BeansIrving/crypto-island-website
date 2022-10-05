import React from "react";

// Images

import Partner from "../images/partners/Partners.webp";
import Cmc from "../images/partners/cmc.webp";
import Coingecko from "../images/partners/coingecko.webp";
import Bsc from "../images/partners/bsc.webp";
import IRWT from "../images/partners/IRWT.png";
import KFSG from "../images/partners/KFSG.png";

const Partners = () => {
  return (
    <div
      className="w-full h-[1000px] md:h-[80vh] 
      bg-[url('images/backgrounds/bg-tokenomics-p2.webp')] bg-cover bg-center bg-no-repeat flex justify-center
      "
      id="partner-section"
    >
      <div className="nft-content w-full h-[1000px] md:h-[80vh]">
        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute left-0 bottom-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] rotate-180 h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div className="w-full max-w-[1300px] h-full flex flex-col justify-center items-center p-10 gap-10">
          <div>
            <img src={Partner} className="w-[250px] h-auto" alt="/" />
          </div>
          <div
            className="flex flex-row flex-wrap justify-center items-center 
                    w-full gap-10 md:gap-5 lg:gap-20 p-5 "
          >
            <img
              src={Coingecko}
              className="md:w-[250px] w-[150px] h-auto md:order-1 order-2"
              alt="/"
            />
            <img
              src={Cmc}
              className="lg:w-[150px] w-[80px] h-auto md:order-2 order-1"
              alt="/"
            />
            <img
              src={Bsc}
              className="w-[150px] h-auto md:order-3 order-3"
              alt="/"
            />
            <img
              src={IRWT}
              className=" w-[150px] h-auto md:order-3 order-3"
              alt="/"
            />
            <img
              src={KFSG}
              className=" w-[150px] h-auto md:order-3 order-3"
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
