import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";

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

  // Guarda si el usuario quiere ver todas las letras
  // o solamente las que tienen un porcentaje importante
  const [showAllLetters, setShowAllLetters] = useState(false);

  // Convierte el objeto de letras en un array
  // y agrega el porcentaje de cada letra
  const lettersData = Object.entries(dictionaryLetters).map(
    ([letter, amount]) => ({
      letter,
      amount,
      percentage: (amount / totalLetters) * 100
    })
  );

  // Si showAllLetters es true muestra todas
  // si no, muestra solo las que tienen 5% o más
  const visibleLetters = showAllLetters
    ? lettersData
    : lettersData.filter((item) => item.percentage >= 5);

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
        <p>
          Tiempo de lectura:{" "}
          {readingTime < 0.8
            ? "< 1 min"
            : `~ ${Math.round(readingTime)} min`}
        </p>
        <section>
          <h2>Cantidad de letras</h2>
          <article>
            {visibleLetters.map(({ letter, amount, percentage }) => (
              <div key={letter}>
                <span>{letter.toUpperCase()}</span>

                <meter
                  min={0}
                  max={100}
                  value={percentage}
                />

                <span>
                  {amount} ({percentage.toFixed(1)}%)
                </span>
              </div>
            ))}
          </article>
          {/* El botón aparece solo si existen letras con menos del 5% */}
          {lettersData.some((item) => item.percentage < 5) && (
            <button
              type="button"
              onClick={() => setShowAllLetters(!showAllLetters)}
            >
              {showAllLetters ? "See less" : "See more"}
            </button>
          )}
        </section>

      </main>
    </>
  );
}

export { App };