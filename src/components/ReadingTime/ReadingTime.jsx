import './ReadingTime.css'

const ReadingTime = ({readingTime}) => {
  return (
    <>
      <p className='container-readingtime'>
        Approx. reading time:{" "}
        {readingTime < 0.8
          ? "< 1 min"
          : `~ ${Math.round(readingTime)} min`}
      </p>
    </>
  )
}

export default ReadingTime