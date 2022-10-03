import React, { useEffect, useRef } from "react";

import SymbolOne from "../images/tokenomics/SymbolOne.webp";
import SymbolTwo from "../images/tokenomics/SymbolTwo.webp";
// images

import Guma from "../images/tokenomics/guma.webp";
import Banner from "../images/tokenomics/banner.webp";

const Tokenomics = () => {
  return (
    <div
      className=" w-full h-[160vh] md:h-[170vh] lg:h-[120vh] 
      bg-cover bg-[url(images/backgrounds/bg-tokenomics.webp)] 
      bg-no-repeat bg-bottom flex justify-center py-20"
      id="tokenomics-section"
    >
      <div className="nft-content h-[140vh] md:h-[140vh] lg:h-[120vh]">
        <div className="my-[80px] absolute top-0 hidden lg:inline-block">
          <img src={Banner} className="w-[400px]" alt="/" />
        </div>
        <div className=" w-full max-w-[1240px] flex py-[150px] items-center flex-wrap justify-center lg:px-10 p-5 mt-10">
          <div className="" id="section-tokenomics">
            <div className="my-[50px] inline-block lg:hidden">
              <img src={Banner} className="w-[400px]" alt="/" />
            </div>

            <div className="flex justify-center items-center">
              <img
                src={Guma}
                className="md:w-[400px] w-[320px] rounded-3xl"
                alt="/"
              />
            </div>
          </div>

          <div
            className="flex flex-col lg:flex-col md:justify-center justify-center items-center md:items-center md:pl-10 flex-wrap px-5  "
            id="section-tokenomics"
          >
            <div
              className=" w-[auto] h-[auto]
          md:w-[500px]  md:h-[400px] flex-col flex relative mt-[5rem] lg:mt-[8rem]"
            >
              {/* <div className="flex justify-center items-start">
                <div className="w-full flex flex-col justify-center items-center font-[geliofasolada] text-white text-2xl text-center tracking-wider gap-2 z-[1]">
                  <img
                    src={BuyTax}
                    className="w-[150px] md:w-[200px]"
                    alt="/"
                  />
                  <h1 className="text-shadow">
                    <span className="text-3xl text-shadow">3</span>% Marketing
                  </h1>
                  <h1 className="text-shadow">
                    <span className="text-3xl ">1</span>% Liquidity
                  </h1>
                  <h1 className=" text-shadow">
                    <span className="text-3xl">1</span>% Buyback, Burn +
                    Lotteries & Competitions
                  </h1>
                </div>

                <div className="w-full flex flex-col justify-center items-center font-[geliofasolada] text-white text-2xl text-center tracking-wider gap-2 z-[1] mx-2">
                  <img
                    src={SellTax}
                    className="w-[150px] md:w-[200px]"
                    alt="/"
                  />
                  <h1 className="text-shadow">
                    <span className="text-3xl">3</span>% Marketing
                  </h1>
                  <h1 className="text-shadow">
                    <span className="text-3xl">2</span>%Liquidity
                  </h1>
                </div>
              </div> */}

              <div className="flex flex-col justify-center items-start 
                              font-[geliofasolada] 
                              text-white text-2xl text-left tracking-wider 
                              gap-[1rem] z-[1] my-[5rem] mx-0">
                <h1 className="text-shadow">
                  <span className="text-3xl"></span>Total supply 270 million
                  tokens
                </h1>
                <h1 className="text-shadow">
                  <span className="text-3xl"></span>liquidity locked
                </h1>
              </div>
              {/* <div className="w-full flex flex-col justify-center items-center font-[geliofasolada]  text-white text-2xl text-center tracking-wider gap-2 z-[1]">
            
            </div> */}

              <img
                src={SymbolOne}
                className="absolute w-[80px] z-[0] bottom-[80px] sm:bottom-[80px] md:right-[80px] right-[0px] opacity-[0.5] sm:opacity-[1]"
              />

              <img
                src={SymbolTwo}
                className="absolute w-[80px] md:w-[130px] z-[0] md:left-[20px] left-[0px] md:bottom-[-100px] bottom-[0px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
