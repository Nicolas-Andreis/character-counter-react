const LetterDensity = ({importantLetters, otherLetters}) => {
  return (
    <>
      <section>
        <h2>Cantidad de letras</h2>
        <article>
          {importantLetters.map(({ letter, amount, percentage }) => (
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

          {otherLetters.length > 0 && (
            <details>
              <summary>See more</summary>

              {otherLetters.map(({ letter, amount, percentage }) => (
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
            </details>
          )}
        </article>
      </section>
    </>
  )
}

export { LetterDensity }