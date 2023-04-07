import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCall } from "react-icons/tb";
import { FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="pb-10">
      <div className="container">
        <h1
          data-aos="fade-down"
          data-aos-duration="1500"
          className="text-gray-500 text-center tracking-[20px] text-[28px] md:text-[32px] font-[700] mb-8"
        >
          GET IN TOUCH
        </h1>
        <div className="md:flex justify-between items-center gap-x-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1800"
            className="w-full md:w-1/2 h-[300px] sm:h-[450px] shadow-xl p-2"
          >
            <h2 className="text-headingColor tracking-[2px] text-[22px] md:text-[28px] font-[600] mb-5">
              Contact me
            </h2>
            <div className=" w-full flex items-center gap-x-5 mb-6">
              <AiOutlineMail className="text-[24px] md:text-[28px] text-primaryColor" />
              <div>
                <h4 className="text-[16px] md:text-[18px] font-[500] mb-1">
                  Email
                </h4>
                <a
                  className="text-primaryColor text-[14px]"
                  href="mailto:trandinhnhan9958@gmail.com"
                >
                  trandinhnhan9958@gmail.com
                </a>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-5 mb-6">
              <TbPhoneCall className="text-[24px] md:text-[28px] text-primaryColor" />
              <div>
                <h4 className="text-[16px] md:text-[18px] font-[500] mb-1">
                  Phone
                </h4>
                <a
                  className="text-primaryColor text-[14px]"
                  href="tel:0933775603"
                >
                  0933775603
                </a>
              </div>
            </div>
            <div className=" w-full flex items-center gap-x-5">
              <FiMapPin className="text-[28px] text-primaryColor" />
              <div>
                <h4 className="text-[16px] md:text-[18px] font-[500] mb-1">
                  Address
                </h4>
                <p className="text-primaryColor text-[14px]">
                  350/6 Nguyen Van Luong, Ward 16, Go Vap District, Ho Chi Minh
                  City
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1800"
            className="w-full mt-5 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-bodyColor shadow-xl px-4 lg:px-8 py-8 rounded-lg"
          >
            <form className="w-full">
              <h2 className="text-headingColor tracking-[2px] text-[22px] md:text-[28px] font-[600]">
                Write your something
              </h2>
              <div className="relative my-6">
                <label className="absolute top-[-11px] left-2 px-2 text-smallTextColor bg-bodyColor">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none focus:border-colorButton1 rounded-[5px] text-smallTextColor bg-inherit border border-white"
                />
              </div>
              <div className="relative my-6">
                <label className="absolute top-[-11px] left-2 px-2 text-smallTextColor bg-bodyColor">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none focus:border-colorButton1 rounded-[5px] text-smallTextColor bg-inherit border border-white"
                />
              </div>
              <div className="relative mb-4">
                <label className="absolute top-[-11px] left-2 px-2 text-smallTextColor bg-bodyColor">
                  Message
                </label>
                <textarea
                  type="text"
                  placeholder="Write your message"
                  rows={5}
                  className="w-full p-3 focus:outline-none focus:border-colorButton1 rounded-[5px] text-smallTextColor bg-inherit border border-white"
                />
              </div>
              <button className="text-white text-[15px] md:text-[18px] font-[600] rounded-full flex justify-center items-center gap-2 py-3 px-4 border border-none bg-gradient-to-r from-colorButton1 to-colorButton2 hover:bg-gradient-to-l focus:ring-4">
                Send message
                <RiSendPlaneFill className="pt-[2px] text-[20px] md:text-[24px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
