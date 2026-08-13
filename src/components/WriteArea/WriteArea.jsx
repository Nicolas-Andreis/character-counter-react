import './WriteArea.css'

const WriteArea = ({handleChangeTextArea, text, limitCharacter, limitValue}) => {
  return (
    <>
      <textarea 
        className='write-area'
        placeholder="write your text..."
        value={text}
        onChange={handleChangeTextArea}
        maxLength={limitCharacter ? limitValue : undefined}
      />
    </>
  )
}

export  {WriteArea}