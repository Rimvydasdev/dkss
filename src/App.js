import React, { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';
import Screen from './components/Screen';
import Box from './components/Box';
import data from './components/data.json';

function App() {
  const [code, setCode] = useState("");

  const [open, setOpen] = useState(false);



  const findObjectByCode = (code) => {
    const object = data?.find(item => item.code === code) ?? null;
    if (object) {
      const element = document.getElementById(`left-door-${object.id}`);
      if (element) {
        element.classList.toggle('door-open');
        console.log("element suveike", element);
      }

    }
    // return object ? object.id : null;
  };


  const handleOpen = () => {
    setOpen(!open);
  };


  const handleClick = (value) => {
    // paspaudus Clear išvalomas kodas
    if (value === "Clear") {
      setCode("");
      const elements = document.getElementsByClassName("door");
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("door-open");
      }

    } else if (value === "OK") {
      // dar nežinau, ar reikia paspausti OK, kad patikrintumėte kodą ar įvedę tinkamą kiekį, 

      // handleOpen();
      console.log("OK");
    } else {
      // nurodyk kiek skaiciu ivesti
      if (code.length < 4) {
        setCode(prevCode => prevCode + value);
        if ((code + value).length === 4) {
          findObjectByCode(code + value);
          // console.log(findObjectByCode(code + value));
          console.log("Įvesti skaičiai:", code + value);
        }
      }
    }
  };

  const allBox = data.map((item, index) => {
    return <Box key={index} doorID={`left-door-${item.id}`} open={open} title={item.box_title} />
  })


  const toggleOpen = (id) => {
    const element = document.getElementById(`left-door-${id}`);
    if (element) {
      element.classList.toggle('door-open');
    }
  };


  return (
    <div className="App">
      <Screen code={code} />
      <Keypad handleClick={handleClick} />
      <div className='box-container'>
        <div className="boxes">
          {allBox}
        </div>
      </div>
    </div>
  );
}

export default App;
