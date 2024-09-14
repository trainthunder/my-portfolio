import React from "react";
import SocialNavigate from "../social-navigate";
import Resume from "../../../src/assets/files/Resume(15_9_2024).pdf";

function AboutPageMain() {
  const skills = [
    { name: "HTML", percentage: 95 },
    { name: "CSS", percentage: 95 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "Daisy UI", percentage: 95 },
    { name: "Material UI", percentage: 95 },
    { name: "JavaSript", percentage: 85 },
    { name: "ReactJS", percentage: 85 },
    { name: "NodeJS", percentage: 80 },
    { name: "ExpressJS", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "Figma", percentage: 80 },
    { name: "Github", percentage: 95 },
  ];
  return (
    <section className="w-full h-full pt-[60px] md:pt-[69px] flex flex-col items-center justify-center relative">
      <SocialNavigate />
      <div className="w-full max-w-[1300px] h-full max-[1330px]:px-[15px] flex items-center justify-center flex-col lg:flex-row lg:gap-[80px] mt-[90px] mb-[50px] lg:mb-[90px]">
        <img
          src="/images/my-image.jpg"
          alt=""
          className="min-[535px]:w-[500px] min-[535px]:h-[350px] rounded-[16px]"
        />
        <div className="w-full h-full max-w-[450px] md:max-w-[575px] flex flex-col mt-[50px] gap-[30px]">
          <p className="font-poppins text-gray-400 text-[20px] font-semibold">
            - INTRODUCTION
          </p>
          <p className="font-poppins text-white font-bold text-[30px] md:text-[42px]">
            FRONTEND DEVELOPER
          </p>
          <p className="font-poppins text-gray-400 text-[20px] font-medium">
            I am a frontend software developing looking for a junior role in a
            software development agency. I am familiar with React and
            JavaScript. However, I am open to working on any tech stack and am
            eager to learn and contribute to high-quality software.
          </p>
          <div className="w-full h-full flex items-center justify-center">
            <a href={Resume} download="Kitikun_Resume" target="_blank">
              <button className="w-full h-[55px] px-[15px] rounded-[8px] flex items-center justify-center gap-[20px] bg-yellow-500 hover:ring-yellow-700 hover:ring-[5px] hover:ring-offset-4 hover:ring-offset-yellow-600 duration-300 animate-bounce">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-[24px] h-[24px]"
                >
                  <path d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="font-poppins text-[20px] text-black font-medium">
                  Download My Resume
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1300px] h-full max-[1330px]:px-[15px] flex flex-col items-center justify-center">
        <p className="font-poppins text-gray-400 font-semibold text-[20px]">
          -SKILLS
        </p>
        <p className="font-popins text-white font-semibold text-[30px] md:text-[42px] mt-[15px]">
          My Specialities are in
        </p>
        <div className="w-full h-full p-[40px] grid md:grid-cols-2 gap-[15px]">
          {skills.map((skill, index) => (
            <div key={index} className="w-full max-w-[640px] mb-[30px]">
              <div className="flex justify-between items-center">
                <span className="font-poppins text-white text-[16px] font-medium">
                  {skill.name}
                </span>
                <span className="font-poppins font-medium text-[16px] text-gray-400">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-[10px] mt-2">
                <div
                  className="bg-yellow-500 h-[10px] rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPageMain;
