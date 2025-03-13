import React, { useState } from "react";

import { data } from "./dt";

const Skills = () => {
  const [dataChilds, setDataChilds] = useState([])
  const [showChilds, setShowChilds] = useState(false)

  const handleChilds = (child) => {
    setDataChilds(child)

    setShowChilds(!showChilds)
  }

  return (
    <section id="Skills" className="center">
      <div className="skill_box">
        {
          data.map(d => (
            <div key={d.id} className="box" onClick={() => handleChilds(d.child)}>
              {d.icon}
              <p style={{ fontFamily: "Lato", fontWeight: 600 }}>{d.name}</p>
            </div>
          ))
        }
      </div>
      <div className="skill_box_children">
      {
        showChilds && dataChilds.map(d => (
          <div key={d.id} className="child_box">
              {d.icon}
              <p className="child_name" style={{ fontFamily: "Lato" }}>{d.name}</p>
            </div>
        ))
      }
      </div>
    </section>
  );
};

export default Skills;
