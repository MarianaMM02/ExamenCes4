import { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = () => {
  const [cards, setCards] = useState([]);

  const drawCard = async () => {
    try {
      const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
      const data = await response.json();
      if (data.success) {
        setCards([...cards, data.cards[0]]);
      } else {
        console.log('Error al solicitar una carta');
      }
    } catch (error) {
      console.log('Error al solicitar una carta:', error);
    }
  };

  return (
    <CardContext.Provider value={{ cards, drawCard }}>
      {}
    </CardContext.Provider>
  );
};
