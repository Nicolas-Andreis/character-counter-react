import { createContext, useState } from "react"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Recupera el tema guardado en localStorage
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );


  // Cambia entre modo oscuro y claro
  const handleDarkTheme = () => {
    const newDark = !dark;

    setDark(newDark);

    if (newDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
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