import React from "react";

function SocialNavigate() {
  return (
    <div className="hidden md:flex w-[45px] absolute left-[30px] bottom-[30px]  flex-col gap-[15px]">
      <a
        href="https://github.com/trainthunder"
        target="_blank"
        className="w-[45px] h-[45px] rounded-[8px] border-[1px] border-gray-500 flex items-center justify-center bg-black hover:bg-gray-600"
      >
        <img
          src="images/github-logo.png"
          alt=""
          className="w-[24px] h-[24px]"
        />
      </a>
      <a
        href="https://linkedin.com/in/kitikun-polgarn"
        target="_blank"
        className="w-[45px] h-[45px] rounded-[8px] border-[1px] border-gray-500 bg-blue-500 flex items-center justify-center hover:bg-sky-300"
      >
        <img
          src="images/linkedin-logo.png"
          alt=""
          className="w-[30px] h-[30px]"
        />
      </a>
    </div>
  );
}

export default SocialNavigate;
