import React from "react";
import BuyTax from "../images/tokenomics/BuyTax.webp";
import SellTax from "../images/tokenomics/SellTax.webp";

const TokenomicsP2 = () => {
  return (
    <div
      className="flex justify-center items-center
              h-[700px] w-[100%]
              bg-[url('images/backgrounds/bg-tokenomics-p2.webp')] bg-cover bg-center bg-no-repeat"
    >
      <div className="nft-content  h-[700px] w-[100%]">
        <div className="absolute left-0 top-[0%] z-[5] bg-[url('images/nft/Borderupper.webp')] h-[120px] lg:h-[90px] w-[100%] bg-cover bg-center bg-no-repeat"></div>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10 mt-[5rem]">
          <div className="w-full flex flex-col justify-center items-center font-[geliofasolada] text-white text-2xl text-center tracking-wider gap-2 z-[1]">
            <img src={BuyTax} className="w-[150px] md:w-[200px]" alt="/" />
            <h1 className="text-shadow">
              <span className="text-3xl text-shadow">3</span>% Marketing
            </h1>
            <h1 className="text-shadow">
              <span className="text-3xl ">1</span>% Liquidity
            </h1>
            <h1 className=" text-shadow">
              <span className="text-3xl">1</span>% Buyback, Burn + Lotteries &
              Competitions
            </h1>
          </div>

          <div className="w-full flex flex-col justify-center items-center font-[geliofasolada] text-white text-2xl text-center tracking-wider gap-2 z-[1] mx-2">
            <img src={SellTax} className="w-[150px] md:w-[200px]" alt="/" />
            <h1 className="text-shadow">
              <span className="text-3xl">3</span>% Marketing
            </h1>
            <h1 className="text-shadow">
              <span className="text-3xl">2</span>%Liquidity
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsP2;
