import React from "react";
import Image from "next/image";
import * as _ from "lodash";
import styles from "../styles/ProjectCard.module.css";
import Interweave from "interweave";

const ProjectCard = ({ project }) => {
  const { title, desc, purpose, repo, live, png, gif, api, languages } =
    project;

  const imageSize = { height: 180, width: 300 };

  // const flexCenter = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  // const resolution = {
  //   width: imageSize.width + 10,
  //   minHeight: imageSize.height + 10,
  //   ...flexCenter
  // };

  // const blur_image_style = {
  //   filter: "blur(8px)",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover",
  //   zIndex: -4,
  //   display: "inline-block",
  //   position: "absolute",
  //   width: imageSize.width + 60,
  //   minHeight: imageSize.height + 100,
  // };
  // const bg_image_style = {
  //   backgroundImage: `url(${png})`,
  //   margin: 20,
  //   ...blur_image_style,
  // };
  // const no_bg_image_style = {
  //   backgroundColor: "aquamarine",
  //   margin: 20,
  //   ...blur_image_style,
  // };
  // const bg_style = png ? bg_image_style : no_bg_image_style;

  // const no_image_style = {
  //   backgroundColor: "aquamarine",
  //   ...blur_image_style,
  //   height: imageSize.height,
  //   width: imageSize.width,
  // };

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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
