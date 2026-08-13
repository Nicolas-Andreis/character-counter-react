import ReadingTime from "../ReadingTime/ReadingTime"
import './Controls.css'

const Controls = ({excludeSpaces, limitCharacter, limitValue, handleLimitChange, applyLimit, handleLimitKeyDown, handleExcludeSpaces, handleLimitCharacter, readingTime}) => {
  return (
    <div className="container-all-controls">
      <div className="container-controls">
          <label>
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={() => handleExcludeSpaces}
            />
            Exclude spaces
          </label>

          <label>
            <input
              type="checkbox"
              checked={limitCharacter}
              onChange={handleLimitCharacter}
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
        <ReadingTime readingTime = {readingTime}/>
    </div>
  )
}

export {Controls}