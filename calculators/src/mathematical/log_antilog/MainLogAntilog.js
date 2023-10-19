import React, { useState } from "react";
import "./mainLogAntilog.css";
import InfoLogAntilog from "./InfoLogAntilog";

function MainLogAntilog() {
  const [number, setNumber] = useState("");
  const [base, setBase] = useState("");
  const [logResult, setLogResult] = useState(null);
  const [antilogResult, setAntilogResult] = useState(null);

  const calcLog = () => {
    if (base && number) 
    {
      const num = parseFloat(number);
      const baseVal = parseFloat(base);
      if (num > 0 && baseVal > 0 && baseVal !== 1) 
      {
        const logVal = Math.log(num) / Math.log(baseVal);
        setLogResult(logVal.toFixed(2));
        setAntilogResult(null);
      } 
      else 
      {
        setLogResult("Not Defined");
        setAntilogResult(null);
      }
    }
  };

  const calcAnti = () => {
    if (base && number) 
    {
      const num = parseFloat(number);
      const baseVal = parseFloat(base);
      if (num >= 0 && baseVal > 0 && baseVal !== 1) 
      {
        const antilogVal = Math.pow(baseVal, num);
        setAntilogResult(antilogVal.toFixed(2));
        setLogResult(null);
      } 
      else 
      {
        setAntilogResult("Not Defined");
        setLogResult(null);
      }
    }
  };

  const clearVal = () => {
    setNumber("");
    setBase("");
    setLogResult(null);
    setAntilogResult(null);
  };

  return (
    <div className="container">
      <h2 className="title">Log and Antilog Calculator <InfoLogAntilog/> </h2>
      <div className="input_container">
        <label>Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="input_container">
        <label>Base:</label>
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
        />
      </div>
      <div className="button_container">
        <button onClick={calcLog}>Log</button>
        <button onClick={calcAnti}>Antilog</button>
        <button onClick={clearVal}>Clear</button>
      </div>
      {logResult !== null && (
        <div className="result">
          <p>Result: {logResult}</p>
        </div>
      )}
      {antilogResult !== null && (
        <div className="result">
          <p>Result: {antilogResult}</p>
        </div>
      )}
    </div>
  );
}

export default MainLogAntilog;
