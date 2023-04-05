import React from "react";

const Skills = () => {
  return (
    <section className="pt-0" id="service">
      <div className="container pt-10">
        <div className="p-3">
          <h1
            data-aos="fade-right"
            data-aos-duration="1500"
            className="text-smallTextColor text-[32px] font-[700]"
          >
            Skills
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-gray-400 text-[32px] font-[700]"
          >
            My top skills
          </h2>
          <div className="mx-auto mt-5 grid grid-cols-2 gap-y-8 max-w-[900px]">
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/frontend.jpeg" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">
                  HTML/CSS(SCSS)/JAVASCRIPT
                </h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about front end language: HTML, CSS(SCSS),
                  Javascript
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/react.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">REACTJS</h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about reactjs, redux, redux thunk, redux toolkit
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/jquery.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">JQUERY</h5>
                <p className="text-gray-400 font-[400]">
                  Basic knowledge about JQuery
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/tailwind.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">TAILWINDCSS</h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about CSS library Tailwindcss
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/bootstrap.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">Bootstrap</h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about CSS library bootstrap
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/material.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">Material UI</h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about CSS library material ui
                </p>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/styledCom.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">
                  STYLED-COMPONENTS
                </h5>
                <p className="text-gray-400 font-[400]">
                  Knowledge about CSS library styled-components
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex gap-x-3 items-center w-[360px] h-[110px] border border-solid border-gray-300 p-3 rounded-lg hover:bg-gray-100"
            >
              <figure className="w-[50px] h-[50px]">
                <img src="/src/assets/images/responsive.png" alt="" />
              </figure>
              <div>
                <h5 className="text-smallTextColor font-[700]">
                  RESPONSIVE WEB DESIGN
                </h5>
                <p className="text-gray-400 font-[400]">
                  Basic knowledge about responsove web design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
