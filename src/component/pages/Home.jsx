import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="Home"
        className=" Home min-h-screen text-white scroll-mt-24 overflow-x-hidden"
      >
        <div className="flex justify-center items-center h-screen w-full">
          <div className="contenttt w-[50%] max-md:w-[90%] flex flex-col gap-5 items-center">
            <div className="text-[#00eaff] max-[448px]:text-[14px]">
              // Hello World, I'm
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="font-['Space_Grotesk'] font-bold text-[82px] max-[732px]:text-[70px] max-[448px]:text-[50px] color_text p-0 max-[448px]:py-2">
                Creative
              </div>
              <div className="flex font-['Space_Grotesk'] font-bold text-[82px] max-[1219px]:text-[50px] max-[732px]:text-[50px] max-[590px]:text-[40px] max-[448px]:text-[40px] max-sm:text-[35px] p-0 -mt-5">
                <div className="typewriter">Web Developer </div>
                <span className="showing font-light text-[#00eaff]">|</span>
              </div>
            </div>
            <div className="text-gray-500 font-bold text-center max-md:text-[14px]">
              I craft beautiful, functional, and user-centered digital
              experiences that live on the web. Turning ideas into interactive
              realities.
            </div>
            <div className="flex gap-7 max-sm:flex-col">
              <a
                href="#Projects"
                className="py-3 px-7  rounded-2xl bg-[#00eaff] animate-pulse text-black font-bold shadow-[1px_1px_15px_#00eaff]"
              >
                View My Work
              </a>

              <a
                href="#Contact"
                className="py-3 px-7 rounded-2xl bg-[#21242c80] border border-[#21242c] text-white font-bold"
              >
                Get In Touch
              </a>
            </div>
            <div className="icons flex gap-2">
              <a href="https://github.com/Knotxaadi" target="_blank">
                <i className="fa-brands fa-github text-3xl text-gray-300"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shashank-somwanshi-2565a7380"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin text-3xl text-gray-300"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
