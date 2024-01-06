import { bool } from "prop-types";
import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import * as ThemeConfig from "../config/theme";

const Logo = ({ dark, mobile }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        height: mobile ? 28 : 40,
        minWidth: mobile ? 120 : 240,
        fontSize: mobile ? 24 : 32,
        transition: "0.3s ease-in-out",
        color: dark ? ThemeConfig.dark.fg : ThemeConfig.light.fg,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!mobile && hover ? (
        <TypeAnimation
          sequence={["Rishabh Pathak", window.location.host]}
          speed={2}
          omitDeletionAnimation
          deletionSpeed={5}
          cursor={false}
          repeat={2}
        />
      ) : (
        "<Rishabh />"
      )}
    </div>
  );
};
Logo.propTypes = {
  dark: bool.isRequired,
  mobile: bool,
};
Logo.defaultProps = {
  mobile: false,
};

export default Logo;
