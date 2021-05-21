import React, { useState } from "react";
import Image from "next/image";
import * as _ from "lodash";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Interweave from "interweave";
import { Button } from "semantic-ui-react";
import styles from "../styles/ProjectCard.module.css";

import LanguageIcons from "./LanguageIcons";
import { ExtLink } from "./CommonComponents";

export const ProjectCard = ({ project, dark }) => {
  const { title, desc, repo, live, png, api, languages } = project;

  const imageSize = { height: 180, width: 300 };

  const Tags = ({ languages, title, size }) =>
    languages.map((language, index) => (
      <LanguageIcons
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
            {live && (
              <ExtLink
                dark={dark}
                name={
                  <Button
                    inverted
                    color="blue"
                    content="Live"
                    labelPosition="right"
                    icon="eye"
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

const ProjectGrid = ({ projects, dark }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter={"10px"}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} dark={dark} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ProjectGrid;
