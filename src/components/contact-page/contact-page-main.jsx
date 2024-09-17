import React from "react";
import SocialNavigate from "../social-navigate";

function ContactPageMain() {
  return (
    <section className="w-full h-full pt-[60px] md:pt-[69px] flex justify-center overflow-auto">
      <SocialNavigate />
      <div className="w-full max-w-[1300px] h-full max-[1330px]:px-[15px] flex flex-col items-center justify-center">
        <img
          src="/images/contact-banner.gif"
          alt=""
          className="hidden lg:flex mt-[15px]"
        />
        <div className="w-full px-[15px] py-[30px] grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-[60px] lg:gap-[0px] lg:items-center lg:justify-center lg:border-r-[2px] lg:border-black">
            <img
              src="/images/contact-banner.gif"
              alt=""
              className="lg:hidden"
            />
            <p className="font-poppins font-semibold text-[32px] lg:text-[64px] text-black text-center">
              CONTACT
            </p>
          </div>
          <div className="flex flex-col mt-[30px] lg:mt-[0px]">
            <p className="font-poppins text-black text-[24px] text-center">
              Address
            </p>
            <p className="font-poppins text-gray-500 text-[14px] lg:text-[16px] text-center mt-[10px]">
              36/37 Mooban Kawsanha, Soi.Saimai23, Saimai Road,
              <br className="hidden md:flex" /> Tambon Saimai, Saimai, Bangkok,
              10220
            </p>
            <p className="font-poppins text-black text-[24px] text-center mt-[25px]">
              Phone
            </p>
            <p className="font-poppins text-gray-500 text-[14px] lg:text-[16px] text-center mt-[10px]">
              +66869950264
            </p>
            <p className="font-poppins text-black text-[24px] text-center mt-[25px]">
              Email
            </p>
            <p className="font-poppins text-gray-500 text-[14px] lg:text-[16px] text-center mt-[10px]">
              kitikun.po@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPageMain;
