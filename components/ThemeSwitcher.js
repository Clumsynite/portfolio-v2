import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Icon } from "semantic-ui-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const icon = {
    dark: { name: "moon", color: "black" },
    light: { name: "sun", color: "yellow" },
  };

  const nextTheme = () => (theme === "light" ? "dark" : "light");

  return (
    <Icon
      onClick={() => setTheme(nextTheme())}
      name={icon[nextTheme()].name}
      circular
      flipped={"horizontally"}
      link
      color={icon[nextTheme()].color}
      inverted
    />
  );
}
