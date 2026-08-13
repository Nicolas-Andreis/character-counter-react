import './WriteArea.css'

const WriteArea = ({handleChangeTextArea, text, limitCharacter, limitValue}) => {
  return (
    <>
      <textarea 
        className='write-area'
        aria-label="Text to analyze"
        placeholder="Write your text..."
        value={text}
        onChange={handleChangeTextArea}
        maxLength={limitCharacter ? limitValue : undefined}
      />
    </>
  )
}

export  {WriteArea}
