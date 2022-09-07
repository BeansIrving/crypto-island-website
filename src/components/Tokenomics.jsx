import React from "react";
import Guma from "../images/tokenomics/Guma.png";
import Banner from "../images/tokenomics/banner.png";

const Tokenomics = () => {
  return (
    <div className=" w-full h-[150vh] md:h-[150vh] xl:h-[70vh] bg-cover bg-[url(images/tokenomics/BG.png)] bg-no-repeat flex justify-center py-20">
      <div className=" w-full max-w-[1240px] flex py-20 items-center flex-wrap justify-center ">

        <div className="order-2" id="section-tokenomics">
          <img src={Guma} className="md:w-[400px] w-[350px] rounded-3xl" alt="/"/>
        </div>

        <div className=" flex flex-col lg:flex-col md:justify-center justify-center items-center md:items-center py-10 md:pl-10 gap-10 flex-wrap p-5 order-1 " id="section-tokenomics">
          <div>
            <img src={Banner} className="w-[400px]" alt="/"/>
          </div>
          <div className="p-[60px] bg-[url(images/tokenomics/placeholder2.png)] 
          bg-contain bg-no-repeat bg-center h-[300px] text-center flex items-center 
          font-bold text-[16px] text-[#744123] xsm:h-[400px] xsm:p-[100px] 
          sm:p-[140px] md:p-[100px] md:bg-[url(images/tokenomics/placeholder.png)] 
          lg:w-[700px] lg:p-5 lg:h-[150px]">
            <h1 >
              A private sale will be held for players and supporters to buy
              $GUMA which will jumpstart their CryptoIsland journeys! More plans
              to list $GUMA on A-list exchange sites are laid in adherence to
              CryptoIsland's roadmap!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
