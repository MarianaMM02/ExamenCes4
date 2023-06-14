import { useContext } from 'react';
import { CardContext } from './CardcontextMM';

const CardButton = () => {
  const { drawCard } = useContext(CardContext);

  const handleDrawCard = () => {
    drawCard();
  };

  return (
    <button onClick={handleDrawCard}>Solicitar carta</button>
  );
};

export default CardButton;
