import React from "react";
import Codes from "../special/Codes";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  const onSubmit = async (data) => {
    const req = await fetch("https://portfolio-dev-backend-eta.vercel.app/", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await req.text();
    console.log(data, res);
  };

  return (
    <div id="Contact" className="py-20">
      <div className="flex justify-center items-center flex-col gap-2 py-20 ">
        <h1 className="text-[#00eaff]">//Contact</h1>
        <h1 className="text-white text-5xl max-sm:text-3xl font-['Space_Grotesk'] font-bold">
          Let's <span className="color_text">Connect</span>
        </h1>
        <p className="text-gray-300 w-[50%] max-md:w-[90%] text-center">
          Have a project in mind or just want to say hello? I'd love to hear
          from you. Let's create something amazing together.
        </p>
      </div>
      <div className="flex justify-evenly max-[816px]:flex-col p-5 gap-5">
        <div className="left-side w-[30%] max-[816px]:w-full">
          <div className="pb-6 space-y-6">
            <div className="flex gap-2  items-center ">
              <div className="p-4 bg-[#0e111599] w-14 h-14 flex justify-center items-center rounded-xl border border-amber-50/10">
                <i className="fa-regular fa-envelope  text-center text-2xl text-[#00eaff]"></i>
              </div>
              <div>
                <p className="text-gray-300">Email</p>
                <a
                  className="font-['Space_Grotesk'] font-bold text-white text-xl max-sm:text-[16px]"
                  href="mailto:knotxshashank@gmail.com"
                >
                  knotxshashank7@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-[#0e111599] w-14 h-14  flex justify-center items-center rounded-xl border border-amber-50/10">
                <i className="fa-regular fa-map text-center text-2xl text-[#00eaff]"></i>
              </div>
              <div>
                <p className="text-gray-300">Location</p>
                <p className="font-['Space_Grotesk'] font-bold text-white text-xl max-sm:text-[16px]">
                  Navi Mumbai,India
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="p-4 bg-[#0e111599] w-14 h-14  flex justify-center items-center rounded-xl border border-amber-50/10">
                <i className="fa-regular fa-clock  text-center text-2xl text-[#00eaff]"></i>
              </div>
              <div>
                <p className="text-gray-300">Availability</p>
                <p className="font-['Space_Grotesk'] font-bold text-white text-xl max-sm:text-[16px]~">
                  Open to opportunities
                </p>
              </div>
            </div>
          </div>
          <Codes Tech="" />
        </div>
        <div className="right-side w-[30%] max-[816px]:w-full">
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 "
          >
            <div className="flex flex-col gap-2">
              <label className="text-gray-300" htmlFor="name">
                // Your Name
              </label>
              <input
                className="p-4 w-full text-white outline-0 bg-[#21242c80] rounded-xl border border-amber-50/10 placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400 focus:ring-0"
                type="text"
                id="name"
                {...register("Name", {
                  required: { value: true, message: "name Required" },
                  minLength: { value: 3, message: "name is less then 3" },
                })}
                placeholder="Shashank"
              />
              {errors.Name && (
                <div className="text-red-500">{errors.Name.message}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300" htmlFor="email">
                // Your Email
              </label>
              <input
                className="p-4 w-full text-white outline-0 bg-[#21242c80] rounded-xl border border-amber-50/10 placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400 focus:ring-0"
                type="email"
                id="email"
                {...register("Email", {
                  required: { value: true, message: "Email Required" },
                  minLength: { value: 12, message: "invalid Email" },
                })}
                placeholder="knotxshashank7@gmail.com"
              />
              {errors.Email && (
                <div className="text-red-500">{errors.Email.message}</div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-300" htmlFor="message">
                // Your Message
              </label>
              <textarea
                className="p-4 w-full text-white outline-0 bg-[#21242c80] rounded-xl border border-amber-50/10 placeholder-gray-500 transition-colors duration-200 focus:border-cyan-400 focus:ring-0"
                name="message"
                id="message"
                rows={5}
                {...register("Message", {
                  required: { value: true, message: "Message Required" },
                  minLength: {
                    value: 5,
                    message: "Message should greater then 5",
                  },
                })}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.Message && (
                <div className="text-red-500">{errors.Message.message}</div>
              )}
            </div>
            <button className="bg-[#00eaff] py-3 px-2 font-['Space_Grotesk'] font-bold rounded-xl shadow-[0_0_15px_#00eaff] hover:scale-102 transition-all duration-250 ease-in-out">
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <span>
                  Send Message{" "}
                  <i className="fa-solid fa-arrow-down -rotate-90"></i>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
