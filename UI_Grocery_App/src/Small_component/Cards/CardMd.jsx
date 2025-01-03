import React from "react";
import { useNavigate } from "react-router-dom";

function CardMd({ type, offer, img }) {
  return (
    <div
      className="h-[197px] w-[263px]  hover:shadow-2xl  rounded-lg shadow-md p-2 pl-0"
    >
      <div className="h-[133px] ">
        <img
          src={img}
          className="w-full h-full rounded-tr-lg rounded-br-lg contain-content"
        />
      </div>
      <div>
        <p className="ml-4 text-[#171717]">{type}</p>
      </div>
      <div className="flex">
        <span className="bg-[#DD1F26] h-5 px-[1px] mt-1 w-1"></span>
        <h1 className="font-bold text-xl ml-3 text-[#1B1914] ">{offer} </h1>
      </div>
    </div>
  );
}

export default CardMd;
