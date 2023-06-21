import { useState } from 'react';
import Boton from './Componenets/Boton';
import Input from './Componenets/input';
import Select from './Componenets/Select';
import Resultado from './Componenets/Resultado';
import './App.css';


function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState(' ');
  const [res, setRes] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperacion(e.target.value);
  };

  const handleCalcular = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let calculatedResult;

    switch (operacion) {
      case '+':
        calculatedResult = number1 + number2;
        break;
      case '-':
        calculatedResult = number1 - number2;
        break;
      case '*':
        calculatedResult = number1 * number2;
        break;
      case '/':
        calculatedResult = number1 / number2;
        break;
      default:
        break;
    }

    setRes(calculatedResult.toString());
  };

  return (
    <div>
      <h1>Calculadora</h1>
      <Input value={num1} onChange={handleNum1Change} />
      
      <Select value={operacion} onChange={handleOperationChange}/>

      <Input value={num2} onChange={handleNum2Change} />
      <br/>
      <br/>
      <Boton onClick={handleCalcular}/>
      <br/>
      <br/>
      <Resultado res={res} readOnly />
    </div>
  );
}

export default App;
