

const WriteArea = ({handleChangeTextArea, text, limitCharacter, limitValue}) => {
  return (
    <>
      <textarea
        placeholder="Escribe tu texto..."
        value={text}
        onChange={handleChangeTextArea}
        maxLength={limitCharacter ? limitValue : undefined}
      />
    </>
  )
}

export  {WriteArea}