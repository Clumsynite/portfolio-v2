import React, { useState } from "react";
import lo from "lodash";
import { bool } from "prop-types";
import { Icon } from "semantic-ui-react";
import { workProject, workType } from "../config/work";
import workStyle from "../styles/WorkProjects.module.css";
import LanguageIcon from "./LanguageIcon";

const ProjectCard = ({ project, dark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => setIsExpanded(!isExpanded);
  const techStack = Object.keys(project.tech_stack);
  return (
    <div>
      <div className={workStyle.label}>{project.label}</div>
      <div className={workStyle.description}>{project.description}</div>
      <div className={workStyle.tech_stack}>
        {techStack.map((key) => {
          const stack = project.tech_stack[key];
          return (
            <div key={crypto.randomUUID()} className={workStyle.stack}>
              <div className={workStyle.stack_key}>{lo.startCase(key)} </div>
              <div className={workStyle.stack_value}>
                {stack.map((lang) => (
                  <div key={crypto.randomUUID()}>
                    <LanguageIcon language={lang} size={30} dark={dark} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={workStyle.experience}>
        <div className={workStyle.exp_toggle} onClick={toggle} aria-hidden>
          <Icon link name={isExpanded ? "caret down" : "caret right"} /> Experienced:
        </div>
        <ul
          className={workStyle.exp_list}
          style={{
            minHeight: isExpanded ? 100 : 0,
            height: isExpanded ? "max-content" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
        >
          {project.experience.map((exp) => (
            <li>
              <i>{exp}</i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: workProject.isRequired,
  dark: bool.isRequired,
};

const WorkProjects = ({ job: { company, start, end, designation, projects }, dark }) => (
  <div id="work-projects-container" className={workStyle.container}>
    <div className={workStyle.title}>{company}</div>
    <div className={workStyle.subtitle}>{designation}</div>
    <div className={workStyle.duration}>
      <span>{start}</span> {" - "} <span>{end}</span>
    </div>

    <div className={workStyle.projects}>
      {projects.map((project) => (
        <ProjectCard project={project} key={crypto.randomUUID()} dark={dark} />
      ))}
    </div>
  </div>
);

WorkProjects.propTypes = {
  job: workType.isRequired,
  dark: bool.isRequired,
};

export default WorkProjects;
