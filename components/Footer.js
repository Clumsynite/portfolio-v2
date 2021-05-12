import React from "react";
import { Icon } from "semantic-ui-react";
import styles from "../styles/Footer.module.css";

export default function Footer({ dark }) {
  return (
    <footer className={styles.footer}>
      Made with
      <span style={{ padding: "0px 4px" }}>
        <Icon name={"heart"} color="red" fitted inverted={dark} />
      </span>
      by
      <a
        aria-label="Link to Github Profile"
        href="https://github.com/Clumsynite"
        title="Github Profile"
        className="link"
        target="_blank"
        rel="noreferrer"
        style={{ paddingLeft: 4 }}
      >
        Rishabh Pathak
      </a>
    </footer>
  );
}
