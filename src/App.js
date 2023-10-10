import React from 'react';
import { useState } from 'react';
import Btn from './Btn.js';
import './App.css';
import ModeToggler from './ModeToggler.js';
import Button from './button.js';
import Heading from './Heading.js';
import Fruits from './Fruits.js';
import FruitsCounter from './FruitsCounter.js';


function App() {

  const [word, setWord] = React.useState('Eat')

  function handleClick(){
    setWord ('Drink')
  }

  // function Fruits() {
    const [fruits] = React.useState([
      {fruitName: "apple", id: 1},
      {fruitName: "apple", id: 2},
      {fruitName: "plum", id: 3},
    ]);
  // };

  return (
    <div>
      <Btn/>
      <ModeToggler/>
      <Button/>
      <div className='App'>
        <Heading message ={word + ' ' + "at little lemon"}/>
        <button onClick={handleClick}>Press Me</button>
      </div>
      <div>
        <h1>Where should the state go?</h1>
        <Fruits fruits={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
    </div>

  );
};

export default App;
