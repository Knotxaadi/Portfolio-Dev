import React from "react";

const stack = [
  {
    tech: "Developer",
    passion: "endless",
    coffee: "required",
    bugs: "temporary",
  },
];

const Codes = ({ Tech }) => {
  return (
    <>
      <div>
        <div className="p-2 rounded-xl bg-[#21242c80]">
          {Tech == "developer" ? (
            <div>
              <p className="text-gray-400">// My approach</p>
              <h2>
                {" "}
                <span className="text-[#a64dff]">const</span>{" "}
                <span>developer</span> <span className="text-gray-500">=</span>{" "}
                {"{"}
              </h2>
              <div className="px-4 text-[14px]">
                <div>
                  <span className="text-[#00eaff]">passion</span>:
                  <span className="text-[#4ade80]">'endless'</span>,
                </div>
                <div>
                  <span className="text-[#00eaff]">coffee</span>:
                  <span className="text-[#4ade80]">'required'</span>,
                </div>
                <div>
                  <span className="text-[#00eaff]">bugs</span>:
                  <span className="text-[#4ade80]">'temporary'</span>,
                </div>
              </div>
              <p>{"}"}</p>
            </div>
          ) : (
            <div>
              <p className="text-gray-400">// Let's work together</p>
              <h2 className="text-white">
                {" "}
                <span className="text-[#a64dff]">function</span>{" "}
                <span className="text-[#00eaff]">collaborate</span>
                <span className="text-white">()</span> {"{"}
              </h2>
              <div className="px-4 text-[14px]">
                <div>
                  <span className="text-[#a64dff]">return</span>:
                  <span className="text-[#4ade80]">'amazing things'</span>
                  <span className="text-white">;</span>
                </div>
              </div>
              <p className="text-white">{"}"}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Codes;
