import React, { useRef, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "../images/socials/copy.png";
const Copyclipboard = () => {
  return (
    <div
      className="flex justify-center items-center 
                div-center w-[100%] h-[10vh] mt-2"
    >
      <div
        className="bg-stone-900/50 text-white py-2 px-5 rounded-xl 
                    flex justify-center items-center"
      >
        <span className="mr-2">Sample Address</span>
        <CopyToClipboard text="Hello!" className="z-[9999999999999]">
          <button className="cursor-pointer">
            <img src={copy} alt="/" />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Copyclipboard;
