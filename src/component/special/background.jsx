import React from "react";

const Background = () => {
  return (
    <div className="absolute -z-10 top-0 left-0">
      <div className="relative">
        <div className="ball w-[10vw] h-[10vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full bg-[#00eaff] blur-[90px] absolute top-[20%] left-[15%]"></div>
        <div className="ball w-[10vw] h-[10vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full bg-[#a64dff] blur-[90px]  absolute top-[65%] right-[15%]"></div>
        <div className="ball w-[10vw] h-[10vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full bg-[#a64dff] blur-[150px] absolute top-[200%] left-[15%]"></div>
        <div className="ball w-[10vw] h-[10vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full bg-[#00eaff] blur-[150px] absolute top-[270%] right-[15%]"></div>
        <div className="ball w-[10vw] h-[10vw] max-md:w-[30vw] max-md:h-[30vw] rounded-full bg-[#00eaff] blur-[150px] absolute top-[400%] right-[50%]"></div>
        <div className="text-[12px] text-[#a64dff] absolute top-[70%] left-[10%] opacity-30 textani">
          &lt;creativity/&gt;
        </div>
        <div className="text-[12px] text-[#00eaff] absolute top-[15%] right-[10%] opacity-30 textani">
          const passion = 'code';
        </div>
        <div className="w-screen h-screen flex justify-center items-center ">
          <div className="line rounded-full border border-gray-300 opacity-10 w-[25vw] h-[25vw] "></div>
          <div className="line rounded-full border border-gray-300 opacity-5 w-[45vw] h-[45vw]  absolute"></div>
        </div>
      </div>
    </div>
  );
};

export default Background;
