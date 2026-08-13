import ReadingTime from "../ReadingTime/ReadingTime";
import "./Controls.css";

const Controls = ({
  excludeSpaces,
  limitCharacter,
  limitValue,
  handleLimitChange,
  applyLimit,
  handleLimitKeyDown,
  handleExcludeSpaces,
  handleLimitCharacter,
  readingTime,
}) => {
  return (
    <div className="container-all-controls">
      <div className="container-controls">
        <label className="control-label">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={handleExcludeSpaces}
          />
          Exclude spaces
        </label>

        <div className="limit-control">
          <label className="control-label">
            <input
              type="checkbox"
              checked={limitCharacter}
              onChange={handleLimitCharacter}
            />
            Set Character Limit
          </label>

          {limitCharacter && (
            <input
              className="limit-input"
              type="number"
              aria-label="Character limit"
              min={1}
              value={limitValue}
              onChange={handleLimitChange}
              onBlur={applyLimit}
              onKeyDown={handleLimitKeyDown}
            />
          )}
        </div>
      </div>

      <ReadingTime readingTime={readingTime} />
    </div>
  );
};

export { Controls };
