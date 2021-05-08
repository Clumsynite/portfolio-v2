import React, { useState, useEffect } from "react";
import * as Theme from "../theme";
import { Button } from "semantic-ui-react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.theme || "dark");

  useEffect(() => {
    if (!theme) {
      localStorage.setItem("theme", "dark");
    }

    setCSSRoot("--main-bg", Theme[theme].bg);
    setCSSRoot("--main-fg", Theme[theme].fg);
    setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    setCSSRoot("--main-bg", Theme[theme].bg);
    setCSSRoot("--main-fg", Theme[theme].fg);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setCSSRoot = (key, value) =>
    document.documentElement.style.setProperty(key, value);

  const icon = {
    dark: { name: "moon", color: "black" },
    light: { name: "sun", color: "yellow" },
  };

  return (
    <div>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        icon={icon[theme].name}
        circular
        compact
        color={icon[theme].color}
        size={"large"}
      />
    </div>
  );
}
