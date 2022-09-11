import React, { useState } from "react";
import { arrayOf, string, number, bool, func } from "prop-types";
import Image from "next/image";
import { Button } from "semantic-ui-react";
import Interweave from "interweave";
import ReactCardFlip from "react-card-flip";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import LanguageIcon from "./LanguageIcon";
import { ExtLink } from "./CommonComponents";
import styles from "../styles/ProjectCard.module.css";
import { projectType } from "../config/projects";

export const ProjectCard = ({ project, dark, flip }) => {
  const [disabled, setDisabled] = useState(false);
  const { title, desc, repo, live, api, png, languages } = project;
  const imageSize = { height: 180, width: 300 };

  // To unhover after flip. Otherwise, flipped card can be seen for sometime.
  const disableForSometime = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 500);
  };

  return (
    <div className={styles.container} disabled={disabled}>
      <div className={styles.box}>
        {png && (
          <div className={styles.thumbnail} style={{ cursor: "pointer" }}>
            <Image
              src={png}
              className={styles.image}
              height={imageSize.height}
              width={imageSize.width}
              objectFit="cover"
              alt={title}
              title={`${title} - Screenshot`}
              onClick={() => window.open(png)}
            />
          </div>
        )}
        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.name}>{title}</div>
            {flip &&
              (api ? (
                <div
                  onClick={() => {
                    flip(true);
                    disableForSometime();
                  }}
                  className={styles.flipper}
                  aria-hidden="true"
                >
                  <LanguageIcon language="api" size={20} dark={dark} />
                </div>
              ) : (
                <div
                  onClick={() => {
                    flip(false);
                    disableForSometime();
                  }}
                  className={styles.flipper}
                  aria-hidden="true"
                >
                  <LanguageIcon language="app_light" size={20} dark={dark} />
                </div>
              ))}
          </div>
          <div className={styles.desc}>
            <Interweave content={desc} />
          </div>
          <div className={styles.tags}>
            <Tags languages={languages} title={title} size={28} dark={dark} />
          </div>
          <div className={styles.links}>
            {repo && (
              <ExtLink
                dark={dark}
                name={
                  <Button
                    color="teal"
                    content="Repo"
                    icon="github"
                    labelPosition="left"
                    inverted={dark}
                    basic={!dark}
                  />
                }
                title={`Link to ${title}'s Github Repo`}
                to={repo}
              />
            )}
            {live && (
              <ExtLink
                dark={dark}
                name={
                  <Button
                    color="blue"
                    content="Live"
                    labelPosition="right"
                    icon="external alternate"
                    inverted={dark}
                    basic={!dark}
                  />
                }
                title={`Link to ${title}'s Homepage`}
                to={live}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
ProjectCard.propTypes = {
  project: projectType.isRequired,
  dark: bool.isRequired,
  flip: func,
};

ProjectCard.defaultProps = {
  flip: null,
};

export const Tags = ({ languages, title, size, dark }) =>
  languages.map((language) => (
    <LanguageIcon key={`${title}.${languages.length}.${language}`} language={language} size={size} dark={dark} />
  ));

Tags.propTypes = {
  languages: arrayOf(string),
  title: string.isRequired,
  size: number,
  dark: bool.isRequired,
};
Tags.defaultProps = {
  size: 20,
};

export const FlippableCard = ({ project, dark }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={styles["flip-container"]}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        <ProjectCard project={project} dark={dark} flip={setFlipped} />
        <ProjectCard project={project?.api} dark={dark} flip={setFlipped} />
      </ReactCardFlip>
    </div>
  );
};

FlippableCard.propTypes = {
  project: projectType.isRequired,
  dark: bool.isRequired,
};

const ProjectGrid = ({ projects, dark }) => (
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry gutter="10px">
      {projects.map((project) =>
        project.api ? (
          <FlippableCard key={project.title} project={project} dark={dark} />
        ) : (
          <ProjectCard key={project.title} project={project} dark={dark} />
        )
      )}
    </Masonry>
  </ResponsiveMasonry>
);

ProjectGrid.propTypes = {
  projects: arrayOf(projectType).isRequired,
  dark: bool.isRequired,
};

export default ProjectGrid;
