import React from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              N
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Tran Dinh Nhan
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a className="text-smallTextColor font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#service">
                  Service
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-smallTextColor font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] max-h-[40px] rounded-lg px-2 py-2 border border-solid border-smallTextColor hover:bg-smallTextColor hover:text-white ease-in duration-300">
              <RiSendPlaneLine /> Let's talk
            </button>
            <span className="text-2xl text-smallTextColor cursor-pointer md:hidden">
              <AiOutlineMenu />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
