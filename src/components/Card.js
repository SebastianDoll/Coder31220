import './Card.css';

function Card(props) {
  return (
    <div className='card'>
        <h4>{props.product}</h4>
        <p>{props.price}</p>
    </div>
  );
}

export default Card;