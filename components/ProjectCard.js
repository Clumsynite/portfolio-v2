import React from "react";
import Image from "next/image";
import * as _ from "lodash";
import styles from "../styles/ProjectCard.module.css";
import Interweave from "interweave";
import Tilt from "react-tilt";

const ProjectCard = ({ project }) => {
  const { title, desc, purpose, repo, live, png, gif, api, languages } =
    project;

  const imageSize = { height: 300, width: 450 };

  const flexCenter = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const blur_image_style = {
    filter: "blur(8px)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: 480,
    minHeight: 320,
    zIndex: -1,
    display: "inline-block",
  };
  const bg_image_style = {
    backgroundImage: png,
    margin: 20,
    ...blur_image_style,
  };
  const no_bg_image_style = {
    backgroundColor: "aquamarine",
    margin: 20,
    ...blur_image_style,
  };
  const bgStyle = png ? bg_image_style : no_bg_image_style;

  const no_image_style = {
    backgroundColor: "aquamarine",
    ...blur_image_style,
    height: imageSize.height,
    width: imageSize.width,
  };

  return (
    <div className={styles.container}>
      <Tilt
        className="Tilt"
        options={{ max: 25 }}
        style={{ height: 300, width: 400 }}
      >
        <div className={styles.box}>
          <div className={styles.thumbnail}>
            {png ? (
              <Image
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
      </Tilt>
    </div>
  );
};

export default ProjectCard;
