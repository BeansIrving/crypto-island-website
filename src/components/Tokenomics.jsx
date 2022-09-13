import React, { useEffect, useRef } from "react";
import BuyTax from "../images/tokenomics/BuyTax.png";
import SellTax from "../images/tokenomics/SellTax.png";
import SymbolOne from "../images/tokenomics/SymbolOne.png";
import SymbolTwo from "../images/tokenomics/SymbolTwo.png";
// images

import Guma from "../images/tokenomics/guma.webp";
import Banner from "../images/tokenomics/banner.webp";


const Tokenomics = () => {

  return (
    <div
      className=" w-full h-[155vh] md:h-[140vh] lg:h-[140vh] xl:h-[100vh] bg-cover bg-[url(images/backgrounds/bg-tokenomics.webp)] bg-no-repeat flex justify-center py-20"
      id="tokenomics-section"
    >
      <div className=" w-full max-w-[1240px] flex py-[150px] items-center flex-wrap justify-center lg:px-10 p-5">
        <div className="lg:order-2 order-1" id="section-tokenomics">
          <img
            src={Guma}
            className="md:w-[400px] w-[320px] rounded-3xl"
            alt="/"
          />
        </div>

        <div
          className="  order-2 lg:order-1 flex flex-col lg:flex-col md:justify-center justify-center items-center md:items-center md:pl-10 flex-wrap px-5  "
          id="section-tokenomics"
        >
          <div className="md:my-[50px]">
            <img src={Banner} className="w-[400px]" alt="/" />
          </div>
          <div className="sm:w-[500px]  sm:h-[400px] w-[300px] h-[300px] flex-col gap-4 flex relative">
            <div className="w-full flex flex-col justify-center items-center font-[geliofasolada] text-white text-2xl text-center tracking-wider gap-2 z-[1]">
              <img src={BuyTax} className="w-[150px] md:w-[200px]" alt="/" />
              <h1 className=" drop-shadow-lg">
                <span className="text-3xl">
                  3
                </span>
                % Marketing
              </h1>
              <h1 className=" drop-shadow-lg">
                <span className="text-3xl">1</span>% Liquidity
              </h1>
              <h1 className=" drop-shadow-lg">
                <span className="text-3xl">1</span>% Buyback, Burn + Lotteries &
                Competitions
              </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center font-[geliofasolada]  text-white text-2xl text-center tracking-wider gap-2 z-[1]">
              <img src={SellTax} className="w-[150px] md:w-[200px]" alt="/" />
              <h1 className=" drop-shadow-lg">
                <span className="text-3xl">3</span>% Marketing
              </h1>
              <h1 className=" drop-shadow-lg">
                <span className="text-3xl">2</span>%Liquidity
              </h1>
            </div>

            <img
              src={SymbolOne}
              className="absolute w-[80px] md:w-[130px] z-[0] md:right-[20px] right-[0px]"
            />
            <img
              src={SymbolTwo}
              className="absolute w-[80px] md:w-[130px] z-[0] md:left-[20px] left-[0px] md:bottom-[20px] bottom-[0px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
