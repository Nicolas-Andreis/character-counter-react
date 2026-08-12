

const Controls = ({excludeSpaces, limitCharacter, limitValue, handleLimitChange, applyLimit, handleLimitKeyDown, handleExcludeSpaces, handleLimitCharacter}) => {
  return (
    <>
      <div>
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
    </>
  )
}

export {Controls}