import React, { useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";

const menuLinks = [
  {
    link: "#about",
    title: "About",
  },
  {
    link: "#skill",
    title: "Skill",
  },
  {
    link: "#project",
    title: "Project",
  },
  {
    link: "#contact",
    title: "Contact",
  },
];
const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className="bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center">
              <figure>
                <img
                  className="w-[26px] h-[26px] object-cover"
                  src="/src/assets/images/logo.png"
                  alt=""
                />
              </figure>
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
              {menuLinks.map((item, index) => (
                <li key={item.title}>
                  <a
                    className={`text-smallTextColor font-[600] ${
                      index === active &&
                      "border-b-2 text-primaryColor border-primaryColor "
                    }`}
                    onClick={() => setActive(index)}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] max-h-[40px] rounded-lg px-2 py-2 border border-none bg-gradient-to-r from-colorButton1 to-colorButton2 hover:bg-gradient-to-l focus:ring-4 focus:outline-none">
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
