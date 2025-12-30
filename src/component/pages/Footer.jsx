import React from "react";

const Footer = () => {
  return (
    <div id="Footer">
      <div>
        <div className="border border-amber-50/20 h-[20vh] p-5">
          <div className="flex justify-evenly items-center h-full text-gray-400 max-sm:flex-col">
            <div className="nav-name font-['Space_Grotesk'] font-bold color_text text-2xl">
              <a href="">&lt;DevXaadi/&gt;</a>
            </div>

            <div className="text-gray-400 text-2xl flex items-center gap-2">
              <a href="https://github.com/Knotxaadi">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://x.com/knotxaadi">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/shashank-somwanshi-2565a7380">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://www.instagram.com/knotxaadi/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div>
              <p className="font-['Space_Grotesk']">© 2025 Devxaadi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
