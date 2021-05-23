import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/homepage/Home";
import Profile from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Footer from "./components/footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Profile />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default Main;
