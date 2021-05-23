import React from "react";
import { data } from "./dt";

const Profile = () => {
  return (
    <section id="Profile" className="center">
      <div className="center_profile">
        <div className="container_profile">
          <h1 className="h1_profile">{data.title} </h1>
          <p className="p_profile">{data.intro} </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
