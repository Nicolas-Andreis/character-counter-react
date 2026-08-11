import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

function App() {
  const [text, setText] = useState("Hola :)");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [limitCharacter, setLimitCharacter] = useState(false);
  const [limitValue, setLimitValue] = useState(300);

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  const handleChangeTextArea = (e) => {
    setText(e.target.value);
  };

  const handleLimitChange = (e) => {
    setLimitValue(Number(e.target.value));
  };

  const applyLimit = () => {
    if (limitCharacter) {
      setText((prevText) => prevText.slice(0, limitValue));
    }
  };

  const handleLimitKeyDown = (e) => {
    if (e.key === "Enter") {
      applyLimit();
      e.target.blur();
    }
  };

  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  const sentences = text.trim() === ""
  ? 0
  : text
      .split(/[.!?]+/)
      .filter(item => item.trim() !== "")
      .length;


  return (
    <>
      <main>
        <Header />

        <h2>
          Analyze your text <br />
          in real-time.
        </h2>

        <textarea
          placeholder="Escribe tu texto..."
          value={text}
          onChange={handleChangeTextArea}
          maxLength={limitCharacter ? limitValue : undefined}
        />

        <div>
          <label>
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={() => setExcludeSpaces(!excludeSpaces)}
            />
            Exclude spaces
          </label>

          <label>
            <input
              type="checkbox"
              checked={limitCharacter}
              onChange={() => setLimitCharacter(!limitCharacter)}
            />
            Set Character Limit
          </label>

          {limitCharacter && (
            <input
              type="number"
              min={1}
              value={limitValue}
              onChange={handleLimitChange}
              onBlur={applyLimit}
              onKeyDown={handleLimitKeyDown}
            />
          )}
        </div>

        <p>Cantidad de caracteres: {characters}</p>
        <p>Cantidad de palabras: {words}</p>
        <p>Cantidad de oraciones: {sentences}</p>
      </main>
    </>
  );
}

export { App };