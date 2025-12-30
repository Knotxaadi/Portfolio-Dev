import React, { useEffect } from "react";
import "../special/showDetails.css";

const ShowDetails = ({ items }) => {
  return (
    <div className="details fixed top-0 h-screen w-screen  backdrop-blur-[7px] z-50 transition-all duration-300 ease-in-out">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[60%] h-[90%] max-sm:w-[95%] bg-[#101010]/95 rounded-2xl shadow-2xl overflow-scroll">
          {items.img !== "" ? (
            <div>
              <div className="img w-full h-75 max-md:h-[70%] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top rounded-[16px_16px_0px_0px] group-hover:scale-110 transition-all duration-400 ease-in-out"
                  src={items.img}
                  alt=""
                />
                <div className="absolute bottom-0 flex gap-2 px-2 py-5 text-[14px] bg-black/40 w-full h-full items-end ">
                  {items.language.map((i, id) => {
                    return (
                      <span
                        key={id}
                        className="bg-[#00eaff]/30  backdrop-blur-2xl text-[#00eaff] py-1 px-3 rounded-2xl h-7 "
                      >
                        {i}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="p-8 max-sm:p-2 flex flex-col gap-4">
            <div className="flex justify-between items-center ">
              <h1 className="color_text text-3xl max-sm:text-xl font-bold font-['Space_Grotesk']">
                {items.Name}
              </h1>
              <div className="flex gap-2">
                <a
                  href={items.github}
                  target="_blank"
                  className="  text-[#00eaff] px-2 py-1 border rounded-xl"
                >
                  <i className="fa-brands fa-github"></i>
                  Code
                </a>

                {items.link !== "" ? (
                  <a
                    href={items.link}
                    target="_blank"
                    className="  text-black bg-[#00eaff] shadow-[0_0_10px_#00eaff] px-2 py-1 rounded-xl"
                  >
                    <i className="fa-solid fa-arrow-down  -rotate-130 "></i>
                    Live Demo
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <p className="text-gray-400 w-[80%]">{items.brief}</p>
            <div className="flex justify-evenly">
              <div className="w-[32%] bg-[#080a0ccc] border border-gray-300/20 rounded-xl p-2 flex flex-col justify-center items-center gap-1 shadow-[0_0_5px_black]">
                <i className="fa-solid fa-people-group text-[#00eaff] text-xl"></i>
                <p className=" text-gray-400">Role</p>
                <h3 className="text-white font-bold font-['Space_Grotesk']">
                  {items.Role}
                </h3>
              </div>
              <div className="w-[32%] bg-[#080a0ccc] border border-gray-300/20 rounded-xl p-2 flex flex-col justify-center items-center gap-1 shadow-[0_0_5px_black]">
                <i class="fa-regular fa-calendar text-[#00eaff] text-xl"></i>
                <p className=" text-gray-400">Duration</p>
                <h3 className="text-white font-bold font-['Space_Grotesk']">
                  {items.Duration}
                </h3>
              </div>
              <div className="w-[32%] bg-[#080a0ccc] border border-gray-300/20 rounded-xl p-2 flex flex-col justify-center items-center gap-1 shadow-[0_0_5px_black]">
                <i class="fa-solid fa-layer-group text-[#00eaff] text-xl"></i>
                <p className=" text-gray-400">Team Size</p>
                <h3 className="text-white font-bold font-['Space_Grotesk']">
                  {items.Team_size}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#00eaff]">// About This Project</h1>
              <p className="text-gray-400">{items.aboutpro}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-[#00eaff]">// Key Features</h1>
              <ul className="list-disc list-inside marker:text-[#00eaff] marker:text-2xl text-gray-400 flex flex-wrap">
                {items.feature.map((i, id) => {
                  return (
                    <li className="w-[50%] p-2" key={id}>
                      {i}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
