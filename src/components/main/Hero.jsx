import React from "react";
import heroImg from "../../assets/images/hero.svg";
import {
  AiOutlineAppstore,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiFillGithub,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[18px]"
            >
              Welcome to Portfolio
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[700] text-[28px] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Tran Dinh Nhan <br />
              Frontend Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center mt-5 gap-5"
            >
              <a href="#contact">
                <button className="text-white font-[500] rounded-lg flex items-center gap-2 py-2 px-2 border border-none bg-gradient-to-r from-colorButton1 to-colorButton2 hover:bg-gradient-to-l focus:ring-4 focus:outline-none">
                  <AiOutlineMail /> Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                View portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-8 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span className="pt-[7px]">
                <AiOutlineAppstore />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              aspernatur odio hic quisquam rerum quibusdam animi ab atque.
            </p>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              className="flex items-center gap-7 mt-10"
            >
              <span className="text-smallTextColor text-[16px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="#linkedin"
                  className="text-gray-500 text-[20px] font-[600] hover:text-hoverIconColor"
                >
                  <AiOutlineLinkedin />
                </a>
              </span>
              <span>
                <a
                  href="#github"
                  className="text-gray-500 text-[20px] font-[600] hover:text-hoverIconColor"
                >
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a
                  href="#facebook"
                  className="text-gray-500 text-[20px] font-[600] hover:text-hoverIconColor"
                >
                  <AiOutlineFacebook />
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
