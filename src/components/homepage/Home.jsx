import React from "react";
import Signature from "../../assets/img/Signature.png";
import Particles from "./Particles";

import me from "../../assets/img/me.jpg";

const Hero = () => {
  return (
    <section id="Home" className="center">
      <Particles />
      <div className="user_info">
        <h1 className="user_name">Pablo Garay</h1>
        <p>Full Stack Developer</p>
        <a className="user_btn" href="#Profile">
          About me
        </a>
      </div>
      <div className="user_img">
        <img src={me} alt="Pablo Garay" className="me" />

        <img src={Signature} alt="signature" className="signature" />
      </div>
    </section>
  );
};

export default Hero;
