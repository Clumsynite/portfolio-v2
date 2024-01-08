import React, { useState } from "react";
import { arrayOf, bool } from "prop-types";
import { Icon, Modal } from "semantic-ui-react";
import { workType } from "../config/work";
import workStyle from "../styles/WorkExperience.module.css";
import WorkProjects from "./WorkProjects";

const WorkExperience = ({ jobs, dark }) => {
  const [isVisible, setIsVisible] = useState(null);
  return (
    <div id="work-experience" className={workStyle.container}>
      <div className={workStyle.heading}>Work Experience:</div>
      {jobs.map((job) => {
        const { start, end, company, designation } = job;
        return (
          <div className={workStyle.work} key={crypto.randomUUID()}>
            <div className={workStyle.date}>
              <div className={workStyle.start}>{start}</div> {" - "}
              <div className={workStyle.end}>{end}</div>
            </div>
            <div className={workStyle.desc}>
              <div className={workStyle.company}>
                {company}{" "}
                <div
                  className={workStyle.projects_link}
                  onClick={() => setIsVisible(job)}
                  onKeyUp={() => null}
                  aria-hidden="true"
                >
                  <Icon name="expand" size="tiny" color="blue" link />
                </div>
              </div>
              <div className={workStyle.designation}>{designation}</div>
            </div>
          </div>
        );
      })}
      {isVisible && (
        <Modal
          key={crypto.randomUUID()}
          basic
          onClose={() => setIsVisible(false)}
          onOpen={() => setIsVisible(true)}
          open={!!isVisible}
          size="large"
          as="div"
        >
          <Modal.Content as="div">
            <WorkProjects job={isVisible} dark={dark} key={crypto.randomUUID()} />
          </Modal.Content>
        </Modal>
      )}
    </div>
  );
};
WorkExperience.propTypes = {
  jobs: arrayOf(workType).isRequired,
  dark: bool.isRequired,
};

export default WorkExperience;
