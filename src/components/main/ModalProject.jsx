import React from "react";
import projects from "../../assets/data/projectData";
import { FaRegTimesCircle } from "react-icons/fa";

const ModalProject = ({ closeModal, activeId }) => {
  const project = projects.find((item) => item.id === activeId);
  return (
    <div
      onClick={() => closeModal()}
      className="w-full h-full fixed top-0 left-0 z-10 bg-gray-200 bg-opacity-20"
    >
      <div className="w-11/12 md:max-w-[600px] md:w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-lg p-5">
        <div>
          <figure>
            <img className="rounded-lg" src={project.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-textModal font-[600] md:font-[700] text-[18px] md:text-2xl my-3">
            {project.title}
          </h2>
          <p className="text-gray-500 font-[400] text-[13px] md:text-[15px] leading-5 md:leading-7">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-x-3 gap-y-2 flex-wrap mt-4">
          <h4 className="text-textModal font-[600] text-[15px] md:text-[18px]">
            Technologies:
          </h4>
          {project.technologies.map((item, index) => (
            <span
              key={index}
              className="text-textModal bg-gray-200 px-3 py-1 text-[12px] md:text-[14px] rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
        <button
          onClick={() => closeModal()}
          className="text-colorButton1 text-[26px] absolute top-6 right-6"
        >
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default ModalProject;
