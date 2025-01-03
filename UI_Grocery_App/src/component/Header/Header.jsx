import React, { useEffect, useState } from "react";
import NutriNest from "../../assets/images/NutriNest.png";

import compass from "../../assets/images/compass.png";
import offers from "../../assets/images/offers.png";
import smartbasket from "../../assets/images/smartbasket.png";
import { FaCircleUser } from "react-icons/fa6";

import {
  loginToggleSwitch,
  profileToggleSwitch,
  scrolltoggle,
  toggleSwitch,
} from "../../store/Feature/Ui_component/toggleVisibility";
import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./HeaderComponent/CategoryButton";
import ShopByCategory from "./HeaderComponent/ShopByCategory";
import LiItmes from "./HeaderComponent/LiItmes";
import BasketButon from "./HeaderComponent/BasketButon";
import LoginPage from "./HeaderComponent/LoginPage";
import SearchButton from "./HeaderComponent/SearchButton";
import Profile from "./HeaderComponent/Profile";

function Header() {
  const { loginToggle, profileToggle } = useSelector(
    (state) => state.toggleVisibility
  );
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);
  const { login } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      dispatch(scrolltoggle(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    dispatch(toggleSwitch());
  };
  const { loading } = useSelector((state) => state.loading);
  return (
    <>
      <header className="bg-white shadow-lg  ">
        <div className="flex overflow-hidden bg-[#5E9400] h-1 ">
          <div className={` h-full w-[50%] ${loading && "left-loader"}`}></div>
          <div
            className={`  h-full w-[50%] ${loading && "right-loader"}`}
          ></div>
        </div>
        {isVisible && (
          <div
            className="absolute inset-y-[-150px] inset-x-0 bg-black opacity-50 z-20"
            onClick={onClose}
          ></div>
        )}
        <div className=" flex flex-row justify-center">
          <div className="grid grid-rows-2  w-[1135px] ">
            <div className="flex flex-row gap-3 my-2 relative">
              <div>
                <img
                  src={NutriNest}
                  className="h-10 "
                  alt="NutriNest logo"
                />
              </div>
              <SearchButton />
              <div className="gap-x-10 h-full mx-3">
                <button className="button-bg-color rounded-md flex justify-center flex-row space-x-2 p-2 h-full w-52">
                  <img src={compass} className="w-5 h-5" alt="compass icon" />
                  <span className="text-sm">Search Location</span>
                </button>
              </div>
              <div>
                {!login ? (
                  <button
                    className="bg-black rounded-md px-6 py-1"
                    onClick={() => {
                      dispatch(loginToggleSwitch());
                    }}
                  >
                    <h2 className="text-white text-[10px] font-semibold ">
                      Login/ Sign Up
                    </h2>
                  </button>
                ) : (
                  <button
                    className={`rounded-md ${profileToggle ? "bg-black text-white" : "bg-[#EEEEEE]"} h-full w-[64px] flex justify-center items-center`}
                    onClick={() => {
                      dispatch(profileToggleSwitch());
                    }}
                  >
                    <FaCircleUser className="text-[21px] " />
                  </button>
                )}
              </div>
              <div> {loginToggle && <LoginPage />}</div>
              <div className="absolute top-11 right-20 z-10">
                {profileToggle && <Profile />}
              </div>
              <BasketButon />
            </div>

            <div className="flex flex-row mt-2 justify-between relative">
              <CategoryButton />
              <ShopByCategory />
              <LiItmes />
              <div className="flex flex-row justify-between w-40">
                <button>
                  <a href="/">
                    <img
                      className="w-16 h-6 mx-1"
                      src={smartbasket}
                      alt="smart basket img"
                    />
                  </a>
                </button>
                <button>
                  <a href="/">
                    <img
                      src={offers}
                      className="w-16 h-[26px] mx-2"
                      alt="offer img"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
