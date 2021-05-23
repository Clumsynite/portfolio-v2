import React, { useState } from "react";
import Image from "next/image";
import * as _ from "lodash";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Interweave from "interweave";
import { Button } from "semantic-ui-react";
import ReactCardFlip from "react-card-flip";

import styles from "../styles/ProjectCard.module.css";
import LanguageIcon from "./LanguageIcons";
import { ExtLink } from "./CommonComponents";

export const ProjectCard = ({ project, dark, flip }) => {
  const { title, desc, repo, live, api, png, languages } = project;

  const imageSize = { height: 180, width: 300 };

  const Tags = ({ languages, title, size }) =>
    languages.map((language, index) => (
      <LanguageIcon
        key={`${title}.${languages.length}.${language}.${index}`}
        language={language}
        size={size}
        dark={dark}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {png && (
          <div className={styles.thumbnail}>
            <Image
              src={png}
              className={styles.image}
              height={imageSize.height}
              width={imageSize.width}
              objectFit="cover"
              alt={title}
              title={`${title} - Screenshot`}
            />
          </div>
        )}
        <div className={styles.content}>
          <h2 className={styles.name}>{title}</h2>
          <div className={styles.desc}>
            <Interweave content={desc} />
          </div>
          <div className={styles.tags}>
            <Tags languages={languages} title={title} size={28} />
          </div>
          <div className={styles.links}>
            {repo && (
              <ExtLink
                dark={dark}
                name={
                  <Button
                    inverted
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
            {flip &&
              (api ? (
                <div onClick={() => flip(true)} className={styles.flipper}>
                  <LanguageIcon language={`api`} size={20} dark={dark} />
                </div>
              ) : (
                <div onClick={() => flip(false)} className={styles.flipper}>
                  <LanguageIcon language={`app_light`} size={20} dark={dark} />
                </div>
              ))}
            {live && (
              <ExtLink
                dark={dark}
                name={
                  <Button
                    inverted
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

const FlippableCard = ({ project, dark }) => {
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

const ProjectGrid = ({ projects, dark }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter={"10px"}>
        {projects.map((project, index) =>
          project.api ? (
            <FlippableCard key={index} project={project} dark={dark} />
          ) : (
            <ProjectCard key={index} project={project} dark={dark} />
          )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ProjectGrid;
