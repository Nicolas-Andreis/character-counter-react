import { createContext, useState } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Recupera el tema guardado en localStorage
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem("theme");

    if (theme === null) return true; // Primera vez → Dark

    return theme === "dark";
  });


  // Cambia entre modo oscuro y claro
  const handleDarkTheme = () => {
    const newDark = !dark;

    setDark(newDark);

    localStorage.setItem(
      "theme",
      newDark ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider
      value={{ dark, handleDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };