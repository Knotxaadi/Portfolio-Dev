import React from "react";
import Codes from "../special/Codes";

const ab = [
  {
    label: "code",
    head: "Clean Code",
    para: "Writing maintainable, scalable, and well-documented code",
  },
  {
    label: "paint-roller",
    head: "UI/UX Design",
    para: "Creating beautiful interfaces with focus on user experience",
  },
  {
    label: "cloud-bolt",
    head: "Performance",
    para: "Optimizing for speed and seamless interactions",
  },
  {
    label: "terminal",
    head: "Full Stack",
    para: "Building complete solutions from frontend to backend",
  },
];

const skills = [
  {
    language: "React",
    per: "90%",
  },
  {
    language: "Node.js",
    per: "70%",
  },
  {
    language: "CSS/Tailwind",
    per: "96%",
  },
  {
    language: "MongoDB",
    per: "80%",
  },
  {
    language: "Python",
    per: "88%",
  },
];

const About = () => {
  return (
    <>
      <div id="About" className=" scroll-mt-2">
        <div className="w-full">
          <div className=" py-40 max-md:py-10 px-20 max-md:px-2 text-white scroll-smooth">
            <div className="flex gap-5 justify-center items-center max-[954px]:flex-wrap">
              <div className="left-side flex flex-col gap-5">
                <p className="text-[#00eaff]">// About me</p>
                <h2 className="text-5xl font-bold font-['Space_Grotesk']">
                  Passionate about creating{" "}
                  <span className="color_text">digital experiences</span>
                </h2>
                <p className="text-gray-300">
                  I’m <span className="color_text font-bold">Shashank</span>,
                  shaping ideas into interfaces, one line of code at a time.
                  Driven by curiosity and clarity, I work where structure meets
                  imagination. For me, development is not just
                  problem-solving—it’s quiet storytelling.
                </p>
                <p className="text-gray-400">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open source, or enjoying a good
                  cup of coffee while sketching new UI concepts.
                </p>
                <Codes Tech="developer" />
              </div>
              <div className="right-side">
                <div className="flex flex-wrap gap-3 max-[992px]:gap-1">
                  {ab.map((i, id) => {
                    return (
                      <div
                        key={id}
                        className="bg-[#0e111599] p-8 max-sm:p-2 rounded-2xl w-[49%] max-sm:w-[48%] border border-amber-50/10 flex flex-col gap-3 hover:border-[#00eaff] ease-in-out duration-500 transition-all"
                      >
                        <div>
                          <i
                            className={`fa-solid fa-${i.label} text-[#00eaff] text-3xl max-sm:text-2xl`}
                          ></i>
                        </div>
                        <h2 className="font-bold">{i.head}</h2>
                        <p className="text-[12px] max-sm:text-[10px] text-gray-400">
                          {i.para}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="skilss mt-2">
                  <div className="bg-[#0e111599] p-3 rounded-2xl shadow-2xl border border-amber-50/20">
                    <p>// Tech Stack</p>
                    <div className="stack flex flex-col gap-5 p-2">
                      {skills.map((i, id) => {
                        return (
                          <div key={id}>
                            <div className="flex justify-between p-1">
                              <h2>{i.language}</h2>
                              <p className="text-gray-400">{i.per}</p>
                            </div>
                            <div className="w-full h-2 rounded-2xl bg-gray-800">
                              <div
                                className=" h-2 rounded-2xl bg-[linear-gradient(123deg,#00eaff,#a64dff)] transition-all duration-700"
                                style={{ width: i.per }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
