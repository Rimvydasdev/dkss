import React, { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Screen from './components/Screen';

function App() {
  const [code, setCode] = useState("");

  const handleClick = (value) => {
    // paspaudus Clear isvalomas kodas
    if (value === "Clear") {
      setCode("");
    } else if (value === "OK") {
      // dar nzn ar reiktu paspausti OK kad patikrinti koda ar ivedus tinkama kiek, patikrintu ar toks yra
    } else {
      // leidzia ivesti atitinkama kieki skaiciu
      if (code.length < 6) {
        setCode(prevCode => prevCode + value)
      }
    }
  };

  return (
    <div className="App">
      <Screen code={code} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default App;
