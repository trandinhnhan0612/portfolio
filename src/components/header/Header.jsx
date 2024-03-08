import React, { useEffect, useRef, useState } from "react";
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
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const fixedHeaderHandle = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("fixed_header");
      } else {
        headerRef.current.classList.remove("fixed_header");
      }
    });
  };
  useEffect(() => {
    fixedHeaderHandle();
    return window.removeEventListener("scroll", fixedHeaderHandle);
  }, []);
  const toggleMenu = () => {
    menuRef.current.classList.toggle("show_menu");
  };
  const [active, setActive] = useState(0);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const a = e.target.getAttribute("href");
  //   const location = document.querySelector(a).offsetTop;
  //   window.scrollTo({
  //     top: location - 80,
  //     left: 0,
  //   });
  // };
  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center shadow-md"
    >
      <div className="container">
        <div className="flex justify-start md:flex items-center md:justify-between">
          <div className="hidden md:flex items-center gap-[10px]">
            <span className="bg-white w-[35px] h-[35px] rounded-full flex items-center justify-center">
              <a href="#">
                <figure>
                  <img
                    className="w-[26px] h-[26px] object-cover"
                    src="/src/assets/images/logo.png"
                    alt=""
                  />
                </figure>
              </a>
            </span>
            <div className="leading-[20px]">
              <h2 className="text-[16px] md:text-xl text-smallTextColor font-[700]">
                Tran Dinh Nhan
              </h2>
              <p className="text-smallTextColor text-[12px] md:text-[14px] font-[500]">
                Personal
              </p>
            </div>
          </div>
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <div className="logo">
              <div className="flex items-center gap-[10px] md:hidden">
                <span className="bg-black w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <figure>
                    <img
                      className="w-[26px] h-[26px] object-cover"
                      src="/src/assets/images/logo.png"
                      alt=""
                    />
                  </figure>
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-[16px] md:text-xl text-textModal font-[700]">
                    Tran Dinh Nhan
                  </h2>
                  <p className="text-textModal text-[12px] md:text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <ul className="flex items-center gap-10">
              {menuLinks.map((item, index) => (
                <li key={item.title}>
                  <a
                    className={`font-[400] md:font-[600] hover:border-b-2 hover:border-primaryColor hover:text-primaryColor ease-in duration-100 ${
                      index === active &&
                      "border-b-2 border-primaryColor text-primaryColor "
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
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor cursor-pointer md:hidden"
            >
              <AiOutlineMenu />
            </span>
            <a href="#contact">
              <button className="flex items-center text-[13px] md:text-[16px] gap-2 text-smallTextColor font-[600] max-h-[40px] rounded-lg px-2 py-2 border border-none bg-gradient-to-r from-colorButton1 to-colorButton2 hover:bg-gradient-to-l focus:ring-4 focus:outline-none">
                <RiSendPlaneLine /> Let's talk
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
