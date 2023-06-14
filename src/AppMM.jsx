import { CardProvider } from './CardcontextMM';
import CardButton from './CardButtonMM';
import CardList from './CardlistMM';

const App = () => {
  return (
    <CardProvider>
      <h1>Solicitud de Cartas</h1>
      <CardList />
      <CardButton />
    </CardProvider>
  );
};

export default App;
