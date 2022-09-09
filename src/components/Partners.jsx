import React from "react";

// Images 

import Partner from "../images/partners/Partners.webp";
import Cmc from "../images/partners/cmc.webp";
import Coingecko from "../images/partners/coingecko.webp";
import Bsc from "../images/partners/bsc.webp";

const Partners = () => {
  return (
    <div
      className="w-full lg:h-[56.2vh] h-[90vh] bg-[url(images/partners/partnermobile.webp)] mv:bg-[url(images/partners/partnerbg.webp)] 
      bg-cover bg-top mv:bg-center mv:bg-cover bg-no-repeat flex justify-center p-5"
      id="partner-section"
    >
      <div className="w-full max-w-[1240px] h-full flex flex-col justify-center items-center p-10 gap-10">
        <div>
          <img src={Partner} className="w-[250px] h-auto" alt="/" />
        </div>
        <div className="flex justify-center w-full gap-10 lg:gap-20 md:gap-5 items-center flex-row flex-wrap">
          <img src={Cmc} className="lg:w-[250px] w-[150px] h-auto" alt="/" />
          <img
            src={Coingecko}
            className="md:w-[250px] w-[150px] h-auto"
            alt="/"
          />
          <img src={Bsc} className="lg:w-[250px] w-[150px] h-auto" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
