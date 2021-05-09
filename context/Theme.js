import React, { createContext, useReducer, useEffect } from "react";
import * as Theme from "../theme";

let initialState = "dark";

if (typeof window !== "undefined" && localStorage.getItem("theme"))
  initialState = localStorage.theme;

const ThemeContext = createContext({
  theme: null,
  setTheme: (theme) => theme,
});

function ThemeReducer(state, action) {
  switch (action.type) {
    case "SWITCH_THEME":
      return (state = action.payload);
    default:
      return state;
  }
}

function ThemeProvider(props) {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const setCSSRoot = (key, value) =>
    document.documentElement.style.setProperty(key, value);

  useEffect(() => {
    if (typeof window !== "undefined" && !initialState) {
      window.localStorage.setItem("theme", "dark");
    }

    setTheme(localStorage.theme || "dark");
  }, []);

  const setTheme = (theme) => {
    setCSSRoot("--main-bg", Theme[theme].bg);
    setCSSRoot("--main-fg", Theme[theme].fg);
    window.localStorage.setItem("theme", theme);
    dispatch({ type: "SWITCH_THEME", payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ theme: state, setTheme }} {...props} />
  );
}

export { ThemeContext, ThemeProvider };
