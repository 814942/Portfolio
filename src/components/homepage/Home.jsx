import React, { useState } from "react";

import me from "../../assets/img/me.jpg";
import Signature from "../../assets/img/Signature.png";

import Particles from "./Particles";
import ReactModal from "react-modal";

import { data } from "./dt";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <section id="Home" className="center">
      <Particles />
      <div className="user_info">
        <h1 className="user_name">Pablo Garay</h1>
        <p>Full Stack Developer</p>
        <button className="user_btn four" onClick={handleModal}>
          About me
        </button>
      </div>
      <ReactModal
        closeTimeoutMS={500}
        isOpen={open}
        contentLabel="About me"
        onRequestClose={handleModal}
        className="user-modal"
        overlayClassName={open ? "Overlay out" : "Overlay"}
      >
        <h1 className="h1_profile">{data.title} </h1>
        <p className="p_profile">{data.intro} </p>
        <button onClick={handleModal} className="close-btn user_btn">
          X
        </button>
      </ReactModal>
      <div className="user_img">
        <img src={me} alt="Pablo Garay" className="me" />

        <img src={Signature} alt="signature" className="signature" />
      </div>
    </section>
  );
};

export default Hero;
