import React, { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const fadeIn = (element) => {
    gsap.from(element, {
      y: -200,
    });
    gsap.to(element, {
      y: -10,
      duration: 2,
      ease: "bounce",
    });
  
  };

  useEffect(() => {
    fadeIn("#fadeIn");
  }, []);

  return (
    <div
      className="w-[100%] h-[300px] z-[10] lg:bg-[url('images/navbar/navbar.png')] bg-contain bg-no-repeat bg-center fixed lg:absolute drop-shadow-lg sm:px-0 lg:px-10"
      id="fadeIn"
    >
      <div className="px-2 flex justify-end p-[15px] lg:justify-center lg:items-center lg:w-full lg:h-full">
        <div className="flex items-center justify-center">
          <ul className="hidden lg:flex mt-[7%]">
            <li>Gameplay</li>
            <li>Ecosystem</li>
            <li>NFT's</li>
            <li>Staking</li>
            <li>Roadmap</li>
            <li>Token Sale</li>
            <li>Partners</li>
          </ul>
        </div>

        <div
          className="lg:hidden bg-[#b88339] border-[#774e17] border-2 p-1 rounded-md"
          onClick={handleClick}
        >
          {!nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
                fill="#fff"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
                fill="#fff"
              />
            </svg>
          )}
        </div>
      </div>
      <ul
        className={
          !nav
            ? "hidden animate-left margin-right"
            : "absolute text-center bg-zinc-200 w-[100vw] h-[110vh] px-8 top-0 left-0 z-[-1]"
        }
      >
        <div className="absolute w-full left-0 navbar-li">
          <li className="border-b-2 border-zinc-300 w-full">Home</li>
          <li className="border-b-2 border-zinc-300 w-full">About</li>
          <li className="border-b-2 border-zinc-300 w-full">Support</li>
          <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
          <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
