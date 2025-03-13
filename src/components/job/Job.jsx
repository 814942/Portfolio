import { useEffect, useState } from "react";
import { data } from "./data";

const Job = () => {
  const [jobData, setJobData] = useState(data);
  
  const [jobDescription, setJobDescription] = useState([])

  const handleActive = (description, id) => {
    setJobDescription(description)

    setJobData(current => {
      return current.map(c => ({
        ...c,
        active: c.id === id
      }))
    })
  }

  useEffect(() => {
    if (data.length) {
      handleActive(data[0].description, data[0].id);
    }
  }, []);

  return (
    <section id="Jobs" className="center">
      <div className="job-header-container">
        <h3 className="job header">Jobs</h3>
        <p className="job subheader">Experience in professional work</p>
      </div>
      <div className="job-container">
        {jobData && jobData.map(d => (
          <ul className={`${d.active ? "slider-active" : "job-slider"}`} onClick={() => handleActive(d.description, d.id)}>
            <li>
              {d.name}
            </li>
          </ul>
        ))}
      </div>
      {jobDescription &&
        <div className="job-description">
          <h3 className="font-color">{jobDescription.title}</h3>
          <p className="font-color">{jobDescription.date}</p>
          <div className="data-job-description" dangerouslySetInnerHTML={{ __html: jobDescription.description }} />
          <h3 className="font-color">Skills</h3>
          <div className="font-color data-job-description" dangerouslySetInnerHTML={{ __html: jobDescription.skills }} />
        </div>
      }
    </section>
  );
};

export default Job;
