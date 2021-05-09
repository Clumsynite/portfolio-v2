import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";
import { Button } from "semantic-ui-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const icon = {
    dark: { name: "moon", color: "black" },
    light: { name: "sun", color: "yellow" },
  };

  const nextTheme = () => (theme === "light" ? "dark" : "light");

  return (
    <div>
      <Button
        onClick={() => setTheme(nextTheme())}
        icon={icon[nextTheme()].name}
        circular
        compact
        color={icon[nextTheme()].color}
        size={"large"}
      />
    </div>
  );
}
