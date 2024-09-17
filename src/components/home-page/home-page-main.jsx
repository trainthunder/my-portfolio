import React from "react";
import SocialNavigate from "../social-navigate";

function HomePageMain() {
  return (
    <section className="w-full h-full pt-[60px] md:pt-[66px] flex items-center justify-center relative">
      <SocialNavigate />
      <div className="flex flex-col items-center justify-center ">
        <p className="font-poppins text-[24px] font-semibold text-black">
          HI I'M
        </p>
        <hr className="hidden min-[470px]:flex border-[3px] border-yellow-500 w-full my-[10px]" />
        <p className="font-poppins text-[52px] text-black text-center leading-[55px] font-bold mt-[10px] min-[470px]:mt-0">
          KITIKUN POLGARN
        </p>
        <p className="font-poppins text-[24px] text-yellow-500 mt-[30px] text-center font-semibold">
          A FRONTEND <br className="min-[470px]:hidden" />
          DEVELOPER
        </p>
      </div>
    </section>
  );
}

export default HomePageMain;
