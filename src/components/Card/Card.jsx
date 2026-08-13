import './Card.css'

const Card = ({ name, value, background }) => {
  return (
    <article
      className="card"
      style={{ backgroundImage: `url(${background})` }}
    >
      <span className="card_number">{value}</span>
      <span className="card_label">{name}</span>
    </article>
  );
};

export { Card };