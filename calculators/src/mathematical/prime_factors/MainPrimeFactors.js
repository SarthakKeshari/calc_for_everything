import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InfoPrimeFactors from './InfoPrimeFactors';

function MainPrimeFactors(){

    const [number, setNumber] = useState(0);
    const [factors, setFactors] = useState([]);

    function calculatePrimeFactors(num) {
        let factors = new Set();
        let divisor = 2;
      
        while(num > 2){
          if(num % divisor === 0){
             factors.add(divisor); 
             num = num/ divisor;
          }
          else{
            divisor++;
          }     
        }
        return Array.from(factors);
      }

      function handleInputChange(e) {
        setNumber(e.target.value);
      }
    
      function handleButtonClick() {
        const primeFactors = calculatePrimeFactors(number);
        setFactors(primeFactors);
      }
      
      
      return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
          <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Prime Factors Calculator<InfoPrimeFactors/></Typography>
          <hr/>
          <br/>
          <input type="number" onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Calculate Prime Factors</button>
          <ul>
            {factors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </Container>
      )
}

export default MainPrimeFactors;