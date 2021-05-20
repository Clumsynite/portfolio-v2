import React from "react";
import Image from "next/image";
import * as _ from "lodash";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Interweave from "interweave";

import styles from "../styles/ProjectCard.module.css";
import LanguageIcons from "./LanguageIcons";

export const ProjectCard = ({ project, dark }) => {
  const { title, desc, purpose, repo, live, png, gif, api, languages } =
    project;

  const imageSize = { height: 180, width: 300 };

  const Tags = ({ languages, title }) =>
    languages.map((language, index) => (
      <LanguageIcons
        key={`${title}.${languages.length}.${language}.${index}`}
        language={language}
        size={22}
        dark={dark}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.thumbnail}>
          {png ? (
            <Image
              className={styles.image}
              src={png}
              height={imageSize.height}
              width={imageSize.width}
            />
          ) : (
            <Image
              src={"/images/blog-read.png"}
              height={imageSize.height}
              width={imageSize.width}
            />
          )}
        </div>
        <div className={styles.content}>
          <h2 className={styles.name}>{title}</h2>
          <div className={styles.desc}>
            <Interweave content={desc} />
          </div>
          <div className={[styles.tags]}>
            <Tags languages={languages} title={title} />
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
        {projects.map(
          (project, index) =>
            project?.png && (
              <ProjectCard key={index} project={project} dark={dark} />
            )
        )}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ProjectGrid;
