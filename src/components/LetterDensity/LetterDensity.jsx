import "./LetterDensity.css";

const LetterDensity = ({ importantLetters, otherLetters }) => {
  return (
    <section className="letter-density">

      <h2 className="letter-density__title">
        Letter Density
      </h2>

      <article className="letter-density__list">

        {/* Letras principales */}
        {importantLetters.map(({ letter, amount, percentage }) => (
          <div
            className="letter-density__item"
            key={letter}
          >
            <span className="letter-density__letter">
              {letter.toUpperCase()}
            </span>

            <div className="letter-density__bar">
              <div
                className="letter-density__progress"
                style={{ width: `${percentage}%` }}
              />
            </div>

            <span className="letter-density__value">
              {amount} ({percentage.toFixed(1)}%)
            </span>
          </div>
        ))}

        {/* Letras con porcentaje menor al 5% */}
        {otherLetters.length > 0 && (
          <details className="letter-density__details">

            <summary className="letter-density__summary">
              See more
            </summary>

            <div className="letter-density__other">
              {otherLetters.map(({ letter, amount, percentage }) => (
                <div
                  className="letter-density__item"
                  key={letter}
                >
                  <span className="letter-density__letter">
                    {letter.toUpperCase()}
                  </span>

                  <div className="letter-density__bar">
                    <div
                      className="letter-density__progress"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  <span className="letter-density__value">
                    {amount} ({percentage.toFixed(1)}%)
                  </span>
                </div>
              ))}
            </div>

          </details>
        )}

      </article>

    </section>
  );
};

export { LetterDensity };