import React, { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Screen from './components/Screen';
import Box from './components/Box';

function App() {
  const [code, setCode] = useState("");



  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open); // Pakeičiame būseną į priešingą
  };


  const handleClick = (value) => {
    // paspaudus Clear isvalomas kodas
    if (value === "Clear") {
      setCode("");
    } else if (value === "OK") {
      // dar nzn ar reiktu paspausti OK kad patikrinti koda ar ivedus tinkama kiek, patikrintu ar toks yra
      handleOpen();
console.log("ok");
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
      <div className='box-container'>
      <div className="boxes">
        <Box doorID="left-door-1" open={open} />
        <Box doorID="left-door-2" />
        <Box doorID="left-door-3" />
        <Box doorID="left-door-4" />
        <Box doorID="left-door-5" />
        <Box doorID="left-door-6" />
        <Box doorID="left-door-7" />
        <Box doorID="left-door-8" />
        <Box doorID="left-door-9" />
      </div>
      </div>
    </div>
  );
}

export default App;
