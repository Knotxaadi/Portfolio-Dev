import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <>
      <div className=" w-full scroll-smooth overflow-x-hidden">
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
