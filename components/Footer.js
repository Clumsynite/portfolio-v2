import React from "react";
import { ExtLink, Icon } from "./CommonComponents";
import styles from "../styles/Footer.module.css";

export default function Footer({ dark }) {
  return (
    <footer className={styles.footer}>
      Made with
      <span style={{ padding: "0px 4px" }}>
        <Icon name={"fxemoji:beating-heart"} inline size={20} />
      </span>
      by
      <ExtLink
        name={"Rishabh Pathak"}
        title={"Link to my Github Profile"}
        to={"https://github.com/Clumsynite"}
        dark={dark}
        style={{ paddingLeft: 4 }}
        className="link"
      />
    </footer>
  );
}
