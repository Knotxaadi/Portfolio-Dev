import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const Navcontent = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  const [glass, setGlass] = useState("");
  const [show, setShow] = useState("hidden");
  const [bars, setBars] = useState("bars");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setGlass("glass");
      } else {
        setGlass("");
      }
    });
  }, []);

  const handleshow = () => {
    show == "" ? setShow("hidden") : setShow("");
    bars == "xmark" ? setBars("bars") : setBars("xmark");
  };

  return (
    <div className="navbar fixed top-[0%] left-[0%] w-full h-[10vh] z-10">
      <div className="relative w-full h-full">
        <nav
          className={`h-[5vw]  py-5 max-sm:py-8 ${glass} duration-500 ease-in-out`}
        >
          <div className="nav h-full flex items-center justify-between px-15 max-sm:px-2 py-2 max-[724px]:justify-between gap-15">
            <div className="nav-name font-['Space_Grotesk'] font-bold color_text text-2xl">
              <a href="">&lt;DevXaadi/&gt;</a>
            </div>
            <div className="buton">
              <ul className="text-gray-500 flex gap-7 items-center max-[724px]:hidden">
                {Navcontent.map((i, id) => {
                  return (
                    <li key={id}>
                      <a href={`#${i.name}`}>{i.name}</a>
                    </li>
                  );
                })}
                <div className="text-[#00eaff] font-['Space_Grotesk'] font-bold border p-2 rounded-xl">
                  <a href="#Contact">Let's Talk</a>
                </div>
              </ul>
              <div className="min-[724px]:hidden">
                <i
                  onClick={handleshow}
                  className={`fa-solid fa-${bars} text-2xl text-white`}
                ></i>
              </div>
            </div>
          </div>
        </nav>
        <div
          className={`annav absolute w-full h-full ${show} duration-500 ease-in-out transition-all`}
        >
          <div className="glass  w-full p-5 ">
            <ul className="text-gray-500 flex gap-2 flex-col">
              {Navcontent.map((i, id) => {
                return (
                  <li key={id}>
                    <a onClick={handleshow} href={`#${i.name}`}>
                      {i.name}
                    </a>
                  </li>
                );
              })}
              <div className="text-[#00eaff] font-['Space_Grotesk'] font-bold border p-2 rounded-xl w-full">
                <a onClick={handleshow} href="#Contact">
                  Let's Talk
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
