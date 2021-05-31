import { bool } from "prop-types";
import React, { useContext } from "react";
import { Icon } from "semantic-ui-react";

import { ThemeContext } from "../context/Theme";
import { Popup } from "./CommonComponents";

export default function ThemeSwitcher({ mobile }) {
  const { theme, setTheme } = useContext(ThemeContext);

  const icon = {
    dark: { name: "moon", color: "black", title: "Dark Mode" },
    light: { name: "sun", color: "yellow", title: "Light Mode" },
  };

  const nextTheme = () => (theme === "light" ? "dark" : "light");

  return (
    <Popup
      dark={theme === "dark"}
      content={icon[nextTheme()].title}
      disabled={mobile}
    >
      <Icon
        onClick={() => setTheme(nextTheme())}
        name={icon[nextTheme()].name}
        circular
        flipped="horizontally"
        link
        color={icon[nextTheme()].color}
        inverted
      />
    </Popup>
  );
}

ThemeSwitcher.propTypes = {
  mobile: bool,
};
ThemeSwitcher.defaultProps = {
  mobile: false,
};
