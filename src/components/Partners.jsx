import React from "react";

// Images

import Partner from "../images/partners/Partners.webp";
import Cmc from "../images/partners/cmc.webp";
import Coingecko from "../images/partners/coingecko.webp";
import Bsc from "../images/partners/bsc.webp";
import IRWT from "../images/partners/IRWT.png";
import KFSG from "../images/partners/KFSG.png";

import borderright from "../images/character/RightBorder.webp";
import borderleft from "../images/character/Left_border.webp";

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
        
        <div className="absolute right-0 top-[0%] z-[4] rotate-180 border-lr">
          <img className="w-[100%]" src={borderleft} alt="/" />
        </div>

        <div className="absolute left-0 top-[0%] z-[4] border-lr">
          <img className="w-[100%]" src={borderleft} alt="/" />
        </div>

        <div className="w-full max-w-[1300px] h-full flex flex-col justify-center items-center p-10 gap-10">
          <div>
            <img src={Partner} className="w-[250px] h-auto" alt="/" />
          </div>
          <div
            className="flex flex-row flex-wrap justify-center items-center 
                    w-full gap-10 md:gap-5 lg:gap-20 p-5 "
          >
            <img src={Cmc} className="lg:w-[150px] w-[80px] h-auto " alt="/" />

            <img
              src={Coingecko}
              className="md:w-[250px] w-[150px] h-auto "
              alt="/"
            />

            <img src={Bsc} className="w-[150px] h-auto" alt="/" />
            <img src={IRWT} className=" w-[150px] h-auto " alt="/" />
            <img src={KFSG} className=" w-[150px] h-auto " alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
