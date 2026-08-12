const Stats = ({characters, words, sentences, readingTime}) => {
  return (
    <>
      <p>Cantidad de caracteres: {characters}</p>
        <p>Cantidad de palabras: {words}</p>
        <p>Cantidad de oraciones: {sentences}</p>
        <p>
          Tiempo de lectura:{" "}
          {readingTime < 0.8
            ? "< 1 min"
            : `~ ${Math.round(readingTime)} min`}
        </p>
    </>
  )
}

export {Stats}