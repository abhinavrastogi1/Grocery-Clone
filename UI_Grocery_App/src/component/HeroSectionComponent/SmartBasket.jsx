import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardLg from "../../Small_component/Cards/CardLg";

function SmartBasket() {
  return (
    <div className=" bg-[#F7F7F7] p-5 mt-8 ">
      <div className="flex justify-between px-3 mt-2">
        <div className="text-black font-bold text-[20px] h-full">
          <h1>My Smart Basket</h1>
        </div>
        <div className="flex items-center ">
          <Link to="">
            <span className=" text-gray-600 underline hover:text-black mx-5 font-semibold text-[15px]  ">
              View All
            </span>
          </Link>

          <div>
            <button className="rounded-md shadow-lg p-2 bg-white mx-3 ">
              <IoIosArrowBack className="text-xl" />
            </button>
            <button className="rounded-md shadow-lg p-2 bg-white">
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex  gap-[10px]  ">
        <CardLg />
        <CardLg />
        <CardLg />
        <CardLg />
        
      </div>
    </div>
  );
}
export default SmartBasket;