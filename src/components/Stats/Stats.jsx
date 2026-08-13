import './Stats.css'
import { Card } from '../Card/Card';
import total from '../../assets/images/cards/violet_card.png'
import word from '../../assets/images/cards/yellow_card.png'
import sentence from '../../assets/images/cards/orange_card.png'

const Stats = ({ characters, words, sentences }) => {
  return (
    <div className='container-cards'>
      <Card name="Total Characters" value={characters} background={total} />
      <Card name="Word Count" value={words} background={word} />
      <Card name="Sentence Count" value={sentences} background={sentence} />
    </div>
  )
}

export { Stats }