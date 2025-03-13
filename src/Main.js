import React from "react";

// Components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Home";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";
import Job from "./components/job/Job";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Works />
      <Job />
      <Footer />
    </div>
  );
};

export default Main;
