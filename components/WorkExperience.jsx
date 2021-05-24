import React from "react";
import { arrayOf } from "prop-types";
import { workType } from "../config/work";
import workStyle from "../styles/WorkExperience.module.css";

const WorkExperience = ({ jobs }) => (
  <div id="work-experience" className={workStyle.container}>
    <div className={workStyle.heading}>Work Experience:</div>
    {jobs.map((job) => {
      const { start, end, company, designation } = job;
      return (
        <div className={workStyle.work} key={company}>
          <div className={workStyle.date}>
            <div className={workStyle.start}>{start}</div> {" - "}
            <div className={workStyle.end}>{end}</div>
          </div>
          <div className={workStyle.desc}>
            <div className={workStyle.company}>{company}</div>
            <div className={workStyle.designation}>{designation}</div>
          </div>
        </div>
      );
    })}
  </div>
);

WorkExperience.propTypes = {
  jobs: arrayOf(workType).isRequired,
};

export default WorkExperience;
