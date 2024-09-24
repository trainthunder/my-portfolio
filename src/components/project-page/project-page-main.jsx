import React, { useState } from "react";
import SocialNavigate from "../social-navigate";
import ProjectsData from "../../data/projects";

function ProjectPageMain() {
  const [isSelected, setIsSelected] = useState("frontend");

  let datas = ProjectsData;

  const filterProject = datas.filter((items) => {
    const filterByCategory = items.category.includes(isSelected);
    return filterByCategory;
  });

  const countFrontend = datas.filter((items) => {
    return items.category.includes("frontend");
  }).length;

  const countBackend = datas.filter((items) => {
    return items.category.includes("backend");
  }).length;

  const countFullStack = datas.filter((items) => {
    return items.category.includes("fullstack");
  }).length;

  return (
    <section className="w-full h-full pt-[60px] md:pt-[69px] flex flex-col items-center relative">
      <SocialNavigate />
      <div className="w-full max-w-[1300px] max-[1330px]:px-[15px] flex flex-col items-center justify-center mt-[90px] gap-[30px] mb-[30px]">
        <p className="font-poppins text-gray-500 font-semibold text-[16px]">
          - PORTFOLIO
        </p>
        <p className="font-poppins text-black font-semibold text-[32px] text-center">
          MY COLLECTIONS
        </p>
        <div className="w-full max-w-[770px]  flex flex-col">
          <p className="font-poppins text-[14px] lg:text-[16px] text-gray-500 font-medium text-center leading-7">
            I focus on developing customizable web and mobile applications to
            meet a variety of needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver a superior user experience.
          </p>
          <div className="w-full flex items-center justify-center mt-[30px] min-[425px]:gap-[10px] lg:gap-[20px]">
            {/** Frontend Button Start */}
            {isSelected === "frontend" ? (
              <button
                className="flex items-center justify-center p-[15px] bg-black rounded-[8px]"
                onClick={() => {
                  setIsSelected("frontend");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]">
                  <img
                    src="/icons/front-end-white.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-semibold text-yellow-500">
                    Frontend
                  </span>
                </div>
              </button>
            ) : (
              <button
                className="flex items-center justify-center p-[15px] border-[1px] rounded-[8px]"
                onClick={() => {
                  setIsSelected("frontend");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]">
                  <img
                    src="/icons/front-end-black.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-medium text-gray-500">
                    Frontend
                  </span>
                </div>
              </button>
            )}
            {/** Frontend Button End */}

            {/** Backend Button Start */}
            {isSelected === "backend" ? (
              <button
                className="flex items-center justify-center p-[15px] bg-black rounded-[8px]"
                onClick={() => {
                  setIsSelected("backend");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]">
                  <img
                    src="/icons/back-end-white.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-semibold text-yellow-500">
                    Backend
                  </span>
                </div>
              </button>
            ) : (
              <button
                className="flex items-center justify-center p-[15px] border-[1px] rounded-[8px]"
                onClick={() => {
                  setIsSelected("backend");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]">
                  <img
                    src="/icons/back-end-black.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-medium text-gray-500">
                    Backend
                  </span>
                </div>
              </button>
            )}
            {/** Backend Button End */}

            {/** Full-Stack Button Start */}
            {isSelected === "fullstack" ? (
              <button
                className="flex items-center justify-center p-[15px] bg-black rounded-[8px]"
                onClick={() => {
                  setIsSelected("fullstack");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]]">
                  <img
                    src="/icons/full-stack-white.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-semibold text-yellow-500">
                    Fullstack
                  </span>
                </div>
              </button>
            ) : (
              <button
                className="flex items-center justify-center p-[15px] border-[1px] rounded-[8px]"
                onClick={() => {
                  setIsSelected("fullstack");
                }}
              >
                <div className="flex items-center justify-center gap-[5px] min-[375px]:gap-[10px] min-[425px]:gap-[15px]">
                  <img
                    src="/icons/full-stack-black.png"
                    alt=""
                    className="w-[24px] h-[24px]"
                  />
                  <span className="font-poppins text-[12px] md:text-[14px] font-medium text-gray-500">
                    Fullstack
                  </span>
                </div>
              </button>
            )}
            {/** Full-Stack Button End */}
          </div>
        </div>
      </div>

      {/** Project Card Section Start*/}
      <div className="w-full max-w-[1300px] px-[15px] md:px-[55px] lg:px-[65px] grid grid-cols-1 gap-[20px] md:grid-cols-2 lg:grid-cols-3 mb-[60px]">
        {filterProject.length ? (
          filterProject.map((items, index) => {
            return (
              <div
                className="w-full md:max-w-[450px] lg:max-w-[375px] p-[15px] bg-black rounded-[8px]"
                key={index}
              >
                <div className="w-full h-full flex flex-col gap-[10px]">
                  <div className="relative">
                    <img src={items.image} alt="" className="" />
                    <div className="hover:ease-in-out absolute opacity-0 hover:opacity-100 bg-yellow-500 inset-0 z-5 flex items-center justify-center gap-[20px]">
                      {/** Navigate To Github Start */}
                      <a href={items.github} target="_blank">
                        <button className="w-[24px] h-[24px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                          <img src="images/github-logo.png" alt="" />
                        </button>
                      </a>
                      {/** Navigate To Github End */}

                      {/** Navigate To Demo Web Page Start */}
                      <a href={items.vercel} target="_blank">
                        <button className="w-[24px] h-[24px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-[24px] h-[24px] text-white"
                          >
                            <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          </svg>
                        </button>
                      </a>

                      {/** Navigate To Demo Web Page End */}
                    </div>
                  </div>
                  <p className="font-poppins font-medium text-[18px] text-white">
                    {items.title}
                  </p>
                  <div className="flex flex-wrap gap-[10px]">
                    {items.techStack.map((e, index) => {
                      return (
                        <div
                          className="p-[10px] bg-gray-700 rounded-[14px]"
                          key={index}
                        >
                          <p className="font-poppins font-medium text-[14px] text-gray-400">
                            {e}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="bg-transparent flex items-center justify-center">
            <p className="font-poppins font-semibold text-[24px] text-gray-500">
              No Project Right Now!
            </p>
          </div>
        )}
      </div>
      {/** Project Card Section End */}

      {/** Count Project Section Start */}
      <div className="w-full max-w-[1300px] h-full px-[15px] mb-[60px]">
        <div className="w-full h-full flex flex-col gap-[15px] sm:grid sm:grid-cols-2 md:grid-cols-3 md:px-[30px]">
          {/** Count Frontend Project Card Start */}
          <div className="w-full h-full p-[30px] bg-black rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col items-center gap-[15px]">
            <img
              src="/icons/frontend-icon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-poppins font-semibold text-[24px] text-white">
              Frontend Project
            </p>
            <p className="font-poppins text-[16px] text-yellow-500">
              {countFrontend} projects
            </p>
          </div>
          {/** Count Frontend Project Card End */}

          {/** Count Backend Project Card Start */}
          <div className="w-full h-full p-[30px] bg-black rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col items-center gap-[15px]">
            <img
              src="/icons/backend-icon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-poppins font-semibold text-[24px] text-white">
              Backend Project
            </p>
            <p className="font-poppins text-[16px] text-yellow-500">
              {countBackend} projects
            </p>
          </div>
          {/** Count Backend Project Card End */}

          {/** Count Full-Stack Project Card Start */}
          <div className="w-full h-full p-[30px] bg-black rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex flex-col items-center gap-[15px]">
            <img
              src="/icons/fullstack-icon.png"
              alt=""
              className="w-[48px] h-[48px]"
            />
            <p className="font-poppins font-semibold text-[24px] text-white">
              Full Stack Project
            </p>
            <p className="font-poppins text-[16px] text-yellow-500">
              {countFullStack} projects
            </p>
          </div>
          {/** Count Full-Stack Project Card End */}
        </div>
      </div>
      {/** Count Project Section End */}
    </section>
  );
}

export default ProjectPageMain;
