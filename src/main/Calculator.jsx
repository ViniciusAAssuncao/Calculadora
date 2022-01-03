import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [displayNum, setDisplayNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function displayNumber(d) {
      if(displayNum === 0) {
        setDisplayNum(d.target.value);
      }else {
        setDisplayNum(displayNum+d.target.value);
      }
  }

  function clear() {
    setDisplayNum(0);
  }

  function porcentage() {
      setDisplayNum(displayNum / 100);
  }

  function operatorHandler(d) {
    var operatorInput = d.target.value;
    setOperator(operatorInput);
    setOldNum(displayNum);
    setDisplayNum(0);
  }

  function calculate(d) {
    if(operator==='+') {
        setDisplayNum(parseFloat(oldNum) + parseFloat(displayNum));
    }
    if(operator==='-') {
        setDisplayNum(parseFloat(oldNum) - parseFloat(displayNum));
    }
    if(operator==='X') {
        setDisplayNum(parseFloat(oldNum) * parseFloat(displayNum));
    }
    if(operator==='/') {
        setDisplayNum(parseFloat(oldNum) / parseFloat(displayNum));
    }
  }

  function backspace() {
    let valueDisplay = displayNum;
    valueDisplay=valueDisplay.substring(0,(valueDisplay.length-1));
    setDisplayNum(valueDisplay);

    if(valueDisplay.length===0) {
        setDisplayNum(0);
    }
    return
  }

  return (
    <div>
      <h1 className="result">{displayNum}</h1>
      <div className="wrapper">
        <button onClick={clear}>AC</button>
        <button onClick={backspace}>BS</button>
        <button onClick={porcentage}>%</button>
        <button onClick={operatorHandler} value='/'>/</button>
        <button onClick={displayNumber} value={7}>7</button>
        <button onClick={displayNumber} value={8}>8</button>
        <button onClick={displayNumber} value={9}>9</button>
        <button onClick={operatorHandler} value='X'>X</button>
        <button onClick={displayNumber} value={4}>4</button>
        <button onClick={displayNumber} value={5}>5</button>
        <button onClick={displayNumber} value={6}>6</button>
        <button onClick={operatorHandler} value='-'>-</button>
        <button onClick={displayNumber} value={1}>1</button>
        <button onClick={displayNumber} value={2}>2</button>
        <button onClick={displayNumber} value={3}>3</button>
        <button onClick={operatorHandler} value='+'>+</button>
        <button onClick={displayNumber} value={0}>0</button>
        <button onClick={displayNumber} value=",">,</button>
        <button onClick={calculate} value='='>=</button>
      </div>
    </div>
  );
}
