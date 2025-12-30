import React, { useState, useEffect } from "react";
import skd from "../../assets/projects/skd.png";
import aisql from "../../assets/projects/aisql.png";
import ShowDetails from "../special/ShowDetails";

const projectss = [
  {
    img: skd,
    Name: "Sanskrutik Kaladarpan",
    language: ["React", "Tailwind", "Node.js"],
    brief:
      "Sanskrutik Kaladarpan is a digital stage dedicated to the preservation, celebration, and promotion of Indian culture, arts, and traditions.",
    github: "https://github.com/Knotxaadi/sanskrutik-kaladarpan",
    link: "https://www.sanskrutikkaladarpan.com/",
    Role: "Full Stack Dev",
    Duration: "5 Days",
    Team_size: "1 Member",
    aboutpro:
      "Sanskrutik Kaladarpan is a cultural website created to present and preserve the richness of Indian traditions, arts, and cultural expressions in a digital form. The platform acts as a window into cultural programs and artistic initiatives, offering visitors a respectful and engaging space to explore heritage through modern web design while staying true to traditional values.",
    feature: [
      "Cultural Program Display",
      "Photo & Video Gallery",
      "Cultural Information",
      "Online Form Submission",
    ],
  },
  {
    img: aisql,
    Name: "AI-SQL",
    language: ["Python", "Html", "Css", "JavaScript"],
    brief:
      "AI-SQL is an intuitive, beginner-friendly tool that merges the power of Artificial Intelligence with SQL database queries.",
    github: "https://github.com/Knotxaadi/AI-SQL",
    link: "",
    Role: "Full Stack Dev",
    Duration: "1 Month",
    Team_size: "2 Member",
    aboutpro:
      "AI-SQL is an intuitive, beginner-friendly tool that merges the power of Artificial Intelligence with SQL database queries. Developed as my 12th-grade Computer Science practical project, AI-SQL allows users to input natural language questions, which are intelligently converted into SQL commands for seamless database interaction.",
    feature: [
      "Accepts natural language input (e.g., Show me all students with marks above 90)",
      "Automatically generates accurate SQL syntax",
      "Simple Python + MySQL setup (perfect for students)",
      "Handles common SQL errors gracefully with helpful messages",
      "Can be extended for larger datasets or more complex queries",
    ],
  },
];

const Projects = () => {
  const [item, setItem] = useState(null);
  const [clicked, setClicked] = useState(false);

  const detailed = (ele) => {
    clicked == "true"
      ? (setClicked(false), setItem(null))
      : (setClicked(true), setItem(ele));
  };

  const Cancels = () => {
    setItem(null);
    setClicked(false);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        Cancels();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [clicked]);

  return (
    <>
      <div id="Projects">
        <div className="py-30 relative">
          <h1 className="text-[#00eaff] text-center">//Projects</h1>
          <h1 className="font-['Space_Grotesk'] font-bold text-5xl text-white text-center p-2">
            Featured <span className="color_text">Work</span>
          </h1>
          <div className="flex justify-center">
            <p className="text-center w-[50%] max-md:w-[90%] text-gray-400">
              A selection of projects that showcase my skills and passion for
              creating exceptional digital experiences. Click on any project to
              learn more.
            </p>
          </div>
          <div className="project p-2">
            <div className="flex flex-wrap justify-center w-full gap-5">
              {projectss.map((ele, id) => {
                return (
                  <div
                    key={id}
                    onClick={() => detailed(ele)}
                    className="group w-[40%] max-[872px]:w-full border border-amber-50/20 rounded-2xl flex  justify-center flex-wrap items-center hover:border-[#00eaff] duration-200 transition-all ease-in-out hover:cursor-pointer"
                  >
                    {ele.img !== "" ? (
                      <div className="img w-full h-50 relative overflow-hidden">
                        <img
                          className="w-full h-full object-cover object-top rounded-[16px_16px_0px_0px] group-hover:scale-110 transition-all duration-400 ease-in-out"
                          src={ele.img}
                          alt=""
                        />
                        <div className="absolute bottom-0 flex gap-2 p-2 text-[14px] bg-black/40 w-full h-full items-end">
                          {ele.language.map((i, id) => {
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
                    ) : (
                      <></>
                    )}
                    <div className="bg-[#0e111599] w-full rounded-[0px_0px_16px_16px] p-6 flex flex-col gap-3">
                      <div className="flex justify-between">
                        <h1 className="text-white group-hover:text-[#00eaff] font-['Space_Grotesk'] font-bold text-2xl">
                          {ele.Name}
                        </h1>
                        <i className="fa-solid fa-arrow-down text-gray-400 group-hover:text-[#00eaff] -rotate-130 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200"></i>
                      </div>
                      <p className="text-gray-400">{ele.brief}</p>
                      <div className="flex gap-2">
                        <a
                          href={ele.github}
                          target="_blank"
                          className="hover:text-[#00eaff] text-gray-400 transition-all duration-200 ease-in-out"
                        >
                          <i className="fa-brands fa-github text-2xl"></i>
                        </a>

                        {ele.link !== "" ? (
                          <a
                            href={ele.link}
                            target="_blank"
                            className="flex justify-center items-center gap-2 hover:text-[#00eaff] text-gray-300 transition-all duration-200 ease-in-out"
                          >
                            <i className="fa-solid fa-arrow-down  -rotate-130 "></i>
                            <span className="">Live Demo</span>
                          </a>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {clicked && <ShowDetails items={item} />}
          {clicked && (
            <div className="fixed z-70 top-[7%] right-[21%] max-sm:right-5">
              <button
                onClick={Cancels}
                className="group bg-[#0e1115]/80 p-3 cursor-pointer rounded-full flex justify-center items-center hover:bg-[#0e111599]"
              >
                <i className="fa-solid fa-xmark text-gray-300 text-xl group-hover:text-white"></i>
              </button>
            </div>
          )}
          <div className="flex justify-center items-center pt-5">
            <a
              href="https://github.com/Knotxaadi"
              target="_blank"
              className="text-[#00eaff] font-['Space_Grotesk'] text-xl border px-4 py-3 rounded-xl hover:bg-[#00eaff]/10 duration-150 transition-all ease-in-out"
            >
              <i className="fa-brands fa-github"></i>
              View All Projects On Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
