import React, { useEffect } from "react";
import { useBurgerMenu } from "../../context/burger-menu-context";
import { useNavigate } from "react-router-dom";

function ProjectPageBurgerMenu() {
  const { isProjectMenu, setIsProjectMenu } = useBurgerMenu();
  const navigate = useNavigate();

  {
    /** When Window Min Window Width 768px Close BurgerMenu Start */
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsProjectMenu(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsProjectMenu]);
  {
    /** When Window Min Window Width 768px Close BurgerMenu End */
  }

  return (
    <>
      {isProjectMenu === true ? (
        <div className="w-full h-full bg-black fixed top-0 left-0 md:hidden flex flex-col items-center pt-[60px] z-20">
          <button
            className="absolute top-5 right-8"
            onClick={() => {
              setIsProjectMenu(false);
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
              <path d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="font-poppins text-[36px] text-gray-400 font-semibold">
            MY PORTFOLIO
          </p>
          <div className="w-full h-full flex flex-col items-center mt-[50px] gap-[20px]">
            <button
              className=""
              onClick={() => {
                navigate("/");
              }}
            >
              <p className="font-poppins text-[24px] text-gray-400 font-medium hover:text-yellow-500">
                HOME
              </p>
            </button>
            <button
              className=""
              onClick={() => {
                navigate("/about");
              }}
            >
              <p className="font-poppins text-[24px] text-gray-400 font-medium hover:text-yellow-500">
                ABOUT
              </p>
            </button>
            <button
              className=""
              onClick={() => {
                setIsProjectMenu(false);
              }}
            >
              <p className="font-poppins text-[24px] text-yellow-500 font-semibold">
                PROJECT
              </p>
            </button>
            <button
              className=""
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p className="font-poppins text-[24px] text-gray-400 font-medium hover:text-yellow-500">
                CONTACT
              </p>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ProjectPageBurgerMenu;
