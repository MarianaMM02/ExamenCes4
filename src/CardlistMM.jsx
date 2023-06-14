import  { useContext } from 'react';
import { CardContext } from './CardcontextMM';

const CardList = () => {
  const { cards } = useContext(CardContext);

  return (
    <div>
      <h2>Cartas solicitadas:</h2>
      <ul>
        {cards.map((card, index) => (
          <li key={index}>
            <img src={card.image} alt={card.code} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;
