import './ReadingTime.css'

const ReadingTime = ({readingTime}) => {
  return (
    <>
      <p className='container-readingtime'>
        Approx. reading time:{" "}
        {readingTime < 1
          ? "< 1 min"
          : `~ ${Math.round(readingTime)} min`}
      </p>
    </>
  )
}

export default ReadingTime
