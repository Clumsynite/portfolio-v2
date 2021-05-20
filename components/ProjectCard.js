import React from "react";
import Image from "next/image";
import * as _ from "lodash";
import styles from "../styles/ProjectCard.module.css";
import Interweave from "interweave";
import LanguageIcons from "./LanguageIcons";

const ProjectCard = ({ project, dark }) => {
  const { title, desc, purpose, repo, live, png, gif, api, languages } =
    project;

  const imageSize = { height: 180, width: 300 };

  const Tags = ({ languages, title }) =>
    languages.map((language, index) => (
        <LanguageIcons
          key={`${title}.${languages.length}.${language}.${index}`}
          language={language}
          size={16}
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

export default ProjectCard;
