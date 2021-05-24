import React, { useState, useEffect } from "react";
import { bool } from "prop-types";

import { ExtLink, Icon } from "./CommonComponents";
import styles from "../styles/Footer.module.css";

export default function Footer({ dark }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <footer className={styles.footer}>
      Made with
      {mounted && (
        <Icon
          name="fxemoji:beating-heart"
          inline
          size={20}
          style={{ margin: "0px 4px" }}
        />
      )}
      by
      <ExtLink
        name="Rishabh Pathak"
        title="Link to my Github Profile"
        to="https://github.com/Clumsynite"
        dark={dark}
        style={{ paddingLeft: 4 }}
        className="link"
      />
      <span style={{ paddingLeft: 4 }}>&copy; 2021</span>
    </footer>
  );
}

Footer.propTypes = {
  dark: bool.isRequired,
};
