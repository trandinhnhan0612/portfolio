import React, { useState } from "react";
import data from "../../assets/data/projectData";
import ModalProject from "./ModalProject";

const Project = () => {
  const [nextItems, setNextItems] = useState(6);
  const [showModal, setShowModal] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const handleShowModal = (id) => {
    setShowModal(true);
    setActiveId(id);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleLoadMore = () => {
    setNextItems((prev) => prev + 3);
  };
  return (
    <section id="project">
      <div className="container">
        <div className="mb-7 sm:mb-0">
          <h3
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-headingColor text-center tracking-[16px] font-[700] text-[32px]"
          >
            MY RECENT PROJECT
          </h3>
        </div>
        <div className="flex gap-4 items-center mt-8 flex-wrap">
          {data?.slice(0, nextItems)?.map((projects, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="200"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-lg h-[243px] object-cover"
                  src={projects.imgUrl}
                  alt=""
                />
              </figure>
              <div className="w-full h-full bg-gray-200 bg-opacity-20 hidden group-hover:block z-[5] absolute top-0 left-0">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => handleShowModal(projects.id)}
                    className="text-textModal bg-white hover:bg-gradient-to-r from-colorButton1 to-colorButton2 hover:text-white py-2 px-4 rounded-lg font-[500] ease-in duration-200"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-7">
          {nextItems < data.length && data.length > 6 && (
            <button
              onClick={handleLoadMore}
              className="text-smallTextColor bg-smallTextColor py-2 px-4 rounded-lg font-[500] border border-none bg-gradient-to-r from-colorButton1 to-colorButton2 hover:bg-gradient-to-l focus:ring-4 focus:outline-none"
            >
              Load more
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <ModalProject closeModal={handleCloseModal} activeId={activeId} />
      )}
    </section>
  );
};

export default Project;
