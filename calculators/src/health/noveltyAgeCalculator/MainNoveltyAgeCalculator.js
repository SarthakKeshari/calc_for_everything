import React, { useState } from 'react';
import './MainNoveltyAgeCalculator.css';

function MainNoveltyAgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const [planetaryAges, setPlanetaryAges] = useState({});
    const [fruitAges, setFruitAges] = useState({});
    const [message, setMessage] = useState('');
  
    const calculateAge = () => {
      if (!birthdate) {
        setMessage('Please enter your birthdate to calculate the ages.');
        return;
      }
      const birthDate = new Date(birthdate);
      const currentDate = new Date();
      const planetaryFactors = {
        Mercury: 0.24,
        Venus: 0.62,
        Mars: 1.88,
        Jupiter: 11.86,
      };
  
      const planetaryAges = {};
      for (const planet in planetaryFactors) {
        planetaryAges[planet] = (currentDate - birthDate) / (planetaryFactors[planet] * 31557600 * 1000);
      }
  
      setPlanetaryAges(planetaryAges);
      const fruitLifespans = {
        Apple: 81,
        Banana: 76,
        Carrot: 2,
        Strawberry: 5,
      };
  
      const fruitAges = {};
      for (const fruit in fruitLifespans) {
        fruitAges[fruit] = (currentDate - birthDate) / (fruitLifespans[fruit] * 31557600 * 1000);
      }
  
      setFruitAges(fruitAges);
      setMessage('');
    };
  
    return (
      <div className="Appm">
         <div className="calculator-container">
        <h1 className='h1'>Novelty Age Calculator</h1>
        <label className='l1'>Enter your DOB : </label>
        <input className='input'
    type="date"
    value={birthdate}
    onChange={(e) => setBirthdate(e.target.value)}
    placeholder="YYYY-MM-DD" // Add a placeholder to indicate the date format
  />
  
        <button className='button'onClick={calculateAge} style={{backgroundColor:'black', fontFamily:'Georgia'}}>Calculate</button>
  
        {message && <p className="error-message">{message}</p>}
  
        {Object.keys(planetaryAges).length > 0 && (
          <>
            <h2>Planetary Ages</h2>
            <ul className='ul'>
              {Object.entries(planetaryAges).map(([planet, age]) => (
                <li className='li'key={planet}>
                  {planet}: {age.toFixed(2)} years
                </li>
              ))}
            </ul>
          </>
        )}
  
        {Object.keys(fruitAges).length > 0 && (
          <>
            <h2 className='h2'>Fruit Ages</h2>
            <ul className='ul'>
              {Object.entries(fruitAges).map(([fruit, age]) => (
                <li className='li' key={fruit}>
                  {fruit}: {age.toFixed(2)} fruits/vegetables
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      </div>
    );
  }

export default MainNoveltyAgeCalculator;

