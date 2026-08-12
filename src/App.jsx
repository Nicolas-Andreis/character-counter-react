import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { WriteArea } from "./components/WriteArea/WriteArea";
import { Controls } from "./components/Controls/Controls";
import { LetterDensity } from "./components/LetterDensity/LetterDensity";
import { Stats } from "./components/Stats/Stats";


function App() {
  // Guarda el texto que escribe el usuario
  const [text, setText] = useState("Hola :)");

  // Guarda si el usuario quiere contar los caracteres sin espacios
  const [excludeSpaces, setExcludeSpaces] = useState(false);

  // Guarda si el usuario quiere limitar la cantidad de caracteres
  const [limitCharacter, setLimitCharacter] = useState(false);

  // Guarda el número máximo de caracteres permitidos
  const [limitValue, setLimitValue] = useState(300);

  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  // Actualiza el texto cada vez que el usuario escribe
  const handleChangeTextArea = (e) => {
    setText(e.target.value);
  };

  // Actualiza el valor del límite de caracteres
  const handleLimitChange = (e) => {
    setLimitValue(Number(e.target.value));
  };


  const handleExcludeSpaces = () => {
    setExcludeSpaces(!excludeSpaces);
  };

  const handleLimitCharacter = () => {
    setLimitCharacter(!limitCharacter);
  };

  // Aplica el límite y recorta el texto si supera la cantidad permitida
  const applyLimit = () => {
    if (limitCharacter) {
      setText((prevText) => prevText.slice(0, limitValue));
    }
  };

  // Si el usuario presiona Enter en el input del límite,
  // pierde el foco y se aplica el límite
  const handleLimitKeyDown = (e) => {
    if (e.key === "Enter") {
      applyLimit();
      e.target.blur();
    }
  };

  // Cuenta las palabras separándolas por uno o más espacios
  // Si el texto está vacío devuelve 0
  const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

  // Cuenta las oraciones usando punto, signo de pregunta o exclamación
  // El filter elimina partes vacías
  const sentences = text.trim() === ""
    ? 0
    : text
      .split(/[.!?]+/)
      .filter(item => item.trim() !== "")
      .length;

  // Calcula el tiempo de lectura usando un promedio de 200 palabras por minuto
  const readingTime = words / 200

  // Convierte todo a minúscula y deja solamente letras
  const cleanText = text
    .toLowerCase()
    .replace(/[^a-záéíóúüñ]/g, "");

  // Objeto donde voy a guardar cuántas veces aparece cada letra
  const dictionaryLetters = {}

  // Recorre cada letra del texto limpio
  // Si ya existe la suma, si no empieza en 1
  for (const letter of cleanText) {
    dictionaryLetters[letter] =
      (dictionaryLetters[letter] || 0) + 1;
  }

  const totalLetters = cleanText.length;

  // Convierte el objeto de letras en un array
  // y calcula el porcentaje de cada una
  const lettersData = Object.entries(dictionaryLetters).map(
    ([letter, amount]) => ({
      letter,
      amount,
      percentage: totalLetters === 0
        ? 0
        : (amount / totalLetters) * 100
    })
  );

  const importantLetters = lettersData.filter(
    (item) => item.percentage >= 5
  );

  const otherLetters = lettersData.filter(
    (item) => item.percentage < 5
  );
  return (
    <>
      <main>
        <Header />

        <h2>
          Analyze your text <br />
          in real-time.
        </h2>

        <WriteArea
          handleChangeTextArea={handleChangeTextArea}
          text={text}
          limitCharacter={limitCharacter}
          limitValue={limitValue}
        />

        <Controls
          excludeSpaces={excludeSpaces}
          limitCharacter={limitCharacter}
          limitValue={limitValue}
          handleLimitChange={handleLimitChange}
          applyLimit={applyLimit}
          handleLimitKeyDown={handleLimitKeyDown}
          handleExcludeSpaces = {handleExcludeSpaces}
          handleLimitCharacter = {handleLimitCharacter}
        />
        <Stats 
        characters = {characters}
        words = {words}
        sentences = {sentences}
        readingTime = {readingTime}
        />
        {/* renderizado condicional para que si no hay texto no se renderice  */}
        {text.length > 0 && (<LetterDensity 
        importantLetters={importantLetters}
        otherLetters={otherLetters}
        />)}
      </main>
    </>
  );
}

export { App };