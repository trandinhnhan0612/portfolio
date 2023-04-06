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
      <div className="max-w-[600px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-lg p-5">
        <div>
          <figure>
            <img className="rounded-lg" src={project.imgUrl} alt="" />
          </figure>
        </div>
        <div>
          <h2 className="text-textModal font-[700] text-2xl my-3">
            {project.title}
          </h2>
          <p className="text-gray-400 font-[500] text-[15px] leading-7">
            {project.description}
          </p>
        </div>
        <div className="flex items-center gap-x-3 flex-wrap mt-4">
          <h4 className="text-textModal font-[600] text-[18px]">
            Technologies:
          </h4>
          {project.technologies.map((item, index) => (
            <span
              key={index}
              className="text-textModal bg-gray-200 px-3 py-1 text-[14px] rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
        <button
          onClick={() => closeModal()}
          className="text-white text-[26px] absolute top-6 right-6"
        >
          <FaRegTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default ModalProject;
