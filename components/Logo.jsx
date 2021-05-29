import { bool } from "prop-types";
import React, { useState } from "react";
import Typed from "react-typed";
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
      {(!mobile && hover) ? (
        <Typed
          strings={["Rishabh Pathak", "rishabhpathak.vercel.app"]}
          typeSpeed={60}
          smartBackspace
          backSpeed={60}
          showCursor={false}
          className="michroma"
          loop
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
}
Logo.defaultProps = {
  mobile: false
}

export default Logo;
