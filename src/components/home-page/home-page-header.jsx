import React from "react";
import { useNavigate } from "react-router-dom";
import { useBurgerMenu } from "../../context/burger-menu-context";

function HomePageHeader() {
  const navigate = useNavigate();
  const { setIsHomeMenu } = useBurgerMenu();
  return (
    <div className="w-full flex items-center justify-center absolute z-10">
      <div className="w-full max-w-[1300px] h-full px-[30px] py-[15px] flex items-center justify-between">
        <button
          className="font-poppins text-gray-400 text-[20px] md:text-[26px] font-bold"
          onClick={() => {
            navigate("/");
          }}
        >
          MY PORTFOLIO
        </button>

        {/** Mobile Menu Section Start */}
        <button
          className="md:hidden"
          onClick={() => {
            setIsHomeMenu(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-[24px] h-[24px] text-white"
          >
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {/** Mobile Menu Section End */}

        {/** Laptop Menu Section Start */}
        <div className="hidden md:flex items-center gap-[30px]">
          <button className="">
            <p className="font-poppins text-[18px] text-yellow-500 font-semibold">
              HOME
            </p>
          </button>
          <button
            className=""
            onClick={() => {
              navigate("/about");
            }}
          >
            <p className="font-poppins text-[18px] text-gray-400 font-medium hover:text-yellow-500">
              ABOUT
            </p>
          </button>
          <button
            className=""
            onClick={() => {
              navigate("/project");
            }}
          >
            <p className="font-poppins text-[18px] text-gray-400 font-medium hover:text-yellow-500">
              PROJECT
            </p>
          </button>
          <button
            className=""
            onClick={() => {
              navigate("/contact");
            }}
          >
            <p className="font-poppins text-[18px] text-gray-400 font-medium hover:text-yellow-500">
              CONTACT
            </p>
          </button>
        </div>
        {/** Laptop Menu Section End */}
      </div>
    </div>
  );
}

export default HomePageHeader;
