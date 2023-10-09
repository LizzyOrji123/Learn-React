import React, { useState } from 'react';
import Btn from './Btn.js';
import './App.css';
import ModeToggler from './ModeToggler.js';
import Button from './button.js';
import Heading from './Heading.js';
import Fruits from './Fruits.js';


function App() {

  const [word, setWord] = React.useState('Eat')

  function handleClick(){
    setWord ('Drink')
  }

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
        <Fruits/>
      </div>
    </div>

  );
};

export default App;
